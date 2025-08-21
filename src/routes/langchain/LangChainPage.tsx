import React from 'react';
import { Link } from 'react-router-dom';
import PageTemplate from '../../components/PageTemplate';

const LangChainPage: React.FC = () => {
  return (
    <PageTemplate 
      title="LangChain" 
      subtitle="Análise completa da biblioteca LangChain para desenvolvimento de aplicações de IA"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Link to="/langchain/arquitetura" className="card-hover p-8 group">
          <div className="mb-4">
            <h3 className="text-2xl font-bold gradient-text">
              Arquitetura e Componentes
            </h3>
          </div>
          <p className="text-gray-800 dark:text-gray-200 leading-relaxed">
            Estrutura modular e componentes fundamentais do LangChain.
          </p>
          <div className="mt-6 flex items-center text-blue-700 dark:text-blue-300 font-semibold transition-transform duration-300 bg-blue-100 dark:bg-blue-900 px-4 py-2 rounded">
            EXPLORAR ARQUITETURA
          </div>
        </Link>
        
        <Link to="/langchain/agentes" className="card-hover p-8 group">
          <div className="mb-4">
            <h3 className="text-2xl font-bold gradient-text">
              Agentes e Ferramentas
            </h3>
          </div>
          <p className="text-gray-800 dark:text-gray-200 leading-relaxed">
            Sistema de agentes autônomos e integração de ferramentas externas.
          </p>
          <div className="mt-6 flex items-center text-blue-700 dark:text-blue-300 font-semibold transition-transform duration-300 bg-blue-100 dark:bg-blue-900 px-4 py-2 rounded">
            EXPLORAR AGENTES
          </div>
        </Link>
        
        <Link to="/langchain/memoria" className="card-hover p-8 group">
          <div className="mb-4">
            <h3 className="text-2xl font-bold gradient-text">
              Gerenciamento de Memória
            </h3>
          </div>
          <p className="text-gray-800 dark:text-gray-200 leading-relaxed">
            Estratégias de memória e manutenção de contexto em conversações.
          </p>
          <div className="mt-6 flex items-center text-blue-700 dark:text-blue-300 font-semibold transition-transform duration-300 bg-blue-100 dark:bg-blue-900 px-4 py-2 rounded">
            EXPLORAR MEMÓRIA
          </div>
        </Link>
        
        <Link to="/langchain/rag" className="card-hover p-8 group">
          <div className="mb-4">
            <h3 className="text-2xl font-bold gradient-text">
              Implementação de RAG
            </h3>
          </div>
          <p className="text-gray-800 dark:text-gray-200 leading-relaxed">
            Retrieval Augmented Generation para enriquecimento de contexto.
          </p>
          <div className="mt-6 flex items-center text-blue-700 dark:text-blue-300 font-semibold transition-transform duration-300 bg-blue-100 dark:bg-blue-900 px-4 py-2 rounded">
            EXPLORAR RAG
          </div>
        </Link>
        
        <Link to="/langchain/ecossistema" className="card-hover p-8 group">
          <div className="mb-4">
            <h3 className="text-2xl font-bold gradient-text">
              Ecossistema e Integrações
            </h3>
          </div>
          <p className="text-gray-800 dark:text-gray-200 leading-relaxed">
            Plugins, integrações e comunidade ativa de desenvolvedores.
          </p>
          <div className="mt-6 flex items-center text-blue-700 dark:text-blue-300 font-semibold transition-transform duration-300 bg-blue-100 dark:bg-blue-900 px-4 py-2 rounded">
            EXPLORAR ECOSSISTEMA
          </div>
        </Link>
        
        <Link to="/langchain/observabilidade" className="card-hover p-8 group">
          <div className="mb-4">
            <h3 className="text-2xl font-bold gradient-text">
              Observabilidade
            </h3>
          </div>
          <p className="text-gray-800 dark:text-gray-200 leading-relaxed">
            Monitoramento, debugging e avaliação de aplicações em produção.
          </p>
          <div className="mt-6 flex items-center text-blue-700 dark:text-blue-300 font-semibold transition-transform duration-300 bg-blue-100 dark:bg-blue-900 px-4 py-2 rounded">
            EXPLORAR OBSERVABILIDADE
          </div>
        </Link>
        
        <Link to="/langchain/desempenho" className="card-hover p-8 group">
          <div className="mb-4">
            <h3 className="text-2xl font-bold gradient-text">
              Desempenho e Escalabilidade
            </h3>
          </div>
          <p className="text-gray-800 dark:text-gray-200 leading-relaxed">
            Performance, overhead e estratégias de otimização.
          </p>
          <div className="mt-6 flex items-center text-blue-700 dark:text-blue-300 font-semibold transition-transform duration-300 bg-blue-100 dark:bg-blue-900 px-4 py-2 rounded">
            EXPLORAR PERFORMANCE
          </div>
        </Link>
        
        <Link to="/langchain/implantacao" className="card-hover p-8 group">
          <div className="mb-4">
            <h3 className="text-2xl font-bold gradient-text">
              Opções de Implantação
            </h3>
          </div>
          <p className="text-gray-800 dark:text-gray-200 leading-relaxed">
            LangGraph Platform, LangServe e estratégias de deployment.
          </p>
          <div className="mt-6 flex items-center text-blue-700 dark:text-blue-300 font-semibold transition-transform duration-300 bg-blue-100 dark:bg-blue-900 px-4 py-2 rounded">
            EXPLORAR DEPLOYMENT
          </div>
        </Link>
        
        <Link to="/langchain/maturidade" className="card-hover p-8 group">
          <div className="mb-4">
            <h3 className="text-2xl font-bold gradient-text">
              Maturidade e Comunidade
            </h3>
          </div>
          <p className="text-gray-800 dark:text-gray-200 leading-relaxed">
            Estabilidade, engajamento da comunidade e licenciamento.
          </p>
          <div className="mt-6 flex items-center text-blue-700 dark:text-blue-300 font-semibold transition-transform duration-300 bg-blue-100 dark:bg-blue-900 px-4 py-2 rounded">
            EXPLORAR MATURIDADE
          </div>
        </Link>
      </div>
    </PageTemplate>
  );
};

export default LangChainPage;
