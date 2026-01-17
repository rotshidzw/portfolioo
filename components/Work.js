import Link from 'next/link';
import SectionTitle from './SectionTitle';
import ProjectCard from './ProjectCard';

const projects = [
  {
    image: 'https://user-images.githubusercontent.com/69056906/226124010-b79b0763-8c33-4776-b70a-53f65d80a1ae.png',
    title: 'News',
    description:
      'is a news and content platform that covers a wide range of topics such as current events, politics, sports, and lifestyle.',
    liveLink: 'https://feed-news.netlify.app/',
    githubLink: 'https://github.com/rotshidzw/peca',
  },
  {
    image: 'https://user-images.githubusercontent.com/69056906/235224391-f1dc04a4-caf1-4748-85ec-937777ecceb2.png',
    title: 'The-Crystal-Project',
    description: 'The template also includes pages for services, pricing, and booking, as well',
    liveLink: 'https://storied-sunburst-99dd6f.netlify.app/',
    githubLink: 'https://github.com/rotshidzw/the-crystal-project',
  },
  {
    image: 'https://user-images.githubusercontent.com/69056906/235226287-4ca825bc-7629-48d6-a26e-7996d0cd904f.png',
    title: 'Landing page',
    description: 'functionality for visitors who want to Go Live about the business',
    liveLink: 'https://main--friendly-genie-e6ae39.netlify.app/',
    githubLink: 'https://github.com/rotshidzw/product-landing-page',
  },
  {
    image: 'https://user-images.githubusercontent.com/69056906/238276480-1e5266b6-5bf9-4000-afc4-12a454e905ff.png',
    title: 'Space Travelers Hub',
    description:
      'A simple and interactive React app that utilizes an external SpaceX API to provide information about rockets and missions. Users can reserve rockets, join missions, and view them in a profile.',
    liveLink: 'https://space-travelers-hubs.netlify.app/',
    githubLink: 'https://github.com/rotshidzw/space-travelers-hub/tree/main',
  },
  {
    image: 'https://user-images.githubusercontent.com/69056906/238199732-ec4449a8-2a49-4698-b010-d80d8be0865c.png',
    title: 'Real Estate Agent',
    description:
      'Real estate agent web page where I’ve helped families determine their home’s worth, set the right price, and negotiate a winning deal.',
    liveLink: 'https://gregarious-dragon-a4fbcc.netlify.app/?',
    githubLink: 'https://github.com/rotshidzw/landingpage',
  },
  {
    image: 'https://user-images.githubusercontent.com/69056906/224443795-3abb62e3-b3d5-4f36-88ea-79cea142eb60.png',
    title: 'Anti Da Menace landing page',
    description:
      'Shows off YouTube videos and playlists using the Google API, including a working contact form and about section.',
    liveLink: 'https://antidamenace.netlify.app/',
    githubLink: 'https://github.com/rotshidzw/nextjsapi',
  },
];

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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-2 gap-4">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
      <div className="flex justify-center items-center">
        <div className="flex mt-12 justify-center items-center h-[100px] w-[100px] md:h-32 md:w-32 text-white border-2 hover:text-black hover:bg-white rounded-full bg-black cursor-pointer transition-all duration-200 hover:-translate-y-1">
          <Link href="/work" className="text-center text-sm md:text-md flex font-bold justify-center rounded-full">
            More Projects
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-8 ml-1"
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
      </div>
    </>
  );
};

export default Work;
