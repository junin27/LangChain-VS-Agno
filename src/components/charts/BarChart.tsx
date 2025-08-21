import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { mockScores } from '../../data/mock/comparison';

interface BarChartComponentProps {
  className?: string;
}

const BarChartComponent: React.FC<BarChartComponentProps> = ({ className = '' }) => {
  const data = mockScores.map(score => ({
    criterion: score.criterion,
    LangChain: score.langchain,
    Agno: score.agno
  }));

  return (
    <div className={`card p-6 ${className}`}>
      <h3 className="text-lg font-semibold mb-4">Comparação por Barras</h3>
      <div className="h-96">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 60 }}>
            <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
            <XAxis 
              dataKey="criterion" 
              angle={-45}
              textAnchor="end"
              height={100}
              interval={0}
              tick={{ fontSize: 10, fill: 'currentColor' }}
              tickFormatter={(value) => {
                // Quebra palavras longas em múltiplas linhas
                if (value.length > 10) {
                  const words = value.split(' ');
                  if (words.length > 1) {
                    return words.join(' ');
                  } else {
                    // Para palavras muito longas, quebra no meio
                    const mid = Math.ceil(value.length / 2);
                    return value.slice(0, mid) + '-' + value.slice(mid);
                  }
                }
                return value;
              }}
            />
            <YAxis 
              domain={[0, 10]}
              tick={{ fontSize: 12, fill: 'currentColor' }}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: 'var(--color-background)',
                border: '1px solid var(--color-border)',
                borderRadius: '8px'
              }}
            />
            <Legend />
            <Bar 
              dataKey="LangChain" 
              fill="rgb(59 130 246)"
              name="LangChain"
              radius={[2, 2, 0, 0]}
            />
            <Bar 
              dataKey="Agno" 
              fill="rgb(16 185 129)"
              name="Agno"
              radius={[2, 2, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <p className="text-sm text-muted-foreground mt-2">
        Escala de 0-10 pontos por critério. Dados fictícios para demonstração.
      </p>
    </div>
  );
};

export default BarChartComponent;
