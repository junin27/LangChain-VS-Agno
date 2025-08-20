import React, { useState } from 'react';
import RadarChartComponent from '../../components/charts/RadarChart';
import BarChartComponent from '../../components/charts/BarChart';

interface ComparisonData {
  caracteristica: string;
  langchain: string;
  agno: string;
  vantagem: 'langchain' | 'agno' | 'empate';
  percentual: number;
  observacoes: string;
}

const comparisonData: ComparisonData[] = [
  {
    caracteristica: "Filosofia de Design",
    langchain: "Abrangente, modular, ecossistema completo, abstração para o código Python",
    agno: "Simplicidade, performance, minimalismo, 'Python puro' e Engenharia de Software",
    vantagem: "agno",
    percentual: 15,
    observacoes: "Agno prioriza simplicidade e performance sobre abrangência"
  },
  {
    caracteristica: "Orquestração de Agentes",
    langchain: "LangGraph (grafos, estado, execução durável, human-in-the-loop, memory)",
    agno: "Construção Python padrão (loops, condicionais), incluindo de agentes aninhados",
    vantagem: "langchain",
    percentual: 25,
    observacoes: "LangGraph oferece recursos mais avançados para orquestração complexa"
  },
  {
    caracteristica: "Suporte Multimodal",
    langchain: "Via integrações de modelos e vector stores que suportam multimodalidade",
    agno: "Nativo texto, imagem, áudio e vídeo (entrada/saída)",
    vantagem: "agno",
    percentual: 30,
    observacoes: "Agno tem suporte nativo mais robusto para múltiplas modalidades"
  },
  {
    caracteristica: "Gerenciamento de Memória",
    langchain: "Outros tipos (semântica, episódica, procedural) com checkpointers e diversos backends (DB-backed, in-memory)",
    agno: "Ainda minore memória de longo prazo e sessão persistente (SQLite, Mem0), memórias personalizadas e estruturadas",
    vantagem: "langchain",
    percentual: 20,
    observacoes: "LangChain oferece mais opções de backends e tipos de memória"
  },
  {
    caracteristica: "Abordagem RAG",
    langchain: "Robusto, vasta gama de loaders, splitters, ampla integração com vector databases, suporte Agentic RAG",
    agno: "Agentic RAG por padrão, integração com +20 vector databases, processo RAG otimizado",
    vantagem: "empate",
    percentual: 0,
    observacoes: "Ambas oferecem implementações robustas com abordagens diferentes"
  },
  {
    caracteristica: "Modelos LLM Suportados",
    langchain: "Centenas de provedores (OpenAI, Anthropic, Google Gemini/VertexAI, AWS Bedrock, Groq, HuggingFace, Mistral, Meta/Llama, etc.)",
    agno: "Variedade de modelo com 6 provedores: OpenAI, Groq, Anthropic, Gemini, Perplexity, etc.)",
    vantagem: "langchain",
    percentual: 40,
    observacoes: "LangChain suporta muito mais provedores de modelos"
  },
  {
    caracteristica: "Ferramentas Integradas",
    langchain: "Vasta coleção (Search, Code Interpreter, Productivity, Database, Finance)",
    agno: "Essenciais (web search, análise financeira, redação estruturada, avaliação de código)",
    vantagem: "langchain",
    percentual: 35,
    observacoes: "LangChain tem um ecossistema muito mais amplo de ferramentas"
  },
  {
    caracteristica: "Observabilidade/Monitoramento",
    langchain: "LangSmith (tracing, métricas, dashboards, OpenTelemetry)",
    agno: "Monitoramento em tempo real (agno.com), depurador embutido, integração LangFuse/OpenTelemetry",
    vantagem: "langchain",
    percentual: 10,
    observacoes: "LangSmith oferece ferramentas mais maduras de observabilidade"
  },
  {
    caracteristica: "Avaliação",
    langchain: "LangSmith (criação de datasets, LLM-as-Judge, métricas)",
    agno: "Capacidades de avaliação (Evals) mencionadas",
    vantagem: "langchain",
    percentual: 30,
    observacoes: "LangChain tem ferramentas de avaliação mais desenvolvidas"
  },
  {
    caracteristica: "Performance (Instanciação/Memória)",
    langchain: "Overhead (~300-400ms no tempo de primeira token, ~75MB de memória base), otimizações (caching, batching)",
    agno: "Instanciação ~2μs (~10.000x mais rápido que LangGraph), Memória ~3.7 KB (~50x mais leve que LangGraph)",
    vantagem: "agno",
    percentual: 95,
    observacoes: "Agno é significativamente mais rápido e eficiente em recursos"
  },
  {
    caracteristica: "Opções de Implantação",
    langchain: "LangGraph Platform (Cloud, Hybrid, Self-Hosted), LangServe (APIs REST, CLI, templates, Docker)",
    agno: "Rotas FastAPI pré-construídas, Agent UI, open-source, templates de aplicação",
    vantagem: "langchain",
    percentual: 20,
    observacoes: "LangChain oferece mais opções de deployment empresarial"
  },
  {
    caracteristica: "Licença",
    langchain: "MIT",
    agno: "MPL-2.0",
    vantagem: "langchain",
    percentual: 5,
    observacoes: "MIT é mais permissiva que MPL-2.0"
  },
  {
    caracteristica: "Maturidade (GitHub)",
    langchain: "114k estrelas, 18.7k forks, 3.7k contribuidores",
    agno: "32k estrelas, 4.1k forks, 266 contribuidores (anteriormente Phidata)",
    vantagem: "langchain",
    percentual: 60,
    observacoes: "LangChain tem uma comunidade muito mais estabelecida"
  }
];

