import React from 'react';
import { Link } from 'react-router-dom';
import PageTemplate from '../../components/PageTemplate';

const ComparisonPage: React.FC = () => {
  const comparisonTypes = [
    {
      id: 'detailed-analysis',
      title: 'Análise Detalhada',
      description: 'Comparação abrangente de características técnicas, arquitetura, filosofia de design e capacidades específicas entre LangChain e Agno. Explore as diferenças fundamentais na abordagem de desenvolvimento, estrutura modular e filosofias de implementação.',
      path: '/comparacao/recursos',
      features: ['Filosofia de Design', 'Orquestração', 'Suporte Multimodal', 'Gerenciamento de Memória']
    },
    {
      id: 'performance-benchmarks',
      title: 'Benchmarks de Performance',
      description: 'Análise quantitativa de desempenho com métricas reais de velocidade, latência, uso de memória e escalabilidade em cenários práticos. Dados objetivos para tomada de decisão baseada em performance.',
      path: '/comparacao/benchmarks',
      features: ['Velocidade de Execução', 'Latência', 'Uso de Memória', 'Escalabilabilidade']
    },
    {
      id: 'use-cases',
      title: 'Casos de Uso Recomendados',
      description: 'Recomendações específicas por cenário de projeto, incluindo adequação para diferentes tipos de aplicações e contextos de uso. Guia prático para escolher a ferramenta ideal para cada situação.',
      path: '/comparacao/casos-de-uso',
      features: ['Agentes Complexos', 'RAG Performance', 'Prototipagem', 'Aplicações Multimodais']
    }
  ];



  return (
    <PageTemplate 
      title="Análise Comparativa" 
      subtitle="Explore diferentes perspectivas da comparação entre LangChain e Agno através de três tipos de análise especializados, cada um focado em aspectos específicos para ajudar na sua tomada de decisão."
    >
      <div className="space-y-8">
        {/* Comparison Type Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {comparisonTypes.map((type) => (
            <div key={type.id} className="card-hover p-8 group mb-4">
              <h3 className="text-2xl font-bold mb-4 gradient-text">
                {type.title}
              </h3>
              
              <p className="text-gray-800 dark:text-gray-200 leading-relaxed mb-6">
                {type.description}
              </p>
              
              <div className="space-y-3 mb-6">
                <h4 className="font-semibold text-sm uppercase tracking-wide text-blue-700 dark:text-blue-300">
                  Principais Aspectos:
                </h4>
                <ul className="space-y-2">
                  {type.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-800 dark:text-gray-200">
                      <span className="w-2 h-2 rounded-full mr-3 bg-blue-600"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <Link
                to={type.path}
                className="mt-6 flex items-center text-blue-700 dark:text-blue-300 font-semibold transition-transform duration-300 bg-blue-100 dark:bg-blue-900 px-4 py-2 rounded hover:scale-105"
              >
                EXPLORAR ANÁLISE
              </Link>
            </div>
          ))}
        </div>


      </div>
    </PageTemplate>
  );
};

export default ComparisonPage;