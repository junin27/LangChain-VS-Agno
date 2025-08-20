import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import HomePage from '../routes/HomePage';

// Wrapper para componentes que usam React Router
const RouterWrapper = ({ children }: { children: React.ReactNode }) => {
  return <BrowserRouter>{children}</BrowserRouter>;
};

describe('HomePage', () => {
  it('renders without crashing', () => {
    render(
      <RouterWrapper>
        <HomePage />
      </RouterWrapper>
    );
    
    expect(screen.getByText('LangChain vs Agno')).toBeInTheDocument();
  });

  it('displays navigation cards', () => {
    render(
      <RouterWrapper>
        <HomePage />
      </RouterWrapper>
    );
    
    expect(screen.getByText('LangChain')).toBeInTheDocument();
    expect(screen.getByText('Agno')).toBeInTheDocument();
    expect(screen.getByText('Principais Diferenças')).toBeInTheDocument();
  });

  it('has comparison builder link', () => {
    render(
      <RouterWrapper>
        <HomePage />
      </RouterWrapper>
    );
    
    expect(screen.getByText('Construtor de Comparações')).toBeInTheDocument();
  });
});
