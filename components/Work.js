import Link from 'next/link';
import SectionTitle from './SectionTitle';
import ProjectCard from './ProjectCard';
import { projects } from '@/data/projects';

const Work = () => {
  return (
    <>
      <SectionTitle
        id="Work"
        title={
          <>
            DISCOVER <br />MY WORK
          </>
        }
        subtitle={
          <>
            Some opportunities and projects <br /> that I’m proud of!
          </>
        }
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-2 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
      <div className="flex justify-center items-center mt-12">
        <Link
          href="/work"
          className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-xs uppercase tracking-wide transition-all duration-200 hover:-translate-y-1 hover:border-white"
        >
          More Projects
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M6 6a.75.75 0 01.75-.75h6.5a.75.75 0 01.75.75v6.5a.75.75 0 11-1.5 0V6.56L4.72 14.78a.75.75 0 11-1.06-1.06L11.44 6H6z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
      </div>
    </>
  );
};

export default Work;
