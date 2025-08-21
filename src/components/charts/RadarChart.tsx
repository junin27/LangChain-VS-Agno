import React, { useState, useEffect } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Legend } from 'recharts';
import { mockScores } from '../../data/mock/comparison';

interface RadarChartComponentProps {
  className?: string;
}

const RadarChartComponent: React.FC<RadarChartComponentProps> = ({ className = '' }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const data = mockScores.map(score => ({
    criterion: score.criterion,
    LangChain: score.langchain,
    Agno: score.agno
  }));

  const getMaxCharsPerLine = () => {
    if (windowWidth < 640) return 6; // sm
    if (windowWidth < 768) return 8; // md
    if (windowWidth < 1024) return 10; // lg
    return 12; // xl e acima
  };

  return (
    <div className={`card p-6 ${className}`}>
      <h3 className="text-lg font-semibold mb-4">Comparação por Radar</h3>
      <div className="h-96">
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
