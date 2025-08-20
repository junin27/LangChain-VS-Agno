import React from 'react';

interface PageTemplateProps {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
}

const PageTemplate: React.FC<PageTemplateProps> = ({ title, subtitle, children }) => {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{title}</h1>
        {subtitle && (
          <p className="text-lg text-gray-900 dark:text-white max-w-3xl">
            {subtitle}
          </p>
        )}
      </div>

      <div className="card p-8">
        <div className="space-y-6">
          {children || (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">📝</div>
              <h3 className="text-xl font-semibold mb-2">Conteúdo em Desenvolvimento</h3>
              <p className="text-muted-foreground">
                Esta seção será preenchida com conteúdo detalhado em breve.
              </p>
              <p className="text-sm text-muted-foreground mt-4">
                <em>TODO: Inserir conteúdo real aqui através da IA.</em>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PageTemplate;
