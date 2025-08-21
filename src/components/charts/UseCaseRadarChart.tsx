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

interface RadarDataPoint {
  subject: string;
  [key: string]: string | number;
}

interface TooltipPayload {
  dataKey: string;
  value: number;
  color: string;
}

interface CustomTooltipProps {
  active?: boolean;
  payload?: TooltipPayload[];
  label?: string;
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
  const radarData: RadarDataPoint[] = chartData.labels.map((label, index) => {
    const dataPoint: RadarDataPoint = { subject: label };
    chartData.datasets.forEach(dataset => {
      dataPoint[dataset.label] = dataset.data[index];
    });
    return dataPoint;
  });

  const CustomTooltip: React.FC<CustomTooltipProps> = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white dark:bg-gray-800 p-3 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg">
          <p className="font-semibold text-gray-900 dark:text-gray-100">{label}</p>
          {payload.map((entry, index) => (
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
    <div className="w-full h-96 bg-white dark:bg-gray-900 rounded-lg p-4">
      <h3 className="text-lg font-semibold mb-4 text-center text-gray-900 dark:text-gray-100">
        Adequação por Categoria de Uso
      </h3>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart data={radarData} margin={{ top: 20, right: 30, bottom: 20, left: 30 }}>
          <PolarGrid className="stroke-gray-300 dark:stroke-gray-600 opacity-30" />
          <PolarAngleAxis
            dataKey="subject" 
            className="text-xs"
            tick={{
              fontSize: 12,
              fill: 'currentColor',
              textAnchor: 'middle',
              dominantBaseline: 'middle'
            }}
          />
          <PolarRadiusAxis 
            angle={90} 
            domain={[0, 100]} 
            className="text-xs"
            tick={{
              fontSize: 10,
              fill: 'currentColor'
            }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend 
            wrapperStyle={{
              paddingTop: '20px',
              color: 'currentColor'
            }}
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