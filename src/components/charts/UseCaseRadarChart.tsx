import React from 'react';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Legend,
  Tooltip
} from 'recharts';

interface UseCaseRadarChartProps {
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

const UseCaseRadarChart: React.FC<UseCaseRadarChartProps> = ({ data }) => {
  // Dados padrão caso não sejam fornecidos
  const defaultData = {
    labels: ['Complexidade', 'Performance', 'Prototipagem', 'Multimodalidade', 'Observabilidade'],
    datasets: [
      {
        label: 'Agno',
        data: [70, 95, 90, 95, 75],
        backgroundColor: 'rgba(34, 197, 94, 0.2)',
        borderColor: 'rgba(34, 197, 94, 1)',
        borderWidth: 2,
        pointBackgroundColor: 'rgba(34, 197, 94, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(34, 197, 94, 1)'
      },
      {
        label: 'LangChain',
        data: [95, 70, 75, 60, 90],
        backgroundColor: 'rgba(59, 130, 246, 0.2)',
        borderColor: 'rgba(59, 130, 246, 1)',
        borderWidth: 2,
        pointBackgroundColor: 'rgba(59, 130, 246, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(59, 130, 246, 1)'
      }
    ]
  };

  const chartData = data || defaultData;

  // Converter dados para formato do recharts
  const radarData = chartData.labels.map((label, index) => {
    const dataPoint: any = { subject: label };
    chartData.datasets.forEach(dataset => {
      dataPoint[dataset.label] = dataset.data[index];
    });
    return dataPoint;
  });

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white dark:bg-gray-800 p-3 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg">
          <p className="font-semibold text-gray-900 dark:text-gray-100">{`${label}`}</p>
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
        Adequação por Categoria de Uso
      </h3>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart data={radarData} margin={{ top: 20, right: 30, bottom: 20, left: 30 }}>
          <PolarGrid className="stroke-gray-300 dark:stroke-gray-600" />
          <PolarAngleAxis 
            dataKey="subject" 
            className="text-xs fill-gray-700 dark:fill-gray-300"
            tick={{ fontSize: 12 }}
          />
          <PolarRadiusAxis 
            angle={90} 
            domain={[0, 100]} 
            className="text-xs fill-gray-500 dark:fill-gray-400"
            tick={{ fontSize: 10 }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend 
            wrapperStyle={{ paddingTop: '20px' }}
            iconType="circle"
          />
          {chartData.datasets.map((dataset, index) => (
            <Radar
              key={index}
              name={dataset.label}
              dataKey={dataset.label}
              stroke={dataset.borderColor}
              fill={dataset.backgroundColor}
              strokeWidth={dataset.borderWidth}
              dot={{ fill: dataset.pointBackgroundColor, strokeWidth: 2, r: 4 }}
            />
          ))}
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default UseCaseRadarChart;