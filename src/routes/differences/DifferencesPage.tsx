import React from 'react';
import { Link } from 'react-router-dom';
import PageTemplate from '../../components/PageTemplate';

const DifferencesPage: React.FC = () => {
  const differenceTypes = [
    {
      id: 'philosophy',
      title: 'Filosofia de Design',
      description: 'Análise das diferentes filosofias e abordagens de design entre LangChain e Agno, incluindo princípios fundamentais e estratégias arquiteturais.',
      icon: '🎨',
      path: '/diferencas/filosofia',
      color: 'blue',
      features: ['Princípios de Design', 'Abstrações', 'Flexibilidade vs Simplicidade', 'Filosofia Arquitetural']
    },
    {
      id: 'orchestration',
      title: 'Abordagens de Orquestração',
      description: 'Comparação das estratégias de orquestração de agentes, fluxos de trabalho e gerenciamento de estado entre os dois frameworks.',
      icon: '🎼',
      path: '/diferencas/orquestracao',
      color: 'green',
      features: ['Orquestração de Agentes', 'Fluxos de Trabalho', 'Gerenciamento de Estado', 'Coordenação de Tarefas']
    },
    {
      id: 'performance',
      title: 'Performance em Produção',
      description: 'Análise detalhada de performance em cenários de produção, incluindo benchmarks, escalabilidade e otimizações específicas.',
      icon: '⚡',
      path: '/diferencas/performance',
      color: 'purple',
      features: ['Benchmarks Reais', 'Escalabilidade', 'Otimizações', 'Cenários de Produção']
    },
    {
      id: 'ecosystem',
      title: 'Robustez do Ecossistema',
      description: 'Comparação da robustez dos ecossistemas, suporte a integrações, comunidade e maturidade das plataformas.',
      icon: '🌐',
      path: '/diferencas/ecossistema',
      color: 'orange',
      features: ['Integrações Disponíveis', 'Suporte da Comunidade', 'Maturidade', 'Controle de Integração']
    },
    {
      id: 'multimodal',
      title: 'Capacidades Multimodais',
      description: 'Análise das capacidades multimodais nativas, suporte a diferentes tipos de mídia e integração entre modalidades.',
      icon: '🎭',
      path: '/diferencas/multimodal',
      color: 'pink',
      features: ['Suporte Nativo', 'Múltiplas Modalidades', 'Integração Fluida', 'Performance Multimodal']
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
      },
      orange: {
        bg: 'bg-orange-50 dark:bg-orange-950',
        border: 'border-orange-200 dark:border-orange-800',
        text: 'text-orange-900 dark:text-orange-100',
        accent: 'text-orange-600 dark:text-orange-400',
        hover: 'hover:bg-orange-100 dark:hover:bg-orange-900'
      },
      pink: {
        bg: 'bg-pink-50 dark:bg-pink-950',
        border: 'border-pink-200 dark:border-pink-800',
        text: 'text-pink-900 dark:text-pink-100',
        accent: 'text-pink-600 dark:text-pink-400',
        hover: 'hover:bg-pink-100 dark:hover:bg-pink-900'
      }
    };
    return colorMap[color as keyof typeof colorMap];
  };

  return (
    <PageTemplate 
      title="Principais Diferenças" 
      subtitle="Explore as diferenças fundamentais entre LangChain e Agno em diferentes aspectos"
    >
      <div className="space-y-8">
        {/* Introduction */}
        <div className="card p-8 text-center">
          <h2 className="text-2xl font-bold gradient-text mb-4">Aspectos de Diferenciação</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Descubra as diferenças fundamentais entre LangChain e Agno através de cinco aspectos essenciais, 
            cada um oferecendo insights únicos sobre as características distintivas de cada framework.
          </p>
        </div>

        {/* Difference Type Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {differenceTypes.map((type) => {
            const colors = getColorClasses(type.color);
            return (
              <Link
                key={type.id}
                to={type.path}
                className={`block p-6 rounded-xl border-2 transition-all duration-300 transform hover:scale-105 hover:shadow-xl ${
                  colors.bg
                } ${
                  colors.border
                } ${
                  colors.hover
                } group`}
              >
                <div className="text-center mb-4">
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    {type.icon}
                  </div>
                  <h3 className={`text-xl font-bold mb-2 ${colors.text}`}>
                    {type.title}
                  </h3>
                </div>
                
                <p className={`text-sm leading-relaxed mb-4 ${colors.text}`}>
                  {type.description}
                </p>
                
                <div className="space-y-2">
                  <h4 className={`font-semibold text-xs uppercase tracking-wide ${colors.accent}`}>
                    Principais Aspectos:
                  </h4>
                  <ul className="space-y-1">
                    {type.features.map((feature, index) => (
                      <li key={index} className={`flex items-center text-xs ${colors.text}`}>
                        <span className={`w-1.5 h-1.5 rounded-full mr-2 ${colors.accent.replace('text-', 'bg-')}`}></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className={`mt-4 flex items-center justify-center font-semibold text-sm ${colors.accent} group-hover:translate-x-2 transition-transform duration-300`}>
                  Explorar Diferenças →
                </div>
              </Link>
            );
          })}
        </div>

        {/* Quick Navigation */}
        <div className="card p-6">
          <h3 className="text-xl font-bold gradient-text mb-4">Navegação Rápida</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3">
            <Link 
              to="/diferencas/filosofia" 
              className="flex items-center p-3 rounded-lg bg-blue-50 dark:bg-blue-950 hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors duration-200"
            >
              <span className="text-xl mr-2">🎨</span>
              <span className="font-medium text-blue-900 dark:text-blue-100 text-sm">Filosofia</span>
            </Link>
            <Link 
              to="/diferencas/orquestracao" 
              className="flex items-center p-3 rounded-lg bg-green-50 dark:bg-green-950 hover:bg-green-100 dark:hover:bg-green-900 transition-colors duration-200"
            >
              <span className="text-xl mr-2">🎼</span>
              <span className="font-medium text-green-900 dark:text-green-100 text-sm">Orquestração</span>
            </Link>
            <Link 
              to="/diferencas/performance" 
              className="flex items-center p-3 rounded-lg bg-purple-50 dark:bg-purple-950 hover:bg-purple-100 dark:hover:bg-purple-900 transition-colors duration-200"
            >
              <span className="text-xl mr-2">⚡</span>
              <span className="font-medium text-purple-900 dark:text-purple-100 text-sm">Performance</span>
            </Link>
            <Link 
              to="/diferencas/ecossistema" 
              className="flex items-center p-3 rounded-lg bg-orange-50 dark:bg-orange-950 hover:bg-orange-100 dark:hover:bg-orange-900 transition-colors duration-200"
            >
              <span className="text-xl mr-2">🌐</span>
              <span className="font-medium text-orange-900 dark:text-orange-100 text-sm">Ecossistema</span>
            </Link>
            <Link 
              to="/diferencas/multimodal" 
              className="flex items-center p-3 rounded-lg bg-pink-50 dark:bg-pink-950 hover:bg-pink-100 dark:hover:bg-pink-900 transition-colors duration-200"
            >
              <span className="text-xl mr-2">🎭</span>
              <span className="font-medium text-pink-900 dark:text-pink-100 text-sm">Multimodal</span>
            </Link>
          </div>
        </div>

        {/* Additional Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card p-6">
            <h4 className="text-lg font-bold gradient-text mb-3">🔍 Análise Profunda</h4>
            <p className="text-gray-700 dark:text-gray-300">
              Cada seção oferece uma análise detalhada com exemplos práticos, métricas comparativas 
              e recomendações específicas para diferentes cenários de uso.
            </p>
          </div>
          <div className="card p-6">
            <h4 className="text-lg font-bold gradient-text mb-3">📊 Dados Baseados em Evidências</h4>
            <p className="text-gray-700 dark:text-gray-300">
              Todas as comparações são fundamentadas em benchmarks reais, análise de código 
              e experiência prática com ambos os frameworks.
            </p>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
};

export default DifferencesPage;