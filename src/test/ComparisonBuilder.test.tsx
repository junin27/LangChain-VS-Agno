import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import ComparisonBuilder from '../components/comparison/ComparisonBuilder';

describe('ComparisonBuilder', () => {
  it('renders without crashing', () => {
    render(<ComparisonBuilder />);
    
    expect(screen.getByText('Construtor de Comparações')).toBeInTheDocument();
  });

  it('shows criteria checkboxes', () => {
    render(<ComparisonBuilder />);
    
    expect(screen.getByText('Arquitetura')).toBeInTheDocument();
    expect(screen.getByText('RAG (Retrieval Augmented Generation)')).toBeInTheDocument();
  });

  it('allows selecting and deselecting criteria', () => {
    render(<ComparisonBuilder />);
    
    const arquiteturaCheckbox = screen.getByLabelText('Arquitetura') as HTMLInputElement;
    
    expect(arquiteturaCheckbox.checked).toBe(false);
    
    fireEvent.click(arquiteturaCheckbox);
    expect(arquiteturaCheckbox.checked).toBe(true);
    
    fireEvent.click(arquiteturaCheckbox);
    expect(arquiteturaCheckbox.checked).toBe(false);
  });

  it('shows select all and clear buttons', () => {
    render(<ComparisonBuilder />);
    
    expect(screen.getByText('Selecionar Todos')).toBeInTheDocument();
    expect(screen.getByText('Limpar Seleção')).toBeInTheDocument();
  });

  it('shows export buttons', () => {
    render(<ComparisonBuilder />);
    
    expect(screen.getByText('📊 Exportar CSV')).toBeInTheDocument();
    expect(screen.getByText('🖼️ Exportar PNG')).toBeInTheDocument();
  });
});
