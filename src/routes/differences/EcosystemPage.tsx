import React from 'react';
import PageTemplate from '../../components/PageTemplate';

const EcosystemPage: React.FC = () => {
  return (
    <PageTemplate 
      title="Robustez do Ecossistema" 
      subtitle="Suporte a integrações e flexibilidade de escolha entre LangChain e Agno"
    >
      <div className="space-y-8">
        {/* Visão Geral */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Visão Geral</h2>
          <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border-l-4 border-blue-400">
            <p className="text-blue-800 dark:text-blue-200">
              <span className="text-2xl mr-2">🌐</span>
              A robustez do ecossistema define a capacidade de integração e flexibilidade na escolha de ferramentas. LangChain oferece uma rede vasta e consolidada de integrações, enquanto Agno apresenta um ecossistema mais focado e em desenvolvimento.
            </p>
          </div>
        </section>

        {/* Comparação dos Ecossistemas */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Comparação dos Ecossistemas</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* LangChain Ecosystem */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700">
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">🏗️</span>
                <h3 className="text-xl font-bold text-blue-900 dark:text-blue-100">LangChain - Ecossistema Abrangente</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Amplitude de Integrações</h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between bg-blue-100 dark:bg-blue-800/30 p-3 rounded">
                      <span className="text-blue-700 dark:text-blue-300 text-sm font-medium">Provedores de LLMs</span>
                      <span className="text-blue-900 dark:text-blue-100 font-bold">Centenas</span>
                    </div>
                    <div className="flex items-center justify-between bg-blue-100 dark:bg-blue-800/30 p-3 rounded">
                      <span className="text-blue-700 dark:text-blue-300 text-sm font-medium">Vector Stores</span>
                      <span className="text-blue-900 dark:text-blue-100 font-bold">Ampla gama</span>
                    </div>
                    <div className="flex items-center justify-between bg-blue-100 dark:bg-blue-800/30 p-3 rounded">
                      <span className="text-blue-700 dark:text-blue-300 text-sm font-medium">Ferramentas de Terceiros</span>
                      <span className="text-blue-900 dark:text-blue-100 font-bold">Extensiva</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Vantagens Estratégicas</h4>
                  <ul className="text-blue-700 dark:text-blue-300 text-sm space-y-1">
                    <li>• Flexibilidade incomparável na escolha de componentes</li>
                    <li>• Evita vendor lock-in em mercado em evolução</li>
                    <li>• Integrações mantidas pela equipe e comunidade</li>
                    <li>• Reduz necessidade de wrappers personalizados</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Maturidade e Adoção</h4>
                  <ul className="text-blue-700 dark:text-blue-300 text-sm space-y-1">
                    <li>• Vasta rede de integrações consolidadas</li>
                    <li>• Ampla adoção no mercado</li>
                    <li>• Compatibilidade com infraestruturas legadas</li>
                    <li>• Solução testada e comprovada</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Agno Ecosystem */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700">
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">🎯</span>
                <h3 className="text-xl font-bold text-green-900 dark:text-green-100">Agno - Ecossistema Focado</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">Características Principais</h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between bg-green-100 dark:bg-green-800/30 p-3 rounded">
                      <span className="text-green-700 dark:text-green-300 text-sm font-medium">Agnosticismo de Modelo</span>
                      <span className="text-green-900 dark:text-green-100 font-bold">Forte</span>
                    </div>
                    <div className="flex items-center justify-between bg-green-100 dark:bg-green-800/30 p-3 rounded">
                      <span className="text-green-700 dark:text-green-300 text-sm font-medium">Ferramentas Essenciais</span>
                      <span className="text-green-900 dark:text-green-100 font-bold">Integradas</span>
                    </div>
                    <div className="flex items-center justify-between bg-green-100 dark:bg-green-800/30 p-3 rounded">
                      <span className="text-green-700 dark:text-green-300 text-sm font-medium">Bancos Vetoriais</span>
                      <span className="text-green-900 dark:text-green-100 font-bold">Suportados</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">Abordagem Estratégica</h4>
                  <ul className="text-green-700 dark:text-green-300 text-sm space-y-1">
                    <li>• Conjunto de ferramentas mais focado</li>
                    <li>• Ecossistema em desenvolvimento ativo</li>
                    <li>• Menos opções "prontas para uso"</li>
                    <li>• Flexibilidade para integrações customizadas</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">Trade-offs Reconhecidos</h4>
                  <div className="bg-green-100 dark:bg-green-800/30 p-3 rounded">
                    <p className="text-green-700 dark:text-green-300 text-sm">
                      <strong>Esforço Adicional:</strong> Pode exigir mais trabalho para integrar ferramentas menos comuns, mas oferece controle total sobre as integrações.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Análise por Cenários de Uso */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Análise por Cenários de Uso</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
              <thead>
                <tr className="bg-gray-100 dark:bg-gray-700">
                  <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left text-gray-900 dark:text-white">Cenário de Projeto</th>
                  <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left text-gray-900 dark:text-white">LangChain</th>
                  <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left text-gray-900 dark:text-white">Agno</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-medium text-gray-900 dark:text-white">Ampla Gama de Serviços</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">✅ Ideal - Centenas de integrações prontas</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">⚠️ Limitado - Pode exigir desenvolvimento customizado</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-medium text-gray-900 dark:text-white">Infraestrutura Legada</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">✅ Superior - Compatibilidade testada</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">⚠️ Desafiador - Integrações customizadas necessárias</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-medium text-gray-900 dark:text-white">Ferramentas Focadas</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">⚠️ Overhead - Muitas opções desnecessárias</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">✅ Ideal - Conjunto focado e eficiente</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-medium text-gray-900 dark:text-white">Desenvolvimento Customizado</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">⚠️ Complexo - Muitas abstrações para contornar</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">✅ Flexível - Controle total sobre integrações</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-medium text-gray-900 dark:text-white">Time-to-Market Rápido</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">✅ Vantajoso - Integrações prontas para uso</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">⚠️ Mais lento - Desenvolvimento de integrações</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Fatores de Decisão */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Fatores de Decisão por Ecossistema</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-700">
              <h3 className="text-lg font-semibold mb-3 text-blue-900 dark:text-blue-100 flex items-center">
                <span className="mr-2">🏗️</span>
                Escolha LangChain Quando
              </h3>
              <ul className="text-blue-700 dark:text-blue-300 space-y-2 text-sm">
                <li>• <strong>Ampla gama de serviços</strong> é necessária</li>
                <li>• <strong>Compatibilidade com infraestrutura legada</strong> é crítica</li>
                <li>• <strong>Time-to-market rápido</strong> é prioridade</li>
                <li>• <strong>Evitar vendor lock-in</strong> é estratégico</li>
                <li>• <strong>Integrações prontas</strong> são valorizadas</li>
                <li>• <strong>Maturidade e estabilidade</strong> são essenciais</li>
              </ul>
            </div>
            
            <div className="p-6 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-700">
              <h3 className="text-lg font-semibold mb-3 text-green-900 dark:text-green-100 flex items-center">
                <span className="mr-2">🎯</span>
                Escolha Agno Quando
              </h3>
              <ul className="text-green-700 dark:text-green-300 space-y-2 text-sm">
                <li>• <strong>Conjunto focado de ferramentas</strong> é suficiente</li>
                <li>• <strong>Controle total sobre integrações</strong> é desejado</li>
                <li>• <strong>Desenvolvimento customizado</strong> é aceitável</li>
                <li>• <strong>Simplicidade arquitetural</strong> é valorizada</li>
                <li>• <strong>Flexibilidade de implementação</strong> é prioritária</li>
                <li>• <strong>Overhead mínimo</strong> é importante</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Métricas de Ecossistema */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Métricas de Robustez do Ecossistema</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-700">
              <h3 className="text-lg font-semibold mb-3 text-purple-900 dark:text-purple-100 flex items-center">
                <span className="mr-2">🔌</span>
                Número de Integrações
              </h3>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm text-purple-700 dark:text-purple-300">LangChain</span>
                    <span className="text-sm font-bold text-purple-900 dark:text-purple-100">Centenas</span>
                  </div>
                  <div className="w-full bg-purple-200 dark:bg-purple-800 rounded-full h-2">
                    <div className="bg-purple-600 dark:bg-purple-400 h-2 rounded-full" style={{width: '100%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm text-purple-700 dark:text-purple-300">Agno</span>
                    <span className="text-sm font-bold text-purple-900 dark:text-purple-100">Focadas</span>
                  </div>
                  <div className="w-full bg-purple-200 dark:bg-purple-800 rounded-full h-2">
                    <div className="bg-purple-600 dark:bg-purple-400 h-2 rounded-full" style={{width: '30%'}}></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-6 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-200 dark:border-orange-700">
              <h3 className="text-lg font-semibold mb-3 text-orange-900 dark:text-orange-100 flex items-center">
                <span className="mr-2">⏱️</span>
                Time-to-Integration
              </h3>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm text-orange-700 dark:text-orange-300">LangChain</span>
                    <span className="text-sm font-bold text-orange-900 dark:text-orange-100">Imediato</span>
                  </div>
                  <div className="w-full bg-orange-200 dark:bg-orange-800 rounded-full h-2">
                    <div className="bg-orange-600 dark:bg-orange-400 h-2 rounded-full" style={{width: '95%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm text-orange-700 dark:text-orange-300">Agno</span>
                    <span className="text-sm font-bold text-orange-900 dark:text-orange-100">Desenvolvimento</span>
                  </div>
                  <div className="w-full bg-orange-200 dark:bg-orange-800 rounded-full h-2">
                    <div className="bg-orange-600 dark:bg-orange-400 h-2 rounded-full" style={{width: '40%'}}></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-6 bg-teal-50 dark:bg-teal-900/20 rounded-lg border border-teal-200 dark:border-teal-700">
              <h3 className="text-lg font-semibold mb-3 text-teal-900 dark:text-teal-100 flex items-center">
                <span className="mr-2">🎛️</span>
                Controle de Integração
              </h3>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm text-teal-700 dark:text-teal-300">LangChain</span>
                    <span className="text-sm font-bold text-teal-900 dark:text-teal-100">Limitado</span>
                  </div>
                  <div className="w-full bg-teal-200 dark:bg-teal-800 rounded-full h-2">
                    <div className="bg-teal-600 dark:bg-teal-400 h-2 rounded-full" style={{width: '30%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm text-teal-700 dark:text-teal-300">Agno</span>
                    <span className="text-sm font-bold text-teal-900 dark:text-teal-100">Total</span>
                  </div>
                  <div className="w-full bg-teal-200 dark:bg-teal-800 rounded-full h-2">
                    <div className="bg-teal-600 dark:bg-teal-400 h-2 rounded-full" style={{width: '100%'}}></div>
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
              <span className="text-2xl mr-2">⚖️</span>
              <strong>A escolha entre amplitude e foco:</strong> LangChain oferece um ecossistema vasto e maduro com centenas de integrações prontas, ideal para projetos que dependem de ampla gama de serviços e infraestruturas legadas. Agno apresenta um ecossistema mais focado e em desenvolvimento, adequado para projetos que valorizam controle total sobre integrações e podem investir em desenvolvimento customizado.
            </p>
          </div>
        </section>
      </div>
    </PageTemplate>
  );
};

export default EcosystemPage;