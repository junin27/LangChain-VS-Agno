import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import PageTemplate from '../../components/PageTemplate';
import type { SectionBlock } from '../../types/content';

const DeploymentPage: React.FC = () => {
  const [content, setContent] = useState<SectionBlock | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadContent = async () => {
      try {
        // Usando conteúdo estático por enquanto
        const staticContent = {
          id: 'implantacao-agno',
          title: 'Opções de Implantação',
          summary: 'Simplicidade e velocidade na transição de protótipo para produção',
          bodyMD: `# Opções de Implantação

Agno simplifica drasticamente o processo de **levar protótipos para a produção**, alinhando-se com sua filosofia de "simplicidade" e "velocidade". O framework oferece soluções pré-construídas que minimizam o esforço de engenharia.

---

## FastAPI Pré-construído

### Rotas Prontas para Produção
- **Integração Nativa**: Rotas FastAPI pré-construídas para servir agentes
- **Transição Rápida**: Do desenvolvimento para produção em **minutos**
- **Framework Leve**: FastAPI oferece performance e simplicidade
- **Mínimo Esforço**: Redução significativa de código de infraestrutura

### Vantagens do FastAPI
- **Performance Superior**: Framework web Python rápido e eficiente
- **Documentação Automática**: APIs autodocumentadas com Swagger/OpenAPI
- **Validação Integrada**: Validação automática de dados de entrada
- **Compatibilidade**: Padrões web modernos e fácil integração

---

## Agent UI Moderna

### Interface de Usuário Integrada
- **UI Pré-construída**: Interface moderna para interação com agentes
- **Testes Facilitados**: Ambiente ideal para validação e demonstrações
- **Experiência Completa**: Interface profissional sem desenvolvimento adicional
- **Customização**: Flexibilidade para adaptação às necessidades específicas

### Casos de Uso da Agent UI
- **Prototipagem Rápida**: Validação de conceitos com interface real
- **Demonstrações**: Apresentações profissionais para stakeholders
- **Testes de Usuário**: Coleta de feedback em ambiente controlado
- **MVPs**: Produtos mínimos viáveis com interface completa

---

## Templates de Aplicação

### CopilotKit <> Agno Starter
- **Integração com Next.js**: Templates para frameworks web modernos
- **Desenvolvimento Acelerado**: Estrutura base para aplicações completas
- **Melhores Práticas**: Padrões estabelecidos e otimizados
- **Código Aberto**: Flexibilidade total de customização e deployment

### Benefícios dos Templates
- **Time-to-Market**: Redução significativa do tempo de desenvolvimento
- **Qualidade**: Código testado e seguindo melhores práticas
- **Escalabilidade**: Arquitetura preparada para crescimento
- **Manutenibilidade**: Estrutura organizada e documentada

---

## Flexibilidade de Deployment

### Ambiente Agnóstico
- **Código Aberto**: Execução em qualquer ambiente ou plataforma
- **Sem Vendor Lock-in**: Liberdade total de escolha de infraestrutura
- **Compatibilidade**: Suporte a diferentes provedores de nuvem
- **Controle Total**: Propriedade completa sobre o ambiente de produção

### Opções de Implantação
- **Cloud Providers**: AWS, Google Cloud, Azure, Digital Ocean
- **On-Premises**: Servidores próprios e infraestrutura local
- **Containers**: Docker e Kubernetes para orquestração
- **Serverless**: Funções serverless para cargas específicas

---

## Vantagens Competitivas

### Para Equipes com Recursos Limitados
- **Desenvolvimento Rápido**: Ciclo acelerado de prototipagem e produção
- **Menor Complexidade**: Redução de overhead técnico e operacional
- **Custo-Benefício**: Maximização de recursos com mínimo investimento
- **Foco no Negócio**: Mais tempo para lógica de negócio, menos para infraestrutura

### Para Projetos com Prazos Apertados
- **Implantação Imediata**: Transição rápida de conceito para produção
- **Menos Debugging**: Infraestrutura testada e confiável
- **Iteração Ágil**: Facilidade para ajustes e melhorias contínuas
- **Entrega Consistente**: Previsibilidade no processo de deployment

---

*A abordagem de implantação do Agno representa um diferencial significativo para equipes que precisam de velocidade, simplicidade e flexibilidade na transição de protótipos para aplicações de produção.*`,
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
        title="Opções de Implantação" 
        subtitle="Deployment do Agno"
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
      title="Opções de Implantação" 
      subtitle="Deployment do Agno"
    >
      {content && content.bodyMD && (
        <div className="prose prose-lg max-w-none text-gray-800 dark:text-gray-200">
          <ReactMarkdown
            components={{
              h1: ({children}) => <h1 className="text-3xl font-bold mb-6 gradient-text">{children}</h1>,
              h2: ({children}) => <h2 className="text-2xl font-bold mt-8 mb-4 gradient-text border-l-4 border-blue-500 pl-4">{children}</h2>,
              h3: ({children}) => <h3 className="text-xl font-semibold mt-8 mb-3 text-blue-600 dark:text-blue-400">{children}</h3>,
              strong: ({children}) => <strong className="font-bold text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/30 px-1 py-0.5 rounded">{children}</strong>,
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

export default DeploymentPage;