import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface BenchmarkBarChartProps {
  className?: string;
  data?: {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      backgroundColor: string;
      borderColor: string;
      borderWidth: number;
    }[];
  };
}

const BenchmarkBarChart: React.FC<BenchmarkBarChartProps> = ({ className = '', data: propData }) => {
  // Convert prop data to recharts format or use default data
  const data = propData ? propData.labels.map((label, index) => ({
    metric: label,
    [propData.datasets[0]?.label || 'Agno']: propData.datasets[0]?.data[index] || 0,
    [propData.datasets[1]?.label || 'LangGraph']: propData.datasets[1]?.data[index] || 0
  })) : [
    {
      metric: 'Tempo de Instanciação',
      'Agno (Normalizado)': 100,
      'LangGraph (Relativo)': 0.01
    },
    {
      metric: 'Uso de Memória',
      'Agno (Normalizado)': 100,
      'LangGraph (Relativo)': 2.7
    },
    {
      metric: 'Latência',
      'Agno (Normalizado)': 100,
      'LangGraph (Relativo)': 25
    },
    {
      metric: 'Overhead Framework',
      'Agno (Normalizado)': 100,
      'LangGraph (Relativo)': 15
    }
  ];

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white dark:bg-gray-800 p-3 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg">
          <p className="font-semibold text-gray-900 dark:text-gray-100">{label}</p>
          {payload.map((entry: any, index: number) => (
            <p key={index} style={{ color: entry.color }} className="text-sm">
              {entry.dataKey}: {entry.value}%
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className={`${className}`}>
      <h3 className="text-xl font-bold mb-4 gradient-text">Métricas de Eficiência</h3>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 60 }}>
            <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
            <XAxis 
              dataKey="metric" 
              angle={-45}
              textAnchor="end"
              height={80}
              interval={0}
              tick={{ fontSize: 12, fill: 'currentColor' }}
            />
            <YAxis 
              domain={[0, 100]}
              tick={{ fontSize: 12, fill: 'currentColor' }}
              label={{ value: 'Performance (%)', angle: -90, position: 'insideLeft' }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <Bar 
              dataKey="Agno (Normalizado)" 
              fill="rgb(34 197 94)"
              name="Agno (Normalizado)"
              radius={[2, 2, 0, 0]}
            />
            <Bar 
              dataKey="LangGraph (Relativo)" 
              fill="rgb(59 130 246)"
              name="LangGraph (Relativo ao Agno)"
              radius={[2, 2, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
        Agno normalizado como 100%. LangGraph mostrado relativamente ao Agno.
      </p>
    </div>
  );
};

export default BenchmarkBarChart;