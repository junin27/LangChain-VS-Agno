import React, { memo, Suspense } from 'react';
import { useOptimizedContent } from '../hooks/useOptimizedContent';
import OptimizedMarkdown from './OptimizedMarkdown';
import OptimizedLoading from './OptimizedLoading';

interface OptimizedPageTemplateProps {
  contentId: string;
  fallbackTitle?: string;
}

const ErrorFallback = memo(({ title }: { title: string }) => (
  <div className="container mx-auto px-8 pb-8">
    <div className="max-w-7xl mx-auto">
      <div className="card p-8">
        <h1 className="text-3xl font-bold mb-4 gradient-text border-l-4 border-red-500 pl-4">
          {title}
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Erro ao carregar conteúdo. Tente recarregar a página.
        </p>
      </div>
    </div>
  </div>
));

ErrorFallback.displayName = 'ErrorFallback';

const OptimizedPageTemplate: React.FC<OptimizedPageTemplateProps> = memo(({ 
  contentId, 
  fallbackTitle = "Carregando..." 
}) => {
  const { content, loading, error } = useOptimizedContent(contentId);

  if (loading) {
    return <OptimizedLoading />;
  }

  if (error || !content) {
    return <ErrorFallback title={fallbackTitle} />;
  }

  return (
    <div className="container mx-auto px-8 pb-8">
      <div className="max-w-7xl mx-auto">
        <div className="card p-8 space-y-8">
          <Suspense fallback={<OptimizedLoading />}>
            <OptimizedMarkdown content={content.bodyMD} />
          </Suspense>
        </div>
      </div>
    </div>
  );
});

OptimizedPageTemplate.displayName = 'OptimizedPageTemplate';

export default OptimizedPageTemplate;
