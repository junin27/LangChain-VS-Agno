import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import PageTemplate from '../../components/PageTemplate';
import type { SectionBlock } from '../../types/content';

const MaturityPage: React.FC = () => {
  const [content, setContent] = useState<SectionBlock | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadContent = async () => {
      try {
        // Usando conteúdo estático por enquanto
        const staticContent = {
          id: 'maturidade-agno',
          title: 'Maturidade, Comunidade e Licenciamento',
          summary: 'Análise da maturidade e crescimento da comunidade Agno',
          bodyMD: `# Maturidade, Comunidade e Licenciamento

Agno demonstra um **crescimento notável** e uma **comunidade ativa**, apesar de ser mais recente que LangChain. O framework passou por uma importante **transição de nome** de Phidata para Agno.

---

## Evolução e Transição

### Histórico do Framework
- **Nome Anterior**: Phidata (framework predecessor)
- **Transição Estratégica**: Rebrand para Agno com foco em simplicidade
- **Desenvolvimento Ativo**: 85 releases até o momento
- **Evolução Contínua**: Introdução rápida de novas funcionalidades

### Significado da Transição
- **Foco Estratégico**: Nova identidade alinhada com simplicidade e performance
- **Maturação do Projeto**: Consolidação de visão e direcionamento
- **Posicionamento de Mercado**: Diferenciação clara no ecossistema de IA

---

## Estatísticas da Comunidade

### Métricas do GitHub
- **32.000 estrelas**: Interesse significativo da comunidade
- **4.100 forks**: Base ativa de contribuidores
- **266 contribuidores**: Diversidade de colaboradores
- **85 releases**: Desenvolvimento contínuo e ativo

### Canais de Comunidade
- **Fórum Dedicado**: community.agno.com para discussões
- **Discord**: Canal para comunicação em tempo real
- **GitHub**: Repositório principal para desenvolvimento colaborativo

---

## Licenciamento

### Mozilla Public License 2.0 (MPL-2.0)
- **Código Aberto**: Liberdade de uso e modificação
- **Copyleft Fraco**: Permite integração com código proprietário
- **Flexibilidade Comercial**: Adequado para uso empresarial
- **Transparência**: Código fonte disponível para auditoria

### Vantagens da MPL-2.0
- **Balanceamento**: Entre liberdade e proteção de contribuições
- **Compatibilidade**: Com a maioria dos projetos comerciais
- **Sustentabilidade**: Incentiva contribuições de volta ao projeto

---

## Análise Comparativa

### Crescimento vs. Maturidade
- **Comunidade Menor**: Comparado ao LangChain, mas em crescimento
- **Taxa de Crescimento**: Indicadores positivos de adoção
- **Engajamento**: Comunidade focada em performance e simplicidade
- **Inovação**: Acesso a funcionalidades mais recentes

### Considerações para Adoção

#### **Vantagens**
- **Inovações Recentes**: Framework moderno com abordagens atualizadas
- **Comunidade Engajada**: Foco em performance e simplicidade
- **Desenvolvimento Ativo**: Releases frequentes e melhorias contínuas
- **Flexibilidade**: Licença permissiva para uso comercial

#### **Considerações**
- **Base de Conhecimento**: Menor quantidade de tutoriais e exemplos
- **Ecossistema**: Menos ferramentas de terceiros comparado a frameworks estabelecidos
- **Documentação**: Em desenvolvimento, mas crescendo rapidamente

---

## Perspectivas Futuras

### Potencial de Crescimento
- **Diferenciação Clara**: Foco em simplicidade e performance
- **Timing de Mercado**: Momento ideal para frameworks otimizados
- **Adoção Empresarial**: Interesse crescente em soluções eficientes
- **Comunidade Técnica**: Base sólida de desenvolvedores especializados

### Recomendações
- **Projetos Inovadores**: Ideal para equipes que valorizam performance
- **Startups**: Vantagem competitiva com tecnologia moderna
- **Empresas Ágeis**: Adequado para organizações que priorizam velocidade
- **Desenvolvimento Experimental**: Perfeito para explorar novas abordagens`,
          lastUpdated: new Date().toISOString()
        };
        setContent(staticContent);
      } catch (error) {
        console.error('Failed to load content:', error);
      } finally {
        setLoading(false);
      }
    };

    loadContent();
  }, []);

  if (loading) {
    return (
      <PageTemplate 
        title="Maturidade, Comunidade e Licenciamento" 
        subtitle="Análise da maturidade e crescimento da comunidade Agno"
      >
        <div className="animate-pulse space-y-4">
          <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-3/4"></div>
          <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-1/2"></div>
          <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-5/6"></div>
          <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-2/3"></div>
        </div>
      </PageTemplate>
    );
  }

  return (
    <PageTemplate 
      title="Maturidade, Comunidade e Licenciamento" 
      subtitle="Análise da maturidade e crescimento da comunidade Agno"
    >
      {content && content.bodyMD && (
        <div className="prose prose-lg max-w-none text-gray-800 dark:text-gray-200">
          <ReactMarkdown
            components={{
              h1: ({children}) => <h1 className="text-3xl font-bold mb-6 gradient-text">{children}</h1>,
              h2: ({children}) => <h2 className="text-2xl font-bold mt-8 mb-4 gradient-text border-l-4 border-blue-500 pl-4">{children}</h2>,
              h3: ({children}) => <h3 className="text-xl font-semibold mt-8 mb-3 text-blue-600 dark:text-blue-400">{children}</h3>,
              strong: ({ children, ...props }) => {
            const text = typeof children === 'string' ? children : children?.toString() || '';
            const isSpecialTitle = text === 'Vantagens' || text === 'Considerações';
            
            return (
              <span 
                className={isSpecialTitle 
                  ? "font-bold text-blue-600 dark:text-blue-400"
                  : "font-bold text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/30 px-1 py-0.5 rounded"
                } 
                {...props}
              >
                {children}
              </span>
            );
          },
              ul: ({children}) => <ul className="mb-6 space-y-2 ml-4">{children}</ul>,
              li: ({children}) => <li className="flex items-start"><span className="text-white dark:text-white mr-3 mt-1.5 w-1 h-1 bg-current rounded-full"></span><span className="text-gray-800 dark:text-gray-200">{children}</span></li>,
              code: ({children}) => <code className="bg-purple-100 dark:bg-purple-900 px-2 py-1 rounded text-sm font-mono text-purple-700 dark:text-purple-300 font-semibold border border-purple-200 dark:border-purple-800">{children}</code>,
              hr: () => <div className="section-divider"></div>,
            }}
          >
            {content.bodyMD}
          </ReactMarkdown>
        </div>
      )}
    </PageTemplate>
  );
};

export default MaturityPage;