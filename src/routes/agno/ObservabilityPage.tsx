import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import PageTemplate from '../../components/PageTemplate';
import type { SectionBlock } from '../../types/content';

const ObservabilityPage: React.FC = () => {
  const [content, setContent] = useState<SectionBlock | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadContent = async () => {
      try {
        // Usando conteúdo estático por enquanto
        const staticContent = {
          id: 'observabilidade-agno',
          title: 'Observabilidade e Avaliação',
          summary: 'Monitoramento em tempo real e depuração avançada no Agno',
          bodyMD: `# Observabilidade e Avaliação

Agno oferece uma **suíte robusta de observabilidade** que combina simplicidade com recursos avançados de monitoramento e depuração para agentes de IA.

---

## Monitoramento em Tempo Real

### Plataforma de Monitoramento
- **Sessões de Agentes**: Acompanhamento em tempo real do comportamento dos agentes
- **Métricas de Performance**: Monitoramento contínuo de desempenho e latência
- **Visibilidade Completa**: Transparência total sobre operações dos agentes

### Benefícios do Monitoramento
- **Detecção Precoce**: Identificação rápida de problemas e anomalias
- **Otimização Contínua**: Insights para melhorar performance dos agentes
- **Confiabilidade**: Garantia de funcionamento adequado em produção

---

## Depurador Embutido

### Logs Detalhados no Terminal
- **Prompts do Sistema**: Visualização completa dos prompts enviados aos modelos
- **Chamadas de Ferramentas**: Rastreamento de todas as interações com ferramentas
- **Raciocínio Interno**: Acesso ao processo de tomada de decisão dos agentes

### Vantagens para Desenvolvimento
- **Depuração Simplificada**: Identificação rápida da causa raiz de problemas
- **Comportamento Não Determinístico**: Compreensão do raciocínio dos agentes de IA
- **Desenvolvimento Acelerado**: Redução significativa do tempo de debugging

---

## Integração com Langfuse

### OpenTelemetry Integration
- **Instrumentação Automática**: Rastreamento via OpenTelemetry padrão da indústria
- **Observabilidade Estendida**: Capacidades avançadas de monitoramento
- **Compatibilidade**: Integração com ecossistema de observabilidade existente

### Rastreamento Avançado
- **Operações de Agentes**: Monitoramento completo do ciclo de vida dos agentes
- **Chamadas de Ferramentas**: Rastreamento detalhado de interações com ferramentas
- **Operações de Memória**: Visibilidade sobre gerenciamento de contexto e memória

---

## Capacidades de Avaliação (Evals)

### Monitoramento de Qualidade
- **Avaliação Contínua**: Monitoramento da qualidade das respostas dos agentes
- **Métricas de Performance**: Acompanhamento de indicadores-chave de desempenho
- **Melhoria Iterativa**: Identificação de oportunidades de otimização

### Otimização de Agentes
- **Análise de Comportamento**: Compreensão profunda do funcionamento dos agentes
- **Ajustes Baseados em Dados**: Melhorias fundamentadas em métricas reais
- **Garantia de Qualidade**: Manutenção de padrões elevados em produção

---

## Vantagens Competitivas

### Para Desenvolvedores
- **Debugging Eficiente**: Ferramentas poderosas para identificação e correção de problemas
- **Visibilidade Completa**: Acesso total ao funcionamento interno dos agentes
- **Produtividade**: Redução significativa do tempo gasto em depuração

### Para Produção
- **Confiabilidade**: Monitoramento contínuo garante funcionamento adequado
- **Performance**: Otimização baseada em dados reais de uso
- **Manutenibilidade**: Facilita manutenção e evolução de sistemas complexos

---

*A suíte de observabilidade do Agno demonstra que simplicidade e robustez podem coexistir, oferecendo ferramentas essenciais para desenvolvimento e produção de agentes de IA confiáveis.*
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
        title="Observabilidade e Avaliação" 
        subtitle="Monitoramento em tempo real e depuração avançada no Agno"
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
      title="Observabilidade e Avaliação" 
      subtitle="Monitoramento em tempo real e depuração avançada no Agno"
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

export default ObservabilityPage;