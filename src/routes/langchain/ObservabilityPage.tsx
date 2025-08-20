import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

interface ContentSection {
  id: string;
  title: string;
  summary: string;
  bodyMD: string;
  lastUpdated: string;
}

const ObservabilityPage: React.FC = () => {
  const [content, setContent] = useState<ContentSection | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadContent = async () => {
      try {
        const timestamp = Date.now();
        const response = await fetch(`/content/2.6-observabilidade-langchain.json?t=${timestamp}`, {
          headers: {
            'Cache-Control': 'no-cache, no-store, must-revalidate',
            'Pragma': 'no-cache',
            'Expires': '0'
          }
        });
        
        if (response.ok) {
          const data = await response.json();
          setContent(data);
        }
      } catch (error) {
        console.error('Erro ao carregar conteúdo:', error);
      } finally {
        setLoading(false);
      }
    };

    loadContent();
  }, []);

  if (loading) {
    return (
      <div className="container mx-auto px-8 pb-8">
        <div className="max-w-7xl mx-auto">
          <div className="card p-8 space-y-8">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-300 dark:bg-gray-600 rounded mb-4"></div>
              <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded mb-6"></div>
              <div className="space-y-3">
                <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded"></div>
                <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-3/4"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!content) {
    return (
      <div className="container mx-auto px-8 pb-8">
        <div className="max-w-7xl mx-auto">
          <div className="card p-8">
            <h1 className="text-3xl font-bold mb-4 gradient-text">Observabilidade e Avaliação</h1>
            <p className="text-gray-600 dark:text-gray-400">Conteúdo não encontrado.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-8 pb-8">
      <div className="max-w-7xl mx-auto">
        <div className="card p-8 space-y-8">
          <div className="max-w-none text-gray-800 dark:text-gray-200">
            <ReactMarkdown
              components={{
                h1: ({ children }) => (
                  <h1 className="text-3xl font-bold mb-6 gradient-text border-l-4 border-blue-500 pl-4">
                    {children}
                  </h1>
                ),
                h2: ({ children }) => (
                  <h2 className="text-2xl font-bold mt-8 mb-4 gradient-text border-l-4 border-blue-500 pl-4">
                    {children}
                  </h2>
                ),
                h3: ({ children }) => (
                  <h3 className="text-xl font-semibold mt-6 mb-3 text-blue-600 dark:text-blue-400">
                    {children}
                  </h3>
                ),
                strong: ({ children }) => (
                  <strong className="font-semibold text-purple-600 dark:text-purple-400">
                    {children}
                  </strong>
                ),
                ul: ({ children }) => (
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    {children}
                  </ul>
                ),
                li: ({ children }) => (
                  <li className="text-gray-700 dark:text-gray-300">
                    {children}
                  </li>
                ),
                code: ({ children }) => (
                  <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">
                    {children}
                  </code>
                ),
                hr: () => (
                  <div className="section-divider"></div>
                )
              }}
            >
              {content.bodyMD}
            </ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ObservabilityPage;