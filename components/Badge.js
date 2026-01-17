import React from 'react';

const Badge = ({ children }) => {
  return (
    <span className="rounded-full border border-slate-200/80 bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-100/80">
      {children}
    </span>
  );
};

export default Badge;
