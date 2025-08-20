import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import PageTemplate from '../../components/PageTemplate';
import type { SectionBlock } from '../../types/content';

const PerformancePage: React.FC = () => {
  const [content, setContent] = useState<SectionBlock | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadContent = async () => {
      try {
        // Usando conteúdo estático por enquanto
        const staticContent = {
          id: 'desempenho-agno',
          title: 'Desempenho e Escalabilidade',
          summary: 'Performance obsessiva e benchmarks impressionantes do Agno',
          bodyMD: `# Desempenho e Escalabilidade

A **performance é um pilar central** da filosofia de design de Agno, com o framework sendo "obcecado por performance" devido ao fato de que fluxos de trabalho de IA podem gerar milhares de agentes, tornando o desempenho um gargalo crítico.

---

## Benchmarks Impressionantes

Agno apresenta **benchmarks de desempenho impressionantes** em comparação com LangGraph (parte do LangChain):

### Velocidade de Instanciação de Agentes
- **Agno**: ~2μs (microssegundos) tempo médio de instanciação
- **LangGraph**: ~20ms (milissegundos) tempo médio de instanciação
- **Vantagem**: Aproximadamente **~10.000x mais rápido**

### Pegada de Memória por Agente
- **Agno**: ~3.75 KiB por agente
- **LangGraph**: ~137 KiB por agente
- **Vantagem**: Aproximadamente **~50x menos memória**

---

## Metodologia dos Testes

### Ambiente de Teste
- **Hardware**: Apple M4 MacBook Pro
- **Profiling**: tracemalloc do Python para medição de memória
- **Isolamento**: Código do Agente isolado para medições limpas
- **Execuções**: 1000 execuções para garantir precisão estatística

### Critérios de Medição
- **Velocidade**: Tempo de instanciação de agentes
- **Memória**: Pegada de RAM por instância de agente
- **Escalabilidade**: Performance em ambientes de alta concorrência

---

## Vantagens Competitivas

### Para Aplicações em Escala
- **Milhares de Agentes**: Suporte eficiente para execução paralela massiva
- **Milhões de Usuários**: Capacidade de atender grandes volumes simultaneamente
- **Custo por Agente**: Redução significativa dos custos de infraestrutura
- **Latência Reduzida**: Experiência de usuário superior com tempos de resposta mínimos

### Filosofia de Minimalismo
- **Menos Abstrações**: Overhead reduzido por instância de agente
- **Base de Código Enxuta**: Tempos de inicialização mais rápidos
- **Menor Consumo de RAM**: Eficiência de memória otimizada
- **Simplicidade**: Tradução direta em performance superior

---

## Impacto na Produção

### Economias de Infraestrutura
- **Redução de Custos**: Menor necessidade de recursos computacionais
- **Eficiência Energética**: Menor consumo de energia por operação
- **Escalabilidade Horizontal**: Suporte a mais agentes com mesmos recursos
- **ROI Melhorado**: Retorno sobre investimento em infraestrutura otimizado

### Casos de Uso Ideais
- **Sistemas de Alta Concorrência**: Ambientes com milhares de agentes simultâneos
- **Aplicações Dinâmicas**: Criação e destruição frequente de agentes
- **Ambientes Críticos**: Onde latência e performance são fundamentais
- **Soluções Econômicas**: Projetos com restrições orçamentárias de infraestrutura

---

## Diferencial Tecnológico

Se esses **benchmarks se mantiverem em diversos cenários de produção**, Agno poderia ser a **escolha dominante** para aplicações que exigem a criação e o gerenciamento de um grande número de agentes em tempo real, impactando diretamente os custos de infraestrutura e a latência.

A combinação de **minimalismo arquitetural** e **obsessão por performance** posiciona Agno como uma solução potencialmente mais econômica e eficiente para cargas de trabalho intensivas em agentes.`,
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
        title="Desempenho e Escalabilidade" 
        subtitle="Performance obsessiva e benchmarks impressionantes do Agno"
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
      title="Desempenho e Escalabilidade" 
      subtitle="Performance obsessiva e benchmarks impressionantes do Agno"
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

export default PerformancePage;