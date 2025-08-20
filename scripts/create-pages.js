import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Template para páginas simples
const pageTemplate = (componentName, title, subtitle) => `import React from 'react';
import PageTemplate from '../../components/PageTemplate';

const ${componentName}: React.FC = () => {
  return (
    <PageTemplate 
      title="${title}" 
      subtitle="${subtitle}"
    />
  );
};

export default ${componentName};`;

// Páginas LangChain
const langchainPages = [
  ['MemoryPage', 'Gerenciamento de Memória', 'Estratégias de memória e gerenciamento de contexto no LangChain'],
  ['RAGPage', 'Implementação de RAG', 'Retrieval Augmented Generation e busca semântica'],
  ['EcosystemPage', 'Ecossistema e Integrações', 'Plugins, integrações e ferramentas do ecossistema LangChain'],
  ['ObservabilityPage', 'Observabilidade e Avaliação', 'Monitoramento, debugging e avaliação de performance'],
  ['PerformancePage', 'Desempenho e Escalabilidade', 'Análise de performance e estratégias de escalonamento'],
  ['DeploymentPage', 'Opções de Implantação', 'Estratégias e opções para deployment em produção'],
  ['MaturityPage', 'Maturidade, Comunidade e Licenciamento', 'Análise da maturidade da biblioteca e comunidade']
];

// Páginas Agno
const agnoPages = [
  ['AgnoPage', 'Agno', 'Análise completa da biblioteca Agno para desenvolvimento eficiente de IA'],
  ['PhilosophyPage', 'Filosofia de Design e Arquitetura', 'Princípios fundamentais e filosofia de design do Agno'],
  ['SimplicityPage', 'Simplicidade, Velocidade e Agnosticismo', 'Foco em simplicidade e performance otimizada'],
  ['AgentsPage', 'Agentes e Ferramentas', 'Sistema de agentes e ferramentas do Agno'],
  ['MemoryPage', 'Gerenciamento de Memória', 'Estratégias de memória no Agno'],
  ['RAGPage', 'Implementação de RAG', 'RAG no Agno'],
  ['EcosystemPage', 'Ecossistema e Integrações', 'Ecossistema do Agno'],
  ['ObservabilityPage', 'Observabilidade e Avaliação', 'Observabilidade no Agno'],
  ['PerformancePage', 'Desempenho e Escalabilidade', 'Performance do Agno'],
  ['DeploymentPage', 'Opções de Implantação', 'Deployment do Agno'],
  ['MaturityPage', 'Maturidade e Comunidade', 'Maturidade do Agno']
];

// Páginas de Comparação
const comparisonPages = [
  ['ComparisonPage', 'Análise Comparativa Detalhada', 'Comparação abrangente entre LangChain e Agno'],
  ['FeaturesPage', 'Comparativo de Recursos Essenciais', 'Análise detalhada dos recursos principais'],
  ['BenchmarksPage', 'Benchmarks de Desempenho', 'Testes de performance e benchmarks'],
  ['UseCasesPage', 'Casos de Uso Recomendados', 'Cenários ideais para cada biblioteca']
];

// Páginas de Diferenças  
const differencesPages = [
  ['DifferencesPage', 'Principais Diferenças', 'Análise das diferenças fundamentais entre as bibliotecas'],
  ['PhilosophyPage', 'Filosofia de Design', 'Diferenças na filosofia e abordagem de design'],
  ['OrchestrationPage', 'Abordagens de Orquestração', 'Diferentes estratégias de orquestração'],
  ['PerformancePage', 'Performance em Produção', 'Comparação de performance em cenários reais'],
  ['EcosystemPage', 'Robustez do Ecossistema', 'Análise dos ecossistemas e suporte'],
  ['MultimodalPage', 'Capacidades Multimodais', 'Suporte a modalidades múltiplas']
];

// Função para criar arquivos
function createPages(pages, directory, routePath) {
  pages.forEach(([componentName, title, subtitle]) => {
    const content = pageTemplate(componentName, title, subtitle);
    const filePath = path.join(__dirname, '..', 'src', 'routes', directory, `${componentName}.tsx`);
    
    // Criar diretório se não existir
    const dir = path.dirname(filePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    
    fs.writeFileSync(filePath, content);
    console.log(`Created: ${filePath}`);
  });
}

// Criar todas as páginas
createPages(langchainPages, 'langchain');
createPages(agnoPages, 'agno');
createPages(comparisonPages, 'comparison');
createPages(differencesPages, 'differences');

// Páginas principais
const mainPages = [
  ['AdminPage', 'Painel Administrativo', 'Gerenciamento de conteúdo e configurações'],
  ['RecommendationsPage', 'Recomendações e Considerações', 'Guia para escolha da biblioteca ideal']
];

mainPages.forEach(([componentName, title, subtitle]) => {
  const content = pageTemplate(componentName, title, subtitle).replace('../../components/PageTemplate', '../components/PageTemplate');
  const filePath = path.join(__dirname, '..', 'src', 'routes', `${componentName}.tsx`);
  fs.writeFileSync(filePath, content);
  console.log(`Created: ${filePath}`);
});

console.log('All pages created successfully!');
