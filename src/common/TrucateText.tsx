import React from 'react';

interface TruncatedTextProps {
  content?: string;
  maxLength?: number;
  fallbackMessage?: string;
}

const TruncatedText: React.FC<TruncatedTextProps> = ({
  content,
  maxLength = 100,
  fallbackMessage = 'No airline content found for this airport. Please check back later for more information.',
}) => {
  const truncate = (text: string): string => {
    if (text.length <= maxLength) return text;
    return `${text.slice(0, maxLength)}...`;
  };

  const htmlContent = content ? truncate(content) : fallbackMessage;

  return <div dangerouslySetInnerHTML={{ __html: htmlContent }} className="truncated-text" />;
};

export default TruncatedText;
