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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sections.map((section, index) => (
          <Link
            key={index}
            to={section.path}
            className="card-hover p-8 group"
          >
            <div className="mb-4">
              <h3 className="text-2xl font-bold gradient-text">
                {section.title}
              </h3>
            </div>
            <p className="text-gray-800 dark:text-gray-200 leading-relaxed">
              {section.description}
            </p>
            <div className="mt-6 flex items-center text-blue-700 dark:text-blue-300 font-semibold transition-transform duration-300 bg-blue-100 dark:bg-blue-900 px-4 py-2 rounded">
              EXPLORAR
            </div>
          </Link>
        ))}
      </div>
    </PageTemplate>
  );
};

export default AgnoPage;