import React from 'react';
import Sidebar from './Sidebar';
import Breadcrumbs from './Breadcrumbs';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen relative overflow-hidden">
      {/* Background with animated gradient */}
      <div className="absolute inset-0 bg-blue-600 animate-pulse-slow opacity-90"></div>
      
      {/* Floating orbs for visual effect */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500 rounded-full opacity-20 animate-float"></div>
      <div className="absolute top-40 right-32 w-24 h-24 bg-purple-500 rounded-full opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-32 left-1/3 w-20 h-20 bg-pink-500 rounded-full opacity-20 animate-float" style={{animationDelay: '4s'}}></div>
      
      <Sidebar />
      <main className="flex-1 overflow-auto relative z-10">
        <div className="min-h-full">
          {/* Header with glass effect */}
          <header className="glass-effect sticky top-0 z-20 px-8 py-6 mb-8">
            <Breadcrumbs />
          </header>
          
          {/* Content area with padding and max width */}
          <div className="container mx-auto px-8 pb-8">
            <div className="max-w-7xl mx-auto">
              {children}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Layout;
