# BlueSky Likes Component

This document explains how to use the BlueSky Likes component that has been added to your blog.  Credit to [whitep4nth3r](https://whitep4nth3r.com/blog/show-bluesky-likes-on-blog-posts/#i-used-client-side-javascript) and [ashleymcnamara](https://github.com/ashleymcnamara/ashley.dev/blob/main/src/components/BlueskyLikes.astro)


## Overview

The BlueSky Likes component displays likes and comments from BlueSky for your blog posts. It shows user avatars of people who liked the post and displays any comments made on the corresponding BlueSky post.

## Setup

### 1. Environment Variables

Create a `.env` file in your project root and add your BlueSky identifier:

```
BLUESKY_IDENTIFIER=martin.social
```

### 2. Update your BlueSky DID

In `/src/layouts/components/BlueskyLikes.astro`, you need to replace the placeholder with your actual BlueSky DID:

```javascript
// Replace this line:
const MY_DID = "did:plc:YOUR_DID_HERE"; // Replace with your actual Bluesky DID

// With your actual DID, for example:
const MY_DID = "did:plc:abcd1234efgh5678ijkl9012"; // Your actual Bluesky DID
```

To find your BlueSky DID:
1. Go to https://bsky.app/profile/YOUR_HANDLE
2. View the page source and search for "did:plc:" to find your DID
3. Or use the BlueSky API to resolve your handle to a DID

### 3. Adding BlueSky Post URIs to Blog Posts

To display BlueSky interactions for a blog post, add the `blueskyPostURI` field to your post's frontmatter:

```yaml
---
title: "My Blog Post Title"
date: 2025-08-06
blueskyPostURI: "at://did:plc:abcd1234efgh5678ijkl9012/app.bsky.feed.post/3lm34df764s2w"
# ... other frontmatter fields
---
```

The `blueskyPostURI` should be the full AT Protocol URI of your BlueSky post. You can find this by:
1. Creating a post on BlueSky about your blog post
2. Getting the post URI from the BlueSky API or by inspecting the post URL

Alternative format - you can also just use the post ID (the last part of the URL):
```yaml
blueskyPostURI: "3lm34df764s2w"
```

The component will automatically format this into the full AT Protocol URI.

## How It Works

1. The component fetches data from the public BlueSky API
2. It displays user avatars of people who liked the post
3. It shows comments made on the BlueSky post
4. Users can click on avatars to visit the commenter's BlueSky profile
5. Links are provided to view and interact with the original BlueSky post

## Styling

The component uses Tailwind CSS classes and includes custom styles for:
- Loading spinners
- Responsive design
- Hover effects
- Scrollable comment sections
- Avatar overlapping effects

## Features

- **Likes Display**: Shows up to 55 user avatars of people who liked the post
- **Comments**: Displays threaded comments from the BlueSky post
- **Responsive Design**: Works well on desktop and mobile
- **Error Handling**: Gracefully handles API errors and missing data
- **Loading States**: Shows loading spinners while fetching data
- **Interactive Elements**: Clickable avatars and links to BlueSky

## Example Blog Post

Here's an example of how to add BlueSky integration to a blog post:

```markdown
---
title: "My Thoughts on Open Source"
date: 2025-08-06
author: "Martin Woodward"
categories: ["technology", "open-source"]
tags: ["development", "community"]
blueskyPostURI: "at://did:plc:abcd1234efgh5678ijkl9012/app.bsky.feed.post/3lm34df764s2w"
draft: false
---

This is my blog post content about open source development...
```

When this post is viewed, the BlueSky Likes component will appear at the bottom, showing likes and comments from the corresponding BlueSky post.

## Troubleshooting

- **No interactions showing**: Verify the `blueskyPostURI` is correct and the post exists on BlueSky
- **API errors**: Check the browser console for detailed error messages
- **Styling issues**: Ensure Tailwind CSS is properly configured in your project
- **DID not found**: Make sure you've updated the `MY_DID` constant with your actual BlueSky DID
