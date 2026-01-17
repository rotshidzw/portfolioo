import React from 'react';

const Card = ({ children }) => {
  return (
    <div className="group rounded-2xl border border-slate-200/80 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-teal-500/60 hover:shadow-lg hover:shadow-teal-500/10 dark:border-white/10 dark:bg-white/5 dark:hover:border-teal-400/60 dark:hover:bg-white/10 dark:hover:shadow-teal-500/10">
      {children}
    </div>
  );
};

export default Card;
