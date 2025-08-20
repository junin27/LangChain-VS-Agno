import React from 'react';
import ComparisonBuilder from '../components/comparison/ComparisonBuilder';
import RadarChartComponent from '../components/charts/RadarChart';
import BarChartComponent from '../components/charts/BarChart';

const ComparisonBuilderPage: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">Construtor de Comparações</h1>
        <p className="text-lg text-muted-foreground max-w-3xl">
          Crie comparações personalizadas entre LangChain e Agno selecionando 
          critérios específicos. Exporte os resultados em CSV ou PNG para suas 
          apresentações e análises.
        </p>
      </div>

      <ComparisonBuilder />

      {/* Charts Section */}
      <div className="space-y-6">
        <div className="border-t border-border pt-8">
          <h2 className="text-2xl font-semibold mb-6">Visualizações Gráficas</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <RadarChartComponent />
            <BarChartComponent />
          </div>
        </div>
      </div>

      {/* Instructions */}
      <div className="card p-6 bg-muted/30">
        <h3 className="text-lg font-semibold mb-3">Como Usar</h3>
        <div className="space-y-2 text-sm text-muted-foreground">
          <p>1. <strong>Selecione Critérios:</strong> Marque os critérios que deseja comparar</p>
          <p>2. <strong>Configure Opções:</strong> Escolha se deseja incluir observações</p>
          <p>3. <strong>Visualize:</strong> A tabela de comparação será atualizada automaticamente</p>
          <p>4. <strong>Exporte:</strong> Use os botões de exportação para salvar os resultados</p>
        </div>
      </div>
    </div>
  );
};

export default ComparisonBuilderPage;
