import React from 'react';
import PageTemplate from '../../components/PageTemplate';

const PerformancePage: React.FC = () => {
  return (
    <PageTemplate 
      title="Performance em Produção" 
      subtitle="Vantagens e desvantagens de performance em cenários de produção entre LangChain e Agno"
    >
      <div className="space-y-8">
        {/* Visão Geral */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Visão Geral</h2>
          <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg border-l-4 border-red-400">
            <p className="text-red-800 dark:text-red-200">
              <span className="text-2xl mr-2">⚡</span>
              A performance é um campo de batalha crucial entre os frameworks, com Agno se posicionando como líder em eficiência bruta, enquanto LangChain oferece ferramentas robustas de otimização e escalabilidade.
            </p>
          </div>
        </section>

        {/* Benchmarks e Métricas */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Benchmarks e Métricas de Performance</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Agno Performance */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700">
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">🚀</span>
                <h3 className="text-xl font-bold text-green-900 dark:text-green-100">Agno - Eficiência Bruta</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">Métricas Superiores</h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between bg-green-100 dark:bg-green-800/30 p-3 rounded">
                      <span className="text-green-700 dark:text-green-300 text-sm font-medium">Instanciação de Agentes</span>
                      <span className="text-green-900 dark:text-green-100 font-bold">~10.000x mais rápido</span>
                    </div>
                    <div className="flex items-center justify-between bg-green-100 dark:bg-green-800/30 p-3 rounded">
                      <span className="text-green-700 dark:text-green-300 text-sm font-medium">Uso de Memória</span>
                      <span className="text-green-900 dark:text-green-100 font-bold">~50x menos memória</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">Vantagens Arquiteturais</h4>
                  <ul className="text-green-700 dark:text-green-300 text-sm space-y-1">
                    <li>• Filosofia focada em performance e minimalismo</li>
                    <li>• Menor overhead de framework por instância</li>
                    <li>• Otimização inerente do design</li>
                    <li>• Eficiência em recursos computacionais limitados</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">Cenários Ideais</h4>
                  <ul className="text-green-700 dark:text-green-300 text-sm space-y-1">
                    <li>• Criação frequente de agentes (por sessão)</li>
                    <li>• Chatbots de alto tráfego</li>
                    <li>• Ambientes com recursos limitados</li>
                    <li>• Aplicações que priorizam velocidade bruta</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* LangChain Performance */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700">
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">🛠️</span>
                <h3 className="text-xl font-bold text-blue-900 dark:text-blue-100">LangChain - Otimização Robusta</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Ferramentas de Otimização</h4>
                  <ul className="text-blue-700 dark:text-blue-300 text-sm space-y-1">
                    <li>• Caching avançado (embeddings e LLMs)</li>
                    <li>• Batching inteligente de requisições</li>
                    <li>• LangGraph Platform para escalabilidade</li>
                    <li>• Tolerância a falhas integrada</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Trade-offs Reconhecidos</h4>
                  <div className="bg-blue-100 dark:bg-blue-800/30 p-3 rounded">
                    <p className="text-blue-700 dark:text-blue-300 text-sm">
                      <strong>Overhead de Abstrações:</strong> Reconhece que as abstrações introduzem overhead, mas oferece ferramentas compensatórias.
                    </p>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Cenários Ideais</h4>
                  <ul className="text-blue-700 dark:text-blue-300 text-sm space-y-1">
                    <li>• Agentes de longa duração</li>
                    <li>• Fluxos de trabalho complexos</li>
                    <li>• Necessidade de observabilidade avançada</li>
                    <li>• Sistemas que justificam o overhead</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Análise Comparativa Detalhada */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Análise Comparativa por Cenário</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
              <thead>
                <tr className="bg-gray-100 dark:bg-gray-700">
                  <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left text-gray-900 dark:text-white">Cenário de Produção</th>
                  <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left text-gray-900 dark:text-white">Agno</th>
                  <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left text-gray-900 dark:text-white">LangChain</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-medium text-gray-900 dark:text-white">Chatbot Alto Tráfego</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">✅ Superior - Instanciação rápida por sessão</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">⚠️ Overhead - Mas com caching eficiente</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-medium text-gray-900 dark:text-white">Recursos Limitados</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">✅ Ideal - 50x menos memória</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">❌ Pesado - Maior consumo de recursos</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-medium text-gray-900 dark:text-white">Agentes Persistentes</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">⚠️ Adequado - Performance bruta</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">✅ Superior - Ferramentas de longa duração</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-medium text-gray-900 dark:text-white">Escalabilidade Horizontal</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">⚠️ Manual - Implementação customizada</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">✅ Nativa - LangGraph Platform</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-medium text-gray-900 dark:text-white">Tolerância a Falhas</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">⚠️ Básica - Try/catch manual</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">✅ Robusta - Recuperação automática</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Fatores de Decisão */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Fatores de Decisão por Performance</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-700">
              <h3 className="text-lg font-semibold mb-3 text-green-900 dark:text-green-100 flex items-center">
                <span className="mr-2">🚀</span>
                Escolha Agno Quando
              </h3>
              <ul className="text-green-700 dark:text-green-300 space-y-2 text-sm">
                <li>• <strong>Criação frequente de agentes</strong> é um gargalo</li>
                <li>• <strong>Recursos computacionais são limitados</strong> (edge computing)</li>
                <li>• <strong>Latência de inicialização</strong> é crítica</li>
                <li>• <strong>Custo por instância</strong> precisa ser minimizado</li>
                <li>• <strong>Performance bruta</strong> é prioridade máxima</li>
                <li>• <strong>Simplicidade arquitetural</strong> é valorizada</li>
              </ul>
            </div>
            
            <div className="p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-700">
              <h3 className="text-lg font-semibold mb-3 text-blue-900 dark:text-blue-100 flex items-center">
                <span className="mr-2">🛠️</span>
                Escolha LangChain Quando
              </h3>
              <ul className="text-blue-700 dark:text-blue-300 space-y-2 text-sm">
                <li>• <strong>Agentes de longa duração</strong> são a norma</li>
                <li>• <strong>Complexidade do fluxo</strong> justifica o overhead</li>
                <li>• <strong>Ferramentas de observabilidade</strong> são essenciais</li>
                <li>• <strong>Escalabilidade automática</strong> é necessária</li>
                <li>• <strong>Tolerância a falhas robusta</strong> é crítica</li>
                <li>• <strong>Caching e otimizações</strong> compensam o overhead</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Métricas de Performance Detalhadas */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Métricas de Performance Detalhadas</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-700">
              <h3 className="text-lg font-semibold mb-3 text-yellow-900 dark:text-yellow-100 flex items-center">
                <span className="mr-2">⚡</span>
                Velocidade de Inicialização
              </h3>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm text-yellow-700 dark:text-yellow-300">Agno</span>
                    <span className="text-sm font-bold text-yellow-900 dark:text-yellow-100">~0.001s</span>
                  </div>
                  <div className="w-full bg-yellow-200 dark:bg-yellow-800 rounded-full h-2">
                    <div className="bg-yellow-600 dark:bg-yellow-400 h-2 rounded-full" style={{width: '95%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm text-yellow-700 dark:text-yellow-300">LangChain</span>
                    <span className="text-sm font-bold text-yellow-900 dark:text-yellow-100">~10s</span>
                  </div>
                  <div className="w-full bg-yellow-200 dark:bg-yellow-800 rounded-full h-2">
                    <div className="bg-yellow-600 dark:bg-yellow-400 h-2 rounded-full" style={{width: '5%'}}></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-6 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-700">
              <h3 className="text-lg font-semibold mb-3 text-purple-900 dark:text-purple-100 flex items-center">
                <span className="mr-2">💾</span>
                Uso de Memória
              </h3>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm text-purple-700 dark:text-purple-300">Agno</span>
                    <span className="text-sm font-bold text-purple-900 dark:text-purple-100">~2MB</span>
                  </div>
                  <div className="w-full bg-purple-200 dark:bg-purple-800 rounded-full h-2">
                    <div className="bg-purple-600 dark:bg-purple-400 h-2 rounded-full" style={{width: '4%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm text-purple-700 dark:text-purple-300">LangChain</span>
                    <span className="text-sm font-bold text-purple-900 dark:text-purple-100">~100MB</span>
                  </div>
                  <div className="w-full bg-purple-200 dark:bg-purple-800 rounded-full h-2">
                    <div className="bg-purple-600 dark:bg-purple-400 h-2 rounded-full" style={{width: '100%'}}></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-6 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg border border-indigo-200 dark:border-indigo-700">
              <h3 className="text-lg font-semibold mb-3 text-indigo-900 dark:text-indigo-100 flex items-center">
                <span className="mr-2">🔧</span>
                Overhead de Framework
              </h3>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm text-indigo-700 dark:text-indigo-300">Agno</span>
                    <span className="text-sm font-bold text-indigo-900 dark:text-indigo-100">Mínimo</span>
                  </div>
                  <div className="w-full bg-indigo-200 dark:bg-indigo-800 rounded-full h-2">
                    <div className="bg-indigo-600 dark:bg-indigo-400 h-2 rounded-full" style={{width: '10%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm text-indigo-700 dark:text-indigo-300">LangChain</span>
                    <span className="text-sm font-bold text-indigo-900 dark:text-indigo-100">Significativo</span>
                  </div>
                  <div className="w-full bg-indigo-200 dark:bg-indigo-800 rounded-full h-2">
                    <div className="bg-indigo-600 dark:bg-indigo-400 h-2 rounded-full" style={{width: '80%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Conclusão */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Conclusão</h2>
          <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg border-l-4 border-yellow-400">
            <p className="text-yellow-800 dark:text-yellow-200">
              <span className="text-2xl mr-2">🎯</span>
              <strong>A escolha entre performance bruta e ferramentas robustas:</strong> Agno domina em eficiência pura com 10.000x mais velocidade na instanciação e 50x menos uso de memória, ideal para cenários de alto tráfego e recursos limitados. LangChain compensa o overhead com ferramentas avançadas de otimização, caching e escalabilidade, sendo superior para agentes de longa duração e fluxos complexos.
            </p>
          </div>
        </section>
      </div>
    </PageTemplate>
  );
};

export default PerformancePage;