---
title: "Automated BlueSky Integration: From Blog Post to Social Media and Back Again"
date: 2025-08-07T12:00:00.000Z
# post thumb
images:
  - "/images/post/2025/08/automated-bluesky-integration.jpg"
#author
author: "Martin Woodward"
# description
description: "Learn how I automated my blog's social media workflow using GitHub Actions and GitHub Models to post to BlueSky and automatically embed social engagement back into the blog posts"
# Taxonomies
categories: ["technology", "web", "github"]
tags: ["bluesky", "automation", "github-actions", "github-models", "ai", "social-media", "astro", "blog"]
type: "regular"
draft: false
---

Thanks to the power of GitHub Copilot's Agent mode, I've recently created a new blog using Astro and ported all 521 of my old blog posts from a HTML archive into the new site.  

Thanks to inspiration from [whitep4nth3r](https://whitep4nth3r.com/blog/show-bluesky-likes-on-blog-posts/#i-used-client-side-javascript) and [ashleymcnamara](https://github.com/ashleymcnamara/ashley.dev/blob/main/src/components/BlueskyLikes.astro) I've added integration with BlueSky to show likes and comments.  But that requires me to remember to post the blog to BlueSky, manually copy the post ID and then republish the site.

This evening I've been tinkering with an automated workflow that bridges the gap between my blog and BlueSky social media platform. The result is a seamless system that automatically posts new blog entries to BlueSky using AI-generated social media text powered by GitHub Models, then updates the blog post to display likes and comments from the social platform. Here's how it all works.

## Automated Social Integration for GitHub Pages

I built an automated pipeline using GitHub Actions and GitHub Models that handles the entire workflow:

1. **Detect new blog posts** when they're published
2. **Generate engaging social media text** using AI
3. **Post automatically to BlueSky** with a link back to the blog
4. **Update the blog post** with the BlueSky post identifier
5. **Display social engagement** directly on the blog through embedded likes and comments

## How It Works: The Technical Details

### Step 1: Detecting New Posts

The workflow starts in my GitHub Actions CI pipeline (`/.github/workflows/ci.yml`). When I push a new blog post, the action detects changes in the `src/content/post/` directory:

```bash
# Get changed files and find new posts
CHANGED_FILES=$(git diff --name-only HEAD~1 HEAD)
NEW_POSTS=$(echo "$CHANGED_FILES" | grep "^src/content/post/.*\.md$")

# Check if any new posts don't have blueskyPostURI
for post in $NEW_POSTS; do
  if ! grep -q "blueskyPostURI:" "$post"; then
    # This post needs BlueSky integration
  fi
done
```

### Step 2: AI-Generated Social Media Text

This is where the magic happens. Using GitHub Models' integration with OpenAI's GPT-4.1, the workflow analyses the blog post content and generates contextual social media text:

```bash
# Extract post metadata and content
POST_TITLE=$(grep "^title:" "$post_file" | sed 's/title: *"//' | sed 's/"$//')
POST_DESCRIPTION=$(grep "^description:" "$post_file")
POST_CATEGORIES=$(grep "^categories:" "$post_file")

# Create enhanced prompt with post context
PROMPT="Write a short, engaging social media post (under 250 characters) for a new blog post. 
Use UK english, never use emdash and only use hashtags sparingly. 
Title: $POST_TITLE. Description: $POST_DESCRIPTION. Categories: $POST_CATEGORIES. 
Make it conversational and include relevant hashtags. Don't include the URL."

# Call GitHub Models API
AI_RESPONSE=$(curl -s "https://models.github.ai/inference/chat/completions" \
  -H "Authorization: Bearer $GITHUB_TOKEN" \
  -d "{
    \"messages\": [{\"role\": \"user\", \"content\": \"$PROMPT\"}],
    \"model\": \"openai/gpt-4.1\"
  }")
```

The AI considers the post's title, description, categories, and even a preview of the content to craft engaging, contextual social media text that feels natural and personal.

### Step 3: Posting to BlueSky

Once the AI generates the social media text, the workflow posts it to BlueSky using the excellent [bluesky-post-action](https://github.com/zentered/bluesky-post-action):

```yaml
- name: Post to Bluesky
  uses: zentered/bluesky-post-action@v0.1.0
  id: bluesky-post
  with:
    post: ${{ steps.process-posts.outputs.BLUESKY_TEXT }}
  env:
    BSKY_IDENTIFIER: ${{ secrets.BSKY_IDENTIFIER }}
    BSKY_PASSWORD: ${{ secrets.BSKY_PASSWORD }}
```

### Step 4: Updating the Blog Post

The BlueSky action returns a URI for the created post, which the workflow automatically adds to the blog post's frontmatter:

```bash
# Update the post file with the Bluesky URI
sed -i "/^draft: false$/a blueskyPostURI: \"${{ steps.bluesky-post.outputs.uri }}\"" "$POST_FILE"

# Commit the changes
git add src/content/post/
git commit -m "Add Bluesky post URI to new blog post"
git push
```

### Step 5: Rebuilding with Social Integration

The workflow then rebuilds and redeploys the site with the updated frontmatter, which enables the BlueSky integration component.

## The BlueSky Likes Component

The real magic happens in the browser with the BlueSky Likes component (massive credit to [whitep4nth3r](https://whitep4nth3r.com/blog/show-bluesky-likes-on-blog-posts/#i-used-client-side-javascript) and [ashleymcnamara](https://github.com/ashleymcnamara/ashley.dev/blob/main/src/components/BlueskyLikes.astro) for inspiration). This Astro component:

1. **Fetches social data** from BlueSky's public API
2. **Displays user avatars** of people who liked the post
3. **Shows threaded comments** from the BlueSky discussion
4. **Provides interactive elements** for engaging with the social post

The component uses the AT Protocol URI stored in the post's frontmatter to query BlueSky's public API endpoints:

```javascript
// Fetch likes and comments
const getLikesURL = `${BSKY_PUBLIC_API}app.bsky.feed.getLikes?uri=${postURI}`;
const getPostURL = `${BSKY_PUBLIC_API}app.bsky.feed.getPosts?uris=${postURI}`;
const threadURL = `${BSKY_PUBLIC_API}app.bsky.feed.getPostThread?uri=${postURI}`;
```

## The UK English Touch
<img src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExMDF5Zzhjd2dkbGxwNXd0Zno1aDI0dGR5dGg1eHJhZ2Uzc3U4ZGxnMyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o85xGocUH8RYoDKKs/giphy.gif" alt="Just my cup of tea" />

One delightful detail: the AI is specifically prompted to use UK English spelling and avoid em-dashes (which I find jarring in social media contexts). This ensures the generated content maintains consistency with my writing style and preferences. I can tweak the prompt as we go to make it more like me.

The entire system is open source and built on GitHub's infrastructure, making it accessible to any developer with a GitHub login and a BlueSky account.

*This post hopefully demonstrates the system in action - it was automatically posted to BlueSky with AI-generated text, and you should see the social engagement displayed below.*
