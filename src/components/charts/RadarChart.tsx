import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Legend } from 'recharts';
import { mockScores } from '../../data/mock/comparison';

interface RadarChartComponentProps {
  className?: string;
}

const RadarChartComponent: React.FC<RadarChartComponentProps> = ({ className = '' }) => {
  const data = mockScores.map(score => ({
    criterion: score.criterion,
    LangChain: score.langchain,
    Agno: score.agno
  }));

  return (
    <div className={`card p-6 ${className}`}>
      <h3 className="text-lg font-semibold mb-4">Comparação por Radar</h3>
      <div className="h-96">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart data={data}>
            <PolarGrid className="opacity-30" />
            <PolarAngleAxis 
              dataKey="criterion" 
              tick={{ fontSize: 12, fill: 'currentColor' }}
            />
            <PolarRadiusAxis 
              angle={90} 
              domain={[0, 10]}
              tick={{ fontSize: 10, fill: 'currentColor' }}
            />
            <Radar
              name="LangChain"
              dataKey="LangChain"
              stroke="rgb(59 130 246)"
              fill="rgb(59 130 246)"
              fillOpacity={0.1}
              strokeWidth={2}
            />
            <Radar
              name="Agno"
              dataKey="Agno"
              stroke="rgb(16 185 129)"
              fill="rgb(16 185 129)"
              fillOpacity={0.1}
              strokeWidth={2}
            />
            <Legend />
          </RadarChart>
        </ResponsiveContainer>
      </div>
      <p className="text-sm text-muted-foreground mt-2">
        Escala de 0-10 pontos por critério. Dados fictícios para demonstração.
      </p>
    </div>
  );
};

export default RadarChartComponent;
