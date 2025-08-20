import React, { useState } from 'react';
import UseCaseRadarChart from '../../components/charts/UseCaseRadarChart';
import UseCaseBarChart from '../../components/charts/UseCaseBarChart';

interface UseCaseData {
  cenario: string;
  langchainRecomendado: string;
  agnoRecomendado: string;
  vantagem: 'agno' | 'langchain' | 'empate';
  justificativa: string;
}

const useCaseData: UseCaseData[] = [
  {
    cenario: "Agentes de Conversação Complexos",
    langchainRecomendado: "Lógica de fluxo complexa, estados duráveis, human-in-the-loop, integração visual, controle granular sobre interações.",
    agnoRecomendado: "Lógica mais linear, delegação entre agentes mais simples, foco na composição de equipes.",
    vantagem: "langchain",
    justificativa: "LangChain oferece melhor suporte para fluxos complexos e estados duráveis"
  },
  {
    cenario: "Aplicações de RAG de Alta Performance",
    langchainRecomendado: "Flexibilidade na engenharia de dados, integração com infraestruturas legadas, Agentic RAG avançado, ampla gama de loaders e splitters.",
    agnoRecomendado: "Eficiência de recursos, velocidade de inicialização, Agentic RAG intrínseco, otimização para performance.",
    vantagem: "agno",
    justificativa: "Agno oferece melhor performance e eficiência de recursos para RAG"
  },
  {
    cenario: "Prototipagem Rápida",
    langchainRecomendado: "Experimentação com diferentes modelos/ferramentas, construção de MVPs com funcionalidades ricas e ecossistema maduro.",
    agnoRecomendado: "Desenvolvimento rápido de agentes simples a moderados, implantação direta via FastAPI, curva de aprendizado reduzida.",
    vantagem: "agno",
    justificativa: "Agno permite prototipagem mais rápida com menor complexidade"
  },
  {
    cenario: "Sistemas Multi-Agente Colaborativos",
    langchainRecomendado: "Orquestração de grafos complexos, controle granular sobre interações e estados compartilhados.",
    agnoRecomendado: "Composição de equipes de agentes especializados, foco na simplicidade da delegação e comunicação.",
    vantagem: "empate",
    justificativa: "Ambos oferecem abordagens diferentes mas eficazes para sistemas multi-agente"
  },
  {
    cenario: "Aplicações Multimodais",
    langchainRecomendado: "Suporte via integrações de modelos e vector stores que lidam com diferentes modalidades.",
    agnoRecomendado: "Multimodalidade nativa, processamento e geração de conteúdo em diferentes formatos sem hacks.",
    vantagem: "agno",
    justificativa: "Agno oferece suporte nativo para multimodalidade"
  },
  {
    cenario: "Projetos Sensíveis a Custos/Latência",
    langchainRecomendado: "Otimização via caching e batching, LangGraph Platform para escalabilidade e tolerância a falhas.",
    agnoRecomendado: "Eficiência inerente, menor pegada de memória e tempo de instanciação, otimização de custos de computação.",
    vantagem: "agno",
    justificativa: "Agno oferece melhor eficiência de recursos e menor latência"
  },
  {
    cenario: "Projetos com Requisitos de Observabilidade/Avaliação",
    langchainRecomendado: "LangSmith para depuração, tracing, métricas, dashboards e avaliação LLM-as-a-Judge, visibilidade total do comportamento do agente.",
    agnoRecomendado: "Monitoramento em agno.com, depurador embutido, integração Langfuse/OpenTelemetry para rastreamento de operações.",
    vantagem: "langchain",
    justificativa: "LangChain oferece ferramentas mais maduras para observabilidade"
  }
];

// Dados para gráficos de radar e barras
const radarData = {
  labels: ['Complexidade', 'Performance', 'Prototipagem', 'Multimodalidade', 'Observabilidade'],
  datasets: [
    {
      label: 'Agno',
      data: [70, 95, 90, 95, 75],
      backgroundColor: 'rgba(34, 197, 94, 0.2)',
      borderColor: 'rgba(34, 197, 94, 1)',
      borderWidth: 2,
      pointBackgroundColor: 'rgba(34, 197, 94, 1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(34, 197, 94, 1)'
    },
    {
      label: 'LangChain',
      data: [95, 70, 75, 60, 90],
      backgroundColor: 'rgba(59, 130, 246, 0.2)',
      borderColor: 'rgba(59, 130, 246, 1)',
      borderWidth: 2,
      pointBackgroundColor: 'rgba(59, 130, 246, 1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(59, 130, 246, 1)'
    }
  ]
};

