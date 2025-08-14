#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

// Configuration
const OLD_BLOG_PATH = '/Users/martin/src/blog';
const NEW_BLOG_PATH = '/Users/martin/src/woodwardweb';
const POSTS_DIR = path.join(NEW_BLOG_PATH, 'src/content/post');
const IMAGES_DIR = path.join(NEW_BLOG_PATH, 'public/images/post');

// Ensure target directory exists
if (!fs.existsSync(IMAGES_DIR)) {
    fs.mkdirSync(IMAGES_DIR, { recursive: true });
    console.log(`Created directory: ${IMAGES_DIR}`);
}

// Function to extract frontmatter from a post
function extractFrontmatter(filePath) {
    try {
        const content = fs.readFileSync(filePath, 'utf8');
        const parts = content.split('---');
        if (parts.length < 3) return null;
        
        const frontmatter = parts[1];
        const postContent = parts.slice(2).join('---');
        
        // Extract image path
        const imageMatch = frontmatter.match(/images:\s*\n\s*-\s*["']([^"']+)["']/);
        const imagePath = imageMatch ? imageMatch[1] : null;
        
        // Extract title and date for context
        const titleMatch = frontmatter.match(/title:\s*["']([^"']+)["']/);
        const title = titleMatch ? titleMatch[1] : 'Unknown';
        
        const dateMatch = frontmatter.match(/date:\s*([^\n]+)/);
        const date = dateMatch ? dateMatch[1].trim() : null;
        
        return { imagePath, title, date, content: postContent, filePath };
    } catch (error) {
        console.error(`Error reading ${filePath}:`, error.message);
        return null;
    }
}

// Function to find all posts
function findAllPosts() {
    const posts = [];
    
    function walkDir(dir) {
        const files = fs.readdirSync(dir);
        for (const file of files) {
            const fullPath = path.join(dir, file);
            const stat = fs.statSync(fullPath);
            
            if (stat.isDirectory()) {
                walkDir(fullPath);
            } else if (file.endsWith('.md') || file.endsWith('.mdx')) {
                const postData = extractFrontmatter(fullPath);
                if (postData) {
                    posts.push(postData);
                }
            }
        }
    }
    
    walkDir(POSTS_DIR);
    return posts;
}

// Function to check if image exists
function imageExists(imagePath) {
    const fullPath = path.join(NEW_BLOG_PATH, 'public', imagePath);
    return fs.existsSync(fullPath);
}

// Function to find old blog post by date
function findOldBlogPostByDate(postDate) {
    if (!postDate) return null;
    
    const targetDate = new Date(postDate);
    
    // Recursively search for HTML files in the old blog
    function findHtmlFiles(dir) {
        let htmlFiles = [];
        try {
            const items = fs.readdirSync(dir);
            
            for (const item of items) {
                const fullPath = path.join(dir, item);
                try {
                    const stat = fs.statSync(fullPath);
                    
                    if (stat.isDirectory()) {
                        htmlFiles = htmlFiles.concat(findHtmlFiles(fullPath));
                    } else if (item.endsWith('.html')) {
                        htmlFiles.push(fullPath);
                    }
                } catch (error) {
                    // Skip files/directories we can't access
                    continue;
                }
            }
        } catch (error) {
            // Skip directories we can't read
        }
        
        return htmlFiles;
    }
    
    const oldBlogFiles = findHtmlFiles(OLD_BLOG_PATH);
    
    for (const htmlFile of oldBlogFiles) {
        try {
            const content = fs.readFileSync(htmlFile, 'utf8');
            
            // Extract date from <dc:date> tag
            const dateMatch = content.match(/<dc:date>([^<]+)<\/dc:date>/);
            if (dateMatch) {
                const fileDate = new Date(dateMatch[1]);
                
                // Check if dates match (within a day tolerance)
                const timeDiff = Math.abs(fileDate.getTime() - targetDate.getTime());
                const dayDiff = timeDiff / (1000 * 60 * 60 * 24);
                
                if (dayDiff <= 1) {
                    return htmlFile;
                }
            }
        } catch (error) {
            // Continue searching
            continue;
        }
    }
    
    return null;
}

