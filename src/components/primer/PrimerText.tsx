import React from 'react';
import type { ReactNode } from 'react';

interface PrimerTextProps {
  size?: '100' | '200' | '300' | '350' | '400' | '500' | '600' | '700' | '800' | '900' | '1000';
  weight?: 'light' | 'normal' | 'medium' | 'semibold';
  variant?: 'default' | 'muted';
  children: ReactNode;
  className?: string;
  as?: 'p' | 'span' | 'div';
}

export default function PrimerText({ 
  size = '400', 
  weight = 'normal',
  variant = 'default',
  children, 
  className = '',
  as = 'p'
}: PrimerTextProps) {
  // Use dynamic import for client-side rendering
  const [Text, setText] = React.useState<any>(null);
  
  React.useEffect(() => {
    async function loadText() {
      try {
        const { Text: PrimerText } = await import('@primer/react-brand');
        setText(() => PrimerText);
      } catch (error) {
        console.error('Failed to load Primer Text:', error);
      }
    }
    loadText();
  }, []);

  if (!Text) {
    // Fallback to regular element
    return React.createElement(as, { className }, children);
  }

  return (
    <Text 
      size={size} 
      weight={weight} 
      variant={variant} 
      as={as}
      className={className}
    >
      {children}
    </Text>
  );
}
