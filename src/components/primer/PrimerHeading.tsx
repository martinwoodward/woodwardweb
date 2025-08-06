import React from 'react';
import type { ReactNode } from 'react';

interface PrimerHeadingProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  size?: 'display' | '1' | '2' | '3' | '4' | '5' | '6' | 'subhead-large' | 'subhead-medium';
  children: ReactNode;
  className?: string;
}

export default function PrimerHeading({ 
  level = 2, 
  size = '3', 
  children, 
  className = '' 
}: PrimerHeadingProps) {
  // Use dynamic import for client-side rendering
  const [Heading, setHeading] = React.useState<any>(null);
  
  React.useEffect(() => {
    async function loadHeading() {
      try {
        const { Heading: PrimerHeading } = await import('@primer/react-brand');
        setHeading(() => PrimerHeading);
      } catch (error) {
        console.error('Failed to load Primer Heading:', error);
      }
    }
    loadHeading();
  }, []);

  if (!Heading) {
    // Fallback to regular heading element
    const Tag = `h${level}` as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    return React.createElement(Tag, { className }, children);
  }

  return (
    <Heading as={`h${level}`} size={size} className={className}>
      {children}
    </Heading>
  );
}
