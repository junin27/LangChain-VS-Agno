import React, { memo } from 'react';
import ReactMarkdown from 'react-markdown';

interface OptimizedMarkdownProps {
  content: string;
  className?: string;
}

const markdownComponents = {
  h1: ({ children, ...props }: any) => (
    <h1 className="text-3xl font-bold mb-6 gradient-text border-l-4 border-blue-500 pl-4" {...props}>
      {children}
    </h1>
  ),
  h2: ({ children, ...props }: any) => (
    <h2 className="text-2xl font-bold mt-8 mb-4 gradient-text border-l-4 border-blue-500 pl-4" {...props}>
      {children}
    </h2>
  ),
  h3: ({ children, ...props }: any) => (
    <h3 className="text-xl font-semibold mt-6 mb-3 text-blue-600 dark:text-blue-400" {...props}>
      {children}
    </h3>
  ),
  strong: ({ children, ...props }: any) => (
    <strong className="font-semibold text-purple-600 dark:text-purple-400" {...props}>
      {children}
    </strong>
  ),
  ul: ({ children, ...props }: any) => (
    <ul className="list-disc list-inside space-y-2 ml-4" {...props}>
      {children}
    </ul>
  ),
  li: ({ children, ...props }: any) => (
    <li className="text-gray-700 dark:text-gray-300" {...props}>
      {children}
    </li>
  ),
  code: ({ children, ...props }: any) => (
    <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono" {...props}>
      {children}
    </code>
  ),
  hr: (props: any) => <div className="section-divider" {...props}></div>
};

const OptimizedMarkdown: React.FC<OptimizedMarkdownProps> = memo(({ content, className = "max-w-none text-gray-800 dark:text-gray-200" }) => {
  return (
    <div className={className}>
      <ReactMarkdown components={markdownComponents}>
        {content}
      </ReactMarkdown>
    </div>
  );
});

OptimizedMarkdown.displayName = 'OptimizedMarkdown';

export default OptimizedMarkdown;
