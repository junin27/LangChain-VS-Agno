import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

interface UseCaseBarChartProps {
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

const UseCaseBarChart: React.FC<UseCaseBarChartProps> = ({ data }) => {
  // Dados padrão caso não sejam fornecidos
  const defaultData = {
    labels: ['Agentes Complexos', 'RAG Performance', 'Prototipagem', 'Multi-Agente', 'Multimodal', 'Custos/Latência', 'Observabilidade'],
    datasets: [
      {
        label: 'Adequação Agno (%)',
        data: [70, 90, 95, 85, 95, 95, 75],
        backgroundColor: 'rgba(34, 197, 94, 0.8)',
        borderColor: 'rgba(34, 197, 94, 1)',
        borderWidth: 1
      },
      {
        label: 'Adequação LangChain (%)',
        data: [95, 75, 80, 85, 60, 70, 90],
        backgroundColor: 'rgba(59, 130, 246, 0.8)',
        borderColor: 'rgba(59, 130, 246, 1)',
        borderWidth: 1
      }
    ]
  };

  const chartData = data || defaultData;

  // Converter dados para formato do recharts
  const barData = chartData.labels.map((label, index) => {
    const dataPoint: any = { name: label };
    chartData.datasets.forEach(dataset => {
      dataPoint[dataset.label] = dataset.data[index];
    });
    return dataPoint;
  });

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white dark:bg-gray-800 p-3 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg">
          <p className="font-semibold text-gray-900 dark:text-gray-100 mb-2">{`${label}`}</p>
          {payload.map((entry: any, index: number) => (
            <p key={index} style={{ color: entry.color }} className="text-sm">
              {`${entry.dataKey}: ${entry.value}%`}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full h-96">
      <h3 className="text-lg font-semibold mb-4 text-center text-gray-900 dark:text-gray-100">
        Adequação por Cenário de Uso
      </h3>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={barData}
          margin={{ top: 20, right: 30, left: 20, bottom: 60 }}
        >
          <CartesianGrid strokeDasharray="3 3" className="stroke-gray-300 dark:stroke-gray-600" />
          <XAxis 
            dataKey="name" 
            className="text-xs fill-gray-700 dark:fill-gray-300"
            tick={{ fontSize: 10 }}
            angle={-45}
            textAnchor="end"
            height={80}
          />
          <YAxis 
            className="text-xs fill-gray-700 dark:fill-gray-300"
            tick={{ fontSize: 12 }}
            domain={[0, 100]}
            label={{ value: 'Adequação (%)', angle: -90, position: 'insideLeft' }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend 
            wrapperStyle={{ paddingTop: '20px' }}
            iconType="rect"
          />
          {chartData.datasets.map((dataset, index) => (
            <Bar
              key={index}
              dataKey={dataset.label}
              fill={dataset.backgroundColor}
              stroke={dataset.borderColor}
              strokeWidth={dataset.borderWidth}
              radius={[2, 2, 0, 0]}
            />
          ))}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default UseCaseBarChart;