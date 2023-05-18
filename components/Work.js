{/* eslint-disable */ }
import React, { useState } from "react";
import Image from 'next/image';
import Link from 'next/link';
const Experiance = () => {
    const [showMore, setShowMore] = useState(false);
    const cards = [

    ];

    const handleClick = () => {
      setShowMore(true);
    };
  return (
    <>


    <div className="text-xl md:text-7xl  mb-4 mt-20 text-white flex flex-row justify-between  items-center" id="Work">
  <h1 className="md:text-left font-bold">DISCOVER <br />MY WORK</h1>
  <h3 className="text-sm px-4 md:text-3xl justify-end text-right">Some opportunities and projects <br /> that I’m proud of! </h3>
</div>
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
    <img src="https://user-images.githubusercontent.com/69056906/238276480-1e5266b6-5bf9-4000-afc4-12a454e905ff.png" alt="Project 2" className="w-full h-48 object-cover rounded-t-lg" />
    <div className="p-4">
      <h3 className="text-xl font-bold mb-2"></h3>
      <p className="text-gray-600 mb-4">A simple and interractive React App that utilises an external space X API to provide information about space rockets and missions. User can reserve rockets, join mission and these can be viewed in a the user's profile. A user can also read more about the rockets and missions.</p>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 px-2 gap-4">
      <a href="https://space-travelers-hubs.netlify.app/" className="flex items-center text-purple-600">
        Go Live
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M6 6a.75.75 0 01.75-.75h6.5a.75.75 0 01.75.75v6.5a.75.75 0 11-1.5 0V6.56L4.72 14.78a.75.75 0 11-1.06-1.06L11.44 6H6z" clipRule="evenodd" />
        </svg>
      </a>

      <a href="https://github.com/rotshidzw/space-travelers-hub/tree/main" className="flex items-center text-purple-600">
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
    <img src="https://user-images.githubusercontent.com/69056906/238199732-ec4449a8-2a49-4698-b010-d80d8be0865c.png" alt="Project 2" className="w-full h-48 object-cover rounded-t-lg" />
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
    <img src="https://user-images.githubusercontent.com/69056906/224443795-3abb62e3-b3d5-4f36-88ea-79cea142eb60.png" alt="Project 2" className="w-full h-48 object-cover rounded-t-lg" />
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
<div className="flex  justify-center items-center ">
      <div className="flex mt-12 justify-center items-center h-[100px] w-[100px] md:h-32 md:w-32 text-white border-2   hover:text-black hover:bg-white rounded-full bg-black cursor-pointer">
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
  )
}

export default Experiance
