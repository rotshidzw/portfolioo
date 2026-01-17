import Navbar from '../components/Navbar';
import Footer from '@/components/footer';
import ProjectCard from '@/components/ProjectCard';

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
    image: 'https://media.licdn.com/dms/image/C4D2DAQHRh0zghIg-fw/profile-treasury-image-shrink_800_800/0/1661087307885?e=1683993600&v=beta&t=x6VlJeJWHk7pogj_FufjQ8zgvS37CKc2Svi8Zrnq8cw',
    title: 'TVMaze',
    description: 'An API-based app to show latest shows (movies, series).',
    liveLink: 'https://hammaazarok.github.io/javascript-capstone/',
    githubLink: 'https://github.com/hammaazarok/javascript-capstone',
  },
  {
    image: 'https://media.licdn.com/dms/image/C562DAQHJY9NqVsCPBQ/profile-treasury-image-shrink_800_800/0/1679164086369?e=1683993600&v=beta&t=fIa7AxWDVMwOVxcuOwtBhupI8QFTdTdf8KpyIpfhZRs',
    title: 'Real Estate Agent',
    description:
      'Real estate agent web page where I’ve helped families determine their home’s worth, set the right price, and negotiate a winning deal.',
    liveLink: 'https://gregarious-dragon-a4fbcc.netlify.app/?',
    githubLink: 'https://github.com/rotshidzw/landingpage',
  },
  {
    image: 'https://media.licdn.com/dms/image/C562DAQFw1l0l09Cblw/profile-treasury-image-shrink_800_800/0/1679163982680?e=1683993600&v=beta&t=iOb2wSALsmJrXPY-CyuFBPo0SzN7caqQ6z5J43RlHRs',
    title: 'Anti Da Menace landing page',
    description:
      'Shows off YouTube videos and playlists using the Google API, including a working contact form and about section.',
    liveLink: 'https://antidamenace.netlify.app/',
    githubLink: 'https://github.com/rotshidzw/nextjsapi',
  },
];

const Work = () => {
  const handleSendMessage = () => {
    window.location.href = 'mailto:rochidzwachester@gmail.com';
  };

  return (
    <>
      <Navbar />
      <div className="work">
        <div className="text-xl md:text-8xl mb-4 py-16 text-white flex flex-row justify-between items-center" id="Work">
          <h1 className="md:text-left font-bold">MY DIGITAL <br /> PORTFOLIO</h1>
          <h3 className="text-sm px-4 md:text-3xl justify-end text-right relative">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://assets.website-files.com/63f22b1aac84aa899ace5dcb/6402d63ebac136effe67fce0_lets-together-text.svg"
              loading="lazy"
              alt="Lets Together"
              className="lets-work-text h-20 w-20 md:h-32 md:w-32"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://assets.website-files.com/63f22b1aac84aa899ace5dcb/64003210442ed82c3c705d6c_right-arrow-work.svg"
              loading="lazy"
              alt="Right Arrow"
              className="arrow-icon absolute top-1/2 md:right-16 right-10 sm:right-12 transform -translate-y-1/2 h-8 w-8 md:h-12 md:w-12 cursor-pointer"
              onClick={handleSendMessage}
            />
          </h3>
        </div>
        <hr className="border-gray-300 my-4 py-14 w-full" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-2 gap-4">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} darkText />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Work;