const FeaturesPage: React.FC = () => {
  const [selectedFeature, setSelectedFeature] = useState<string | null>(null);

  const getVantageDisplay = (vantagem: string, percentual: number) => {
    if (vantagem === 'empate') return {
      text: 'Empate',
      color: 'text-gray-600 dark:text-gray-400'
    };
    
    const isLangChain = vantagem === 'langchain';
    const baseColor = isLangChain ? 'text-blue-600 dark:text-blue-400' : 'text-green-600 dark:text-green-400';
    const toolName = isLangChain ? 'LangChain' : 'Agno';
    
    return {
      text: `${toolName} +${percentual}%`,
      color: baseColor
    };
  };



  return (
    <div className="container mx-auto px-8 pb-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="card p-8">
          <h1 className="text-4xl font-bold mb-4 gradient-text">Análise Comparativa Detalhada</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
            Comparação abrangente entre LangChain e Agno baseada em recursos essenciais, 
            performance e características técnicas fundamentais.
          </p>
          
          <div className="flex items-center space-x-4 text-sm">
            <div className="flex items-center space-x-1">
              <span className="w-3 h-3 bg-blue-500 rounded"></span>
              <span>LangChain</span>
            </div>
            <div className="flex items-center space-x-1">
              <span className="w-3 h-3 bg-green-500 rounded"></span>
              <span>Agno</span>
            </div>
            <div className="flex items-center space-x-1">
              <span className="w-3 h-3 bg-gray-400 rounded"></span>
              <span>Empate</span>
            </div>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="card-hover">
            <RadarChartComponent />
          </div>
          <div className="card-hover">
            <BarChartComponent />
          </div>
        </div>

        {/* Detailed Comparison Table */}
        <div className="card p-6">
          <h2 className="text-2xl font-bold mb-6 gradient-text">Tabela Comparativa Detalhada</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-200 dark:border-gray-700">
                  <th className="text-left p-4 font-semibold text-gray-900 dark:text-gray-100">Característica</th>
                  <th className="text-left p-4 font-semibold text-blue-700 dark:text-blue-300">LangChain</th>
                  <th className="text-left p-4 font-semibold text-green-700 dark:text-green-300">Agno</th>
                  <th className="text-center p-4 font-semibold text-gray-900 dark:text-gray-100">Diferença</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((item, index) => (
                  <tr 
                    key={index}
                    className={`border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors cursor-pointer ${
                      selectedFeature === item.caracteristica ? 'bg-blue-50 dark:bg-blue-900/20' : ''
                    }`}
                    onClick={() => setSelectedFeature(selectedFeature === item.caracteristica ? null : item.caracteristica)}
                  >
                    <td className="p-4 font-medium text-gray-900 dark:text-gray-100">
                      {item.caracteristica}
                    </td>
                    <td className="p-4 text-sm text-gray-700 dark:text-gray-300 max-w-xs">
                      <div className="truncate" title={item.langchain}>
                        {item.langchain}
                      </div>
                    </td>
                    <td className="p-4 text-sm text-gray-700 dark:text-gray-300 max-w-xs">
                      <div className="truncate" title={item.agno}>
                        {item.agno}
                      </div>
                    </td>
                    <td className={`p-4 text-center font-bold ${getVantageDisplay(item.vantagem, item.percentual).color}`}>
                      {getVantageDisplay(item.vantagem, item.percentual).text}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Feature Details */}
        {selectedFeature && (
          <div className="card p-6">
            <h3 className="text-xl font-bold mb-4 gradient-text">
              Detalhes: {selectedFeature}
            </h3>
            {(() => {
              const feature = comparisonData.find(item => item.caracteristica === selectedFeature);
              if (!feature) return null;
              
              return (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <h4 className="font-semibold text-blue-700 dark:text-blue-300">LangChain</h4>
                      <p className="text-sm text-gray-700 dark:text-gray-300">{feature.langchain}</p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-green-700 dark:text-green-300">Agno</h4>
                      <p className="text-sm text-gray-700 dark:text-gray-300">{feature.agno}</p>
                    </div>
                  </div>
                  
                  <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded-lg">
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Observações</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{feature.observacoes}</p>
                  </div>
                  
                  <div className="flex items-center justify-center mt-4">
                    <span className={`text-lg font-bold ${getVantageDisplay(feature.vantagem, feature.percentual).color}`}>
                      {getVantageDisplay(feature.vantagem, feature.percentual).text}
                    </span>
                  </div>
                </div>
              );
            })()}
          </div>
        )}

        {/* Summary Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card p-6 text-center">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              {comparisonData.filter(item => item.vantagem === 'langchain').length}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Vantagens LangChain</div>
          </div>
          
          <div className="card p-6 text-center">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
              {comparisonData.filter(item => item.vantagem === 'agno').length}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Vantagens Agno</div>
          </div>
          
          <div className="card p-6 text-center">
            <div className="text-3xl font-bold text-gray-600 dark:text-gray-400 mb-2">
              {comparisonData.filter(item => item.vantagem === 'empate').length}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Empates Técnicos</div>
          </div>
        </div>


      </div>
    </div>
  );
};

export default FeaturesPage;