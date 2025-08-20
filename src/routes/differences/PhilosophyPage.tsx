import React from 'react';
import PageTemplate from '../../components/PageTemplate';

const PhilosophyPage: React.FC = () => {
  return (
    <PageTemplate 
      title="Filosofia de Design" 
      subtitle="Diferenças fundamentais na filosofia e abordagem de design entre LangChain e Agno"
    >
      <div className="space-y-8">
        {/* Visão Geral */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Visão Geral</h2>
          <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border-l-4 border-blue-400">
            <p className="text-blue-800 dark:text-blue-200">
              <span className="text-2xl mr-2">💡</span>
              A escolha entre LangChain e Agno envolve uma decisão fundamental sobre a filosofia de design que melhor se alinha com as prioridades do projeto e a proficiência da equipe.
            </p>
          </div>
        </section>

        {/* Comparação das Filosofias */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Comparação das Filosofias</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* LangChain */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700">
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">🔗</span>
                <h3 className="text-xl font-bold text-blue-900 dark:text-blue-100">LangChain</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Abordagem Abrangente e Modular</h4>
                  <p className="text-blue-700 dark:text-blue-300 text-sm">
                    Visa cobrir todo o ciclo de vida da aplicação LLM com foco em flexibilidade e integração.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Características</h4>
                  <ul className="text-blue-700 dark:text-blue-300 text-sm space-y-1">
                    <li>• Estrutura poderosa para sistemas complexos</li>
                    <li>• Múltiplas abstrações e componentes</li>
                    <li>• Ecossistema rico e ferramentas prontas</li>
                    <li>• Flexibilidade máxima para integração</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Trade-offs</h4>
                  <ul className="text-blue-700 dark:text-blue-300 text-sm space-y-1">
                    <li>• Complexidade inerente</li>
                    <li>• Curva de aprendizado acentuada</li>
                    <li>• Camadas que podem dificultar depuração</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Agno */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700">
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">⚡</span>
                <h3 className="text-xl font-bold text-green-900 dark:text-green-100">Agno</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">Simplicidade e Python Puro</h4>
                  <p className="text-green-700 dark:text-green-300 text-sm">
                    Reduz o boilerplate e acelera o desenvolvimento com controle direto do código.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">Características</h4>
                  <ul className="text-green-700 dark:text-green-300 text-sm space-y-1">
                    <li>• "Engenharia de IA é engenharia de software"</li>
                    <li>• Construções Python padrão</li>
                    <li>• Código base limpo e fácil de entender</li>
                    <li>• Alto desempenho otimizado</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">Trade-offs</h4>
                  <ul className="text-green-700 dark:text-green-300 text-sm space-y-1">
                    <li>• Necessidade de construir mais componentes</li>
                    <li>• Ecossistema menor</li>
                    <li>• Menos abstrações prontas</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Impacto no Desenvolvimento */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Impacto no Desenvolvimento</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white flex items-center">
                <span className="mr-2">🎯</span>
                Quando Escolher LangChain
              </h3>
              <ul className="text-gray-700 dark:text-gray-300 space-y-2 text-sm">
                <li>• Equipes com experiência em frameworks complexos</li>
                <li>• Projetos que valorizam ecossistema rico</li>
                <li>• Necessidade de muitas integrações prontas</li>
                <li>• Sistemas que requerem flexibilidade máxima</li>
                <li>• Tolerância ao custo de complexidade</li>
              </ul>
            </div>
            
            <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white flex items-center">
                <span className="mr-2">⚡</span>
                Quando Escolher Agno
              </h3>
              <ul className="text-gray-700 dark:text-gray-300 space-y-2 text-sm">
                <li>• Desenvolvedores com forte proficiência em Python</li>
                <li>• Priorização de código base limpo</li>
                <li>• Foco em alto desempenho</li>
                <li>• Disposição para construir componentes customizados</li>
                <li>• Preferência por controle direto do fluxo</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Considerações Técnicas */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Considerações Técnicas</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
              <thead>
                <tr className="bg-gray-100 dark:bg-gray-700">
                  <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left text-gray-900 dark:text-white">Aspecto</th>
                  <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left text-gray-900 dark:text-white">LangChain</th>
                  <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left text-gray-900 dark:text-white">Agno</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-medium text-gray-900 dark:text-white">Controle de Fluxo</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">Grafos e cadeias abstratas</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">Construções Python tradicionais</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-medium text-gray-900 dark:text-white">Depuração</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">Complexa devido às abstrações</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">Mais direta e intuitiva</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-medium text-gray-900 dark:text-white">Customização</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">Através de extensões do framework</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">Código Python direto</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-medium text-gray-900 dark:text-white">Curva de Aprendizado</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">Acentuada (conceitos específicos)</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">Suave (conhecimento Python)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Conclusão */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Conclusão</h2>
          <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg border-l-4 border-yellow-400">
            <p className="text-yellow-800 dark:text-yellow-200">
              <span className="text-2xl mr-2">🎯</span>
              <strong>A filosofia de design reflete prioridades diferentes:</strong> LangChain prioriza abrangência e flexibilidade máxima, enquanto Agno foca em simplicidade e performance. A escolha deve alinhar-se com a experiência da equipe, complexidade do projeto e tolerância à curva de aprendizado.
            </p>
          </div>
        </section>
      </div>
    </PageTemplate>
  );
};

export default PhilosophyPage;