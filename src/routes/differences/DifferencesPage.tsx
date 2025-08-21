import React from 'react';
import { Link } from 'react-router-dom';
import PageTemplate from '../../components/PageTemplate';

const DifferencesPage: React.FC = () => {
  const differenceTypes = [
    {
      id: 'philosophy',
      title: 'Filosofia de Design',
      description: 'Explore as diferentes filosofias e abordagens de design entre LangChain e Agno. Analise princípios fundamentais, estratégias arquiteturais e como cada framework aborda a complexidade versus simplicidade no desenvolvimento de aplicações de IA.',
      path: '/diferencas/filosofia'
    },
    {
      id: 'orchestration',
      title: 'Abordagens de Orquestração',
      description: 'Compare as estratégias de orquestração de agentes, fluxos de trabalho e gerenciamento de estado. Entenda como cada framework coordena tarefas complexas e gerencia a execução de múltiplos componentes de IA.',
      path: '/diferencas/orquestracao'
    },
    {
      id: 'performance',
      title: 'Performance em Produção',
      description: 'Análise detalhada de performance em cenários de produção reais. Inclui benchmarks comparativos, análise de escalabilidade, otimizações específicas e métricas de desempenho em diferentes cargas de trabalho.',
      path: '/diferencas/performance'
    },
    {
      id: 'ecosystem',
      title: 'Robustez do Ecossistema',
      description: 'Compare a robustez dos ecossistemas, amplitude de integrações disponíveis, suporte da comunidade e maturidade das plataformas. Avalie qual framework oferece melhor suporte para suas necessidades específicas.',
      path: '/diferencas/ecossistema'
    },
    {
      id: 'multimodal',
      title: 'Capacidades Multimodais',
      description: 'Analise as capacidades multimodais nativas de cada framework. Compare o suporte a diferentes tipos de mídia, integração entre modalidades e performance em aplicações que combinam texto, imagem, áudio e vídeo.',
      path: '/diferencas/multimodal'
    }
  ];



  return (
    <PageTemplate 
      title="Principais Diferenças" 
      subtitle="Descubra as diferenças fundamentais entre LangChain e Agno através de cinco aspectos essenciais, cada um oferecendo insights únicos sobre as características distintivas de cada framework."
    >
      <div className="space-y-8">


        {/* Difference Type Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differenceTypes.map((type) => (
            <Link key={type.id} to={type.path} className="card-hover p-8 group">
              <div className="mb-4">
                <h3 className="text-2xl font-bold gradient-text">
                  {type.title}
                </h3>
              </div>
              <p className="text-gray-800 dark:text-gray-200 leading-relaxed">
                {type.description}
              </p>
              <div className="mt-6 flex items-center text-blue-700 dark:text-blue-300 font-semibold transition-transform duration-300 bg-blue-100 dark:bg-blue-900 px-4 py-2 rounded">
                EXPLORAR DIFERENÇAS
              </div>
            </Link>
          ))}
        </div>


      </div>
    </PageTemplate>
  );
};

export default DifferencesPage;