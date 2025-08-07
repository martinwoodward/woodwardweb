#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');
const sanitizeHtml = require('sanitize-html');
// Function to check if gh models is available
function isGhModelsAvailable() {
    try {
        execSync('gh models --help', { stdio: 'ignore' });
        return true;
    } catch (error) {
        return false;
    }
}

// Function to generate summary using GitHub Models LLM
async function generateLLMSummary(content, title) {
    if (!isGhModelsAvailable()) {
        console.log('📝 gh models not available, falling back to basic text extraction');
        return null;
    }

    try {
        // Clean the content for LLM processing
        const cleanContent = sanitizeHtml(content, { allowedTags: [], allowedAttributes: {} })
            .replace(/^---[\s\S]*?---/, '') // Remove frontmatter
            .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1') // Remove markdown links but keep text
            .replace(/!\[([^\]]*)\]\([^)]*\)/g, '') // Remove markdown images
            .replace(/\s+/g, ' ') // Normalize whitespace
            .trim()
            .substring(0, 2000); // Limit content for API

        const prompt = `Please create a concise, single-sentence description (100-150 characters) for this blog post titled "${title}". 

Content: ${cleanContent}

Requirements:
- One sentence only
- 100-150 characters maximum
- Capture the main topic or point
- Use UK English spelling (colour not color, etc.)
- End with a period
- Be engaging but factual

Description:`;

        // Use gh models to generate summary
        const result = execSync(`gh models run openai/gpt-4o-mini "${prompt}"`, { 
            encoding: 'utf8',
            timeout: 30000 
        });

        let summary = result.trim();
        
        // Clean up the response - sometimes models add quotes or extra text
        summary = summary.replace(/^["']|["']$/g, '');
        summary = summary.replace(/^Description:\s*/i, '');
        summary = summary.trim();

        // Ensure it ends with a period
        if (!summary.match(/[.!?]$/)) {
            summary += '.';
        }

        // Ensure reasonable length
        if (summary.length > 150) {
            const cutPoint = summary.lastIndexOf(' ', 140);
            if (cutPoint > 50) {
                summary = summary.substring(0, cutPoint) + '.';
            } else {
                summary = summary.substring(0, 140) + '.';
            }
        }

        return summary;
    } catch (error) {
        console.error(`⚠️  LLM generation failed: ${error.message}`);
        return null;
    }
}

// Fallback function for basic text extraction (from original script)
function generateBasicSummary(content) {
    // Remove frontmatter if any
    content = content.replace(/^---[\s\S]*?---/, '').trim();
    
    // Remove markdown links but keep the text
    content = content.replace(/\[([^\]]*)\]\([^)]*\)/g, '$1');
    
    // Remove markdown images
    content = content.replace(/!\[([^\]]*)\]\([^)]*\)/g, '');
    
    // Remove HTML tags
    content = content.replace(/<[^>]*>/g, '');
    
    // Remove extra whitespace and normalize
    content = content.replace(/\s+/g, ' ').trim();
    
    // Split into sentences
    const sentences = content.split(/[.!?]+/).filter(s => s.trim().length > 10);
    
    if (sentences.length === 0) {
        return "A blog post from the archive.";
    }
    
    // Get the first meaningful sentence
    let summary = sentences[0].trim();
    
    // Skip very short summaries and try the next sentence
    if (summary.length < 20 && sentences.length > 1) {
        summary = sentences[1].trim().replace(/\s+/g, ' ').trim();
    }
    
    // Ensure it's not too long (aim for around 100-150 characters)
    if (summary.length > 150) {
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

// Function to extract title from frontmatter
function extractTitle(frontmatter) {
    const titleMatch = frontmatter.match(/title:\s*["']([^"']+)["']/);
    return titleMatch ? titleMatch[1] : 'Untitled';
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
async function main() {
    console.log('🔍 Finding posts to update...\n');
    
    const postsToUpdate = findPostsToUpdate();
    console.log(`Found ${postsToUpdate.length} posts with "Migrated from old blog archive" description\n`);
    
    if (postsToUpdate.length === 0) {
        console.log('No posts found to update.');
        return;
    }

    const useGhModels = isGhModelsAvailable();
    console.log(`🤖 Using ${useGhModels ? 'GitHub Models LLM' : 'basic text extraction'} for summaries\n`);
    
    let updatedCount = 0;
    let errorCount = 0;
    
    // Process first 10 posts to start (can be adjusted)
    const postsToProcess = process.argv.includes('--all') ? postsToUpdate : postsToUpdate.slice(0, 10);
    console.log(`🚀 Processing ${postsToProcess.length} posts...\n`);
    
    for (const postPath of postsToProcess) {
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
            const title = extractTitle(frontmatter);
            
            console.log(`Processing: ${path.basename(postPath)} - "${title}"`);
            
            // Generate new description using LLM or fallback
            let newDescription;
            if (useGhModels) {
                newDescription = await generateLLMSummary(postContent, title);
                if (!newDescription) {
                    console.log('   🔄 LLM failed, using fallback method');
                    newDescription = generateBasicSummary(postContent);
                }
            } else {
                newDescription = generateBasicSummary(postContent);
            }
            
            console.log(`   New description: "${newDescription}"`);
            
            // Update the description in frontmatter
            const descriptionRegex = /description:\s*["']Migrated from old blog archive["']/;
            if (descriptionRegex.test(frontmatter)) {
                frontmatter = frontmatter.replace(descriptionRegex, `description: "${newDescription}"`);
                
                // Reconstruct the file
                const newContent = `---${frontmatter}---${postContent}`;
                
                // Write back to file
                fs.writeFileSync(postPath, newContent, 'utf8');
                
                updatedCount++;
                console.log(`   ✅ Updated successfully\n`);
            } else {
                console.log(`   ⚠️  Description pattern not found, skipping\n`);
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
    
    if (!process.argv.includes('--all') && postsToUpdate.length > 10) {
        console.log(`\n💡 Tip: Run with --all flag to process all ${postsToUpdate.length} posts`);
    }
    
    console.log(`\n🎉 Description update complete!`);
}

// Run the script
if (require.main === module) {
    main().catch(console.error);
}

module.exports = { generateLLMSummary, generateBasicSummary, convertToUKSpelling, findPostsToUpdate };