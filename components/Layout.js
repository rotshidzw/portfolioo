import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children, sections, activeSection, onToggleTheme, theme }) => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
      <Navbar
        sections={sections}
        activeSection={activeSection}
        onToggleTheme={onToggleTheme}
        theme={theme}
      />
      <main className="mx-auto w-full max-w-6xl px-4 pb-20 pt-28 sm:px-6 lg:px-8">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
