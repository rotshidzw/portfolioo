import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useMemo, useState } from 'react';
import Layout from '@/components/Layout';
import Section from '@/components/Section';
import Card from '@/components/Card';
import Badge from '@/components/Badge';
import Rotshi from '@/components/rotshi.jpg';
import { experiences, filters, projects, skillGroups } from '@/data/portfolioData';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');
  const [theme, setTheme] = useState('dark');
  const [selectedFilter, setSelectedFilter] = useState('All');

  const sections = useMemo(
    () => [
      { id: 'home', label: 'Home' },
      { id: 'about', label: 'About' },
      { id: 'skills', label: 'Skills' },
      { id: 'experience', label: 'Experience' },
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
        <title>Rotshidzwa Chester Mavhungu – Software Developer Portfolio</title>
        <meta
          name="description"
          content="Portfolio of Rotshidzwa Chester Mavhungu, a full-stack developer focused on systems, ICT projects, and e-waste initiatives."
        />
        <meta property="og:title" content="Rotshidzwa Chester Mavhungu – Software Developer Portfolio" />
        <meta
          property="og:description"
          content="Senior-level front-end and full-stack projects, experience highlights, and ways to connect."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/og-image.svg" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Section id="home">
        <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-teal-600 dark:text-teal-300">
              Full-stack developer · Systems &amp; E-waste projects
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
              Rotshidzwa Chester Mavhungu
            </h1>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-200/80">
              I&apos;m a Full Stack Developer &amp; Software Engineer based in Johannesburg, South Africa. I build dependable
              web platforms for organizations and teams that need clean UI and scalable systems.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="rounded-full bg-teal-400 px-5 py-2 text-sm font-semibold text-slate-900 transition hover:bg-teal-300"
              >
                View Projects
              </a>
              <a
                href="#"
                className="rounded-full border border-slate-300 px-5 py-2 text-sm font-semibold text-slate-700 transition hover:border-teal-500 hover:text-teal-600 dark:border-white/20 dark:text-white/80 dark:hover:border-teal-400"
              >
                Download CV
              </a>
            </div>
            <div className="mt-6 flex flex-wrap gap-4 text-sm text-slate-500 dark:text-slate-300">
              <span>Johannesburg, South Africa</span>
              <span>Open to remote &amp; onsite roles</span>
            </div>
            <div className="mt-6 flex flex-wrap gap-4 text-sm">
              <a
                href="https://github.com/rotshidzw"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 transition hover:text-teal-600 dark:text-slate-200/80 dark:hover:text-teal-300"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/rochidzwa-chester/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 transition hover:text-teal-600 dark:text-slate-200/80 dark:hover:text-teal-300"
              >
                LinkedIn
              </a>
              <a
                href="mailto:rochidzwachester@gmail.com"
                className="text-slate-600 transition hover:text-teal-600 dark:text-slate-200/80 dark:hover:text-teal-300"
              >
                Email
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl border border-teal-500/20 bg-gradient-to-br from-teal-500/10 via-transparent to-teal-500/10" />
            <div className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-3 dark:border-white/10 dark:bg-white/5">
              <Image
                src={Rotshi}
                alt="Portrait of Rotshidzwa Chester Mavhungu"
                className="h-full w-full rounded-2xl object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </Section>

      <Section id="about" title="About" subtitle="Who I am">
        <div className="rounded-2xl border border-slate-200/80 bg-white p-6 text-base text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-200/80">
          <p>
            I am a passionate web developer with 3 years of experience in creating custom websites and web applications. My
            mission is to help businesses and organizations achieve their goals through effective and efficient web
            development solutions. As a dedicated web developer, I stay up-to-date with the latest technologies and trends
            in the industry. I approach each project with enthusiasm, creativity, and a focus on delivering a high-quality
            end product that meets the unique needs of each client. With a passion for innovation and an eye for detail, I
            specialize in creating intuitive and user-friendly web experiences. My goal is to not only meet but exceed my
            clients&apos; expectations and deliver exceptional results every time.
          </p>
        </div>
      </Section>

      <Section id="skills" title="Skills" subtitle="Tech stack & focus">
        <div className="grid gap-6 md:grid-cols-2">
          {skillGroups.map((group) => (
            <Card key={group.title}>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{group.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Badge key={item}>{item}</Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="experience" title="Experience & Highlights" subtitle="Career journey">
        <div className="grid gap-6 lg:grid-cols-2">
          {experiences.map((experience) => (
            <Card key={`${experience.company}-${experience.year}`}>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{experience.role}</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-300">{experience.company}</p>
                </div>
                <span className="text-xs uppercase tracking-[0.2em] text-teal-600 dark:text-teal-300">
                  {experience.year}
                </span>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-200/80">
                {experience.highlights.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-teal-400" />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href={experience.website}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center text-sm text-teal-600 transition hover:text-teal-500 dark:text-teal-300"
              >
                Visit company
                <span className="ml-2">→</span>
              </a>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="projects" title="Projects" subtitle="Selected work">
        <div className="mb-6 flex flex-wrap gap-3">
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
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredProjects.map((project) => (
            <Card key={project.name}>
              <div className="overflow-hidden rounded-xl border border-slate-200/80 dark:border-white/10">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={project.image} alt={`${project.name} preview`} className="h-44 w-full object-cover" />
              </div>
              <div className="mt-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{project.name}</h3>
                  {project.featured && (
                    <span className="rounded-full bg-teal-400 px-2 py-1 text-[10px] font-semibold text-slate-900">
                      Featured
                    </span>
                  )}
                </div>
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

      <Section id="contact" title="Contact" subtitle="Let&apos;s build something">
        <Card>
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Ready to collaborate?</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-200/80">
                Reach out for full-time roles, consulting, or partnerships in systems and sustainable tech projects.
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
                href="https://www.linkedin.com/in/rochidzwa-chester/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-slate-300 px-5 py-2 text-sm font-semibold text-slate-700 transition hover:border-teal-500 hover:text-teal-600 dark:border-white/20 dark:text-white/80 dark:hover:border-teal-400"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </Card>
      </Section>
    </Layout>
  );
}
