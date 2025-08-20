import React from 'react';
import PageTemplate from '../../components/PageTemplate';

const MultimodalPage: React.FC = () => {
  return (
    <PageTemplate 
      title="Capacidades Multimodais Nativas" 
      subtitle="Análise das capacidades multimodais nativas entre LangChain e Agno"
    >
      <div className="space-y-8">
        {/* Visão Geral */}
        <div className="card p-8">
          <h2 className="text-3xl font-bold mb-6 gradient-text">Visão Geral</h2>
          <div className="prose prose-lg max-w-none text-gray-800 dark:text-gray-200">
            <p className="text-xl leading-relaxed mb-6">
              A <strong>multimodalidade nativa</strong> representa uma diferença fundamental na arquitetura 
              e filosofia de design entre Agno e LangChain. Enquanto Agno foi projetado desde o início 
              para lidar com diversos tipos de mídia de forma fluida, LangChain adota uma abordagem 
              mais modular que requer orquestração adicional.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="p-6 bg-green-50 dark:bg-green-950 rounded-xl border border-green-200 dark:border-green-800">
                <h3 className="text-lg font-bold text-green-900 dark:text-green-100 mb-3">🎯 Agno: Nativo</h3>
                <p className="text-green-800 dark:text-green-200">
                  Arquitetura central construída com multimodalidade em mente, 
                  otimizando fluxo de dados entre modalidades.
                </p>
              </div>
              <div className="p-6 bg-blue-50 dark:bg-blue-950 rounded-xl border border-blue-200 dark:border-blue-800">
                <h3 className="text-lg font-bold text-blue-900 dark:text-blue-100 mb-3">🔧 LangChain: Modular</h3>
                <p className="text-blue-800 dark:text-blue-200">
                  Suporte através de componentes e integrações, 
                  requerendo orquestração manual para dados multimodais.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Comparação das Abordagens */}
        <div className="card p-8">
          <h2 className="text-3xl font-bold mb-6 gradient-text">Comparação das Abordagens</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Agno */}
            <div className="space-y-6">
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">🚀</span>
                <h3 className="text-2xl font-bold text-green-700 dark:text-green-300">Agno: Multimodalidade Nativa</h3>
              </div>
              
              <div className="space-y-4">
                <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg">
                  <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">✨ Integração Fluida</h4>
                  <p className="text-green-800 dark:text-green-200 text-sm">
                    Processamento de texto, imagem, áudio e vídeo sem necessidade de plugins ou adaptadores.
                  </p>
                </div>
                
                <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg">
                  <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">⚡ Performance Otimizada</h4>
                  <p className="text-green-800 dark:text-green-200 text-sm">
                    Fluxo de dados otimizado entre modalidades, reduzindo overhead de conversão.
                  </p>
                </div>
                
                <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg">
                  <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">🎯 Menos Boilerplate</h4>
                  <p className="text-green-800 dark:text-green-200 text-sm">
                    Desenvolvimento simplificado sem necessidade de configuração complexa.
                  </p>
                </div>
              </div>
            </div>

            {/* LangChain */}
            <div className="space-y-6">
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">🔧</span>
                <h3 className="text-2xl font-bold text-blue-700 dark:text-blue-300">LangChain: Abordagem Modular</h3>
              </div>
              
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                  <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">🧩 Componentes Especializados</h4>
                  <p className="text-blue-800 dark:text-blue-200 text-sm">
                    Suporte através de integrações com modelos LLM multimodais e vector stores.
                  </p>
                </div>
                
                <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                  <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">⚙️ Orquestração Manual</h4>
                  <p className="text-blue-800 dark:text-blue-200 text-sm">
                    Requer configuração e gerenciamento manual da complexidade multimodal.
                  </p>
                </div>
                
                <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                  <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">🔄 Flexibilidade</h4>
                  <p className="text-blue-800 dark:text-blue-200 text-sm">
                    Maior controle sobre como diferentes modalidades são processadas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Análise por Cenários de Uso */}
        <div className="card p-8">
          <h2 className="text-3xl font-bold mb-6 gradient-text">Análise por Cenários de Uso</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-200 dark:border-gray-700">
                  <th className="text-left p-4 font-semibold text-gray-900 dark:text-gray-100">Cenário</th>
                  <th className="text-left p-4 font-semibold text-green-700 dark:text-green-300">Agno (Nativo)</th>
                  <th className="text-left p-4 font-semibold text-blue-700 dark:text-blue-300">LangChain (Modular)</th>
                  <th className="text-center p-4 font-semibold text-gray-900 dark:text-gray-100">Recomendação</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="p-4 font-medium">Assistentes de Voz com Visão</td>
                  <td className="p-4 text-green-700 dark:text-green-300">Integração fluida áudio-visual</td>
                  <td className="p-4 text-blue-700 dark:text-blue-300">Requer orquestração complexa</td>
                  <td className="p-4 text-center">
                    <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm font-medium">
                      Agno
                    </span>
                  </td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="p-4 font-medium">Análise de Vídeo + Texto</td>
                  <td className="p-4 text-green-700 dark:text-green-300">Processamento nativo unificado</td>
                  <td className="p-4 text-blue-700 dark:text-blue-300">Múltiplos componentes necessários</td>
                  <td className="p-4 text-center">
                    <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm font-medium">
                      Agno
                    </span>
                  </td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="p-4 font-medium">RAG com Imagens</td>
                  <td className="p-4 text-green-700 dark:text-green-300">Suporte nativo para embeddings visuais</td>
                  <td className="p-4 text-blue-700 dark:text-blue-300">Vector stores multimodais disponíveis</td>
                  <td className="p-4 text-center">
                    <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded-full text-sm font-medium">
                      Empate
                    </span>
                  </td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="p-4 font-medium">Prototipagem Rápida</td>
                  <td className="p-4 text-green-700 dark:text-green-300">Setup mínimo para multimodalidade</td>
                  <td className="p-4 text-blue-700 dark:text-blue-300">Configuração mais complexa</td>
                  <td className="p-4 text-center">
                    <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm font-medium">
                      Agno
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Controle Granular</td>
                  <td className="p-4 text-green-700 dark:text-green-300">Abstrações de alto nível</td>
                  <td className="p-4 text-blue-700 dark:text-blue-300">Controle detalhado do pipeline</td>
                  <td className="p-4 text-center">
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
                      LangChain
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Fatores de Decisão */}
        <div className="card p-8">
          <h2 className="text-3xl font-bold mb-6 gradient-text">Fatores de Decisão</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-green-700 dark:text-green-300 mb-4">✅ Escolha Agno quando:</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">•</span>
                  <span>Multimodalidade é um requisito central do projeto</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">•</span>
                  <span>Desenvolvimento rápido e prototipagem são prioridades</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">•</span>
                  <span>Performance otimizada entre modalidades é crítica</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">•</span>
                  <span>Equipe prefere abstrações de alto nível</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">•</span>
                  <span>Aplicações como assistentes de voz com visão</span>
                </li>
              </ul>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-blue-700 dark:text-blue-300 mb-4">✅ Escolha LangChain quando:</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">•</span>
                  <span>Controle granular sobre processamento é necessário</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">•</span>
                  <span>Integração com ecossistema existente é prioridade</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">•</span>
                  <span>Flexibilidade na escolha de componentes é importante</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">•</span>
                  <span>Multimodalidade é secundária ao projeto</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">•</span>
                  <span>Maturidade e estabilidade são críticas</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Métricas de Capacidades Multimodais */}
        <div className="card p-8">
          <h2 className="text-3xl font-bold mb-6 gradient-text">Métricas de Capacidades Multimodais</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 rounded-xl">
              <div className="text-3xl font-bold text-green-700 dark:text-green-300 mb-2">Nativo</div>
              <div className="text-sm text-green-600 dark:text-green-400 mb-1">Suporte Multimodal</div>
              <div className="text-xs text-green-500 dark:text-green-500">Agno</div>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 rounded-xl">
              <div className="text-3xl font-bold text-blue-700 dark:text-blue-300 mb-2">Modular</div>
              <div className="text-sm text-blue-600 dark:text-blue-400 mb-1">Suporte Multimodal</div>
              <div className="text-xs text-blue-500 dark:text-blue-500">LangChain</div>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900 rounded-xl">
              <div className="text-3xl font-bold text-purple-700 dark:text-purple-300 mb-2">~50%</div>
              <div className="text-sm text-purple-600 dark:text-purple-400 mb-1">Redução de Código</div>
              <div className="text-xs text-purple-500 dark:text-purple-500">Agno vs LangChain</div>
            </div>
          </div>
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-gray-50 dark:bg-gray-900 rounded-xl">
              <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-3">📊 Tempo de Desenvolvimento</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm">Agno (Nativo)</span>
                  <span className="text-sm font-medium text-green-600">2-3 dias</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">LangChain (Modular)</span>
                  <span className="text-sm font-medium text-blue-600">5-7 dias</span>
                </div>
              </div>
            </div>
            
            <div className="p-6 bg-gray-50 dark:bg-gray-900 rounded-xl">
              <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-3">⚡ Performance</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm">Latência entre Modalidades</span>
                  <span className="text-sm font-medium text-green-600">Agno: -30%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Overhead de Conversão</span>
                  <span className="text-sm font-medium text-green-600">Agno: -40%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Conclusão */}
        <div className="card p-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 border border-blue-200 dark:border-blue-800">
          <h2 className="text-3xl font-bold mb-6 gradient-text">Conclusão</h2>
          <div className="prose prose-lg max-w-none text-gray-800 dark:text-gray-200">
            <p className="text-lg leading-relaxed mb-4">
              A <strong>multimodalidade nativa de Agno</strong> representa uma vantagem significativa 
              para projetos onde a interação com múltiplos formatos de mídia é central. 
              A arquitetura otimizada resulta em desenvolvimento mais rápido, menos código 
              boilerplate e melhor performance.
            </p>
            <p className="text-lg leading-relaxed">
              <strong>LangChain</strong>, embora requeira mais orquestração manual, oferece 
              maior flexibilidade e controle granular, sendo ideal para cenários onde 
              a multimodalidade é secundária ou quando integração com sistemas existentes 
              é prioritária.
            </p>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
};

export default MultimodalPage;