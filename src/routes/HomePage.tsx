import React from 'react';
import { Link } from 'react-router-dom';
import RadarChartComponent from '../components/charts/RadarChart';
import BarChartComponent from '../components/charts/BarChart';

const HomePage: React.FC = () => {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <div className="text-center space-y-8 py-16">
        <div className="relative">
          <h1 className="text-6xl md:text-8xl font-black mb-6">
            <span className="gradient-text block animate-float">LangChain</span>
            <span className="text-3xl md:text-4xl font-light text-white/80 block my-4">vs</span>
            <span className="gradient-text block animate-float" style={{animationDelay: '2s'}}>Agno</span>
          </h1>
          
          {/* Decorative elements */}
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-8 left-1/4 w-24 h-24 bg-purple-500/20 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 right-1/4 w-20 h-20 bg-pink-500/20 rounded-full blur-xl animate-pulse" style={{animationDelay: '3s'}}></div>
        </div>
        
        <p className="text-2xl md:text-3xl max-w-4xl mx-auto text-balance leading-relaxed font-light">
          <span className="text-white font-medium drop-shadow-lg">
            Comparativo detalhado entre duas bibliotecas de IA aplicada: 
          </span>
          <br />
          <span className="gradient-text font-semibold drop-shadow-md">análise de recursos, performance, ecossistema e casos de uso recomendados.</span>
        </p>
        
        <div className="flex flex-wrap justify-center gap-6 mt-12">
          <Link to="/construtor" className="btn btn-lg group">
            <span className="text-2xl mr-3 group-hover:rotate-12 transition-transform duration-300">🔧</span>
            Construtor de Comparações
          </Link>
          <Link to="/comparacao" className="btn btn-secondary btn-lg group">
            <span className="text-2xl mr-3 group-hover:scale-125 transition-transform duration-300">📊</span>
            Ver Análise Completa
          </Link>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="card-hover p-8 text-center group">
          <div className="text-5xl font-black gradient-text mb-4 group-hover:scale-110 transition-transform duration-300">10+</div>
          <p className="text-xl text-gray-800 dark:text-gray-200 font-medium">Critérios Comparados</p>
          <div className="w-full h-1 bg-blue-500 rounded mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <div className="card-hover p-8 text-center group">
          <div className="text-5xl font-black gradient-text mb-4 group-hover:scale-110 transition-transform duration-300">25+</div>
          <p className="text-xl text-gray-800 dark:text-gray-200 font-medium">Seções Detalhadas</p>
          <div className="w-full h-1 bg-purple-500 rounded mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <div className="card-hover p-8 text-center group">
          <div className="text-5xl font-black gradient-text mb-4 group-hover:scale-110 transition-transform duration-300">100%</div>
          <p className="text-xl text-gray-800 dark:text-gray-200 font-medium">Análise Técnica</p>
          <div className="w-full h-1 bg-pink-500 rounded mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      </div>

      {/* Charts Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="card-hover p-6">
          <RadarChartComponent />
        </div>
        <div className="card-hover p-6">
          <BarChartComponent />
        </div>
      </div>

      {/* Navigation Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Link to="/langchain" className="card-hover p-8 group">
          <div className="flex items-center mb-4">
            <span className="text-4xl mr-4 group-hover:scale-125 transition-transform duration-300">📚</span>
            <h3 className="text-2xl font-bold gradient-text">
              LangChain
            </h3>
          </div>
          <p className="text-gray-800 dark:text-gray-200 leading-relaxed">
            Análise completa da biblioteca LangChain: arquitetura, recursos, 
            ecossistema e casos de uso.
          </p>
          <div className="mt-6 flex items-center text-blue-700 dark:text-blue-300 font-semibold group-hover:translate-x-2 transition-transform duration-300">
            Explorar LangChain →
          </div>
        </Link>

        <Link to="/agno" className="card-hover p-8 group">
          <div className="flex items-center mb-4">
            <span className="text-4xl mr-4 group-hover:scale-125 transition-transform duration-300">⚡</span>
            <h3 className="text-2xl font-bold gradient-text">
              Agno
            </h3>
          </div>
          <p className="text-gray-800 dark:text-gray-200 leading-relaxed">
            Exploração da biblioteca Agno: filosofia de design, simplicidade 
            e performance otimizada.
          </p>
          <div className="mt-6 flex items-center text-purple-700 dark:text-purple-300 font-semibold group-hover:translate-x-2 transition-transform duration-300">
            Explorar Agno →
          </div>
        </Link>

        <Link to="/diferencas" className="card-hover p-8 group">
          <div className="flex items-center mb-4">
            <span className="text-4xl mr-4 group-hover:scale-125 transition-transform duration-300">⚖️</span>
            <h3 className="text-2xl font-bold gradient-text">
              Principais Diferenças
            </h3>
          </div>
          <p className="text-gray-800 dark:text-gray-200 leading-relaxed">
            Análise das diferenças fundamentais entre as duas abordagens 
            de desenvolvimento de IA.
          </p>
          <div className="mt-6 flex items-center text-pink-700 dark:text-pink-300 font-semibold group-hover:translate-x-2 transition-transform duration-300">
            Ver Diferenças →
          </div>
        </Link>

        <Link to="/recomendacoes" className="card-hover p-8 group">
          <div className="flex items-center mb-4">
            <span className="text-4xl mr-4 group-hover:scale-125 transition-transform duration-300">💡</span>
            <h3 className="text-2xl font-bold gradient-text">
              Recomendações
            </h3>
          </div>
          <p className="text-gray-800 dark:text-gray-200 leading-relaxed">
            Guia para escolher a biblioteca ideal para seu projeto de IA aplicada.
          </p>
          <div className="mt-6 flex items-center text-green-700 dark:text-green-300 font-semibold group-hover:translate-x-2 transition-transform duration-300">
            Ver Recomendações →
          </div>
        </Link>

        <Link to="/admin" className="card-hover p-8 group border-2 border-dashed border-gray-400 dark:border-gray-500">
          <div className="flex items-center mb-4">
            <span className="text-4xl mr-4 group-hover:scale-125 transition-transform duration-300">⚙️</span>
            <h3 className="text-2xl font-bold gradient-text">
              Admin / Editor
            </h3>
          </div>
          <p className="text-gray-800 dark:text-gray-200 leading-relaxed">
            Painel administrativo para editar conteúdo e gerenciar comparações.
          </p>
          <div className="mt-6 flex items-center text-orange-700 dark:text-orange-300 font-semibold group-hover:translate-x-2 transition-transform duration-300">
            Acessar Admin →
          </div>
        </Link>
      </div>

      {/* About */}
      <div className="card-hover p-12 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-blue-500"></div>
        <h2 className="text-4xl font-bold gradient-text mb-6">Sobre este Comparativo</h2>
        <div className="prose prose-lg max-w-none text-gray-800 dark:text-gray-200 leading-relaxed">
          <p className="text-xl mb-6 font-medium">
            Este site oferece uma análise técnica detalhada entre LangChain e Agno, 
            duas bibliotecas para desenvolvimento de aplicações de IA. A comparação 
            abrange aspectos como arquitetura, performance, facilidade de uso, 
            ecossistema e casos de uso recomendados.
          </p>
          <p className="text-lg mb-6">
            Utilizando dados reais de benchmarks, análise de código e experiência 
            prática, este comparativo visa ajudar desenvolvedores e equipes técnicas 
            a tomar decisões informadas sobre qual biblioteca usar em seus projetos.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="flex items-center space-x-3 p-4 bg-blue-50 dark:bg-blue-950 rounded-xl">
              <span className="text-2xl">🔬</span>
              <span className="font-semibold text-blue-900 dark:text-blue-100">Análise Técnica</span>
            </div>
            <div className="flex items-center space-x-3 p-4 bg-purple-50 dark:bg-purple-950 rounded-xl">
              <span className="text-2xl">📊</span>
              <span className="font-semibold text-purple-900 dark:text-purple-100">Benchmarks Reais</span>
            </div>
            <div className="flex items-center space-x-3 p-4 bg-green-50 dark:bg-green-950 rounded-xl">
              <span className="text-2xl">🎯</span>
              <span className="font-semibold text-green-900 dark:text-green-100">Casos Práticos</span>
            </div>
          </div>
          
          <div className="mt-8 p-6 bg-blue-50 dark:bg-blue-950 rounded-xl border border-blue-200 dark:border-blue-800">
            <p className="text-sm text-blue-900 dark:text-blue-100 font-medium">
              💡 <strong>Nota:</strong> Este é um projeto de demonstração. O conteúdo será inserido 
              incrementalmente pela IA a partir dos trechos fornecidos pelo usuário.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
