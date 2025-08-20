import React from 'react';
import PageTemplate from '../../components/PageTemplate';

const OrchestrationPage: React.FC = () => {
  return (
    <PageTemplate 
      title="Orquestração de Agentes" 
      subtitle="Diferenças fundamentais na orquestração e gerenciamento de fluxos complexos entre LangChain e Agno"
    >
      <div className="space-y-8">
        {/* Visão Geral */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Visão Geral</h2>
          <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg border-l-4 border-purple-400">
            <p className="text-purple-800 dark:text-purple-200">
              <span className="text-2xl mr-2">🔄</span>
              A orquestração de agentes é um ponto de divergência significativo entre os frameworks, impactando diretamente a capacidade de gerenciar fluxos complexos, estados e interações multi-ator.
            </p>
          </div>
        </section>

        {/* Comparação das Abordagens */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Comparação das Abordagens</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* LangChain */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700">
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">🕸️</span>
                <h3 className="text-xl font-bold text-blue-900 dark:text-blue-100">LangChain + LangGraph</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Modelo de Grafo</h4>
                  <p className="text-blue-700 dark:text-blue-300 text-sm">
                    Utiliza grafos para orquestrar agentes e fluxos de trabalho complexos com execução durável.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Capacidades Avançadas</h4>
                  <ul className="text-blue-700 dark:text-blue-300 text-sm space-y-1">
                    <li>• Execução durável e recuperação de falhas</li>
                    <li>• Human-in-the-loop integrado</li>
                    <li>• Gerenciamento de memória abrangente</li>
                    <li>• Depuração visual de fluxos não-lineares</li>
                    <li>• Estados complexos e ramificações</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Ideal Para</h4>
                  <ul className="text-blue-700 dark:text-blue-300 text-sm space-y-1">
                    <li>• Agentes de conversação complexos</li>
                    <li>• Automação de processos multi-etapas</li>
                    <li>• Fluxos com múltiplos pontos de decisão</li>
                    <li>• Interações que requerem aprovação humana</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Agno */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700">
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">🐍</span>
                <h3 className="text-xl font-bold text-green-900 dark:text-green-100">Agno</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">Construções Python Padrão</h4>
                  <p className="text-green-700 dark:text-green-300 text-sm">
                    Usa loops e condicionais nativos do Python, evitando grafos e cadeias complexas.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">Estratégia de Composição</h4>
                  <ul className="text-green-700 dark:text-green-300 text-sm space-y-1">
                    <li>• Equipes de agentes especializados</li>
                    <li>• Distribuição de carga inteligente</li>
                    <li>• Gerenciamento simplificado de complexidade</li>
                    <li>• Delegação direta entre agentes</li>
                    <li>• Lógica de controle transparente</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">Ideal Para</h4>
                  <ul className="text-green-700 dark:text-green-300 text-sm space-y-1">
                    <li>• Agentes com lógica linear</li>
                    <li>• Delegação simples entre agentes</li>
                    <li>• Desenvolvimento rápido e eficiente</li>
                    <li>• Fluxos com menor complexidade de estado</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Complexidade de Fluxo */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Complexidade de Fluxo e Gerenciamento de Estado</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-700">
              <h3 className="text-lg font-semibold mb-3 text-blue-900 dark:text-blue-100 flex items-center">
                <span className="mr-2">🕸️</span>
                LangGraph - Fluxos Complexos
              </h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-blue-800 dark:text-blue-200">Vantagens</h4>
                  <ul className="text-blue-700 dark:text-blue-300 text-sm space-y-1 mt-1">
                    <li>• Expressão natural de fluxos não-lineares</li>
                    <li>• Gerenciamento automático de estado</li>
                    <li>• Visualização e depuração avançada</li>
                    <li>• Recuperação robusta de falhas</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-blue-800 dark:text-blue-200">Desafios</h4>
                  <ul className="text-blue-700 dark:text-blue-300 text-sm space-y-1 mt-1">
                    <li>• Curva de aprendizado para grafos</li>
                    <li>• Overhead para fluxos simples</li>
                    <li>• Complexidade de configuração inicial</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="p-6 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-700">
              <h3 className="text-lg font-semibold mb-3 text-green-900 dark:text-green-100 flex items-center">
                <span className="mr-2">🐍</span>
                Agno - Fluxos Lineares
              </h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-green-800 dark:text-green-200">Vantagens</h4>
                  <ul className="text-green-700 dark:text-green-300 text-sm space-y-1 mt-1">
                    <li>• Simplicidade de codificação inicial</li>
                    <li>• Controle direto do fluxo</li>
                    <li>• Depuração com ferramentas Python padrão</li>
                    <li>• Performance otimizada</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-green-800 dark:text-green-200">Desafios</h4>
                  <ul className="text-green-700 dark:text-green-300 text-sm space-y-1 mt-1">
                    <li>• Gerenciamento manual de estado complexo</li>
                    <li>• Dificuldade em fluxos não-lineares</li>
                    <li>• Manutenção de lógica de recuperação</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cenários de Uso */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Cenários de Uso Recomendados</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
              <thead>
                <tr className="bg-gray-100 dark:bg-gray-700">
                  <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left text-gray-900 dark:text-white">Cenário</th>
                  <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left text-gray-900 dark:text-white">LangGraph</th>
                  <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left text-gray-900 dark:text-white">Agno</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-medium text-gray-900 dark:text-white">Agentes Conversacionais</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">✅ Excelente - Memória e contexto</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">⚠️ Limitado - Gerenciamento manual</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-medium text-gray-900 dark:text-white">Automação de Processos</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">✅ Ideal - Fluxos multi-etapas</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">⚠️ Adequado - Processos lineares</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-medium text-gray-900 dark:text-white">Human-in-the-Loop</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">✅ Nativo - Primitivas integradas</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">❌ Manual - Implementação customizada</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-medium text-gray-900 dark:text-white">Agentes Especializados</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">⚠️ Overhead - Complexidade desnecessária</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">✅ Eficiente - Composição direta</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-medium text-gray-900 dark:text-white">Recuperação de Falhas</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">✅ Automática - Execução durável</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">⚠️ Manual - Try/catch customizado</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Considerações de Implementação */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Considerações de Implementação</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-200 dark:border-orange-700">
              <h3 className="text-lg font-semibold mb-3 text-orange-900 dark:text-orange-100 flex items-center">
                <span className="mr-2">⚡</span>
                Performance
              </h3>
              <div className="space-y-2 text-sm">
                <p className="text-orange-800 dark:text-orange-200"><strong>LangGraph:</strong> Overhead de grafo, mas otimizado para fluxos complexos</p>
                <p className="text-orange-800 dark:text-orange-200"><strong>Agno:</strong> Performance superior em fluxos lineares e delegação simples</p>
              </div>
            </div>
            
            <div className="p-6 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-700">
              <h3 className="text-lg font-semibold mb-3 text-red-900 dark:text-red-100 flex items-center">
                <span className="mr-2">🐛</span>
                Depuração
              </h3>
              <div className="space-y-2 text-sm">
                <p className="text-red-800 dark:text-red-200"><strong>LangGraph:</strong> Ferramentas visuais especializadas para grafos</p>
                <p className="text-red-800 dark:text-red-200"><strong>Agno:</strong> Debuggers Python padrão, mais familiar</p>
              </div>
            </div>
            
            <div className="p-6 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg border border-indigo-200 dark:border-indigo-700">
              <h3 className="text-lg font-semibold mb-3 text-indigo-900 dark:text-indigo-100 flex items-center">
                <span className="mr-2">🔧</span>
                Manutenibilidade
              </h3>
              <div className="space-y-2 text-sm">
                <p className="text-indigo-800 dark:text-indigo-200"><strong>LangGraph:</strong> Estrutura clara para fluxos complexos, mas requer expertise</p>
                <p className="text-indigo-800 dark:text-indigo-200"><strong>Agno:</strong> Código Python direto, mais fácil para equipes Python</p>
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
              <strong>A escolha da abordagem de orquestração deve considerar a complexidade do fluxo:</strong> LangGraph excele em cenários com estados complexos, interações humanas e fluxos não-lineares, enquanto Agno oferece simplicidade e performance para lógicas mais diretas e delegação entre agentes especializados.
            </p>
          </div>
        </section>
      </div>
    </PageTemplate>
  );
};

export default OrchestrationPage;