// Function to copy image to new location

// Function to extract images from old blog post content
function extractImagesFromOldPost(oldPostPath) {
    if (!fs.existsSync(oldPostPath)) return [];
    
    try {
        const content = fs.readFileSync(oldPostPath, 'utf8');
        const images = [];
        
        // Find all img tags and extract src attributes
        const imgTagRegex = /<img[^>]*src\s*=\s*["']([^"']+)["'][^>]*>/gi;
        let match;
        
        while ((match = imgTagRegex.exec(content)) !== null) {
            let imageSrc = match[1];
            console.log(`   Found image: ${imageSrc}`);
            
            // Convert URLs to local paths
            if (imageSrc.includes('woodwardweb.com/WindowsLiveWriter/')) {
                // Extract the path after WindowsLiveWriter
                const pathMatch = imageSrc.match(/WindowsLiveWriter\/(.+)$/);
                if (pathMatch) {
                    imageSrc = path.join(OLD_BLOG_PATH, 'WindowsLiveWriter', pathMatch[1]);
                    console.log(`     → Converted to: ${imageSrc}`);
                }
            } else if (imageSrc.includes('woodwardweb.com/Open-Live-Writer/')) {
                // Extract the path after Open-Live-Writer
                const pathMatch = imageSrc.match(/Open-Live-Writer\/(.+)$/);
                if (pathMatch) {
                    imageSrc = path.join(OLD_BLOG_PATH, 'Open-Live-Writer', pathMatch[1]);
                    console.log(`     → Converted to: ${imageSrc}`);
                }
            } else if (imageSrc.includes('woodwardweb.com/')) {
                // Other woodwardweb.com images - try to find them
                const pathMatch = imageSrc.match(/woodwardweb\.com\/(.+)$/);
                if (pathMatch) {
                    imageSrc = path.join(OLD_BLOG_PATH, pathMatch[1]);
                    console.log(`     → Converted to: ${imageSrc}`);
                }
            } else if (imageSrc.startsWith('/')) {
                // Absolute path - make it relative to the old blog root
                imageSrc = path.join(OLD_BLOG_PATH, imageSrc.substring(1));
                console.log(`     → Converted to: ${imageSrc}`);
            } else if (!imageSrc.startsWith('http')) {
                // Relative path - make it relative to the old blog post directory
                imageSrc = path.join(path.dirname(oldPostPath), imageSrc);
                console.log(`     → Converted to: ${imageSrc}`);
            } else {
                // Skip external URLs for now
                console.log(`     → Skipping external URL`);
                continue;
            }
            
            images.push(imageSrc);
        }
        
        const uniqueImages = [...new Set(images)]; // Remove duplicates
        console.log(`   → Found ${uniqueImages.length} local images`);
        return uniqueImages;
    } catch (error) {
        console.error(`Error reading old post ${oldPostPath}:`, error.message);
        return [];
    }
}

// Function to get file size safely
function getFileSize(filePath) {
    try {
        if (fs.existsSync(filePath)) {
            return fs.statSync(filePath).size;
        }
    } catch (error) {
        // File doesn't exist or can't be read
    }
    return 0;
}

// Function to get image dimensions using the file command
function getImageDimensions(filePath) {
    try {
        if (!fs.existsSync(filePath)) {
            return { width: 0, height: 0 };
        }
        
        const { execSync } = require('child_process');
        const result = execSync(`file "${filePath}"`, { encoding: 'utf8', timeout: 5000 });
        
        // For JPEG files: look for dimension patterns that come after "precision 8,"
        let dimensionMatch = result.match(/precision\s+8,\s*(\d+)x(\d+)/i);
        
        // For GIF files: look for patterns like "500 x 320" (with spaces)
        if (!dimensionMatch) {
            dimensionMatch = result.match(/(\d+)\s+x\s+(\d+)/i);
        }
        
        // For other formats: look for patterns like "1024x768" (without spaces)
        if (!dimensionMatch) {
            dimensionMatch = result.match(/(\d+)x(\d+)/i);
        }
        
        if (dimensionMatch) {
            return {
                width: parseInt(dimensionMatch[1]),
                height: parseInt(dimensionMatch[2])
            };
        }
        
        return { width: 0, height: 0 };
    } catch (error) {
        return { width: 0, height: 0 };
    }
}

