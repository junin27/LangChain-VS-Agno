import React, { useState, useEffect } from 'react';
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
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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

  const getMaxCharsPerLine = () => {
    if (windowWidth < 640) return 6; // sm
    if (windowWidth < 768) return 8; // md
    if (windowWidth < 1024) return 10; // lg
    return 12; // xl e acima
  };

  return (
    <div className={`${className}`}>
      <h3 className="text-xl font-bold mb-4 gradient-text">Comparação de Performance</h3>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart data={data}>
            <PolarGrid className="opacity-30" />
            <PolarAngleAxis 
              dataKey="criterion" 
              radius={160}
              tick={{ 
                fontSize: windowWidth < 640 ? 8 : 10, 
                fill: 'currentColor',
                textAnchor: 'middle',
                dominantBaseline: 'middle'
              }}
              tickFormatter={(value) => {
                const maxChars = getMaxCharsPerLine();
                
                // Se a palavra é menor que o limite, retorna como está
                if (value.length <= maxChars) {
                  return value;
                }
                
                // Tenta quebrar por espaços primeiro
                const words = value.split(' ');
                if (words.length > 1) {
                  let lines = [];
                  let currentLine = '';
                  
                  for (const word of words) {
                    if ((currentLine + ' ' + word).length <= maxChars) {
                      currentLine = currentLine ? currentLine + ' ' + word : word;
                    } else {
                      if (currentLine) lines.push(currentLine);
                      currentLine = word;
                    }
                  }
                  if (currentLine) lines.push(currentLine);
                  return lines.join('\n');
                }
                
                // Para palavras únicas muito longas, quebra em pedaços
                const chunks = [];
                for (let i = 0; i < value.length; i += maxChars) {
                  chunks.push(value.slice(i, i + maxChars));
                }
                return chunks.join('\n');
              }}
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