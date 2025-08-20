import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';

import Layout from './components/layout/Layout';

// Route Components
import HomePage from './routes/HomePage';
import ComparisonBuilderPage from './routes/ComparisonBuilderPage';
import AdminPage from './routes/AdminPage';

// LangChain Routes
import LangChainPage from './routes/langchain/LangChainPage';
import LangChainArchitecture from './routes/langchain/ArchitecturePage';
import LangChainAgents from './routes/langchain/AgentesPage';
import LangChainMemory from './routes/langchain/MemoryPage';
import LangChainRAG from './routes/langchain/RAGPage';
import LangChainEcosystem from './routes/langchain/EcosystemPage';
import LangChainObservability from './routes/langchain/ObservabilityPage';
import LangChainPerformance from './routes/langchain/PerformancePage';
import LangChainDeployment from './routes/langchain/DeploymentPage';
import LangChainMaturity from './routes/langchain/MaturityPage';

// Agno Routes
import AgnoPage from './routes/agno/AgnoPage';
import AgnoPhilosophy from './routes/agno/PhilosophyPage';
import AgnoSimplicity from './routes/agno/SimplicityPage';
import AgnoAgents from './routes/agno/AgentsPage';
import AgnoMemory from './routes/agno/MemoryPage';
import AgnoRAG from './routes/agno/RAGPage';
import AgnoEcosystem from './routes/agno/EcosystemPage';
import AgnoObservability from './routes/agno/ObservabilityPage';
import AgnoPerformance from './routes/agno/PerformancePage';
import AgnoDeployment from './routes/agno/DeploymentPage';
import AgnoMaturity from './routes/agno/MaturityPage';

// Comparison Routes
import ComparisonPage from './routes/comparison/ComparisonPage';
import ComparisonFeatures from './routes/comparison/FeaturesPage';
import ComparisonBenchmarks from './routes/comparison/BenchmarksPage';
import ComparisonUseCases from './routes/comparison/UseCasesPage';

// Differences Routes
import DifferencesPage from './routes/differences/DifferencesPage';
import DifferencesPhilosophy from './routes/differences/PhilosophyPage';
import DifferencesOrchestration from './routes/differences/OrchestrationPage';
import DifferencesPerformance from './routes/differences/PerformancePage';
import DifferencesEcosystem from './routes/differences/EcosystemPage';
import DifferencesMultimodal from './routes/differences/MultimodalPage';

// Recommendations
import RecommendationsPage from './routes/RecommendationsPage';

function App() {
  return (
    <ThemeProvider>

        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/construtor" element={<ComparisonBuilderPage />} />
              <Route path="/admin" element={<AdminPage />} />
              
              {/* LangChain Routes */}
              <Route path="/langchain" element={<LangChainPage />} />
              <Route path="/langchain/arquitetura" element={<LangChainArchitecture />} />
              <Route path="/langchain/agentes" element={<LangChainAgents />} />
              <Route path="/langchain/memoria" element={<LangChainMemory />} />
              <Route path="/langchain/rag" element={<LangChainRAG />} />
              <Route path="/langchain/ecossistema" element={<LangChainEcosystem />} />
              <Route path="/langchain/observabilidade" element={<LangChainObservability />} />
              <Route path="/langchain/desempenho" element={<LangChainPerformance />} />
              <Route path="/langchain/implantacao" element={<LangChainDeployment />} />
              <Route path="/langchain/maturidade" element={<LangChainMaturity />} />
              
              {/* Agno Routes */}
              <Route path="/agno" element={<AgnoPage />} />
              <Route path="/agno/filosofia" element={<AgnoPhilosophy />} />
              <Route path="/agno/simplicidade" element={<AgnoSimplicity />} />
              <Route path="/agno/agentes" element={<AgnoAgents />} />
              <Route path="/agno/memoria" element={<AgnoMemory />} />
              <Route path="/agno/rag" element={<AgnoRAG />} />
              <Route path="/agno/ecossistema" element={<AgnoEcosystem />} />
              <Route path="/agno/observabilidade" element={<AgnoObservability />} />
              <Route path="/agno/desempenho" element={<AgnoPerformance />} />
              <Route path="/agno/implantacao" element={<AgnoDeployment />} />
              <Route path="/agno/maturidade" element={<AgnoMaturity />} />
              
              {/* Comparison Routes */}
              <Route path="/comparacao" element={<ComparisonPage />} />
              <Route path="/comparacao/recursos" element={<ComparisonFeatures />} />
              <Route path="/comparacao/benchmarks" element={<ComparisonBenchmarks />} />
              <Route path="/comparacao/casos-de-uso" element={<ComparisonUseCases />} />
              
              {/* Differences Routes */}
              <Route path="/diferencas" element={<DifferencesPage />} />
              <Route path="/diferencas/filosofia" element={<DifferencesPhilosophy />} />
              <Route path="/diferencas/orquestracao" element={<DifferencesOrchestration />} />
              <Route path="/diferencas/performance" element={<DifferencesPerformance />} />
              <Route path="/diferencas/ecossistema" element={<DifferencesEcosystem />} />
              <Route path="/diferencas/multimodal" element={<DifferencesMultimodal />} />
              
              {/* Recommendations */}
              <Route path="/recomendacoes" element={<RecommendationsPage />} />
            </Routes>
          </Layout>
        </Router>

    </ThemeProvider>
  );
}

export default App;
