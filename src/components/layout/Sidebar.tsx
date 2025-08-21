import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';

import { navigationItems } from '../../data/navigation';

const Sidebar: React.FC = () => {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  const isActivePath = (path: string) => {
    return location.pathname === path || location.pathname.startsWith(path + '/');
  };

  const toggleExpanded = (itemId: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setExpandedItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(itemId)) {
        newSet.delete(itemId);
      } else {
        newSet.add(itemId);
      }
      return newSet;
    });
  };

  // Auto-expand active sections
  useEffect(() => {
    navigationItems.forEach(item => {
      if (item.children && isActivePath(item.path)) {
        setExpandedItems(prev => new Set(prev).add(item.id));
      }
    });
  }, [location.pathname]);

  return (
    <aside className="w-80 sidebar-modern h-screen sticky top-0 overflow-y-auto z-30">
      <div className="p-6">
        {/* Logo/Brand */}
        <Link to="/" className="flex items-center space-x-3 mb-10 group">
          <div className="w-12 h-12 rounded-2xl flex items-center justify-center relative overflow-hidden transition-transform duration-300">
            <svg className="w-6 h-6 text-gray-700 dark:text-gray-300 relative z-10" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C10.9 2 10 2.9 10 4V6C8.9 6 8 6.9 8 8V10H6C4.9 10 4 10.9 4 12V18C4 19.1 4.9 20 6 20H18C19.1 20 20 19.1 20 18V12C20 10.9 19.1 10 18 10H16V8C16 6.9 15.1 6 14 6V4C14 2.9 13.1 2 12 2ZM12 4V6H12V4ZM10 8H14V10H10V8ZM6 12H18V18H6V12ZM8 14V16H10V14H8ZM14 14V16H16V14H14Z"/>
            </svg>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </div>
          <div>
            <span className="font-bold text-xl text-white text-outline-black block">Comparativos de I.A</span>
            <span className="text-xs text-white">LangChain vs Agno</span>
          </div>
        </Link>

        {/* Controls */}
        <div className="flex flex-col space-y-3 mb-8 pb-8 border-b border-gray-300/50 dark:border-gray-700/30">
          <button
            onClick={toggleTheme}
            className="flex items-center w-full rounded-lg transition-all duration-300 overflow-hidden bg-gray-100 dark:bg-gray-800"
            title={`Alternar para modo ${theme === 'dark' ? 'claro' : 'escuro'}`}
          >
            <div className={`flex-1 flex items-center justify-center py-4 px-6 transition-all duration-300 ${
              theme === 'light' 
                ? 'bg-gradient-to-r from-purple-500 to-indigo-600 text-white shadow-lg' 
                : 'text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}>
              <svg className={`w-6 h-6 transition-all duration-300 filter ${
                 theme === 'light' 
                   ? 'drop-shadow-lg brightness-110 scale-110' 
                   : 'grayscale-50 scale-95 opacity-70'
               }`} fill="currentColor" viewBox="0 0 24 24">
                 <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"/>
               </svg>
              <span className={`ml-3 font-medium transition-all duration-300 ${
                theme === 'light' ? 'font-bold text-white' : ''
              }`}>Claro</span>
            </div>
            
            <div className={`flex-1 flex items-center justify-center py-4 px-6 transition-all duration-300 ${
               theme === 'dark' 
                 ? 'bg-gradient-to-r from-purple-500 to-indigo-600 text-white shadow-lg' 
                 : 'text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
             }`}>
               <span className={`mr-3 font-medium transition-all duration-300 ${
                 theme === 'dark' ? 'font-bold text-white' : ''
               }`}>Escuro</span>
               <svg className={`w-6 h-6 transition-all duration-300 filter ${
                  theme === 'dark' 
                    ? 'drop-shadow-lg brightness-110 scale-110' 
                    : 'grayscale-50 scale-95 opacity-70'
                }`} fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clipRule="evenodd"/>
                </svg>
             </div>
          </button>
          

        </div>

        {/* Navigation */}
        <nav className="space-y-2">
          {navigationItems.map((item) => (
            <div key={item.id} className="group">
              <div className="relative">
                <Link
                  to={item.path}
                  className={`nav-item block px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                    isActivePath(item.path)
                      ? 'nav-item-active'
                      : 'text-gray-800 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span>{item.title}</span>
                    {item.children && (
                      <button
                        onClick={(e) => toggleExpanded(item.id, e)}
                        className={`text-xs transition-transform duration-300 hover:scale-110 p-1 rounded ${
                          expandedItems.has(item.id) ? 'rotate-90' : ''
                        }`}
                        aria-label={`${expandedItems.has(item.id) ? 'Fechar' : 'Abrir'} submenu de ${item.title}`}
                      >
                        ▶
                      </button>
                    )}
                  </div>
                </Link>
              </div>
              
              {item.children && expandedItems.has(item.id) && (
                <div className="ml-6 mt-2 space-y-1 border-l-2 border-gray-200 dark:border-gray-700 pl-4">
                  {item.children.map((child) => (
                    <Link
                      key={child.id}
                      to={child.path}
                      className={`block px-3 py-2 rounded-lg text-xs font-medium transition-all duration-300 ${
                        location.pathname === child.path
                          ? 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 shadow-lg font-semibold'
                          : 'text-gray-700 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 hover:shadow-md'
                      }`}
                    >
                      <div className="flex items-center">
                        <span className="w-2 h-2 bg-current rounded-full mr-2 opacity-60"></span>
                        {child.title}
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
