import React, { useState } from "react";
import Navbar  from '../components/Navbar';
import Footer from "@/components/footer";
const Work = () => {
  const handleSendMessage = () => {
    window.location.href = 'mailto:rochidzwachester@gmail.com';
  };
  const [showMore, setShowMore] = useState(false);
  const cards = [

  ];

  const handleClick = () => {
    setShowMore(true);
  };
  return (
   <>
   <Navbar />
   <div className="work">
   <div className="text-xl md:text-8xl  mb-4 py-16 text-white flex flex-row justify-between  items-center" id="Work">
  <h1 className="md:text-left font-bold">MY DIGITAL <br /> PORTFOLIO</h1>
  <h3 className="text-sm px-4 md:text-3xl justify-end text-right relative">
{/* eslint-disable no-alert, no-console */}
  <img src="https://assets.website-files.com/63f22b1aac84aa899ace5dcb/6402d63ebac136effe67fce0_lets-together-text.svg" loading="lazy" alt="Lets Together Image" className="lets-work-text h-20 w-20 md:h-32 md:w-32" />
{/* eslint-disable no-alert, no-console */}
  <img src="https://assets.website-files.com/63f22b1aac84aa899ace5dcb/64003210442ed82c3c705d6c_right-arrow-work.svg" loading="lazy" alt="Right Arrow Work"  className="arrow-icon absolute top-1/2 md:right-16 right-10 sm:right-12 transform -translate-y-1/2 h-8 w-8 md:h-12 md:w-12 cursor-pointer"  onClick={handleSendMessage} />
</h3>
</div>
<hr className="border-gray-300 my-4 py-14 w-full" />
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-2 gap-4">
    <div className="bg-white rounded-lg shadow-lg">
  {/* eslint-disable no-alert, no-console */}
    <img  src="https://user-images.githubusercontent.com/69056906/226124010-b79b0763-8c33-4776-b70a-53f65d80a1ae.png" alt="Project 1" className="w-full h-48 object-cover rounded-t-lg" />
    <div className="p-4">
      <h3 className="text-xl font-bold mb-2">News</h3>
      <p className="text-gray-600 mb-4">is a news and content platform that covers a wide range of topics such as current events, politics, sports, and lifestyle.</p>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 px-2 gap-4">
      <a href="https://feed-news.netlify.app/" className="flex items-center text-purple-600">
        Go Live
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M6 6a.75.75 0 01.75-.75h6.5a.75.75 0 01.75.75v6.5a.75.75 0 11-1.5 0V6.56L4.72 14.78a.75.75 0 11-1.06-1.06L11.44 6H6z" clipRule="evenodd" />
        </svg>
      </a>

      <a href="https://github.com/rotshidzw/peca" className="flex items-center text-purple-600">
        Git code
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M6 6a.75.75 0 01.75-.75h6.5a.75.75 0 01.75.75v6.5a.75.75 0 11-1.5 0V6.56L4.72 14.78a.75.75 0 11-1.06-1.06L11.44 6H6z" clipRule="evenodd" />
        </svg>
      </a>
      </div>
    </div>
  </div>

  <div className="bg-white rounded-lg shadow-lg">
  {/* eslint-disable no-alert, no-console */}
    <img src="https://user-images.githubusercontent.com/69056906/235224391-f1dc04a4-caf1-4748-85ec-937777ecceb2.png" alt="Project 2" className="w-full h-48 object-cover rounded-t-lg" />
    <div className="p-4">
      <h3 className="text-xl font-bold mb-2">The-Crystal-Project</h3>
      <p className="text-gray-600 mb-4">The template also includes pages for services, pricing, and booking, as well</p>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 px-2 gap-4">
      <a href="https://storied-sunburst-99dd6f.netlify.app/" className="flex items-center text-purple-600">
        Go Live
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M6 6a.75.75 0 01.75-.75h6.5a.75.75 0 01.75.75v6.5a.75.75 0 11-1.5 0V6.56L4.72 14.78a.75.75 0 11-1.06-1.06L11.44 6H6z" clipRule="evenodd" />
        </svg>
      </a>

      <a href="https://github.com/rotshidzw/the-crystal-project" className="flex items-center text-purple-600">
        Git code
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M6 6a.75.75 0 01.75-.75h6.5a.75.75 0 01.75.75v6.5a.75.75 0 11-1.5 0V6.56L4.72 14.78a.75.75 0 11-1.06-1.06L11.44 6H6z" clipRule="evenodd" />
        </svg>
      </a>
      </div>
    </div>
  </div>
  <div className="bg-white rounded-lg shadow-lg">
  {/* eslint-disable no-alert, no-console */}
    <img src="https://user-images.githubusercontent.com/69056906/235226287-4ca825bc-7629-48d6-a26e-7996d0cd904f.png" alt="Project 2" className="w-full h-48 object-cover rounded-t-lg" />
    <div className="p-4">
      <h3 className="text-xl font-bold mb-2">Landing page</h3>
      <p className="text-gray-600 mb-4"> functionality for visitors who want to Go Live about the business</p>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 px-2 gap-4">
      <a href="https://main--friendly-genie-e6ae39.netlify.app/" className="flex items-center text-purple-600">
        Go Live
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M6 6a.75.75 0 01.75-.75h6.5a.75.75 0 01.75.75v6.5a.75.75 0 11-1.5 0V6.56L4.72 14.78a.75.75 0 11-1.06-1.06L11.44 6H6z" clipRule="evenodd" />
        </svg>
      </a>

      <a href="https://github.com/rotshidzw/product-landing-page" className="flex items-center text-purple-600">
        Git code
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M6 6a.75.75 0 01.75-.75h6.5a.75.75 0 01.75.75v6.5a.75.75 0 11-1.5 0V6.56L4.72 14.78a.75.75 0 11-1.06-1.06L11.44 6H6z" clipRule="evenodd" />
        </svg>
      </a>
      </div>
    </div>
  </div>
  <div className="bg-white rounded-lg shadow-lg">
  {/* eslint-disable no-alert, no-console */}
    <img src="https://media.licdn.com/dms/image/C4D2DAQHRh0zghIg-fw/profile-treasury-image-shrink_800_800/0/1661087307885?e=1683993600&v=beta&t=x6VlJeJWHk7pogj_FufjQ8zgvS37CKc2Svi8Zrnq8cw" alt="Project 2" className="w-full h-48 object-cover rounded-t-lg" />
    <div className="p-4">
      <h3 className="text-xl font-bold mb-2">TVMaze</h3>
      <p className="text-gray-600 mb-4">an api based app to show lastest shows (movies , series)</p>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 px-2 gap-4">
      <a href="https://hammaazarok.github.io/javascript-capstone/" className="flex items-center text-purple-600">
        Go Live
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M6 6a.75.75 0 01.75-.75h6.5a.75.75 0 01.75.75v6.5a.75.75 0 11-1.5 0V6.56L4.72 14.78a.75.75 0 11-1.06-1.06L11.44 6H6z" clipRule="evenodd" />
        </svg>
      </a>

      <a href="https://github.com/hammaazarok/javascript-capstone" className="flex items-center text-purple-600">
        Git code
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M6 6a.75.75 0 01.75-.75h6.5a.75.75 0 01.75.75v6.5a.75.75 0 11-1.5 0V6.56L4.72 14.78a.75.75 0 11-1.06-1.06L11.44 6H6z" clipRule="evenodd" />
        </svg>
      </a>
      </div>
    </div>
  </div>
  <div className="bg-white rounded-lg shadow-lg">
  {/* eslint-disable no-alert, no-console */}
    <img src="https://media.licdn.com/dms/image/C562DAQHJY9NqVsCPBQ/profile-treasury-image-shrink_800_800/0/1679164086369?e=1683993600&v=beta&t=fIa7AxWDVMwOVxcuOwtBhupI8QFTdTdf8KpyIpfhZRs" alt="Project 2" className="w-full h-48 object-cover rounded-t-lg" />
    <div className="p-4">
      <h3 className="text-xl font-bold mb-2">Real State Agent</h3>
      <p className="text-gray-600 mb-4">real state agent web page I’ve helped families determine their home’s worth, set the right price, and negotiate a winning deal.</p>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 px-2 gap-4">
      <a href="gregarious-dragon-a4fbcc.netlify.app/?" className="flex items-center text-purple-600">
        Go Live
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M6 6a.75.75 0 01.75-.75h6.5a.75.75 0 01.75.75v6.5a.75.75 0 11-1.5 0V6.56L4.72 14.78a.75.75 0 11-1.06-1.06L11.44 6H6z" clipRule="evenodd" />
        </svg>
      </a>

      <a href="https://github.com/rotshidzw/landingpage" className="flex items-center text-purple-600">
        Git code
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M6 6a.75.75 0 01.75-.75h6.5a.75.75 0 01.75.75v6.5a.75.75 0 11-1.5 0V6.56L4.72 14.78a.75.75 0 11-1.06-1.06L11.44 6H6z" clipRule="evenodd" />
        </svg>
      </a>
      </div>
    </div>
  </div>
  <div className="bg-white rounded-lg shadow-lg">
  {/* eslint-disable no-alert, no-console */}
    <img src="https://media.licdn.com/dms/image/C562DAQFw1l0l09Cblw/profile-treasury-image-shrink_800_800/0/1679163982680?e=1683993600&v=beta&t=iOb2wSALsmJrXPY-CyuFBPo0SzN7caqQ6z5J43RlHRs" alt="Project 2" className="w-full h-48 object-cover rounded-t-lg" />
    <div className="p-4">
      <h3 className="text-xl font-bold mb-2">Anti Da Menace landing page</h3>
      <p className="text-gray-600 mb-4">shows off his youtube videos and his playlist its done by using googleapi to show all the info the rapper antidamanace including the functioning contact form furthermore the about which include who he is</p>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 px-2 gap-4">
      <a href="https://antidamenace.netlify.app/" className="flex items-center text-purple-600">
        Go Live
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M6 6a.75.75 0 01.75-.75h6.5a.75.75 0 01.75.75v6.5a.75.75 0 11-1.5 0V6.56L4.72 14.78a.75.75 0 11-1.06-1.06L11.44 6H6z" clipRule="evenodd" />
        </svg>
      </a>

      <a href="https://github.com/rotshidzw/nextjsapi" className="flex items-center text-purple-600">
        Git code
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M6 6a.75.75 0 01.75-.75h6.5a.75.75 0 01.75.75v6.5a.75.75 0 11-1.5 0V6.56L4.72 14.78a.75.75 0 11-1.06-1.06L11.44 6H6z" clipRule="evenodd" />
        </svg>
      </a>
      </div>
    </div>
  </div>
  <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cards.slice(0, showMore ? cards.length : 6).map((card, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg">
          {/* eslint-disable no-alert, no-console */}
            <img
              src={card.image}
              alt={card.projectName}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">{card.projectName}</h3>
              <p className="text-gray-600 mb-4">{card.description}</p>
              <a
                href={card.link}
                className="flex items-center text-purple-600"
              >
                Learn More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 6a.75.75 0 01.75-.75h6.5a.75.75 0 01.75.75v6.5a.75.75 0 11-1.5 0V6.56L4.72 14.78a.75.75 0 11-1.06-1.06L11.44 6H6z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
      {cards.length > 6 && !showMore && (
        <div className="flex justify-center mt-4">
          <button
            className="rounded-full bg-purple-600 text-white py-2 px-4"
            onClick={handleClick}
          >
            See More
          </button>
        </div>
      )}
    </div>
</div>
</div>
<Footer />
   </>
  )
}

export default Work
