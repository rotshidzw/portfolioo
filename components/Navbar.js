import { useEffect, useMemo, useState } from 'react';

const BottomNavItem = ({ label, onClick, isActive, children }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-current={isActive ? 'true' : undefined}
      className={`inline-flex md:border-r md:uppercase md:text-lg flex-col items-center justify-center px-5 transition-all duration-200 hover:bg-black hover:-translate-y-0.5 ${
        isActive ? 'bg-black text-white' : 'text-white'
      }`}
    >
      {children}
      <span className={`text-sm uppercase ${isActive ? 'text-white' : 'text-white/80'} md:text-base`}>
        {label}
      </span>
    </button>
  );
};

const Nav = () => {
  const [activeSection, setActiveSection] = useState('Home');

  const navItems = useMemo(
    () => [
      { label: 'Chester', id: 'Home' },
      { label: 'Experience', id: 'Expriance' },
      { label: 'My Work', id: 'Work' },
      { label: 'About Me', id: 'About' },
    ],
    []
  );

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    if (!sections.length) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.4 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [navItems]);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="md:z-50 md:w-full md:h-16 md:max-w-lg md:-translate-x-1/2 md:border-2 border-2 md:rounded-md md:border-transparent md:bottom-4 md:left-1/2 fixed bottom-0 left-0 z-50 w-full h-16 border-t backdrop-filter backdrop-blur-sm bg-black/70">
      <div className="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
        {navItems.map((item) => (
          <BottomNavItem
            key={item.id}
            label={item.label}
            onClick={() => scrollToSection(item.id)}
            isActive={activeSection === item.id}
          >
            <svg
              className="md:hidden w-6 h-6 mb-1 text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              {item.id === 'Home' && (
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              )}
              {item.id === 'Expriance' && (
                <path d="M10 1a9 9 0 100 18 9 9 0 000-18zM7 7a1 1 0 011-1h4a1 1 0 010 2H8a1 1 0 01-1-1zm0 4a1 1 0 011-1h4a1 1 0 010 2H8a1 1 0 01-1-1zm0 4a1 1 0 011-1h4a1 1 0 010 2H8a1 1 0 01-1-1zm9-6a1 1 0 011 1v4a1 1 0 01-2 0V7a1 1 0 011-1zm-4-1a1 1 0 00-1 1v4a1 1 0 102 0V7a1 1 0 00-1-1z" />
              )}
              {item.id === 'Work' && (
                <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z" />
              )}
              {item.id === 'About' && (
                <path clipRule="evenodd" fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" />
              )}
            </svg>
          </BottomNavItem>
        ))}
      </div>
    </div>
  );
};

export default Nav;