// Function to find the largest existing image by dimensions
function findLargestImage(imagePaths) {
    let largestImage = null;
    let largestArea = 0;
    
    console.log(`   🔍 Analyzing ${imagePaths.length} images...`);
    
    // Expand imagePaths to include potential larger versions
    const expandedPaths = new Set(imagePaths);
    
    for (const imagePath of imagePaths) {
        const dir = path.dirname(imagePath);
        const filename = path.basename(imagePath);
        const nameWithoutExt = path.parse(filename).name;
        const ext = path.parse(filename).ext;
        
        // Strategy 1: If this is a thumbnail, check for a larger version in the 'big' directory
        if (imagePath.includes('/thumb/')) {
            const bigPath = imagePath.replace('/thumb/', '/big/');
            expandedPaths.add(bigPath);
            console.log(`   🔍 Checking big version: ${path.basename(bigPath)}`);
        }
        
        // Strategy 2: Check in parent directories for 'big' or 'large' folders
        const parentDir = path.dirname(dir);
        const possibleBigDirs = [
            path.join(parentDir, 'big'),
            path.join(parentDir, 'large'),
            path.join(parentDir, 'full'),
            path.join(dir, 'big'),
            path.join(dir, 'large'),
            path.join(dir, 'full')
        ];
        
        for (const bigDir of possibleBigDirs) {
            const bigPath = path.join(bigDir, filename);
            expandedPaths.add(bigPath);
        }
        
        // Strategy 3: Look for variations without size indicators in the filename
        const sizePatternsToRemove = [
            /[-_]thumb(nail)?/gi,
            /[-_]small/gi,
            /[-_]mini/gi,
            /[-_]tiny/gi,
            /[-_]sm/gi,
            /[-_]\d+x\d+/gi, // Remove dimension suffixes like -150x150
            /[-_]\d+/gi      // Remove number suffixes like -150
        ];
        
        for (const pattern of sizePatternsToRemove) {
            const cleanName = nameWithoutExt.replace(pattern, '');
            if (cleanName !== nameWithoutExt && cleanName.length > 0) {
                const cleanPath = path.join(dir, cleanName + ext);
                expandedPaths.add(cleanPath);
                console.log(`   🔍 Checking clean name: ${cleanName + ext}`);
            }
        }
        
        // Strategy 4: Look for common "big" prefixes/suffixes
        const bigVariations = [
            nameWithoutExt + '_big' + ext,
            nameWithoutExt + '-big' + ext,
            nameWithoutExt + '_large' + ext,
            nameWithoutExt + '-large' + ext,
            nameWithoutExt + '_full' + ext,
            nameWithoutExt + '-full' + ext,
            'big_' + filename,
            'large_' + filename,
            'full_' + filename
        ];
        
        for (const variation of bigVariations) {
            expandedPaths.add(path.join(dir, variation));
        }
        
        // Strategy 5: Check in WindowsLiveWriter subdirectories for different sizes
        if (dir.includes('WindowsLiveWriter') || dir.includes('Windows-Live-Writer')) {
            const wlwParent = dir;
            
            // If this is a thumbnail, look for the full-size version
            if (nameWithoutExt.endsWith('_thumb')) {
                const baseName = nameWithoutExt.replace('_thumb', '');
                const possibleFiles = [
                    path.join(wlwParent, baseName + '_2' + ext),  // Most common pattern
                    path.join(wlwParent, baseName + '_3' + ext),
                    path.join(wlwParent, baseName + '_4' + ext),
                    path.join(wlwParent, baseName + ext),         // No suffix
                ];
                
                for (const possibleFile of possibleFiles) {
                    expandedPaths.add(possibleFile);
                    console.log(`   🔍 WLW full-size: ${path.basename(possibleFile)}`);
                }
            }
            
            // Also check for numbered variants
            const possibleFiles = [
                path.join(wlwParent, nameWithoutExt + '_2' + ext),
                path.join(wlwParent, nameWithoutExt + '_3' + ext),
                path.join(wlwParent, nameWithoutExt + '_4' + ext),
            ];
            
            for (const possibleFile of possibleFiles) {
                expandedPaths.add(possibleFile);
            }
        }
    }
    
    console.log(`   🔍 Expanded to ${expandedPaths.size} potential images...`);
    
    for (const imagePath of expandedPaths) {
        // Check if the file exists
        if (!fs.existsSync(imagePath)) {
            continue;
        }
        
        // Skip common small icons and logos, but be less aggressive
        const filename = path.basename(imagePath).toLowerCase();
        if (filename.includes('logo') || 
            filename.includes('icon') || 
            filename.includes('button') ||
            filename.includes('banner') ||
            filename.includes('feed') ||
            filename.includes('rss') ||
            filename.includes('badge') ||
            filename.includes('nav-') ||
            filename.includes('stat') ||
            filename.includes('mt-') ||
            filename.includes('comment') ||
            filename.includes('somerights')) {
            console.log(`   ⏭️  Skipping ${filename} (likely icon/logo)`);
            continue;
        }
        
        const dimensions = getImageDimensions(imagePath);
        const area = dimensions.width * dimensions.height;
        
        console.log(`   📐 ${filename}: ${dimensions.width}x${dimensions.height} (area: ${area})`);
        
        // Be more flexible with size requirements - any image over 50x50 is considered
        if (area >= 2500 && area > largestArea) {
            largestArea = area;
            largestImage = imagePath;
            console.log(`   ✅ New largest: ${filename} (${dimensions.width}x${dimensions.height})`);
        } else if (area > 0 && area < 2500) {
            console.log(`   ⏭️  Skipping ${filename} (too small: ${area} pixels)`);
        } else if (area > 0) {
            console.log(`   📊 ${filename} smaller than current best (${area} vs ${largestArea})`);
        }
    }
    
    if (largestImage) {
        const dims = getImageDimensions(largestImage);
        console.log(`   🎯 Selected: ${path.basename(largestImage)} (${dims.width}x${dims.height} = ${dims.width * dims.height} pixels)`);
    }
    
    return largestImage;
}

