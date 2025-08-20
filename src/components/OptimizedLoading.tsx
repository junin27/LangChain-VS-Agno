import React, { memo } from 'react';

const OptimizedLoading: React.FC = memo(() => {
  return (
    <div className="container mx-auto px-8 pb-8">
      <div className="max-w-7xl mx-auto">
        <div className="card p-8 space-y-8">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-300 dark:bg-gray-600 rounded mb-4"></div>
      <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded mb-6 w-3/4"></div>
      <div className="space-y-3">
        <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded"></div>
        <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-5/6"></div>
        <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-4/5"></div>
      </div>
          </div>
        </div>
      </div>
    </div>
  );
});

OptimizedLoading.displayName = 'OptimizedLoading';

export default OptimizedLoading;
