import { slug } from "github-slugger";
import { marked } from "marked";

// slugify
export const slugify = (content: string) => {
  return slug(content);
};

// markdownify
export const markdownify = (content: string, div?: boolean) => {
  return div ? marked.parse(content) : marked.parseInline(content);
};

// humanize
export const humanize = (content: string) => {
  return content
    .replace(/^[\s_]+|[\s_]+$/g, "")
    .replace(/[_\s]+/g, " ")
    .replace(/[-\s]+/g, " ")
    .replace(/^[a-z]/, function (m) {
      return m.toUpperCase();
    });
};

// humanizeWithSpecialCases - like humanize but handles special cases like GitHub
export const humanizeWithSpecialCases = (content: string) => {
  let result = content
    .replace(/^[\s_]+|[\s_]+$/g, "")
    .replace(/[_\s]+/g, " ")
    .replace(/[-\s]+/g, " ")
    .replace(/^[a-z]/, function (m) {
      return m.toUpperCase();
    });
  
  // Handle special cases
  result = result.replace(/\bgithub\b/gi, "GitHub");
  
  return result;
};

// formatCategoryForDisplay - formats category names with special cases, then applies case transformation
export const formatCategoryForDisplay = (content: string, lowercase: boolean = false) => {
  let result = content
    .replace(/^[\s_]+|[\s_]+$/g, "")
    .replace(/[_\s]+/g, " ")
    .replace(/[-\s]+/g, " ");
  
  // Handle special cases first
  result = result.replace(/\bgithub\b/gi, "GitHub");
  
  // Apply case transformation
  if (lowercase) {
    // Special handling for GitHub - keep the camelCase even in lowercase context
    return result.replace(/\bGitHub\b/g, "GitHub").toLowerCase().replace(/\bgithub\b/g, "GitHub");
  } else {
    result = result.replace(/^[a-z]/, function (m) {
      return m.toUpperCase();
    });
  }
  
  return result;
};

// titleify
export const titleify = (content: string) => {
  const humanized = humanize(content);
  return humanized
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

// plainify
export const plainify = (content: string) => {
  // First, remove common markdown syntax before converting to HTML
  let plainText = content
    // Remove markdown links [text](url)
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    // Remove markdown images ![alt](url)
    .replace(/!\[([^\]]*)\]\([^)]+\)/g, '$1')
    // Remove markdown bold/italic **text** and *text*
    .replace(/\*\*([^*]+)\*\*/g, '$1')
    .replace(/\*([^*]+)\*/g, '$1')
    // Remove markdown headers
    .replace(/^#{1,6}\s+/gm, '')
    // Remove markdown code blocks ```
    .replace(/```[\s\S]*?```/g, '')
    // Remove inline code `text`
    .replace(/`([^`]+)`/g, '$1')
    // Remove markdown strikethrough
    .replace(/~~([^~]+)~~/g, '$1')
    // Remove blockquotes
    .replace(/^>\s+/gm, '')
    // Remove horizontal rules
    .replace(/^---+$/gm, '')
    // Remove list markers
    .replace(/^[\s]*[-*+]\s+/gm, '')
    .replace(/^[\s]*\d+\.\s+/gm, '')
    // Clean up extra whitespace
    .replace(/\n\s*\n/g, '\n')
    .replace(/^\s+|\s+$/g, '')
    .trim();

  // If there's still HTML-like content, parse and strip it
  if (plainText.includes('<')) {
    const parseMarkdown: any = marked.parse(plainText);
    const filterBrackets = parseMarkdown.replace(/<\/?[^>]+(>|$)/gm, "");
    const filterSpaces = filterBrackets.replace(/[\r\n]\s*[\r\n]/gm, " ");
    plainText = htmlEntityDecoder(filterSpaces);
  }
  
  return plainText;
};

// strip entities for plainify
const htmlEntityDecoder = (htmlWithEntities: string) => {
  let entityList: { [key: string]: string } = {
    "&nbsp;": " ",
    "&lt;": "<",
    "&gt;": ">",
    "&amp;": "&",
    "&quot;": '"',
    "&#39;": "'",
  };
  let htmlWithoutEntities: string = htmlWithEntities.replace(
    /(&amp;|&lt;|&gt;|&quot;|&#39;)/g,
    (entity: string): string => {
      return entityList[entity];
    },
  );
  return htmlWithoutEntities;
};
