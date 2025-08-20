import React from 'react';
import { Link } from 'react-router-dom';
import PageTemplate from '../../components/PageTemplate';

const ComparisonPage: React.FC = () => {
  const comparisonTypes = [
    {
      id: 'detailed-analysis',
      title: 'Análise Detalhada',
      description: 'Comparação abrangente de características técnicas, arquitetura, filosofia de design e capacidades específicas entre LangChain e Agno.',
      icon: '🔍',
      path: '/comparacao/recursos',
      color: 'blue',
      features: ['Filosofia de Design', 'Orquestração', 'Suporte Multimodal', 'Gerenciamento de Memória']
    },
    {
      id: 'performance-benchmarks',
      title: 'Benchmarks de Performance',
      description: 'Análise quantitativa de desempenho com métricas reais de velocidade, latência, uso de memória e escalabilidade em cenários práticos.',
      icon: '⚡',
      path: '/comparacao/benchmarks',
      color: 'green',
      features: ['Velocidade de Execução', 'Latência', 'Uso de Memória', 'Escalabilidade']
    },
    {
      id: 'use-cases',
      title: 'Casos de Uso Recomendados',
      description: 'Recomendações específicas por cenário de projeto, incluindo adequação para diferentes tipos de aplicações e contextos de uso.',
      icon: '🎯',
      path: '/comparacao/casos-de-uso',
      color: 'purple',
      features: ['Agentes Complexos', 'RAG Performance', 'Prototipagem', 'Aplicações Multimodais']
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: {
        bg: 'bg-blue-50 dark:bg-blue-950',
        border: 'border-blue-200 dark:border-blue-800',
        text: 'text-blue-900 dark:text-blue-100',
        accent: 'text-blue-600 dark:text-blue-400',
        hover: 'hover:bg-blue-100 dark:hover:bg-blue-900'
      },
      green: {
        bg: 'bg-green-50 dark:bg-green-950',
        border: 'border-green-200 dark:border-green-800',
        text: 'text-green-900 dark:text-green-100',
        accent: 'text-green-600 dark:text-green-400',
        hover: 'hover:bg-green-100 dark:hover:bg-green-900'
      },
      purple: {
        bg: 'bg-purple-50 dark:bg-purple-950',
        border: 'border-purple-200 dark:border-purple-800',
        text: 'text-purple-900 dark:text-purple-100',
        accent: 'text-purple-600 dark:text-purple-400',
        hover: 'hover:bg-purple-100 dark:hover:bg-purple-900'
      }
    };
    return colorMap[color as keyof typeof colorMap];
  };

  return (
    <PageTemplate 
      title="Análise Comparativa" 
      subtitle="Escolha o tipo de análise que melhor atende às suas necessidades"
    >
      <div className="space-y-8">
        {/* Introduction */}
        <div className="card p-8 text-center">
          <h2 className="text-2xl font-bold gradient-text mb-4">Tipos de Análise Disponíveis</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Explore diferentes perspectivas da comparação entre LangChain e Agno através de três tipos de análise especializados, 
            cada um focado em aspectos específicos para ajudar na sua tomada de decisão.
          </p>
        </div>

        {/* Comparison Type Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {comparisonTypes.map((type) => {
            const colors = getColorClasses(type.color);
            return (
              <Link
                key={type.id}
                to={type.path}
                className={`block p-8 rounded-xl border-2 transition-all duration-300 transform hover:scale-105 hover:shadow-xl ${
                  colors.bg
                } ${
                  colors.border
                } ${
                  colors.hover
                } group`}
              >
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {type.icon}
                  </div>
                  <h3 className={`text-2xl font-bold mb-3 ${colors.text}`}>
                    {type.title}
                  </h3>
                </div>
                
                <p className={`text-base leading-relaxed mb-6 ${colors.text}`}>
                  {type.description}
                </p>
                
                <div className="space-y-3">
                  <h4 className={`font-semibold text-sm uppercase tracking-wide ${colors.accent}`}>
                    Principais Aspectos:
                  </h4>
                  <ul className="space-y-2">
                    {type.features.map((feature, index) => (
                      <li key={index} className={`flex items-center text-sm ${colors.text}`}>
                        <span className={`w-2 h-2 rounded-full mr-3 ${colors.accent.replace('text-', 'bg-')}`}></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className={`mt-6 flex items-center justify-center font-semibold ${colors.accent} group-hover:translate-x-2 transition-transform duration-300`}>
                  Explorar Análise →
                </div>
              </Link>
            );
          })}
        </div>

        {/* Quick Navigation */}
        <div className="card p-6">
          <h3 className="text-xl font-bold gradient-text mb-4">Navegação Rápida</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link 
              to="/comparacao/recursos" 
              className="flex items-center p-4 rounded-lg bg-blue-50 dark:bg-blue-950 hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors duration-200"
            >
              <span className="text-2xl mr-3">🔍</span>
              <span className="font-medium text-blue-900 dark:text-blue-100">Análise Detalhada</span>
            </Link>
            <Link 
              to="/comparacao/benchmarks" 
              className="flex items-center p-4 rounded-lg bg-green-50 dark:bg-green-950 hover:bg-green-100 dark:hover:bg-green-900 transition-colors duration-200"
            >
              <span className="text-2xl mr-3">⚡</span>
              <span className="font-medium text-green-900 dark:text-green-100">Benchmarks</span>
            </Link>
            <Link 
              to="/comparacao/casos-de-uso" 
              className="flex items-center p-4 rounded-lg bg-purple-50 dark:bg-purple-950 hover:bg-purple-100 dark:hover:bg-purple-900 transition-colors duration-200"
            >
              <span className="text-2xl mr-3">🎯</span>
              <span className="font-medium text-purple-900 dark:text-purple-100">Casos de Uso</span>
            </Link>
          </div>
        </div>

        {/* Additional Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card p-6">
            <h4 className="text-lg font-bold gradient-text mb-3">💡 Dica</h4>
            <p className="text-gray-700 dark:text-gray-300">
              Para uma visão completa, recomendamos explorar todos os três tipos de análise. 
              Cada um oferece insights únicos que complementam a compreensão geral.
            </p>
          </div>
          <div className="card p-6">
            <h4 className="text-lg font-bold gradient-text mb-3">🎯 Objetivo</h4>
            <p className="text-gray-700 dark:text-gray-300">
              Nosso objetivo é fornecer informações técnicas precisas e imparciais para 
              ajudar na escolha da biblioteca mais adequada ao seu projeto.
            </p>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
};

export default ComparisonPage;