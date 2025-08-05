#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Read the generated image prompts
const imagePrompts = JSON.parse(fs.readFileSync('image-prompts.json', 'utf8'));

console.log(`Updating frontmatter for ${imagePrompts.length} posts...\n`);

let updatedCount = 0;
let errorCount = 0;

for (const post of imagePrompts) {
    try {
        // Read the current file content
        const content = fs.readFileSync(post.file, 'utf8');
        
        // Split into frontmatter and content
        const parts = content.split('---');
        if (parts.length < 3) {
            console.error(`⚠️  Skipping ${post.file}: Invalid frontmatter format`);
            errorCount++;
            continue;
        }
        
        let frontmatter = parts[1];
        const postContent = parts.slice(2).join('---');
        
        // Update the images field in frontmatter
        // Replace existing images line or add if it doesn't exist
        const imagesRegex = /images:\s*\n\s*-\s*["'][^"']*["']/;
        const newImagesLine = `images:\n  - "${post.suggestedPath}"`;
        
        if (imagesRegex.test(frontmatter)) {
            // Replace existing images
            frontmatter = frontmatter.replace(imagesRegex, newImagesLine);
        } else {
            // Add images after the title line
            const titleLineMatch = frontmatter.match(/title:.*\n/);
            if (titleLineMatch) {
                const titleLine = titleLineMatch[0];
                frontmatter = frontmatter.replace(titleLine, titleLine + `# post thumb\n${newImagesLine}\n`);
            } else {
                // Fallback: add at the beginning
                frontmatter = `${newImagesLine}\n${frontmatter}`;
            }
        }
        
        // Reconstruct the file
        const newContent = `---${frontmatter}---${postContent}`;
        
        // Write back to file
        fs.writeFileSync(post.file, newContent, 'utf8');
        
        updatedCount++;
        
        // Show progress every 50 files
        if (updatedCount % 50 === 0) {
            console.log(`✅ Updated ${updatedCount} files...`);
        }
        
    } catch (error) {
        console.error(`❌ Error updating ${post.file}:`, error.message);
        errorCount++;
    }
}

console.log(`\n📊 Summary:`);
console.log(`   ✅ Successfully updated: ${updatedCount} posts`);
console.log(`   ❌ Errors: ${errorCount} posts`);
console.log(`\n📝 Note: The frontmatter has been updated to reference the suggested image paths.`);
console.log(`   You'll need to generate the actual images using the prompts in image-prompts.json`);
console.log(`   and place them in the public/images/post/ directory.`);

// Create a summary of image prompts grouped by year for easier batch processing
const promptsByYear = {};
imagePrompts.forEach(post => {
    const year = post.date.split('-')[0];
    if (!promptsByYear[year]) {
        promptsByYear[year] = [];
    }
    promptsByYear[year].push({
        filename: post.suggestedFilename,
        title: post.title,
        prompt: post.imagePrompt
    });
});

// Write a organized prompts file
fs.writeFileSync('image-prompts-by-year.json', JSON.stringify(promptsByYear, null, 2));
console.log(`\n📁 Created image-prompts-by-year.json for easier batch processing.`);

console.log(`\n🎨 Next steps:`);
console.log(`   1. Use an AI image generation service with the prompts from image-prompts.json`);
console.log(`   2. Save generated images to public/images/post/ with the suggested filenames`);
console.log(`   3. Images are now properly referenced in all post frontmatter`);

// Show some example prompts for immediate use
console.log(`\n💡 Example prompts to try:`);
imagePrompts.slice(0, 3).forEach((post, index) => {
    console.log(`\n${index + 1}. For "${post.title}":`);
    console.log(`   Filename: ${post.suggestedFilename}`);
    console.log(`   Prompt: ${post.imagePrompt}`);
});
