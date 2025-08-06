#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { marked } = require('marked');

// Function to clean and extract text from markdown content
function extractTextFromMarkdown(content) {
    // Remove frontmatter if any (shouldn't be present in content part)
    content = content.replace(/^---[\s\S]*?---/, '').trim();
    
    // Remove markdown links but keep the text
    content = content.replace(/\[([^\]]*)\]\([^)]*\)/g, '$1');
    
    // Remove markdown images
    content = content.replace(/!\[([^\]]*)\]\([^)]*\)/g, '');
    
    // Remove HTML tags
    content = content.replace(/<[^>]*>/g, '');
    
    // Remove extra whitespace and normalize
    content = content.replace(/\s+/g, ' ').trim();
    
    return content;
}

// Function to generate a summary from content
function generateSummary(content) {
    const text = extractTextFromMarkdown(content);
    
    // Split into sentences
    const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 10);
    
    if (sentences.length === 0) {
        return "A blog post from the archive.";
    }
    
    // Get the first meaningful sentence
    let summary = sentences[0].trim();
    
    // Clean up the summary - don't remove useful starting words
    summary = summary.replace(/\s+/g, ' ').trim();
    
    // Skip very short summaries and try the next sentence
    if (summary.length < 20 && sentences.length > 1) {
        summary = sentences[1].trim().replace(/\s+/g, ' ').trim();
    }
    
    // Ensure it's not too long (aim for around 100-150 characters)
    if (summary.length > 150) {
        // Try to cut at a sensible point
        const cutPoint = summary.lastIndexOf(' ', 140);
        if (cutPoint > 50) {
            summary = summary.substring(0, cutPoint);
        } else {
            summary = summary.substring(0, 140);
        }
    }
    
    // Ensure it ends properly
    if (!summary.match(/[.!?]$/)) {
        summary += '.';
    }
    
    // Capitalise first letter
    summary = summary.charAt(0).toUpperCase() + summary.slice(1);
    
    // Convert to UK spelling patterns
    summary = convertToUKSpelling(summary);
    
    return summary;
}

// Function to convert US spelling to UK spelling
function convertToUKSpelling(text) {
    const spellingMap = {
        'organization': 'organisation',
        'organizations': 'organisations',
        'realize': 'realise',
        'realizes': 'realises',
        'realized': 'realised',
        'realize': 'realise',
        'recognize': 'recognise',
        'recognizes': 'recognises',
        'recognized': 'recognised',
        'analyze': 'analyse',
        'analyzes': 'analyses',
        'analyzed': 'analysed',
        'color': 'colour',
        'colors': 'colours',
        'honor': 'honour',
        'honors': 'honours',
        'favorite': 'favourite',
        'favorites': 'favourites',
        'center': 'centre',
        'centers': 'centres',
        'meter': 'metre',
        'meters': 'metres',
        'theater': 'theatre',
        'theaters': 'theatres',
        'optimize': 'optimise',
        'optimizes': 'optimises',
        'optimized': 'optimised',
        'categorize': 'categorise',
        'categorizes': 'categorises',
        'categorized': 'categorised'
    };
    
    let result = text;
    for (const [us, uk] of Object.entries(spellingMap)) {
        const regex = new RegExp('\\b' + us + '\\b', 'gi');
        result = result.replace(regex, uk);
    }
    
    return result;
}

// Function to find all posts with the target description
function findPostsToUpdate() {
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
                    if (content.includes('description: "Migrated from old blog archive"')) {
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

// Main function
function main() {
    console.log('🔍 Finding posts to update...\n');
    
    const postsToUpdate = findPostsToUpdate();
    console.log(`Found ${postsToUpdate.length} posts with "Migrated from old blog archive" description\n`);
    
    if (postsToUpdate.length === 0) {
        console.log('No posts found to update.');
        return;
    }
    
    let updatedCount = 0;
    let errorCount = 0;
    
    // Process all posts
    console.log(`🚀 Processing all ${postsToUpdate.length} posts...\n`);
    
    for (const postPath of postsToUpdate) {
        try {
            // Read the current file content
            const content = fs.readFileSync(postPath, 'utf8');
            
            // Split into frontmatter and content
            const parts = content.split('---');
            if (parts.length < 3) {
                console.error(`⚠️  Skipping ${postPath}: Invalid frontmatter format`);
                errorCount++;
                continue;
            }
            
            let frontmatter = parts[1];
            const postContent = parts.slice(2).join('---');
            
            // Generate new description
            const newDescription = generateSummary(postContent);
            
            // Show progress every 50 files
            if (updatedCount % 50 === 0 && updatedCount > 0) {
                console.log(`✅ Processed ${updatedCount} files...`);
            }
            
            // Only show details for first few and errors
            if (updatedCount < 10) {
                console.log(`Processing: ${postPath}`);
                console.log(`   New description: "${newDescription}"`);
            }
            
            // Update the description in frontmatter
            const descriptionRegex = /description:\s*["']Migrated from old blog archive["']/;
            if (descriptionRegex.test(frontmatter)) {
                frontmatter = frontmatter.replace(descriptionRegex, `description: "${newDescription}"`);
                
                // Reconstruct the file
                const newContent = `---${frontmatter}---${postContent}`;
                
                // Write back to file
                fs.writeFileSync(postPath, newContent, 'utf8');
                
                updatedCount++;
                if (updatedCount < 10) {
                    console.log(`   ✅ Updated successfully\n`);
                }
            } else {
                if (updatedCount < 10) {
                    console.log(`   ⚠️  Description pattern not found, skipping\n`);
                }
                errorCount++;
            }
            
        } catch (error) {
            console.error(`❌ Error updating ${postPath}:`, error.message);
            errorCount++;
        }
    }
    
    console.log(`\n📊 Final Summary:`);
    console.log(`   ✅ Successfully updated: ${updatedCount} posts`);
    console.log(`   ❌ Errors: ${errorCount} posts`);
    console.log(`\n🎉 Description update complete!`);
}

// Run the script
if (require.main === module) {
    main();
}

module.exports = { generateSummary, convertToUKSpelling, findPostsToUpdate };