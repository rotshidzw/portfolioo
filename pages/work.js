import Link from 'next/link';
import Navbar from '../components/Navbar';
import TopNav from '../components/TopNav';
import Footer from '@/components/footer';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data/projects';

const Work = () => {
  return (
    <>
      <TopNav />
      <Navbar />
      <section className="work px-4 md:px-10 pt-24 pb-16 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-emerald-300">Portfolio</p>
              <h1 className="text-3xl md:text-6xl font-bold mt-3">MY DIGITAL PORTFOLIO</h1>
              <p className="mt-4 text-white/70 max-w-2xl">
                Selected work across web experiences, dashboards, and interactive demos. Each project highlights UX craft,
                performance, and business outcomes.
              </p>
            </div>
            <Link
              href="/lab"
              className="rounded-full border border-emerald-400/70 px-5 py-2 text-xs uppercase tracking-wide transition-all duration-200 hover:-translate-y-0.5 hover:border-emerald-300 hover:text-emerald-200"
            >
              Visit Dev Lab
            </Link>
          </div>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} darkText />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Work;
