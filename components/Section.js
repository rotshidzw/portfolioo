import React, { useEffect, useRef, useState } from 'react';

const Section = ({ id, title, subtitle, children }) => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id={id} ref={sectionRef} className="scroll-mt-28">
      <div className={`fade-in ${isVisible ? 'is-visible' : ''}`}>
        {(title || subtitle) && (
          <div className="mb-8">
            {subtitle && (
              <p className="text-xs uppercase tracking-[0.3em] text-teal-600 dark:text-teal-300">
                {subtitle}
              </p>
            )}
            {title && (
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                {title}
              </h2>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;
