import type { NavItem } from '../types/content';

export const navigationItems: NavItem[] = [
  {
    id: 'home',
    title: 'Início',
    path: '/'
  },
  {
    id: 'langchain',
    title: 'LangChain',
    path: '/langchain',
    children: [
      {
        id: 'langchain-architecture',
        title: 'Arquitetura e Componentes',
        path: '/langchain/arquitetura'
      },
      {
        id: 'langchain-agents',
        title: 'Agentes e Ferramentas',
        path: '/langchain/agentes'
      },
      {
        id: 'langchain-memory',
        title: 'Gerenciamento de Memória',
        path: '/langchain/memoria'
      },
      {
        id: 'langchain-rag',
        title: 'Implementação de RAG',
        path: '/langchain/rag'
      },
      {
        id: 'langchain-ecosystem',
        title: 'Ecossistema e Integrações',
        path: '/langchain/ecossistema'
      },
      {
        id: 'langchain-observability',
        title: 'Observabilidade e Avaliação',
        path: '/langchain/observabilidade'
      },
      {
        id: 'langchain-performance',
        title: 'Desempenho e Escalabilidade',
        path: '/langchain/desempenho'
      },
      {
        id: 'langchain-deployment',
        title: 'Opções de Implantação',
        path: '/langchain/implantacao'
      },
      {
        id: 'langchain-maturity',
        title: 'Maturidade e Comunidade',
        path: '/langchain/maturidade'
      }
    ]
  },
  {
    id: 'agno',
    title: 'Agno',
    path: '/agno',
    children: [
      {
        id: 'agno-philosophy',
        title: 'Filosofia de Design',
        path: '/agno/filosofia'
      },
      {
        id: 'agno-simplicity',
        title: 'Simplicidade e Velocidade',
        path: '/agno/simplicidade'
      },
      {
        id: 'agno-agents',
        title: 'Agentes e Ferramentas',
        path: '/agno/agentes'
      },
      {
        id: 'agno-memory',
        title: 'Gerenciamento de Memória',
        path: '/agno/memoria'
      },
      {
        id: 'agno-rag',
        title: 'Implementação de RAG',
        path: '/agno/rag'
      },
      {
        id: 'agno-ecosystem',
        title: 'Ecossistema e Integrações',
        path: '/agno/ecossistema'
      },
      {
        id: 'agno-observability',
        title: 'Observabilidade e Avaliação',
        path: '/agno/observabilidade'
      },
      {
        id: 'agno-performance',
        title: 'Desempenho e Escalabilidade',
        path: '/agno/desempenho'
      },
      {
        id: 'agno-deployment',
        title: 'Opções de Implantação',
        path: '/agno/implantacao'
      },
      {
        id: 'agno-maturity',
        title: 'Maturidade e Comunidade',
        path: '/agno/maturidade'
      }
    ]
  },
  {
    id: 'comparison',
    title: 'Análise Comparativa',
    path: '/comparacao',
    children: [
      {
        id: 'comparison-features',
        title: 'Recursos Essenciais',
        path: '/comparacao/recursos'
      },
      {
        id: 'comparison-benchmarks',
        title: 'Benchmarks de Desempenho',
        path: '/comparacao/benchmarks'
      },
      {
        id: 'comparison-use-cases',
        title: 'Casos de Uso',
        path: '/comparacao/casos-de-uso'
      }
    ]
  },
  {
    id: 'differences',
    title: 'Principais Diferenças',
    path: '/diferencas',
    children: [
      {
        id: 'differences-philosophy',
        title: 'Filosofia de Design',
        path: '/diferencas/filosofia'
      },
      {
        id: 'differences-orchestration',
        title: 'Orquestração',
        path: '/diferencas/orquestracao'
      },
      {
        id: 'differences-performance',
        title: 'Performance em Produção',
        path: '/diferencas/performance'
      },
      {
        id: 'differences-ecosystem',
        title: 'Robustez do Ecossistema',
        path: '/diferencas/ecossistema'
      },
      {
        id: 'differences-multimodal',
        title: 'Capacidades Multimodais',
        path: '/diferencas/multimodal'
      }
    ]
  },
  {
    id: 'recommendations',
    title: 'Recomendações',
    path: '/recomendacoes'
  }
];
