import React, { useState } from 'react';
import BenchmarkRadarChart from '../../components/charts/BenchmarkRadarChart';
import BenchmarkBarChart from '../../components/charts/BenchmarkBarChart';

interface BenchmarkData {
  metrica: string;
  agno: string;
  langraph: string;
  fatorDiferenca: string;
  vantagem: 'agno' | 'langraph' | 'empate';
  percentual: number;
  observacoes: string;
}

const benchmarkData: BenchmarkData[] = [
  {
    metrica: "Tempo de Instanciação do Agente",
    agno: "~2μs",
    langraph: "~20ms",
    fatorDiferenca: "~10.000x mais rápido",
    vantagem: "agno",
    percentual: 99.99,
    observacoes: "Testado em Apple M4 MacBook Pro, 1000 execuções, isolamento de código."
  },
  {
    metrica: "Uso de Memória por Agente",
    agno: "~3.75 KiB",
    langraph: "~137 KiB",
    fatorDiferenca: "~50x mais leve",
    vantagem: "agno",
    percentual: 97.3,
    observacoes: "Testado em Apple M4 MacBook Pro, 1000 execuções, profiling com tracemalloc."
  },
  {
    metrica: "Latência (Tempo de Primeira Token)",
    agno: "Não comparável diretamente",
    langraph: "~300-400ms de overhead adicional",
    fatorDiferenca: "N/A",
    vantagem: "agno",
    percentual: 0,
    observacoes: "Comparação de LangChain vs. API direta do LLM."
  },
  {
    metrica: "Memória Base (Framework)",
    agno: "Não comparável diretamente",
    langraph: "~25MB de overhead adicional",
    fatorDiferenca: "N/A",
    vantagem: "agno",
    percentual: 0,
    observacoes: "Comparação de LangChain vs. API direta do LLM."
  }
];