const barData = {
  labels: ['Agentes Complexos', 'RAG Performance', 'Prototipagem', 'Multi-Agente', 'Multimodal', 'Custos/Latência', 'Observabilidade'],
  datasets: [
    {
      label: 'Adequação Agno (%)',
      data: [70, 90, 95, 85, 95, 95, 75],
      backgroundColor: 'rgba(34, 197, 94, 0.8)',
      borderColor: 'rgba(34, 197, 94, 1)',
      borderWidth: 1
    },
    {
      label: 'Adequação LangChain (%)',
      data: [95, 75, 80, 85, 60, 70, 90],
      backgroundColor: 'rgba(59, 130, 246, 0.8)',
      borderColor: 'rgba(59, 130, 246, 1)',
      borderWidth: 1
    }
  ]
};

const UseCasesPage: React.FC = () => {
  const [selectedUseCase, setSelectedUseCase] = useState<string | null>(null);

  const getRecommendationDisplay = (vantagem: string) => {
    switch (vantagem) {
      case 'agno':
        return {
          text: 'Agno Recomendado',
          color: 'text-green-600 dark:text-green-400',
          bgColor: 'bg-green-50 dark:bg-green-900/20'
        };
      case 'langchain':
        return {
          text: 'LangChain Recomendado',
          color: 'text-blue-600 dark:text-blue-400',
          bgColor: 'bg-blue-50 dark:bg-blue-900/20'
        };
      case 'empate':
        return {
          text: 'Ambos Adequados',
          color: 'text-gray-600 dark:text-gray-400',
          bgColor: 'bg-gray-50 dark:bg-gray-900/20'
        };
      default:
        return {
          text: 'Não Definido',
          color: 'text-gray-600 dark:text-gray-400',
          bgColor: 'bg-gray-50 dark:bg-gray-900/20'
        };
    }
  };

  return (
    <div className="container mx-auto px-8 pb-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="card p-8">
          <h1 className="text-4xl font-bold mb-4 gradient-text">Casos de Uso Recomendados</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
            Análise detalhada dos cenários de projeto onde cada framework se destaca, 
            baseada em características técnicas, requisitos de performance e complexidade de implementação.
          </p>
          
          <div className="flex items-center space-x-4 text-sm">
            <div className="flex items-center space-x-1">
              <span className="w-3 h-3 bg-green-500 rounded"></span>
              <span>Agno Recomendado</span>
            </div>
            <div className="flex items-center space-x-1">
              <span className="w-3 h-3 bg-blue-500 rounded"></span>
              <span>LangChain Recomendado</span>
            </div>
            <div className="flex items-center space-x-1">
              <span className="w-3 h-3 bg-gray-400 rounded"></span>
              <span>Ambos Adequados</span>
            </div>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="card-hover">
            <div className="card p-6">
              <UseCaseRadarChart data={radarData} />
            </div>
          </div>
          <div className="card-hover">
            <div className="card p-6">
              <UseCaseBarChart data={barData} />
            </div>
          </div>
        </div>

        {/* Use Cases Table */}
        <div className="card p-6">
          <h2 className="text-2xl font-bold mb-6 gradient-text">Cenários de Projeto Detalhados</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-200 dark:border-gray-700">
                  <th className="text-left p-4 font-semibold text-gray-900 dark:text-gray-100">Cenário de Projeto</th>
                  <th className="text-left p-4 font-semibold text-blue-700 dark:text-blue-300">LangChain Recomendado para</th>
                  <th className="text-left p-4 font-semibold text-green-700 dark:text-green-300">Agno Recomendado para</th>
                  <th className="text-center p-4 font-semibold text-gray-900 dark:text-gray-100">Recomendação</th>
                </tr>
              </thead>
              <tbody>
                {useCaseData.map((item, index) => (
                  <tr 
                    key={index}
                    className={`border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors cursor-pointer ${
                      selectedUseCase === item.cenario ? 'bg-blue-50 dark:bg-blue-900/20' : ''
                    }`}
                    onClick={() => setSelectedUseCase(selectedUseCase === item.cenario ? null : item.cenario)}
                  >
                    <td className="p-4 font-medium text-gray-900 dark:text-gray-100">
                      {item.cenario}
                    </td>
                    <td className="p-4 text-sm text-gray-700 dark:text-gray-300 max-w-xs">
                      <div className="truncate" title={item.langchainRecomendado}>
                        {item.langchainRecomendado}
                      </div>
                    </td>
                    <td className="p-4 text-sm text-gray-700 dark:text-gray-300 max-w-xs">
                      <div className="truncate" title={item.agnoRecomendado}>
                        {item.agnoRecomendado}
                      </div>
                    </td>
                    <td className="p-4 text-center">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        getRecommendationDisplay(item.vantagem).color
                      } ${getRecommendationDisplay(item.vantagem).bgColor}`}>
                        {getRecommendationDisplay(item.vantagem).text}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Use Case Details */}
        {selectedUseCase && (
          <div className="card p-6">
            <h3 className="text-xl font-bold mb-4 gradient-text">
              Detalhes: {selectedUseCase}
            </h3>
            {useCaseData.find(item => item.cenario === selectedUseCase) && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-blue-700 dark:text-blue-300">LangChain Recomendado para</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">{useCaseData.find(item => item.cenario === selectedUseCase)?.langchainRecomendado}</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-green-700 dark:text-green-300">Agno Recomendado para</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">{useCaseData.find(item => item.cenario === selectedUseCase)?.agnoRecomendado}</p>
                  </div>
                </div>
                
                <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Justificativa</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{useCaseData.find(item => item.cenario === selectedUseCase)?.justificativa}</p>
                </div>
                
                <div className="flex items-center justify-center mt-4">
                  <span className={`px-4 py-2 rounded-lg text-lg font-bold ${
                    useCaseData.find(item => item.cenario === selectedUseCase) ? 
                    getRecommendationDisplay(useCaseData.find(item => item.cenario === selectedUseCase)!.vantagem).color + ' ' +
                    getRecommendationDisplay(useCaseData.find(item => item.cenario === selectedUseCase)!.vantagem).bgColor : ''
                  }`}>
                    {useCaseData.find(item => item.cenario === selectedUseCase) ? 
                     getRecommendationDisplay(useCaseData.find(item => item.cenario === selectedUseCase)!.vantagem).text : ''}
                  </span>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Recommendation Summary */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card p-6">
            <h3 className="text-xl font-bold mb-4 gradient-text">Quando Escolher Agno</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span className="text-sm">Projetos com <strong>foco em performance</strong></span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span className="text-sm">Aplicações <strong>multimodais nativas</strong></span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span className="text-sm">Prototipagem <strong>rápida e simples</strong></span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span className="text-sm">Projetos <strong>sensíveis a custos</strong></span>
              </div>
            </div>
          </div>
          
          <div className="card p-6">
            <h3 className="text-xl font-bold mb-4 gradient-text">Quando Escolher LangChain</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                <span className="text-sm">Fluxos de conversação <strong>complexos</strong></span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                <span className="text-sm">Necessidade de <strong>observabilidade avançada</strong></span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                <span className="text-sm">Integração com <strong>infraestrutura legada</strong></span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                <span className="text-sm">Ecossistema <strong>maduro e extenso</strong></span>
              </div>
            </div>
          </div>
        </div>

        {/* Summary Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card p-6 text-center">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
              {useCaseData.filter(item => item.vantagem === 'agno').length}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Cenários Agno</div>
          </div>
          
          <div className="card p-6 text-center">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              {useCaseData.filter(item => item.vantagem === 'langchain').length}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Cenários LangChain</div>
          </div>
          
          <div className="card p-6 text-center">
            <div className="text-3xl font-bold text-gray-600 dark:text-gray-400 mb-2">
              {useCaseData.filter(item => item.vantagem === 'empate').length}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Cenários Equilibrados</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UseCasesPage;