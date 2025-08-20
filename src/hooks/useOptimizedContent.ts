import { useState, useEffect, useMemo } from 'react';

interface ContentSection {
  id: string;
  title: string;
  summary: string;
  bodyMD: string;
  lastUpdated: string;
}

// Cache global para conteúdo
const contentCache = new Map<string, ContentSection>();

export const useOptimizedContent = (contentId: string) => {
  const [content, setContent] = useState<ContentSection | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    
    const loadContent = async () => {
      try {
        // Verificar cache primeiro
        if (contentCache.has(contentId)) {
          if (isMounted) {
            setContent(contentCache.get(contentId)!);
            setLoading(false);
          }
          return;
        }

        const response = await fetch(`/content/${contentId}.json`, {
          headers: {
            'Cache-Control': 'public, max-age=300', // Cache por 5 minutos
          }
        });
        
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`);
        }

        const data = await response.json();
        
        // Armazenar no cache
        contentCache.set(contentId, data);
        
        if (isMounted) {
          setContent(data);
          setError(null);
        }
      } catch (err) {
        console.error('Erro ao carregar conteúdo:', err);
        if (isMounted) {
          setError(err instanceof Error ? err.message : 'Erro desconhecido');
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    loadContent();
    
    return () => {
      isMounted = false;
    };
  }, [contentId]);

  // Memoizar o conteúdo processado
  const processedContent = useMemo(() => {
    if (!content) return null;
    
    return {
      ...content,
      // Pré-processar qualquer conteúdo se necessário
      bodyMD: content.bodyMD
    };
  }, [content]);

  return { content: processedContent, loading, error };
};