// Dados para gráficos de radar e barras
const radarData = {
  labels: ['Velocidade', 'Eficiência de Memória', 'Simplicidade', 'Performance', 'Escalabilidade'],
  datasets: [
    {
      label: 'Agno',
      data: [95, 97, 90, 95, 88],
      backgroundColor: 'rgba(34, 197, 94, 0.2)',
      borderColor: 'rgba(34, 197, 94, 1)',
      borderWidth: 2,
      pointBackgroundColor: 'rgba(34, 197, 94, 1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(34, 197, 94, 1)'
    },
    {
      label: 'LangGraph',
      data: [25, 30, 60, 45, 70],
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
  labels: ['Tempo de Instanciação', 'Uso de Memória', 'Latência', 'Overhead Framework'],
  datasets: [
    {
      label: 'Agno (Normalizado)',
      data: [100, 100, 100, 100],
      backgroundColor: 'rgba(34, 197, 94, 0.8)',
      borderColor: 'rgba(34, 197, 94, 1)',
      borderWidth: 1
    },
    {
      label: 'LangGraph (Relativo ao Agno)',
      data: [0.01, 2.7, 25, 15],
      backgroundColor: 'rgba(59, 130, 246, 0.8)',
      borderColor: 'rgba(59, 130, 246, 1)',
      borderWidth: 1
    }
  ]
};

const BenchmarksPage: React.FC = () => {
  const [selectedBenchmark, setSelectedBenchmark] = useState<string | null>(null);

  const getVantageDisplay = (vantagem: string, percentual: number, fatorDiferenca: string) => {
    if (vantagem === 'empate') return {
      text: 'Empate',
      color: 'text-gray-600 dark:text-gray-400'
    };
    
    const isAgno = vantagem === 'agno';
    const baseColor = isAgno ? 'text-green-600 dark:text-green-400' : 'text-blue-600 dark:text-blue-400';
    const toolName = isAgno ? 'Agno' : 'LangGraph';
    
    if (fatorDiferenca !== 'N/A') {
      return {
        text: `${toolName} ${fatorDiferenca}`,
        color: baseColor
      };
    }
    
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
          <h1 className="text-4xl font-bold mb-4 gradient-text">Benchmarks de Desempenho</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
            Comparação detalhada de performance entre Agno e LangGraph baseada em métricas 
            objetivas de velocidade, uso de memória e eficiência computacional.
          </p>
          
          <div className="flex items-center space-x-4 text-sm">
            <div className="flex items-center space-x-1">
              <span className="w-3 h-3 bg-green-500 rounded"></span>
              <span>Agno</span>
            </div>
            <div className="flex items-center space-x-1">
              <span className="w-3 h-3 bg-blue-500 rounded"></span>
              <span>LangGraph</span>
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
            <div className="card p-6">
              <BenchmarkRadarChart data={radarData} />
            </div>
          </div>
          <div className="card-hover">
            <div className="card p-6">
              <BenchmarkBarChart data={barData} />
            </div>
          </div>
        </div>

        {/* Detailed Benchmark Table */}
        <div className="card p-6">
          <h2 className="text-2xl font-bold mb-6 gradient-text">Tabela de Benchmarks Detalhada</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-200 dark:border-gray-700">
                  <th className="text-left p-4 font-semibold text-gray-900 dark:text-gray-100">Métrica</th>
                  <th className="text-left p-4 font-semibold text-green-700 dark:text-green-300">Agno</th>
                  <th className="text-left p-4 font-semibold text-blue-700 dark:text-blue-300">LangGraph (LangChain)</th>
                  <th className="text-center p-4 font-semibold text-gray-900 dark:text-gray-100">Fator de Diferença</th>
                </tr>
              </thead>
              <tbody>
                {benchmarkData.map((item, index) => (
                  <tr 
                    key={index}
                    className={`border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors cursor-pointer ${
                      selectedBenchmark === item.metrica ? 'bg-blue-50 dark:bg-blue-900/20' : ''
                    }`}
                    onClick={() => setSelectedBenchmark(selectedBenchmark === item.metrica ? null : item.metrica)}
                  >
                    <td className="p-4 font-medium text-gray-900 dark:text-gray-100">
                      {item.metrica}
                    </td>
                    <td className="p-4 text-sm text-gray-700 dark:text-gray-300 max-w-xs">
                      <div className="truncate" title={item.agno}>
                        {item.agno}
                      </div>
                    </td>
                    <td className="p-4 text-sm text-gray-700 dark:text-gray-300 max-w-xs">
                      <div className="truncate" title={item.langraph}>
                        {item.langraph}
                      </div>
                    </td>
                    <td className={`p-4 text-center font-bold ${getVantageDisplay(item.vantagem, item.percentual, item.fatorDiferenca).color}`}>
                      {getVantageDisplay(item.vantagem, item.percentual, item.fatorDiferenca).text}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Benchmark Details */}
        {selectedBenchmark && (
          <div className="card p-6">
            <h3 className="text-xl font-bold mb-4 gradient-text">
              Detalhes: {selectedBenchmark}
            </h3>
            {benchmarkData.find(item => item.metrica === selectedBenchmark) && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-green-700 dark:text-green-300">Agno</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">{benchmarkData.find(item => item.metrica === selectedBenchmark)?.agno}</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-blue-700 dark:text-blue-300">LangGraph (LangChain)</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">{benchmarkData.find(item => item.metrica === selectedBenchmark)?.langraph}</p>
                  </div>
                </div>
                
                <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Observações</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{benchmarkData.find(item => item.metrica === selectedBenchmark)?.observacoes}</p>
                </div>
                
                <div className="flex items-center justify-center mt-4">
                  <span className={`text-lg font-bold ${benchmarkData.find(item => item.metrica === selectedBenchmark) ? getVantageDisplay(benchmarkData.find(item => item.metrica === selectedBenchmark)!.vantagem, benchmarkData.find(item => item.metrica === selectedBenchmark)!.percentual, benchmarkData.find(item => item.metrica === selectedBenchmark)!.fatorDiferenca).color : ''}`}>
                    {benchmarkData.find(item => item.metrica === selectedBenchmark) ? getVantageDisplay(benchmarkData.find(item => item.metrica === selectedBenchmark)!.vantagem, benchmarkData.find(item => item.metrica === selectedBenchmark)!.percentual, benchmarkData.find(item => item.metrica === selectedBenchmark)!.fatorDiferenca).text : ''}
                  </span>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Performance Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card p-6">
            <h3 className="text-xl font-bold mb-4 gradient-text">Destaques de Performance</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span className="text-sm">Agno é <strong>10.000x mais rápido</strong> na instanciação</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span className="text-sm">Agno usa <strong>50x menos memória</strong> por agente</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span className="text-sm">Sem overhead adicional de latência</span>
              </div>
            </div>
          </div>
          
          <div className="card p-6">
            <h3 className="text-xl font-bold mb-4 gradient-text">Ambiente de Teste</h3>
            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <p><strong>Hardware:</strong> Apple M4 MacBook Pro</p>
              <p><strong>Execuções:</strong> 1.000 iterações</p>
              <p><strong>Metodologia:</strong> Isolamento de código</p>
              <p><strong>Profiling:</strong> tracemalloc para memória</p>
            </div>
          </div>
        </div>

        {/* Summary Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card p-6 text-center">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
              {benchmarkData.filter(item => item.vantagem === 'agno').length}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Vantagens Agno</div>
          </div>
          
          <div className="card p-6 text-center">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              {benchmarkData.filter(item => item.vantagem === 'langraph').length}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Vantagens LangGraph</div>
          </div>
          
          <div className="card p-6 text-center">
            <div className="text-3xl font-bold text-gray-600 dark:text-gray-400 mb-2">
              {benchmarkData.filter(item => item.vantagem === 'empate').length}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Empates Técnicos</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenchmarksPage;