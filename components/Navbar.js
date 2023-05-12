import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import { FaUser, FaSuitcase, FaStar, FaHome } from 'react-icons/fa';



const Nav = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
const scrollToHome = (router) => {
  const homeSection = document.querySelector("#Home");
  homeSection.scrollIntoView({ behavior: "smooth" });

  if (router.pathname !== "/") {
    router.push("/");
  }
};
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const router = useRouter();
  const pageRef = useRef(null);

  useEffect(() => {
    if (router.query.scroll === "true") {
      scrollToHome(router);
    }
  }, [router]);

  const scrollToExperience = (router) => {
    const aboutSection = document.querySelector("#Expriance");
    aboutSection.scrollIntoView({ behavior: "smooth" });
    if (router.pathname !== "/") {
    router.push("/");
  }
};
  const scrollToWork = () => {
    const aboutSection = document.querySelector("#Work");
    aboutSection.scrollIntoView({ behavior: "smooth" });
    if (router.pathname !== "/") {
    router.push("/");
  }
};
  const scrollToAbout = () => {
    const aboutSection = document.querySelector("#About");
    aboutSection.scrollIntoView({ behavior: "smooth" });
    if (router.pathname !== "/") {
    router.push("/");
  }
};


  return (
    <>

   <div className=" md:z-50 md:w-full md:h-16 md:max-w-lg md:-translate-x-1/2 md:bg-[#202020] md:border  md:rounded-md md:border-transparent  md:bottom-4 md:left-1/2   fixed bottom-0 left-0 z-50 w-full h-16 bg-[#202020] border-t border-bg-[#202020] dark:bg-bg-[#202020] ">
    <div className="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
        <button type="button" className="inline-flex md:border-r font-bold  md:uppercase md:text-xl  flex-col items-center justify-center px-8   hover:bg-black  hover:text-white">
            <svg className="md:hidden w-6 h-6 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
            </svg>
            <Link className="text-md text-gray-500 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white uppercase" href="/" onClick={() => scrollToHome(router)}>chester  </Link>
        </button>
        <button type="button" className="inline-flex md:border-r-2  md:uppercase md:text-lg flex-col items-center justify-center px-5  border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 group dark:border-gray-600">
        <svg className="md:hidden w-6 h-6 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M10 1a9 9 0 100 18 9 9 0 000-18zM7 7a1 1 0 011-1h4a1 1 0 010 2H8a1 1 0 01-1-1zm0 4a1 1 0 011-1h4a1 1 0 010 2H8a1 1 0 01-1-1zm0 4a1 1 0 011-1h4a1 1 0 010 2H8a1 1 0 01-1-1z"></path>
        </svg>
            <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white" href="/" onClick={() =>scrollToExperience(router)}>Experience</span>
        </button>
        <button type="button" className="inline-flex md:border-r md:uppercase md:text-lg flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
            <svg className="md:hidden w-6 h-6 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"></path>
            </svg>
            <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white"  href="/" onClick={() =>scrollToWork(router)}>My Work </span>
        </button>
        <button type="button" className="inline-flex  md:uppercase md:text-lg flex-col items-center justify-center px-5 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 group  dark:border-gray-600">
            <svg className="md:hidden w-6 h-6 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path clip-rule="evenodd" fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"></path>
            </svg>
            <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white" href="/" onClick={() =>scrollToAbout(router)}>About Me  </span>
        </button>
    </div>

</div>
 <main>
        { children }
 </main>
  </>
  );
}

export default Nav