// Function to search for image in old blog structure (fallback)
function findImageInOldBlogStructure(imageBasename) {
    const searchDirs = [
        OLD_BLOG_PATH,
        path.join(OLD_BLOG_PATH, 'images'),
        path.join(OLD_BLOG_PATH, 'assets'),
        path.join(OLD_BLOG_PATH, 'media'),
        path.join(OLD_BLOG_PATH, 'content'),
        path.join(OLD_BLOG_PATH, 'Open-Live-Writer'),
        path.join(OLD_BLOG_PATH, 'Windows-Live-Writer')
    ];
    
    for (const searchDir of searchDirs) {
        if (!fs.existsSync(searchDir)) continue;
        
        try {
            const found = findFileRecursively(searchDir, imageBasename);
            if (found) return found;
        } catch (error) {
            // Continue searching
        }
    }
    
    return null;
}

// Function to recursively find a file
function findFileRecursively(dir, filename) {
    try {
        const files = fs.readdirSync(dir);
        
        for (const file of files) {
            const fullPath = path.join(dir, file);
            const stat = fs.statSync(fullPath);
            
            if (stat.isDirectory()) {
                const found = findFileRecursively(fullPath, filename);
                if (found) return found;
            } else if (file === filename || file.toLowerCase() === filename.toLowerCase()) {
                return fullPath;
            }
        }
    } catch (error) {
        // Directory not accessible
    }
    
    return null;
}

