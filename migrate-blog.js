#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

const BLOG_ARCHIVE_PATH = '/Users/martin/src/blog';
const CONTENT_PATH = './src/content/post';

// Helper function to convert HTML to Markdown
function htmlToMarkdown(html) {
    // Basic HTML to Markdown conversion
    let markdown = html
        // Convert paragraphs
        .replace(/<p[^>]*>/gi, '\n\n')
        .replace(/<\/p>/gi, '')
        // Convert links
        .replace(/<a[^>]*href=["']([^"']*)["'][^>]*>(.*?)<\/a>/gi, '[$2]($1)')
        // Convert strong/bold
        .replace(/<(strong|b)[^>]*>(.*?)<\/\1>/gi, '**$2**')
        // Convert emphasis/italic
        .replace(/<(em|i)[^>]*>(.*?)<\/\1>/gi, '*$2*')
        // Convert headers
        .replace(/<h1[^>]*>(.*?)<\/h1>/gi, '# $1')
        .replace(/<h2[^>]*>(.*?)<\/h2>/gi, '## $1')
        .replace(/<h3[^>]*>(.*?)<\/h3>/gi, '### $1')
        .replace(/<h4[^>]*>(.*?)<\/h4>/gi, '#### $1')
        .replace(/<h5[^>]*>(.*?)<\/h5>/gi, '##### $1')
        .replace(/<h6[^>]*>(.*?)<\/h6>/gi, '###### $1')
        // Convert line breaks
        .replace(/<br[^>]*\/?>/gi, '\n')
        // Remove remaining HTML tags
        .replace(/<[^>]*>/g, '')
        // Decode HTML entities
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&amp;/g, '&')
        .replace(/&quot;/g, '"')
        .replace(/&apos;/g, "'")
        .replace(/&nbsp;/g, ' ')
        // Clean up whitespace
        .replace(/\n\s*\n\s*\n/g, '\n\n')
        .trim();
    
    return markdown;
}

// Function to create slug from title
function createSlug(title) {
    return title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');
}

// Function to parse a blog post entry from HTML
function parsePostFromHtml(html, year, month) {
    const dom = new JSDOM(html);
    const document = dom.window.document;
    
    const posts = [];
    const entries = document.querySelectorAll('.entry-asset');
    
    entries.forEach(entry => {
        try {
            // Extract title
            const titleElement = entry.querySelector('.entry-title a');
            if (!titleElement) return;
            
            const title = titleElement.textContent.trim();
            
            // Extract date
            const dateElement = entry.querySelector('.published');
            if (!dateElement) return;
            
            const dateTitle = dateElement.getAttribute('title');
            const publishedDate = new Date(dateTitle);
            
            // Extract content
            const contentElement = entry.querySelector('.asset-body');
            if (!contentElement) return;
            
            const htmlContent = contentElement.innerHTML;
            const markdownContent = htmlToMarkdown(htmlContent);
            
            // Create filename
            const slug = createSlug(title);
            const dateStr = publishedDate.toISOString().split('T')[0];
            const filename = `${dateStr}-${slug}.md`;
            
            // Create frontmatter
            const frontmatter = `---
title: "${title.replace(/"/g, '\\"')}"
date: ${publishedDate.toISOString()}
# post thumb
images:
  - "/images/post/post-1.jpg"
#author
author: "Martin Woodward"
# description
description: "Migrated from old blog archive"
# Taxonomies
categories: ["Technology"]
tags: ["blog", "archive"]
type: "regular" # available type (regular or featured)
draft: false
---

${markdownContent}`;

            posts.push({
                filename,
                content: frontmatter,
                year: publishedDate.getFullYear(),
                month: String(publishedDate.getMonth() + 1).padStart(2, '0'),
                date: publishedDate
            });
            
        } catch (error) {
            console.error('Error parsing post:', error);
        }
    });
    
    return posts;
}

// Function to ensure directory exists
function ensureDir(dirPath) {
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
    }
}

// Main migration function
async function migrateBlog() {
    console.log('Starting blog migration...');
    
    // Get all year directories
    const years = fs.readdirSync(BLOG_ARCHIVE_PATH)
        .filter(item => /^\d{4}$/.test(item))
        .sort();
    
    let totalPosts = 0;
    
    for (const year of years) {
        const yearPath = path.join(BLOG_ARCHIVE_PATH, year);
        
        if (!fs.statSync(yearPath).isDirectory()) continue;
        
        console.log(`Processing year ${year}...`);
        
        // Get all month directories
        const months = fs.readdirSync(yearPath)
            .filter(item => /^\d{2}$/.test(item))
            .sort();
        
        for (const month of months) {
            const monthPath = path.join(yearPath, month);
            const indexPath = path.join(monthPath, 'index.html');
            
            if (!fs.existsSync(indexPath)) continue;
            
            console.log(`  Processing ${year}/${month}...`);
            
            try {
                const html = fs.readFileSync(indexPath, 'utf8');
                const posts = parsePostFromHtml(html, year, month);
                
                for (const post of posts) {
                    // Ensure target directory exists
                    const targetDir = path.join(CONTENT_PATH, String(post.year), post.month);
                    ensureDir(targetDir);
                    
                    // Write the post file
                    const targetPath = path.join(targetDir, post.filename);
                    fs.writeFileSync(targetPath, post.content, 'utf8');
                    
                    console.log(`    Created: ${targetPath}`);
                    totalPosts++;
                }
                
            } catch (error) {
                console.error(`Error processing ${year}/${month}:`, error);
            }
        }
    }
    
    console.log(`Migration complete! Created ${totalPosts} posts.`);
}

// Run the migration
if (require.main === module) {
    migrateBlog().catch(console.error);
}

module.exports = { migrateBlog };
