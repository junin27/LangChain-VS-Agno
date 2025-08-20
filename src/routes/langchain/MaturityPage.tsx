import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import PageTemplate from '../../components/PageTemplate';
import type { SectionBlock } from '../../types/content';

const MaturityPage: React.FC = () => {
  const [content, setContent] = useState<SectionBlock | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadContent = async () => {
      try {
        const response = await fetch('/content/2.9-maturidade-langchain.json');
        if (response.ok) {
          const data = await response.json();
          setContent(data);
        }
      } catch (error) {
        console.error('Error loading content:', error);
      } finally {
        setLoading(false);
      }
    };

    loadContent();
  }, []);

  if (loading) {
    return (
      <PageTemplate 
        title="Maturidade, Comunidade e Licenciamento" 
        subtitle="Análise da maturidade do framework, engajamento da comunidade e modelo de licenciamento"
      >
        <div className="animate-pulse">
          <div className="h-8 bg-gray-300 dark:bg-gray-600 rounded mb-4"></div>
          <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded mb-6 w-3/4"></div>
          <div className="space-y-3">
            <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded"></div>
            <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-5/6"></div>
            <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-2/3"></div>
          </div>
        </div>
      </PageTemplate>
    );
  }

  return (
    <PageTemplate 
      title="Maturidade, Comunidade e Licenciamento" 
      subtitle="Análise da maturidade do framework, engajamento da comunidade e modelo de licenciamento"
    >
      {content && content.bodyMD && (
        <div className="prose prose-lg max-w-none text-gray-800 dark:text-gray-200">
          <ReactMarkdown
            components={{
              h1: ({children}) => <h1 className="text-3xl font-bold mb-6 gradient-text">{children}</h1>,
              h2: ({children}) => <h2 className="text-2xl font-bold mt-8 mb-4 gradient-text border-l-4 border-blue-500 pl-4">{children}</h2>,
              h3: ({children}) => <h3 className="text-xl font-semibold mt-8 mb-3 text-blue-600 dark:text-blue-400">{children}</h3>,
              strong: ({children}) => <strong className="font-bold text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/30 px-1 py-0.5 rounded">{children}</strong>,
              p: ({children}) => <p className="mb-4 leading-relaxed text-gray-800 dark:text-gray-200">{children}</p>,
              ul: ({children}) => <ul className="mb-6 space-y-2 ml-4">{children}</ul>,
              li: ({children}) => <li className="flex items-start"><span className="text-white dark:text-white mr-3 mt-1.5 w-1 h-1 bg-current rounded-full"></span><span className="text-gray-800 dark:text-gray-200">{children}</span></li>,
              code: ({children}) => <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono text-purple-600 dark:text-purple-400">{children}</code>,
              blockquote: ({children}) => <blockquote className="border-l-4 border-blue-500 pl-4 italic bg-blue-50 dark:bg-blue-950 p-4 rounded-r-lg">{children}</blockquote>,
              hr: () => <div className="section-divider"></div>
            }}
          >
            {content.bodyMD}
          </ReactMarkdown>
        </div>
      )}
    </PageTemplate>
  );
};

export default MaturityPage;