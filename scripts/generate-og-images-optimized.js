const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

async function generateOGImages() {
  console.log('🎨 Starting OG image generation...');
  
  let browser;
  try {
    browser = await chromium.launch({
      headless: true,
      args: [
        '--no-sandbox', 
        '--disable-setuid-sandbox', 
        '--disable-web-security', 
        '--disable-features=VizDisplayCompositor',
        '--disable-background-timer-throttling',
        '--disable-backgrounding-occluded-windows',
        '--disable-renderer-backgrounding'
      ]
    });
  } catch (error) {
    console.error('❌ Failed to launch browser:', error.message);
    console.log('💡 Please run "npx playwright install chromium" to install the browser');
    return;
  }

  try {
    const distPath = path.join(__dirname, '..', 'dist');
    const ogApiPath = path.join(distPath, 'api', 'og');
    
    if (!fs.existsSync(ogApiPath)) {
      console.log('❌ No OG API directory found in dist. Make sure to run astro build first.');
      return;
    }

    const htmlFiles = findHtmlFiles(ogApiPath);
    console.log(`📁 Found ${htmlFiles.length} OG image files to convert`);

    // Process in parallel with limited concurrency for better performance
    const BATCH_SIZE = 5;
    let converted = 0;
    let failed = 0;
    
    for (let i = 0; i < htmlFiles.length; i += BATCH_SIZE) {
      const batch = htmlFiles.slice(i, i + BATCH_SIZE);
      const results = await Promise.allSettled(
        batch.map(htmlFile => processFile(browser, htmlFile, distPath))
      );
      
      results.forEach((result, index) => {
        if (result.status === 'fulfilled') {
          converted++;
        } else {
          console.error(`❌ Failed to convert ${path.relative(distPath, batch[index])}: ${result.reason}`);
          failed++;
        }
      });
      
      console.log(`✅ Processed batch ${Math.floor(i/BATCH_SIZE) + 1}/${Math.ceil(htmlFiles.length/BATCH_SIZE)}`);
    }
    
    console.log(`✅ Successfully converted ${converted} images to PNG format`);
    if (failed > 0) {
      console.log(`⚠️  Failed to convert ${failed} images`);
    }
    
  } catch (error) {
    console.error('❌ Error during OG image generation:', error);
  } finally {
    await browser.close();
  }
}

async function processFile(browser, htmlFile, distPath) {
  const page = await browser.newPage();
  
  try {
    await page.setViewportSize({ width: 1200, height: 630 });
    
    // Read and optimize HTML content
    let htmlContent = fs.readFileSync(htmlFile, 'utf8');
    htmlContent = htmlContent.replace(
      /@import url\('https:\/\/fonts\.googleapis\.com\/[^']+'\);/g,
      ''
    );
    htmlContent = htmlContent.replace(
      /font-family: 'Inter'[^;]+;/g,
      "font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;"
    );
    
    await page.setContent(htmlContent, { 
      waitUntil: 'domcontentloaded',
      timeout: 5000 
    });
    
    // Minimal wait for rendering
    await page.waitForTimeout(250);
    
    const screenshot = await page.screenshot({
      type: 'png',
      fullPage: false,
      clip: { x: 0, y: 0, width: 1200, height: 630 }
    });
    
    fs.writeFileSync(htmlFile, screenshot);
    console.log(`🖼️  Converted: ${path.relative(distPath, htmlFile)}`);
    
  } finally {
    await page.close();
  }
}

function findHtmlFiles(dir) {
  const files = [];
  
  function scan(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        scan(fullPath);
      } else if (item.endsWith('.png')) {
        try {
          const content = fs.readFileSync(fullPath, 'utf8');
          if (content.trim().startsWith('<!DOCTYPE html>')) {
            files.push(fullPath);
          }
        } catch (error) {
          // Skip files that can't be read as text
        }
      }
    }
  }
  
  scan(dir);
  return files;
}

generateOGImages().catch(console.error);
