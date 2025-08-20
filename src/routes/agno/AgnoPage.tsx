import React from 'react';
import { Link } from 'react-router-dom';
import PageTemplate from '../../components/PageTemplate';

const AgnoPage: React.FC = () => {
  const sections = [
    {
      title: 'Filosofia de Design e Arquitetura',
      description: 'Princípios fundamentais e abordagem arquitetural do Agno',
      path: '/agno/philosophy',
      icon: '🏗️'
    },
    {
      title: 'Agentes Multimodais',
      description: 'Construção e gerenciamento de agentes inteligentes',
      path: '/agno/agents',
      icon: '🤖'
    },
    {
      title: 'Memória e Contexto',
      description: 'Sistemas de memória e gerenciamento de contexto',
      path: '/agno/memory',
      icon: '🧠'
    },
    {
      title: 'RAG e Recuperação',
      description: 'Implementação de Retrieval-Augmented Generation',
      path: '/agno/rag',
      icon: '📚'
    },
    {
      title: 'Ecossistema e Integrações',
      description: 'Ferramentas e integrações disponíveis',
      path: '/agno/ecosystem',
      icon: '🔗'
    },
    {
      title: 'Observabilidade',
      description: 'Monitoramento e debugging de agentes',
      path: '/agno/observability',
      icon: '👁️'
    },
    {
      title: 'Performance',
      description: 'Otimização e análise de performance',
      path: '/agno/performance',
      icon: '⚡'
    },
    {
      title: 'Implantação',
      description: 'Deploy e produção de aplicações Agno',
      path: '/agno/deployment',
      icon: '🚀'
    },
    {
      title: 'Simplicidade',
      description: 'Simplicidade, velocidade e agnosticismo de modelo',
      path: '/agno/simplicity',
      icon: '✨'
    },
    {
      title: 'Maturidade',
      description: 'Análise da maturidade e comunidade',
      path: '/agno/maturity',
      icon: '📈'
    }
  ];

  return (
    <PageTemplate 
      title="Agno" 
      subtitle="Análise completa da biblioteca Agno para desenvolvimento eficiente de IA"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sections.map((section, index) => (
          <Link
            key={index}
            to={section.path}
            className="group block p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600"
          >
            <div className="flex items-start space-x-4">
              <div className="text-2xl">{section.icon}</div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {section.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                  {section.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </PageTemplate>
  );
};

export default AgnoPage;