// Function to copy image to new location with format conversion
function copyImage(sourcePath, targetImagePath) {
    try {
        const targetPath = path.join(NEW_BLOG_PATH, 'public', targetImagePath);
        const targetDir = path.dirname(targetPath);
        
        // Ensure target directory exists
        if (!fs.existsSync(targetDir)) {
            fs.mkdirSync(targetDir, { recursive: true });
        }
        
        const sourceExt = path.extname(sourcePath).toLowerCase();
        const targetExt = path.extname(targetPath).toLowerCase();
        
        if (sourceExt !== targetExt && targetExt === '.jpg') {
            // Convert image format using ImageMagick convert command
            const { execSync } = require('child_process');
            console.log(`   🔄 Converting ${sourceExt} to ${targetExt}...`);
            
            try {
                execSync(`convert "${sourcePath}" "${targetPath}"`, { 
                    timeout: 30000,
                    stdio: 'pipe'
                });
                console.log(`✅ Converted and copied: ${path.basename(sourcePath)} -> ${path.basename(targetPath)}`);
                return true;
            } catch (convertError) {
                console.log(`   ⚠️  Convert failed, trying direct copy...`);
                // Fallback to direct copy if convert fails
                fs.copyFileSync(sourcePath, targetPath);
                console.log(`✅ Copied: ${path.basename(sourcePath)} -> ${path.basename(targetPath)}`);
                return true;
            }
        } else {
            // Direct copy for same format or non-JPG targets
            fs.copyFileSync(sourcePath, targetPath);
            console.log(`✅ Copied: ${path.basename(sourcePath)} -> ${path.basename(targetPath)}`);
            return true;
        }
    } catch (error) {
        console.error(`❌ Error copying ${sourcePath} to ${targetImagePath}:`, error.message);
        return false;
    }
}

// Main function
function main() {
    console.log('🔍 Finding all blog posts...\n');
    const posts = findAllPosts();
    console.log(`Found ${posts.length} posts.\n`);
    
    console.log('🖼️  Checking for missing images...\n');
    
    let foundCount = 0;
    let missingCount = 0;
    let copiedCount = 0;
    let notFoundInOldBlog = 0;
    
    for (const post of posts) {
        if (!post.imagePath) {
            console.log(`⚠️  No image path in frontmatter: ${post.title}`);
            continue;
        }
        
        if (imageExists(post.imagePath)) {
            foundCount++;
            continue;
        }
        
        missingCount++;
        console.log(`🔎 Missing: ${post.imagePath} for "${post.title}" (${post.date})`);
        
        // Find the corresponding old blog post by date
        const oldPostPath = findOldBlogPostByDate(post.date);
        
        if (oldPostPath) {
            console.log(`   📄 Found old post: ${path.basename(oldPostPath)}`);
            
            // Extract images from the old post content
            const oldPostImages = extractImagesFromOldPost(oldPostPath);
            
            if (oldPostImages.length > 0) {
                console.log(`   🖼️  Found ${oldPostImages.length} images in old post`);
                
                // Find the largest image
                const largestImage = findLargestImage(oldPostImages);
                
                if (largestImage) {
                    const imageSize = getFileSize(largestImage);
                    console.log(`   📏 Largest image: ${path.basename(largestImage)} (${(imageSize / 1024).toFixed(1)} KB)`);
                    
                    // Copy the image
                    if (copyImage(largestImage, post.imagePath)) {
                        copiedCount++;
                    }
                } else {
                    console.log(`   ❌ No accessible images found in old post`);
                }
            } else {
                console.log(`   ❌ No images found in old post content`);
            }
        } else {
            console.log(`   ❌ Could not find corresponding old blog post for date ${post.date}`);
            notFoundInOldBlog++;
        }
        
        console.log(''); // Empty line for readability
    }
    
    console.log(`📊 Summary:`);
    console.log(`   ✅ Images already exist: ${foundCount}`);
    console.log(`   ❌ Images missing: ${missingCount}`);
    console.log(`   📋 Images copied: ${copiedCount}`);
    console.log(`   🔍 Old posts not found: ${notFoundInOldBlog}`);
    console.log(`   🔍 Images still missing: ${missingCount - copiedCount}`);
}

// Run the script
main();
