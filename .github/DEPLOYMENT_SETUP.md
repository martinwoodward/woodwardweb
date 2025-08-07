# Deployment Setup for Blog with Bluesky Integration

This document explains how to set up the automated deployment workflow for your Astro blog with Bluesky social media integration.

## Overview

The CI/CD workflow automatically:
1. Detects new blog posts without Bluesky integration
2. Builds and deploys your site to GitHub Pages
3. Generates a social media message using GitHub Models (GPT-4o)
4. Posts to Bluesky with a link to the new post
5. Updates the blog post frontmatter with the Bluesky post URI
6. Rebuilds and redeploys the site with the updated post

## Required Secrets

You need to set up the following secrets in your GitHub repository:

### GitHub Repository Secrets

Go to `Settings > Secrets and variables > Actions` in your GitHub repository and add:

1. **`BSKY_IDENTIFIER`** - Your Bluesky handle (e.g., `martin.social` or `your-username.bsky.social`)
2. **`BSKY_PASSWORD`** - Your Bluesky app password (NOT your main password)

### Setting up Bluesky App Password

1. Go to [bsky.app](https://bsky.app) and log in
2. Navigate to Settings > Privacy and security
3. Scroll down to "App passwords"
4. Click "Add app password"
5. Give it a name like "GitHub Blog Automation"
6. Copy the generated password (you won't be able to see it again)
7. Use this password as the value for `BSKY_PASSWORD` secret

## Required Permissions

The workflow requires the following permissions (already configured in the workflow file):

- `contents: write` - To update blog posts with Bluesky URIs
- `pages: write` - To deploy to GitHub Pages
- `id-token: write` - For GitHub Pages deployment
- `models: read` - To use GitHub Models for AI-generated social posts

## How It Works

### 1. Post Detection
The workflow detects new posts by:
- Comparing changes between commits
- Looking for new `.md` files in `src/content/post/`
- Checking if the post already has a `blueskyPostURI` field

### 2. AI-Generated Social Media Posts
For each new post without a Bluesky URI:
- Extracts the post title, description, categories, and tags
- Cleans and extracts the first 500 characters of post content (removing markdown formatting)
- Uses GitHub Models (GPT-4o) to generate an engaging social media message with full context
- Includes relevant hashtags based on the content and categories
- Keeps messages under 250 characters and adds the blog post URL

### 3. Bluesky Integration
- Posts the AI-generated message to Bluesky
- Retrieves the Bluesky post URI
- Updates the blog post frontmatter with `blueskyPostURI: "at://..."`
- Commits the changes back to the repository

### 4. Automatic Redeployment
- Rebuilds the site with the updated post metadata
- Redeploys to GitHub Pages
- The updated post now includes Bluesky interaction data

## Blog Post Frontmatter

### New Posts (without Bluesky)
```yaml
---
title: "My New Blog Post"
date: 2025-08-06T10:00:00.000Z
author: "Martin Woodward"
description: "Description of the post"
categories: ["technology"]
tags: ["programming"]
draft: false
---
```

### After Automatic Processing
```yaml
---
title: "My New Blog Post"
date: 2025-08-06T10:00:00.000Z
author: "Martin Woodward"
description: "Description of the post"
categories: ["technology"]
tags: ["programming"]
draft: false
blueskyPostURI: "at://did:plc:abc123.../app.bsky.feed.post/xyz789"
---
```

### Existing Posts
Posts that already have a `blueskyPostURI` field will be deployed normally without creating new Bluesky posts.

## Workflow Triggers

The workflow runs on:
- Push to the `main` branch
- Manual workflow dispatch (can be triggered from Actions tab)

## Troubleshooting

### Common Issues

1. **Bluesky authentication fails**
   - Verify `BSKY_IDENTIFIER` is correct (your full handle)
   - Ensure `BSKY_PASSWORD` is an app password, not your main password
   - Check that the app password hasn't expired

2. **GitHub Models API fails**
   - Ensure the repository has access to GitHub Models
   - Check that the `models: read` permission is granted

3. **Post URL generation issues**
   - Verify your site URL is correct in the Astro configuration
   - Check that the post file path follows the expected pattern

4. **Git commit failures**
   - The workflow should have `contents: write` permission
   - Check for any file conflicts or invalid characters

### Manual Intervention

If the automated process fails, you can:
1. Manually add the `blueskyPostURI` to the post frontmatter
2. Create the Bluesky post manually
3. Use the post URI from Bluesky in the frontmatter

## Security Considerations

- App passwords are safer than using your main Bluesky password
- The workflow only has the minimum required permissions
- Secrets are encrypted and not visible in workflow logs
- The AI-generated content uses the post title, description, categories, tags, and a cleaned preview of the actual content
- This provides much richer context than just the title, resulting in more engaging and accurate social media posts
- The content preview is cleaned of markdown formatting and limited to 500 characters for optimal prompt efficiency

## Customization

You can customize the workflow by:
- Modifying the AI prompt for social media messages
- Changing the character limit for posts
- Adjusting which file changes trigger the workflow
- Adding additional social media platforms

## Testing

To test the workflow:
1. Create a new blog post without `blueskyPostURI`
2. Commit and push to the main branch
3. Check the Actions tab to see the workflow progress
4. Verify the post appears on Bluesky
5. Confirm the post frontmatter is updated with the Bluesky URI
