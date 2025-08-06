#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to find all posts with quote issues in descriptions
function findPostsWithQuoteIssues() {
    const postsDir = 'src/content/post';
    const posts = [];
    
    function walkDir(dir) {
        const items = fs.readdirSync(dir);
        
        for (const item of items) {
            const fullPath = path.join(dir, item);
            const stat = fs.statSync(fullPath);
            
            if (stat.isDirectory()) {
                walkDir(fullPath);
            } else if (item.endsWith('.md')) {
                try {
                    const content = fs.readFileSync(fullPath, 'utf8');
                    // Look for descriptions with unescaped quotes
                    if (content.match(/description:\s*"[^"]*"[^"]*"/)) {
                        posts.push(fullPath);
                    }
                } catch (error) {
                    console.error(`Error reading ${fullPath}:`, error.message);
                }
            }
        }
    }
    
    walkDir(postsDir);
    return posts;
}

// Function to fix quotes in descriptions
function fixQuotesInDescription(content) {
    // Match the description line with problematic quotes
    const descriptionRegex = /^(\s*description:\s*")(.*)(")(\s*)$/gm;
    
    return content.replace(descriptionRegex, (match, prefix, description, suffix, whitespace) => {
        // Replace internal double quotes with single quotes
        const fixedDescription = description.replace(/"/g, "'");
        return prefix + fixedDescription + suffix + whitespace;
    });
}

// Main function
function main() {
    console.log('🔍 Finding posts with quote issues in descriptions...\n');
    
    const postsToFix = findPostsWithQuoteIssues();
    console.log(`Found ${postsToFix.length} posts with quote issues\n`);
    
    if (postsToFix.length === 0) {
        console.log('No posts found with quote issues.');
        return;
    }
    
    let fixedCount = 0;
    let errorCount = 0;
    
    for (const postPath of postsToFix) {
        try {
            console.log(`Fixing: ${postPath}`);
            
            // Read the current file content
            const content = fs.readFileSync(postPath, 'utf8');
            
            // Fix the quotes
            const fixedContent = fixQuotesInDescription(content);
            
            if (fixedContent !== content) {
                // Write back to file
                fs.writeFileSync(postPath, fixedContent, 'utf8');
                fixedCount++;
                console.log(`   ✅ Fixed quotes in description\n`);
            } else {
                console.log(`   ⚠️  No changes needed\n`);
            }
            
        } catch (error) {
            console.error(`❌ Error fixing ${postPath}:`, error.message);
            errorCount++;
        }
    }
    
    console.log(`\n📊 Summary:`);
    console.log(`   ✅ Successfully fixed: ${fixedCount} posts`);
    console.log(`   ❌ Errors: ${errorCount} posts`);
}

// Run the script
if (require.main === module) {
    main();
}

module.exports = { fixQuotesInDescription, findPostsWithQuoteIssues };