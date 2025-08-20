import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import PageTemplate from '../../components/PageTemplate';
import type { SectionBlock } from '../../types/content';

const MemoryPage: React.FC = () => {
  const [content, setContent] = useState<SectionBlock | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadContent = async () => {
      try {
        // Usando conteúdo estático por enquanto
        const staticContent = {
          id: 'memoria-agno',
          title: 'Gerenciamento de Memória',
          summary: 'Sistema de memória persistente e contextual do Agno',
          bodyMD: `# Gerenciamento de Memória

Agno oferece um **sistema de gerenciamento de memória robusto e integrado**, fundamental para a criação de agentes que podem manter o contexto e personalizar interações ao longo do tempo.

---

## Drivers de Armazenamento Integrados

Os agentes vêm com **drivers de armazenamento e memória integrados** que fornecem:

- **Memória de longo prazo**: Persistência de dados entre sessões
- **Armazenamento de sessão**: Contexto mantido durante a interação
- **Integração com bancos de dados**: Suporte nativo ao SQLite
- **Compatibilidade com Mem0**: Soluções de memória persistente e multimodal

---

## Persistência de Sessões

O framework suporta a **persistência de sessões e estados do agente** em banco de dados, permitindo que as interações sejam:

- **Contínuas**: Manutenção do contexto entre sessões
- **Contextualmente conscientes**: Recuperação de histórico relevante
- **Personalizadas**: Adaptação baseada em interações anteriores

---

## Memórias Personalizadas

A capacidade de **criar e armazenar memórias personalizadas** para usuários é um diferencial importante:

### **Personalização Avançada**
- Respostas baseadas no histórico de interações
- Preferências específicas do usuário
- Contexto acumulado ao longo do tempo

### **Experiência Contínua**
- Reconhecimento de usuários recorrentes
- Manutenção de preferências
- Evolução das interações

---

## Memória Multimodal

O suporte para **memória multimodal** permite:

- **Armazenamento de texto e imagens**: Contexto visual preservado
- **Recuperação contextual**: Lembrança de interações visuais
- **Enriquecimento do contexto**: Dados multimodais integrados

---

## Casos de Uso Práticos

### **Chatbots de Atendimento**
- Histórico completo de interações com clientes
- Preferências e problemas anteriores
- Continuidade no atendimento

### **Assistentes Pessoais**
- Aprendizado de rotinas e preferências
- Contexto pessoal preservado
- Personalização crescente

### **Sistemas de Recomendação**
- Histórico de escolhas e preferências
- Padrões de comportamento
- Recomendações contextualizadas

---

## Vantagens da Abordagem Agno

### **Integração Nativa**
- Drivers de memória integrados ao framework
- Configuração simplificada
- Performance otimizada

### **Multimodalidade Completa**
- Memória de texto, imagem e áudio
- Contexto rico e abrangente
- Experiências mais naturais

### **Persistência Robusta**
- Armazenamento confiável em banco de dados
- Recuperação eficiente de contexto
- Escalabilidade empresarial`,
          lastUpdated: new Date().toISOString()
        };
        setContent(staticContent);
      } catch (error) {
        console.error('Failed to load content:', error);
      } finally {
        setLoading(false);
      }
    };

    loadContent();
  }, []);

  if (loading) {
    return (
      <PageTemplate 
        title="Gerenciamento de Memória" 
        subtitle="Sistema de memória persistente e contextual do Agno"
      >
        <div className="animate-pulse space-y-4">
          <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-3/4"></div>
          <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-1/2"></div>
          <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-5/6"></div>
          <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-2/3"></div>
        </div>
      </PageTemplate>
    );
  }

  return (
    <PageTemplate 
      title="Gerenciamento de Memória" 
      subtitle="Sistema de memória persistente e contextual do Agno"
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
              code: ({children}) => <code className="bg-purple-100 dark:bg-purple-900 px-2 py-1 rounded text-sm font-mono text-purple-700 dark:text-purple-300 font-semibold border border-purple-200 dark:border-purple-800">{children}</code>,
              hr: () => <div className="section-divider"></div>,
            }}
          >
            {content.bodyMD}
          </ReactMarkdown>
        </div>
      )}
    </PageTemplate>
  );
};

export default MemoryPage;