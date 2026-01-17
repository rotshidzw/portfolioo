import Head from 'next/head';
import { useEffect, useMemo, useState } from 'react';
import Layout from '@/components/Layout';
import Section from '@/components/Section';
import Card from '@/components/Card';
import Badge from '@/components/Badge';
import { filters, projects } from '@/data/portfolioData';

const Work = () => {
  const [activeSection, setActiveSection] = useState('projects');
  const [theme, setTheme] = useState('dark');
  const [selectedFilter, setSelectedFilter] = useState('All');

  const sections = useMemo(
    () => [
      { id: 'projects', label: 'Projects' },
      { id: 'contact', label: 'Contact' },
    ],
    []
  );

  useEffect(() => {
    const storedTheme = typeof window !== 'undefined' ? localStorage.getItem('theme') : null;
    const prefersDark =
      typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = storedTheme || (prefersDark ? 'dark' : 'light');
    setTheme(initialTheme);
    document.documentElement.classList.toggle('dark', initialTheme === 'dark');
  }, []);

  useEffect(() => {
    const sectionElements = sections
      .map((section) => document.getElementById(section.id))
      .filter(Boolean);

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

    sectionElements.forEach((section) => observer.observe(section));

    return () => {
      sectionElements.forEach((section) => observer.unobserve(section));
    };
  }, [sections]);

  const handleToggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', nextTheme);
    }
    document.documentElement.classList.toggle('dark', nextTheme === 'dark');
  };

  const filteredProjects = projects.filter((project) =>
    selectedFilter === 'All' ? true : project.category === selectedFilter
  );

  return (
    <Layout
      sections={sections}
      activeSection={activeSection}
      onToggleTheme={handleToggleTheme}
      theme={theme}
    >
      <Head>
        <title>Rotshidzwa Chester Mavhungu – Project Archive</title>
        <meta
          name="description"
          content="A deeper look at Rotshidzwa Chester Mavhungu's front-end and full-stack project portfolio."
        />
      </Head>

      <Section id="projects" title="Project Archive" subtitle="Case studies & demos">
        <p className="max-w-2xl text-sm text-slate-600 dark:text-slate-200/80">
          Browse the full set of web projects, each focused on clean UI, responsiveness, and clear product storytelling.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setSelectedFilter(filter)}
              className={`rounded-full border px-4 py-1 text-xs font-semibold transition ${
                selectedFilter === filter
                  ? 'border-teal-400 bg-teal-400 text-slate-900'
                  : 'border-slate-300 text-slate-600 hover:border-teal-500 hover:text-teal-600 dark:border-white/20 dark:text-slate-200/80 dark:hover:border-teal-400'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
        <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredProjects.map((project) => (
            <Card key={project.name}>
              <div className="overflow-hidden rounded-xl border border-slate-200/80 dark:border-white/10">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={project.image} alt={`${project.name} preview`} className="h-44 w-full object-cover" />
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{project.name}</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-200/80">{project.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag}>{tag}</Badge>
                  ))}
                </div>
                <div className="mt-4 flex flex-wrap gap-4 text-sm">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-600 transition hover:text-teal-500 dark:text-teal-300"
                  >
                    Live demo →
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-600 transition hover:text-teal-500 dark:text-teal-300"
                  >
                    GitHub →
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="contact" title="Let&apos;s connect" subtitle="Open for roles">
        <Card>
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Interested in working together?</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-200/80">
                I&apos;m happy to share walkthroughs, code samples, and deployment details.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="mailto:rochidzwachester@gmail.com"
                className="rounded-full bg-teal-400 px-5 py-2 text-sm font-semibold text-slate-900 transition hover:bg-teal-300"
              >
                Email me
              </a>
              <a
                href="/"
                className="rounded-full border border-slate-300 px-5 py-2 text-sm font-semibold text-slate-700 transition hover:border-teal-500 hover:text-teal-600 dark:border-white/20 dark:text-white/80 dark:hover:border-teal-400"
              >
                Back to home
              </a>
            </div>
          </div>
        </Card>
      </Section>
    </Layout>
  );
};

export default Work;
