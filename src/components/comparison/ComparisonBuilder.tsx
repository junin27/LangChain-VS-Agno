import React, { useState, useMemo } from 'react';
import { mockComparisons } from '../../data/mock/comparison';
import type { SupportStatus } from '../../types/content';

interface ComparisonBuilderProps {
  className?: string;
}

const getSupportStatusBadge = (status: SupportStatus | number | string) => {
  if (typeof status === 'number') {
    return <span className="badge badge-primary">{status}/10</span>;
  }
  
  if (typeof status === 'string' && !['suportado', 'parcial', 'plugin', 'desconhecido', 'nao_suportado'].includes(status)) {
    return <span className="badge">{status}</span>;
  }

  const statusMap = {
    'suportado': 'badge-supported',
    'parcial': 'badge-partial', 
    'plugin': 'badge-plugin',
    'desconhecido': 'badge-unknown',
    'nao_suportado': 'badge-not-supported'
  };

  const badgeClass = statusMap[status as SupportStatus] || 'badge-unknown';
  const statusText = {
    'suportado': 'Suportado',
    'parcial': 'Parcial',
    'plugin': 'Plugin',
    'desconhecido': 'Desconhecido',
    'nao_suportado': 'Não Suportado'
  };

  return (
    <span className={`badge ${badgeClass}`}>
      {statusText[status as SupportStatus] || status}
    </span>
  );
};

const ComparisonBuilder: React.FC<ComparisonBuilderProps> = ({ className = '' }) => {
  const [selectedCriteria, setSelectedCriteria] = useState<string[]>([]);
  const [includeNotes, setIncludeNotes] = useState(true);

  const availableCriteria = useMemo(() => {
    return Array.from(new Set(mockComparisons.map(row => row.criterion)));
  }, []);

  const filteredComparisons = useMemo(() => {
    if (selectedCriteria.length === 0) return mockComparisons;
    return mockComparisons.filter(row => selectedCriteria.includes(row.criterion));
  }, [selectedCriteria]);

  const toggleCriterion = (criterion: string) => {
    setSelectedCriteria(prev => 
      prev.includes(criterion)
        ? prev.filter(c => c !== criterion)
        : [...prev, criterion]
    );
  };

  const selectAll = () => {
    setSelectedCriteria(availableCriteria);
  };

  const clearAll = () => {
    setSelectedCriteria([]);
  };

  const exportToCSV = () => {
    const headers = ['Critério', 'LangChain', 'Agno'];
    if (includeNotes) headers.push('Observações');

    const rows = filteredComparisons.map(row => {
      const csvRow = [
        row.criterion,
        String(row.langchain),
        String(row.agno)
      ];
      if (includeNotes) csvRow.push(row.notes || '');
      return csvRow;
    });

    const csvContent = [headers, ...rows]
      .map(row => row.map(cell => `"${cell}"`).join(','))
      .join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'langchain-vs-agno-comparison.csv';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const exportToPNG = () => {
    // TODO: Implementar exportação para PNG usando html2canvas ou similar
    alert('Exportação para PNG será implementada');
  };

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Controls */}
      <div className="card p-6">
        <h3 className="text-lg font-semibold mb-4">Construtor de Comparações</h3>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">
              Critérios de Comparação
            </label>
            <div className="flex flex-wrap gap-2 mb-3">
              {availableCriteria.map(criterion => (
                <label key={criterion} className="inline-flex items-center">
                  <input
                    type="checkbox"
                    checked={selectedCriteria.includes(criterion)}
                    onChange={() => toggleCriterion(criterion)}
                    className="mr-2"
                  />
                  <span className="text-sm">{criterion}</span>
                </label>
              ))}
            </div>
            <div className="flex gap-2">
              <button onClick={selectAll} className="btn btn-outline btn-sm">
                Selecionar Todos
              </button>
              <button onClick={clearAll} className="btn btn-outline btn-sm">
                Limpar Seleção
              </button>
            </div>
          </div>

          <div className="flex items-center">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                checked={includeNotes}
                onChange={(e) => setIncludeNotes(e.target.checked)}
                className="mr-2"
              />
              <span className="text-sm">Incluir observações</span>
            </label>
          </div>

          <div className="flex gap-2">
            <button onClick={exportToCSV} className="btn btn-primary btn-sm">
              📊 Exportar CSV
            </button>
            <button onClick={exportToPNG} className="btn btn-secondary btn-sm">
              🖼️ Exportar PNG
            </button>
          </div>
        </div>
      </div>

      {/* Comparison Table */}
      <div className="card p-6">
        <h4 className="text-md font-semibold mb-4">
          Comparação: {filteredComparisons.length} critério(s) selecionado(s)
        </h4>
        
        {filteredComparisons.length === 0 ? (
          <p className="text-muted-foreground">
            Selecione critérios para ver a comparação.
          </p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-3 font-medium">Critério</th>
                  <th className="text-left p-3 font-medium">LangChain</th>
                  <th className="text-left p-3 font-medium">Agno</th>
                  {includeNotes && (
                    <th className="text-left p-3 font-medium">Observações</th>
                  )}
                </tr>
              </thead>
              <tbody>
                {filteredComparisons.map((row, index) => (
                  <tr key={row.criterion} className={index % 2 === 0 ? 'bg-muted/30' : ''}>
                    <td className="p-3 font-medium">{row.criterion}</td>
                    <td className="p-3">{getSupportStatusBadge(row.langchain)}</td>
                    <td className="p-3">{getSupportStatusBadge(row.agno)}</td>
                    {includeNotes && (
                      <td className="p-3 text-sm text-muted-foreground">
                        {row.notes || '-'}
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default ComparisonBuilder;
