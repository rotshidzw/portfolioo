const ProjectCard = ({ image, title, description, liveLink, githubLink, darkText }) => {
  const textClass = darkText ? 'text-gray-600' : 'text-white';
  const linkClass = darkText ? 'text-purple-600' : 'text-purple-400';

  return (
    <div className={`rounded-lg shadow-lg ${darkText ? 'bg-white' : 'bg-black'} transition-transform duration-200 hover:-translate-y-1`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={image} alt={title} className="w-full h-48 object-cover rounded-t-lg" />
      <div className="p-4">
        <h3 className={`text-xl font-bold mb-2 ${darkText ? 'text-black' : 'text-white'}`}>{title}</h3>
        <p className={`${textClass} mb-4 text-md font-extralight`}>{description}</p>
        <div className="grid grid-cols-2 px-2 gap-4 text-sm">
          <a href={liveLink} className={`flex items-center ${linkClass} hover:underline`}>
            Go Live
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M6 6a.75.75 0 01.75-.75h6.5a.75.75 0 01.75.75v6.5a.75.75 0 11-1.5 0V6.56L4.72 14.78a.75.75 0 11-1.06-1.06L11.44 6H6z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <a href={githubLink} className={`flex items-center ${linkClass} hover:underline`}>
            Git code
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M6 6a.75.75 0 01.75-.75h6.5a.75.75 0 01.75.75v6.5a.75.75 0 11-1.5 0V6.56L4.72 14.78a.75.75 0 11-1.06-1.06L11.44 6H6z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
