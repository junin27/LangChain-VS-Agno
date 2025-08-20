import React from 'react';
import PageTemplate from '../components/PageTemplate';

const RecommendationsPage: React.FC = () => {
  return (
    <PageTemplate
      title="Recomendações"
      subtitle="Guia prático para escolher entre LangChain e Agno baseado em suas necessidades específicas"
    >
      <div className="space-y-8">
        {/* Princípios Fundamentais */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Princípios Fundamentais</h2>
          <p className="text-gray-700 dark:text-gray-300">
            A escolha entre LangChain e Agno deve ser baseada em critérios objetivos que consideram as características específicas do seu projeto, equipe e contexto organizacional.
          </p>
        </section>

        {/* Critérios de Decisão */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Critérios de Decisão</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Performance</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">Velocidade de execução, latência e throughput</p>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                <li>• Tempo de resposta</li>
                <li>• Uso de memória</li>
                <li>• Escalabilidade</li>
              </ul>
            </div>
            <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Complexidade</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">Curva de aprendizado e facilidade de implementação</p>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                <li>• Setup inicial</li>
                <li>• Documentação</li>
                <li>• Debugging</li>
              </ul>
            </div>
            <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Ecossistema</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">Integrações disponíveis e suporte da comunidade</p>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                <li>• Bibliotecas</li>
                <li>• Plugins</li>
                <li>• Comunidade ativa</li>
              </ul>
            </div>
            <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Manutenibilidade</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">Facilidade de manutenção e evolução do código</p>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                <li>• Estrutura do código</li>
                <li>• Testes</li>
                <li>• Versionamento</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Matriz de Decisão */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Matriz de Decisão</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
              <thead>
                <tr className="bg-gray-100 dark:bg-gray-700">
                  <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left text-gray-900 dark:text-white">Cenário</th>
                  <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left text-gray-900 dark:text-white">LangChain</th>
                  <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left text-gray-900 dark:text-white">Agno</th>
                  <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left text-gray-900 dark:text-white">Recomendação</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">Prototipagem rápida</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">⭐⭐⭐</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">⭐⭐⭐⭐⭐</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">Agno - Setup mais simples</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">Aplicações enterprise</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">⭐⭐⭐⭐⭐</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">⭐⭐⭐</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">LangChain - Mais robusto</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">Equipe iniciante</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">⭐⭐</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">⭐⭐⭐⭐</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">Agno - Menor curva de aprendizado</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">Integrações complexas</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">⭐⭐⭐⭐⭐</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">⭐⭐⭐</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">LangChain - Mais conectores</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">Performance crítica</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">⭐⭐⭐</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">⭐⭐⭐⭐</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">Agno - Mais otimizado</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Recomendações Práticas */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Recomendações Práticas</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3 text-blue-900 dark:text-blue-100">Checklist de Avaliação</h3>
              <ul className="space-y-2 text-blue-800 dark:text-blue-200">
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  Avalie o tamanho e experiência da sua equipe
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  Considere os requisitos de performance do projeto
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  Analise as integrações necessárias
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  Defina o cronograma e complexidade do desenvolvimento
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  Considere o suporte e manutenção a longo prazo
                </li>
              </ul>
            </div>
            
            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg border-l-4 border-yellow-400">
              <p className="text-yellow-800 dark:text-yellow-200">
                <span className="text-2xl mr-2">💡</span>
                <strong>Dica:</strong> Para projetos pequenos a médios com equipes iniciantes, Agno oferece melhor custo-benefício. Para aplicações enterprise com requisitos complexos, LangChain fornece mais recursos e flexibilidade.
              </p>
            </div>
          </div>
        </section>
      </div>
    </PageTemplate>
  );
};

export default RecommendationsPage;