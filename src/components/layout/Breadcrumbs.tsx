import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { navigationItems } from '../../data/navigation';

const Breadcrumbs: React.FC = () => {
  const location = useLocation();
  
  const getBreadcrumbs = () => {
    const pathSegments = location.pathname.split('/').filter(Boolean);
    const breadcrumbs: { title: string; path: string }[] = [
      { title: 'Início', path: '/' }
    ];

    if (pathSegments.length === 0) return breadcrumbs;

    // Find the main navigation item
    const mainItem = navigationItems.find(item => 
      item.path === `/${pathSegments[0]}` || 
      (pathSegments[0] && item.path.includes(pathSegments[0]))
    );

    if (mainItem) {
      breadcrumbs.push({ title: mainItem.title, path: mainItem.path });
      
      // Find the child item if exists
      if (pathSegments.length > 1 && mainItem.children) {
        const childItem = mainItem.children.find(child => 
          child.path === location.pathname
        );
        
        if (childItem) {
          breadcrumbs.push({ title: childItem.title, path: childItem.path });
        }
      }
    }

    return breadcrumbs;
  };

  const breadcrumbs = getBreadcrumbs();

  if (breadcrumbs.length <= 1) return null;

  return (
    <nav className="flex mb-6" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-1">
        {breadcrumbs.map((crumb, index) => (
          <li key={crumb.path} className="flex items-center">
            {index > 0 && (
              <span className="mx-3 text-white/50 text-lg">→</span>
            )}
            {index === breadcrumbs.length - 1 ? (
              <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-xl text-white font-semibold border border-white/30">
                {crumb.title}
              </span>
            ) : (
              <Link 
                to={crumb.path}
                className="px-4 py-2 text-white/80 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-300 backdrop-blur-sm border border-white/20 hover:border-white/40"
              >
                {crumb.title}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
