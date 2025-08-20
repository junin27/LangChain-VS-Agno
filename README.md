# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# LangChain vs Agno - Comparativo Técnico

Um site interativo para comparação técnica detalhada entre as bibliotecas de IA LangChain e Agno, com recursos de análise, visualização e edição de conteúdo.

## 🚀 Tech Stack

- **Framework:** React 19 + TypeScript
- **Build Tool:** Vite 7
- **Styling:** TailwindCSS 4
- **Routing:** React Router DOM
- **Tabelas:** TanStack Table
- **Gráficos:** Recharts
- **Formulários:** React Hook Form + Zod
- **Testes:** Vitest + React Testing Library
- **Busca:** Fuse.js

## 📋 Funcionalidades

### ✅ Implementado
- [x] Estrutura completa de rotas e navegação
- [x] Construtor de comparações interativo
- [x] Gráficos de radar e barras
- [x] Tema escuro/claro
- [x] Modo de edição global
- [x] Exportação CSV/PNG
- [x] Layout responsivo
- [x] Gerenciamento de estado local
- [x] Testes unitários básicos

### 🚧 Em Desenvolvimento
- [ ] Conteúdo real das seções (será inserido pela IA)
- [ ] Busca e filtros avançados
- [ ] Admin/Editor completo
- [ ] Persistência IndexedDB
- [ ] SEO otimizado

## 🛠️ Como Executar

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn

### Instalação e Execução

```bash
# Clone o repositório
git clone <repository-url>
cd comparativo

# Instale as dependências
npm install

# Execute em desenvolvimento
npm run dev
# Acesse: http://localhost:5173

# Build para produção
npm run build

# Preview da build
npm run preview

# Execute os testes
npm run test
npm run test:run
```

### Scripts Disponíveis

```bash
npm run dev          # Servidor de desenvolvimento
npm run build        # Build para produção
npm run preview      # Preview da build de produção
npm run test         # Testes em modo watch
npm run test:run     # Testes uma vez
npm run lint         # Lint do código

# Scripts utilitários
npm run add:section <id> "<título>"        # Criar nova seção
npm run generate:sitemap                   # Gerar sitemap.xml
npm run generate:robots                    # Gerar robots.txt
```

## 📁 Estrutura do Projeto

```
src/
├── components/           # Componentes reutilizáveis
│   ├── charts/          # Gráficos (Radar, Bar)
│   ├── comparison/      # Construtor de comparações
│   ├── layout/          # Layout (Sidebar, Breadcrumbs)
│   └── PageTemplate.tsx # Template base para páginas
├── contexts/            # Contextos React (Theme, EditMode)
├── data/               # Dados mock e navegação
├── hooks/              # Hooks customizados
├── routes/             # Componentes de rotas
│   ├── langchain/      # Páginas sobre LangChain
│   ├── agno/          # Páginas sobre Agno
│   ├── comparison/     # Páginas de comparação
│   └── differences/    # Páginas de diferenças
├── test/              # Testes unitários
├── types/             # Tipos TypeScript
└── utils/             # Utilitários

content/               # Arquivos de conteúdo JSON
scripts/               # Scripts de automação
public/               # Arquivos públicos
```

## 📝 Como Inserir Conteúdo

### Para a IA (Inserção Incremental)

1. **Criar Nova Seção:**
   ```bash
   npm run add:section "2.4-rag-langchain" "Implementação de RAG no LangChain"
   ```

2. **Editar Arquivo de Conteúdo:**
   ```json
   {
     "id": "2.4-rag-langchain",
     "title": "Implementação de RAG no LangChain",
     "summary": "Resumo da seção...",
     "bodyMD": "# Conteúdo em Markdown

...",
     "lastUpdated": "2025-08-19T19:00:00.000Z"
   }
   ```

3. **Validação Automática:**
   - Schemas Zod validam automaticamente
   - ContentLoader carrega e disponibiliza via hooks
   - Interface reativa atualiza em tempo real

