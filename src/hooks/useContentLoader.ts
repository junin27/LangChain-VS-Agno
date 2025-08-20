import { useState, useEffect } from 'react';
import type { ContentSection } from '../types/content';
import { ContentSectionSchema } from '../types/content';

const STORAGE_KEY = 'comparativo-content';

export const useContentLoader = () => {
  const [content, setContent] = useState<Record<string, ContentSection>>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadContent();
  }, []);

  const loadContent = async () => {
    try {
      setLoading(true);
      setError(null);

      // Try to load from localStorage first
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        try {
          const parsed = JSON.parse(stored);
          setContent(parsed);
          setLoading(false);
          return;
        } catch (e) {
          console.warn('Failed to parse stored content, loading defaults');
        }
      }

      // Load default/empty content structure
      const defaultContent = createDefaultContent();
      setContent(defaultContent);
      
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load content');
    } finally {
      setLoading(false);
    }
  };

  const saveContent = (sectionId: string, sectionData: ContentSection) => {
    try {
      const validated = ContentSectionSchema.parse(sectionData);
      const updated = { ...content, [sectionId]: validated };
      setContent(updated);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to save content');
    }
  };

  const exportContent = () => {
    return JSON.stringify(content, null, 2);
  };

  const importContent = (jsonString: string) => {
    try {
      const parsed = JSON.parse(jsonString);
      // Validate each section
      const validated: Record<string, ContentSection> = {};
      for (const [key, section] of Object.entries(parsed)) {
        validated[key] = ContentSectionSchema.parse(section);
      }
      setContent(validated);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(validated));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to import content');
    }
  };

  const clearContent = () => {
    localStorage.removeItem(STORAGE_KEY);
    setContent(createDefaultContent());
  };

  return {
    content,
    loading,
    error,
    saveContent,
    exportContent,
    importContent,
    clearContent,
    reloadContent: loadContent
  };
};

const createDefaultContent = (): Record<string, ContentSection> => {
  // TODO: inserir estrutura de conteúdo padrão aqui
  return {
    'langchain': {
      id: 'langchain',
      title: 'LangChain',
      sections: [
        {
          id: '2.1-arquitetura',
          title: 'Arquitetura e Componentes Fundamentais',
          summary: 'Visão geral da arquitetura modular do LangChain...',
          bodyMD: '# Arquitetura do LangChain\n\n*Conteúdo será inserido aqui...*'
        }
      ]
    },
    'agno': {
      id: 'agno',
      title: 'Agno',
      sections: [
        {
          id: '3.1-filosofia',
          title: 'Filosofia de Design e Arquitetura',
          summary: 'Princípios fundamentais da biblioteca Agno...',
          bodyMD: '# Filosofia do Agno\n\n*Conteúdo será inserido aqui...*'
        }
      ]
    }
  };
};
