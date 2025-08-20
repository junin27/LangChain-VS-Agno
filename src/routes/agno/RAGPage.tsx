import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import PageTemplate from '../../components/PageTemplate';
import type { SectionBlock } from '../../types/content';

const RAGPage: React.FC = () => {
  const [content, setContent] = useState<SectionBlock | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadContent = async () => {
      try {
        // Usando conteúdo estático por enquanto
        const staticContent = {
          id: 'rag-agno',
          title: 'Implementação de RAG',
          summary: 'Retrieval Augmented Generation integrado e autônomo no Agno',
          bodyMD: `# Implementação de RAG

Agno adota uma **abordagem intrínseca para RAG**, com **Agentic RAG por padrão**, onde os agentes são projetados para pesquisar autonomamente sua base de conhecimento em busca de informações específicas necessárias para cumprir suas tarefas.

---

## Agentic RAG por Padrão

A **integração profunda da recuperação de conhecimento** no processo de raciocínio do agente é um diferencial fundamental:

- **Recuperação Autônoma**: Agentes pesquisam automaticamente sua base de conhecimento
- **Processo Intrínseco**: RAG não é um módulo opcional, mas parte fundamental do raciocínio
- **Automação Completa**: Elimina a necessidade de orquestração manual da recuperação
- **Simplicidade de Uso**: Reduz código boilerplate e complexidade de implementação

---

## Integração com Bancos de Dados Vetoriais

O framework suporta **mais de 20 bancos de dados vetoriais** para RAG e dynamic few-shot learning:

### **Soluções Populares Suportadas**
- **Weaviate**: Banco de dados vetorial nativo em nuvem
- **LanceDb**: Solução de alta performance para embeddings
- **Milvus**: Plataforma de dados vetoriais de código aberto
- **E mais 17+ outras soluções**: Cobertura abrangente do ecossistema

---

## Processo de RAG Otimizado

O **processo de RAG em Agno** envolve etapas automatizadas e otimizadas:

### **Preparação de Dados**
- **Chunking Inteligente**: Documentos divididos em pedaços menores otimizados
- **Geração de Embeddings**: Vetorização automática de cada chunk
- **Armazenamento Vetorial**: Indexação eficiente em vector databases

### **Recuperação Avançada**
- **Busca Vetorial**: Similaridade semântica de alta precisão
- **Busca Híbrida**: Combinação de similaridade vetorial com busca por palavras-chave
- **Injeção Contextual**: Resultados relevantes automaticamente inseridos no prompt

---

## Vantagens da Abordagem Agno

### **Automação Inteligente**
- Agentes gerenciam autonomamente sua necessidade de conhecimento externo
- Eliminação de orquestração manual de recuperação e injeção de contexto
- Processo transparente e eficiente

### **Simplicidade de Desenvolvimento**
- Redução significativa de código boilerplate
- Alinhamento com a filosofia de simplicidade do Agno
- Desenvolvimento acelerado de aplicações RAG

### **Confiabilidade Aprimorada**
- Agentes intrinsecamente projetados para buscar conhecimento relevante
- Fundamentação automática de respostas com informações externas
- Maior precisão e contextualização das respostas

---

## Casos de Uso Ideais

### **Chatbots de Suporte ao Cliente**
- Acesso automático a base de conhecimento da empresa
- Respostas fundamentadas em documentação oficial
- Contextualização baseada em histórico de interações

### **Sistemas de Q&A sobre Documentos**
- Busca inteligente em grandes volumes de documentos
- Respostas precisas baseadas em conteúdo específico
- Citação automática de fontes relevantes

### **Assistentes de Pesquisa**
- Recuperação contextual de informações especializadas
- Síntese inteligente de múltiplas fontes
- Atualização dinâmica da base de conhecimento

---

## Diferencial Competitivo

A **abordagem "Agentic RAG by default"** de Agno representa um paradigma diferenciado:

- **Integração Nativa**: RAG como parte fundamental da arquitetura
- **Autonomia Inteligente**: Agentes decidem quando e como recuperar informações
- **Eficiência Operacional**: Redução de complexidade e tempo de desenvolvimento
- **Escalabilidade**: Suporte robusto a múltiplos bancos de dados vetoriais`,
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
        title="Implementação de RAG" 
        subtitle="Retrieval Augmented Generation integrado e autônomo no Agno"
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
      title="Implementação de RAG" 
      subtitle="Retrieval Augmented Generation integrado e autônomo no Agno"
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

export default RAGPage;