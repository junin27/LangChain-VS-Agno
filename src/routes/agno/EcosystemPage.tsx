import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import PageTemplate from '../../components/PageTemplate';
import type { SectionBlock } from '../../types/content';

const EcosystemPage: React.FC = () => {
  const [content, setContent] = useState<SectionBlock | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadContent = async () => {
      try {
        // Usando conteúdo estático por enquanto
        const staticContent = {
          id: 'ecossistema-agno',
          title: 'Ecossistema e Integrações',
          summary: 'Agnosticismo de modelo e integrações flexíveis do Agno',
          bodyMD: `# Ecossistema e Integrações

O ecossistema de Agno é caracterizado por seu **forte agnosticismo de modelo**, permitindo que os desenvolvedores utilizem qualquer modelo de qualquer provedor sem lock-in.

---

## Agnosticismo de Modelo

### Suporte a Múltiplos Provedores
- **OpenAI**: GPT-4, GPT-3.5 e modelos especializados
- **Groq**: Modelos otimizados para alta velocidade
- **Anthropic**: Claude e variações
- **Gemini**: Modelos do Google
- **Perplexity**: Modelos especializados em pesquisa

### Vantagens Estratégicas
- **Flexibilidade**: Experimentar e trocar modelos com base em custo, desempenho ou recursos específicos
- **Redução de Risco**: Evita dependência de um único fornecedor
- **Adaptabilidade**: Permite que as aplicações se adaptem às inovações do mercado
- **Otimização**: Facilita a otimização de custos e desempenho a longo prazo

---

## Integrações Essenciais

### Ferramentas de Busca e Pesquisa
- **DuckDuckGo**: Busca na web com privacidade
- **Tavily**: Pesquisa avançada e análise de conteúdo
- **YFinance**: Dados financeiros em tempo real

### Gerenciamento de Memória
- **Mem0**: Sistema avançado de gerenciamento de memória
- Persistência de contexto entre sessões
- Memórias personalizadas e multimodais

### Bancos de Dados Vetoriais
- **Mais de 20 bancos suportados**:
  - Weaviate
  - LanceDb
  - Pinecone
  - Chroma
  - Qdrant
  - E muitos outros

---

## Benefícios do Ecossistema

### Para Desenvolvedores
- **Sem Lock-in**: Liberdade para escolher e trocar provedores
- **Experimentação**: Facilita testes com diferentes modelos
- **Manutenção**: Reduz a necessidade de refatoração de código

### Para Projetos Empresariais
- **Otimização de Custos**: Flexibilidade para escolher modelos mais econômicos
- **Escalabilidade**: Adaptação a diferentes necessidades de desempenho
- **Futuro-prova**: Preparação para novas tecnologias e modelos

### Para IA Aplicada
- **Modelos Específicos**: Suporte a modelos de código aberto ou específicos de domínio
- **Inovação Contínua**: Acesso rápido a novos modelos e tecnologias
- **Competitividade**: Vantagem estratégica em mercado de LLMs em rápida evolução

---

## Casos de Uso Ideais

- **Projetos que buscam otimização de custos e desempenho a longo prazo**
- **Aplicações que precisam de flexibilidade para usar modelos específicos**
- **Sistemas que requerem adaptação rápida a inovações do mercado**
- **Organizações que querem evitar dependência de fornecedor único**

---

*O agnosticismo de modelo de Agno é um fator decisivo para projetos que valorizam flexibilidade, otimização e preparação para o futuro da IA.*
`
        };
        
        // Simular carregamento
        setTimeout(() => {
          setContent(staticContent);
          setLoading(false);
        }, 300);
      } catch (error) {
        console.error('Erro ao carregar conteúdo:', error);
        setLoading(false);
      }
    };

    loadContent();
  }, []);

  if (loading) {
    return (
      <PageTemplate 
        title="Ecossistema e Integrações" 
        subtitle="Agnosticismo de modelo e integrações flexíveis do Agno"
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
      title="Ecossistema e Integrações" 
      subtitle="Agnosticismo de modelo e integrações flexíveis do Agno"
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

export default EcosystemPage;