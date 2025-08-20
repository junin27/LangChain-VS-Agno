import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Legend } from 'recharts';

interface BenchmarkRadarChartProps {
  className?: string;
  data?: {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      backgroundColor: string;
      borderColor: string;
      borderWidth: number;
      pointBackgroundColor: string;
      pointBorderColor: string;
      pointHoverBackgroundColor: string;
      pointHoverBorderColor: string;
    }[];
  };
}

const BenchmarkRadarChart: React.FC<BenchmarkRadarChartProps> = ({ className = '', data: propData }) => {
  // Convert prop data to recharts format or use default data
  const data = propData ? propData.labels.map((label, index) => ({
    criterion: label,
    Agno: propData.datasets[0]?.data[index] || 0,
    LangGraph: propData.datasets[1]?.data[index] || 0
  })) : [
    {
      criterion: 'Velocidade',
      Agno: 95,
      LangGraph: 25
    },
    {
      criterion: 'Eficiência de Memória',
      Agno: 97,
      LangGraph: 30
    },
    {
      criterion: 'Simplicidade',
      Agno: 90,
      LangGraph: 60
    },
    {
      criterion: 'Performance',
      Agno: 95,
      LangGraph: 45
    },
    {
      criterion: 'Escalabilidade',
      Agno: 88,
      LangGraph: 70
    }
  ];

  return (
    <div className={`${className}`}>
      <h3 className="text-xl font-bold mb-4 gradient-text">Comparação de Performance</h3>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart data={data}>
            <PolarGrid className="opacity-30" />
            <PolarAngleAxis 
              dataKey="criterion" 
              tick={{ fontSize: 12, fill: 'currentColor' }}
            />
            <PolarRadiusAxis 
              angle={90} 
              domain={[0, 100]}
              tick={{ fontSize: 10, fill: 'currentColor' }}
            />
            <Radar
              name="LangGraph"
              dataKey="LangGraph"
              stroke="rgb(59 130 246)"
              fill="rgb(59 130 246)"
              fillOpacity={0.2}
              strokeWidth={2}
            />
            <Radar
              name="Agno"
              dataKey="Agno"
              stroke="rgb(34 197 94)"
              fill="rgb(34 197 94)"
              fillOpacity={0.2}
              strokeWidth={2}
            />
            <Legend />
          </RadarChart>
        </ResponsiveContainer>
      </div>
      <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
        Escala de 0-100 pontos por critério. Baseado em benchmarks reais de performance.
      </p>
    </div>
  );
};

export default BenchmarkRadarChart;