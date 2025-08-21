import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <div className="text-center space-y-8 py-16">
        <div className="relative">
          <h1 className="text-6xl md:text-8xl font-black mb-6">
            <span className="text-white block animate-float font-extrabold text-outline-black hover:text-shadow-glow transition-all duration-500 hover:scale-105">LangChain</span>
            <span className="text-3xl md:text-4xl font-light text-white text-outline-black block my-4 hover:text-shadow-glow transition-all duration-500">vs</span>
            <span className="text-white block animate-float font-extrabold text-outline-black hover:text-shadow-glow transition-all duration-500 hover:scale-105" style={{animationDelay: '2s'}}>Agno</span>
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
          <span className="text-white font-semibold drop-shadow-md">análise de recursos, performance, ecossistema e casos de uso recomendados.</span>
        </p>
        

      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="card-hover p-8 text-center group">
          <div className="text-5xl font-black gradient-text mb-4 transition-transform duration-300">10+</div>
          <p className="text-xl text-gray-800 dark:text-gray-200 font-medium">Critérios Comparados</p>
          <div className="w-full h-1 bg-blue-500 rounded mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <div className="card-hover p-8 text-center group">
          <div className="text-5xl font-black gradient-text mb-4 transition-transform duration-300">25+</div>
          <p className="text-xl text-gray-800 dark:text-gray-200 font-medium">Seções Detalhadas</p>
          <div className="w-full h-1 bg-blue-500 rounded mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <div className="card-hover p-8 text-center group">
          <div className="text-5xl font-black gradient-text mb-4 transition-transform duration-300">100%</div>
          <p className="text-xl text-gray-800 dark:text-gray-200 font-medium">Análise Técnica</p>
          <div className="w-full h-1 bg-blue-500 rounded mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      </div>

      {/* Divisor */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="col-span-full h-1 bg-white/60 rounded-full shadow-lg"></div>
      </div>

      {/* Navigation Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Link to="/langchain" className="card-hover p-8 group">
          <div className="flex items-center mb-4">
            <svg className="w-10 h-10 mr-4 text-blue-500 dark:text-blue-400 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM5 19V5h6v14H5zm8 0V5h6v14h-6z"/>
            </svg>
            <h3 className="text-2xl font-bold gradient-text">
              LangChain
            </h3>
          </div>
          <p className="text-gray-800 dark:text-gray-200 leading-relaxed">
            Análise completa da biblioteca LangChain: arquitetura, recursos, 
            ecossistema e casos de uso.
          </p>
          <div className="mt-6 flex items-center text-blue-700 dark:text-blue-300 font-semibold transition-transform duration-300 bg-blue-100 dark:bg-blue-900 px-4 py-2 rounded">
            EXPLORAR LANGCHAIN
          </div>
        </Link>

        <Link to="/agno" className="card-hover p-8 group">
          <div className="flex items-center mb-4">
            <svg className="w-10 h-10 mr-4 text-blue-500 dark:text-blue-400 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7 2v11h3v9l7-12h-4l4-8z"/>
            </svg>
            <h3 className="text-2xl font-bold gradient-text">
              Agno
            </h3>
          </div>
          <p className="text-gray-800 dark:text-gray-200 leading-relaxed">
            Exploração da biblioteca Agno: filosofia de design, simplicidade 
            e performance otimizada.
          </p>
          <div className="mt-6 flex items-center text-blue-700 dark:text-blue-300 font-semibold transition-transform duration-300 bg-blue-100 dark:bg-blue-900 px-4 py-2 rounded">
            EXPLORAR AGNO
          </div>
        </Link>

        <Link to="/comparacao/recursos" className="card-hover p-8 group">
          <div className="flex items-center mb-4">
            <svg className="w-10 h-10 mr-4 text-blue-500 dark:text-blue-400 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
            </svg>
            <h3 className="text-2xl font-bold gradient-text">
              Análise Comparativa
            </h3>
          </div>
          <p className="text-gray-800 dark:text-gray-200 leading-relaxed">
            Comparação detalhada de recursos, características e capacidades técnicas entre as bibliotecas.
          </p>
          <div className="mt-6 flex items-center text-blue-700 dark:text-blue-300 font-semibold transition-transform duration-300 bg-blue-100 dark:bg-blue-900 px-4 py-2 rounded">
            VER ANÁLISE
          </div>
        </Link>

        <Link to="/diferencas" className="card-hover p-8 group">
          <div className="flex items-center mb-4">
            <svg className="w-10 h-10 mr-4 text-blue-500 dark:text-blue-400 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              <path d="M9 12l2 2 4-4"/>
            </svg>
            <h3 className="text-2xl font-bold gradient-text">
              Principais Diferenças
            </h3>
          </div>
          <p className="text-gray-800 dark:text-gray-200 leading-relaxed">
            Análise das diferenças fundamentais entre as duas abordagens 
            de desenvolvimento de IA.
          </p>
          <div className="mt-6 flex items-center text-blue-700 dark:text-blue-300 font-semibold transition-transform duration-300 bg-blue-100 dark:bg-blue-900 px-4 py-2 rounded">
            VER DIFERENÇAS
          </div>
        </Link>

        <Link to="/recomendacoes" className="card-hover p-8 group">
          <div className="flex items-center mb-4">
            <svg className="w-10 h-10 mr-4 text-blue-500 dark:text-blue-400 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
            <h3 className="text-2xl font-bold gradient-text">
              Recomendações
            </h3>
          </div>
          <p className="text-gray-800 dark:text-gray-200 leading-relaxed">
            Guia para escolher a biblioteca ideal para seu projeto de IA aplicada.
          </p>
          <div className="mt-6 flex items-center text-blue-700 dark:text-blue-300 font-semibold transition-transform duration-300 bg-blue-100 dark:bg-blue-900 px-4 py-2 rounded">
            VER RECOMENDAÇÕES
          </div>
        </Link>


      </div>

      {/* About */}
      <div className="card-hover p-12 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-blue-500"></div>
        <div className="flex items-center mb-6">
          <svg className="w-10 h-10 mr-4 text-blue-500 dark:text-blue-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/>
          </svg>
          <h2 className="text-4xl font-bold gradient-text">Sobre este Comparativo</h2>
        </div>
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
          


        </div>
      </div>
    </div>
  );
};

export default HomePage;