### Para o Usuário (Interface Admin)

1. **Ativar Modo Edição:**
   - Clique no botão "Modo Edição" na sidebar
   - Ou acesse `/admin` diretamente

2. **Editar Seções:**
   - Formulários com React Hook Form
   - Preview ao vivo do Markdown
   - Validação em tempo real

3. **Importar/Exportar:**
   - Botão "Exportar JSON" para backup
   - Botão "Importar JSON" para restaurar
   - Persistência automática no localStorage

## 🎨 Personalização

### Tema e Cores
```css
/* tailwind.config.js */
theme: {
  extend: {
    colors: {
      primary: { /* cores azuis */ },
      secondary: { /* cores cinzas */ }
    }
  }
}
```

### Componentes Customizados
```css
/* src/index.css */
.btn { /* botões */ }
.card { /* cartões */ }
.badge { /* badges de status */ }
```

## 📊 Exportação e Compartilhamento

### Tabelas de Comparação
- **CSV:** Dados estruturados para Excel/Sheets
- **PNG:** Imagem para apresentações
- **Deep Links:** URLs compartilháveis com seleções

### Gráficos
- **Radar Chart:** Comparação multidimensional
- **Bar Chart:** Comparação por critérios
- **Tooltips interativos** e legendas

## 🧪 Testes

```bash
# Executar todos os testes
npm run test:run

# Testes específicos
npm run test HomePage
npm run test ComparisonBuilder

# Coverage
npm run test:run -- --coverage
```

### Estrutura de Testes
- `HomePage.test.tsx` - Renderização e navegação
- `ComparisonBuilder.test.tsx` - Interações e estados
- Mocks para localStorage, matchMedia, ResizeObserver

## 🚀 Deploy

### Vercel (Recomendado)
```bash
# Deploy automático via Git
vercel --prod

# Ou configure no dashboard:
# Build Command: npm run build
# Output Directory: dist
```

### Netlify
```bash
# Build settings:
# Build Command: npm run build && npm run generate:sitemap && npm run generate:robots
# Publish Directory: dist
```

### Hosting Estático
```bash
npm run build
# Faça upload da pasta dist/ para seu servidor
```

## 🔍 SEO e Performance

- **Sitemap:** Gerado automaticamente
- **Robots.txt:** Configurado para indexação
- **Meta tags:** Implementadas em cada página
- **Code splitting:** Por rota automático
- **Lazy loading:** Gráficos e componentes pesados

## 🤝 Contribuição

### Próximos Passos para a IA

1. **Inserir Conteúdo LangChain:**
   - Seção 2.1: Arquitetura e Componentes
   - Seção 2.2: Agentes e Ferramentas
   - Seção 2.3: Gerenciamento de Memória
   - Seção 2.4: Implementação de RAG
   - [continuar com todas as seções...]

2. **Inserir Conteúdo Agno:**
   - Seção 3.1: Filosofia de Design
   - Seção 3.2: Simplicidade e Velocidade
   - [continuar...]

3. **Dados de Comparação:**
   - Atualizar `src/data/mock/comparison.ts`
   - Adicionar dados reais de benchmarks
   - Incluir casos de uso específicos

### Fluxo de Trabalho
1. Envie trechos de conteúdo para a IA
2. IA insere/atualiza arquivos em `content/`
3. Interface atualiza automaticamente
4. Usuário pode refinar via editor admin

## 📄 Licença

MIT License - veja o arquivo LICENSE para detalhes.

## 📞 Suporte

Para dúvidas sobre:
- **Estrutura do projeto:** Consulte esta documentação
- **Inserção de conteúdo:** Siga o guia de fluxo da IA
- **Customização:** Veja a seção de personalização
- **Deploy:** Consulte as instruções específicas da plataforma

---

**Status do Projeto:** ✅ Escopo completo implementado, pronto para inserção de conteúdo pela IA.

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
