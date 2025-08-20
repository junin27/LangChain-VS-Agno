import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';
import { useEditMode } from '../../contexts/EditModeContext';
import { navigationItems } from '../../data/navigation';

const Sidebar: React.FC = () => {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const { isEditMode, toggleEditMode } = useEditMode();

  const isActivePath = (path: string) => {
    return location.pathname === path || location.pathname.startsWith(path + '/');
  };

  return (
    <aside className="w-80 sidebar-modern h-screen sticky top-0 overflow-y-auto z-30">
      <div className="p-6">
        {/* Logo/Brand */}
        <Link to="/" className="flex items-center space-x-3 mb-10 group">
          <div className="w-12 h-12 rounded-2xl flex items-center justify-center relative overflow-hidden group-hover:scale-110 transition-transform duration-300" style={{background: 'var(--gradient-primary)'}}>
            <span className="text-white font-bold text-lg relative z-10">LC</span>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </div>
          <div>
            <span className="font-bold text-xl gradient-text block">LCComparativo</span>
            <span className="text-xs text-gray-600 dark:text-gray-400">LangChain vs Agno</span>
          </div>
        </Link>

        {/* Controls */}
        <div className="flex flex-col space-y-3 mb-8 pb-8 border-b border-gray-300/50 dark:border-gray-700/30">
          <button
            onClick={toggleTheme}
            className="flex items-center justify-start px-4 py-3 text-sm rounded-xl hover:scale-105 transition-all duration-300 glass-effect group"
            aria-label={`Alternar para tema ${theme === 'light' ? 'escuro' : 'claro'}`}
          >
            <span className="text-2xl group-hover:scale-125 transition-transform duration-300">
              {theme === 'light' ? '🌙' : '☀️'}
            </span>
            <span className="ml-3 font-medium text-gray-800 dark:text-gray-200">
              {theme === 'light' ? 'Modo Escuro' : 'Modo Claro'}
            </span>
          </button>
          
          <button
            onClick={toggleEditMode}
            className={`flex items-center justify-start px-4 py-3 text-sm rounded-xl transition-all duration-300 group ${
              isEditMode 
                ? 'nav-item-active' 
                : 'glass-effect hover:scale-105'
            }`}
            aria-label={`${isEditMode ? 'Desativar' : 'Ativar'} modo de edição`}
          >
            <span className="text-2xl group-hover:scale-125 transition-transform duration-300">✏️</span>
            <span className={`ml-3 font-medium ${isEditMode ? 'text-white' : 'text-gray-800 dark:text-gray-200'}`}>
              {isEditMode ? 'Editando' : 'Modo Edição'}
            </span>
            {isEditMode && (
              <div className="ml-auto w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            )}
          </button>
        </div>

        {/* Navigation */}
        <nav className="space-y-2">
          {navigationItems.map((item) => (
            <div key={item.id} className="group">
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
                    <span className={`text-xs transition-transform duration-300 ${
                      isActivePath(item.path) ? 'rotate-90' : ''
                    }`}>
                      ▶
                    </span>
                  )}
                </div>
              </Link>
              
              {item.children && isActivePath(item.path) && (
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
