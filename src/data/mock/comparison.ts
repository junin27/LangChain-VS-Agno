import type { FeatureComparisonRow, ScoreByCriterion } from '../../types/content';

export const mockComparisons: FeatureComparisonRow[] = [
  {
    criterion: "Arquitetura",
    langchain: "suportado",
    agno: "suportado",
    notes: "Ambas as bibliotecas oferecem arquiteturas modulares robustas"
  },
  {
    criterion: "RAG (Retrieval Augmented Generation)",
    langchain: "suportado",
    agno: "suportado",
    notes: "Implementações nativas com diferentes abordagens de otimização"
  },
  {
    criterion: "Agentes e Ferramentas",
    langchain: "suportado",
    agno: "suportado",
    notes: "LangChain tem ecossistema mais amplo, Agno foca em simplicidade"
  },
  {
    criterion: "Gerenciamento de Memória",
    langchain: "suportado",
    agno: "parcial",
    notes: "LangChain oferece múltiplas estratégias, Agno está em desenvolvimento"
  },
  {
    criterion: "Observabilidade",
    langchain: "suportado",
    agno: "parcial",
    notes: "LangChain tem LangSmith, Agno tem observabilidade básica"
  },
  {
    criterion: "Multimodal",
    langchain: "plugin",
    agno: "suportado",
    notes: "Agno tem suporte nativo, LangChain requer plugins"
  },
  {
    criterion: "Velocidade",
    langchain: "parcial",
    agno: "suportado",
    notes: "Agno otimizado para performance, LangChain tem overhead maior"
  },
  {
    criterion: "Facilidade de Uso",
    langchain: "parcial",
    agno: "suportado",
    notes: "Agno prioriza simplicidade, LangChain tem curva de aprendizado maior"
  },
  {
    criterion: "Ecossistema",
    langchain: "suportado",
    agno: "desconhecido",
    notes: "LangChain tem vasto ecossistema, Agno está crescendo"
  },
  {
    criterion: "Documentação",
    langchain: "suportado",
    agno: "parcial",
    notes: "LangChain tem documentação extensa, Agno está melhorando"
  }
];

export const mockScores: ScoreByCriterion[] = [
  { criterion: "Filosofia", langchain: 7.5, agno: 8.5 },
  { criterion: "Orquestração", langchain: 9.0, agno: 7.5 },
  { criterion: "Multimodal", langchain: 6.5, agno: 9.0 },
  { criterion: "Memória", langchain: 8.5, agno: 7.0 },
  { criterion: "RAG", langchain: 8.5, agno: 8.5 },
  { criterion: "Modelos LLM", langchain: 9.5, agno: 7.0 },
  { criterion: "Ferramentas", langchain: 9.0, agno: 6.5 },
  { criterion: "Observabilidade", langchain: 8.5, agno: 7.5 },
  { criterion: "Avaliação", langchain: 8.5, agno: 6.5 },
  { criterion: "Performance", langchain: 4.0, agno: 9.8 },
  { criterion: "Implantação", langchain: 8.5, agno: 7.0 },
  { criterion: "Maturidade", langchain: 9.5, agno: 6.5 }
];

// TODO: inserir dados reais de comparação aqui
