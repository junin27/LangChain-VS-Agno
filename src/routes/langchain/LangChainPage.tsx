import React from 'react';
import { Link } from 'react-router-dom';
import PageTemplate from '../../components/PageTemplate';

const LangChainPage: React.FC = () => {
  return (
    <PageTemplate 
      title="LangChain" 
      subtitle="Análise completa da biblioteca LangChain para desenvolvimento de aplicações de IA"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Link to="/langchain/arquitetura" className="card p-4 hover:shadow-lg transition-shadow">
          <h3 className="font-semibold text-primary">Arquitetura e Componentes</h3>
          <p className="text-sm text-muted-foreground mt-1">Estrutura modular e componentes fundamentais</p>
        </Link>
        
        <Link to="/langchain/agentes" className="card p-4 hover:shadow-lg transition-shadow">
          <h3 className="font-semibold text-primary">Agentes e Ferramentas</h3>
          <p className="text-sm text-muted-foreground mt-1">Sistema de agentes e integração de ferramentas</p>
        </Link>
        
        <Link to="/langchain/memoria" className="card p-4 hover:shadow-lg transition-shadow">
          <h3 className="font-semibold text-primary">Gerenciamento de Memória</h3>
          <p className="text-sm text-muted-foreground mt-1">Estratégias de memória e contexto</p>
        </Link>
        
        <Link to="/langchain/rag" className="card p-4 hover:shadow-lg transition-shadow">
          <h3 className="font-semibold text-primary">Implementação de RAG</h3>
          <p className="text-sm text-muted-foreground mt-1">Retrieval Augmented Generation</p>
        </Link>
        
        <Link to="/langchain/ecossistema" className="card p-4 hover:shadow-lg transition-shadow">
          <h3 className="font-semibold text-primary">Ecossistema e Integrações</h3>
          <p className="text-sm text-muted-foreground mt-1">Plugins, integrações e comunidade</p>
        </Link>
        
        <Link to="/langchain/observabilidade" className="card p-4 hover:shadow-lg transition-shadow">
          <h3 className="font-semibold text-primary">Observabilidade</h3>
          <p className="text-sm text-muted-foreground mt-1">Monitoramento e avaliação</p>
        </Link>
        
        <Link to="/langchain/desempenho" className="card p-4 hover:shadow-lg transition-shadow">
          <h3 className="font-semibold text-primary">Desempenho e Escalabilidade</h3>
          <p className="text-sm text-muted-foreground mt-1">Performance, overhead e otimização</p>
        </Link>
        
        <Link to="/langchain/implantacao" className="card p-4 hover:shadow-lg transition-shadow">
          <h3 className="font-semibold text-primary">Opções de Implantação</h3>
          <p className="text-sm text-muted-foreground mt-1">LangGraph Platform, LangServe e deployment</p>
        </Link>
        
        <Link to="/langchain/maturidade" className="card p-4 hover:shadow-lg transition-shadow">
          <h3 className="font-semibold text-primary">Maturidade e Comunidade</h3>
          <p className="text-sm text-muted-foreground mt-1">Estabilidade, engajamento da comunidade e licenciamento</p>
        </Link>
      </div>
    </PageTemplate>
  );
};

export default LangChainPage;
