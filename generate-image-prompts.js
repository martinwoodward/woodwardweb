#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to extract content from markdown
function extractPostContent(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Split frontmatter and content
    const parts = content.split('---');
    if (parts.length < 3) return null;
    
    const frontmatter = parts[1];
    const postContent = parts.slice(2).join('---').trim();
    
    // Extract title from frontmatter
    const titleMatch = frontmatter.match(/title:\s*["']([^"']+)["']/);
    const title = titleMatch ? titleMatch[1] : 'Untitled';
    
    // Extract date for context
    const dateMatch = frontmatter.match(/date:\s*([^\n]+)/);
    const date = dateMatch ? new Date(dateMatch[1].trim()) : new Date();
    
    // Get first paragraph of content (cleaned up)
    const firstParagraph = postContent
        .split('\n\n')[0]
        .replace(/[#*`\[\]]/g, '') // Remove markdown formatting
        .replace(/\([^)]*\)/g, '') // Remove link URLs
        .substring(0, 200)
        .trim();
    
    return {
        filePath,
        title,
        date,
        content: firstParagraph,
        year: date.getFullYear()
    };
}

// Function to generate image prompt based on content
function generateImagePrompt(post) {
    const { title, content, year } = post;
    
    // Determine era and style based on year
    let style = '';
    if (year < 2005) {
        style = 'early 2000s tech aesthetic, retro computing style';
    } else if (year < 2010) {
        style = 'mid-2000s web 2.0 aesthetic, clean modern tech';
    } else if (year < 2015) {
        style = 'early 2010s modern technology, sleek design';
    } else {
        style = 'modern tech illustration, contemporary design';
    }
    
    // Extract key themes from content
    const techKeywords = [
        'programming', 'development', 'software', 'code', 'build', 'deploy',
        'visual studio', 'team foundation', 'tfs', 'microsoft', 'eclipse',
        'java', 'c#', 'dotnet', '.net', 'git', 'version control',
        'agile', 'scrum', 'testing', 'debug', 'server', 'web',
        'api', 'database', 'cloud', 'azure', 'windows'
    ];
    
    const contentLower = (title + ' ' + content).toLowerCase();
    const foundKeywords = techKeywords.filter(keyword => 
        contentLower.includes(keyword)
    );
    
    // Generate context-aware prompt
    let prompt = `Professional technology blog illustration, ${style}`;
    
    if (foundKeywords.length > 0) {
        prompt += `, featuring elements related to ${foundKeywords.slice(0, 3).join(', ')}`;
    }
    
    prompt += `, abstract tech background, clean and modern, suitable for a blog header, 16:9 aspect ratio`;
    
    return prompt;
}

// Function to suggest filename for the image
function generateImageFilename(post) {
    const slug = post.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');
    
    return `${post.year}-${slug}.jpg`;
}

// Main function
function analyzeAllPosts() {
    const contentDir = './src/content/post';
    const results = [];
    
    function scanDirectory(dir) {
        const items = fs.readdirSync(dir);
        
        for (const item of items) {
            const itemPath = path.join(dir, item);
            const stat = fs.statSync(itemPath);
            
            if (stat.isDirectory()) {
                scanDirectory(itemPath);
            } else if (item.endsWith('.md') && !item.startsWith('-')) {
                const postData = extractPostContent(itemPath);
                if (postData) {
                    const imagePrompt = generateImagePrompt(postData);
                    const imageFilename = generateImageFilename(postData);
                    
                    results.push({
                        file: itemPath,
                        title: postData.title,
                        date: postData.date.toISOString().split('T')[0],
                        imagePrompt,
                        suggestedFilename: imageFilename,
                        suggestedPath: `/images/post/${imageFilename}`
                    });
                }
            }
        }
    }
    
    scanDirectory(contentDir);
    
    // Sort by date
    results.sort((a, b) => new Date(a.date) - new Date(b.date));
    
    return results;
}

// Run analysis and output results
console.log('Analyzing blog posts for image generation...\n');

const posts = analyzeAllPosts();

console.log(`Found ${posts.length} posts to process.\n`);

// Output as JSON for easy processing
fs.writeFileSync('image-prompts.json', JSON.stringify(posts, null, 2));

console.log('Generated image-prompts.json with the following structure:');
console.log('- file: path to the markdown file');
console.log('- title: post title');
console.log('- date: post date');
console.log('- imagePrompt: AI-generated prompt for image creation');
console.log('- suggestedFilename: proposed filename for the image');
console.log('- suggestedPath: path to use in frontmatter\n');

// Show a few examples
console.log('Example entries:');
posts.slice(0, 3).forEach((post, index) => {
    console.log(`\n${index + 1}. ${post.title}`);
    console.log(`   Date: ${post.date}`);
    console.log(`   Image prompt: ${post.imagePrompt}`);
    console.log(`   Suggested path: ${post.suggestedPath}`);
});

console.log(`\n... and ${posts.length - 3} more entries in image-prompts.json`);
