import Image from 'next/image';
import Rotshi from '../components/assests/rotshidzwa.jpg';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import Modal from 'react-modal';

function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#About');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <section className="inset-0 bg-gradient-to-r from-black to-pink-950" id="Home">
        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          contentLabel="Video Modal"
          className="bg-black text-white bg-gradient-to-r from-black to-pink-950 h-full"
        >
          <button onClick={closeModal} className="text-md font-bold">
            CLOSE
          </button>
          <div className="flex justify-center items-center h-full">
            <iframe
              src="https://www.youtube.com/embed/WILXp4WNSsY?autoplay=1"
              frameBorder="0"
              allowFullScreen
              title="Video"
              className="w-full sm:w-3/4 h-full sm:h-3/4 rounded-md"
            ></iframe>
          </div>
        </Modal>

        <div className="px-6 py-8 md:px-2 text-white text-left lg:text-left">
          <div className="container mx-auto xl:px-3">
            <div className="grid md:grid-cols-2 gap-10 md:gap-20 items-center">
              <div className="mt-2 lg:mt-0 text-center md:text-left">
                <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-9xl font-bold tracking-tight mb-6 md:mb-12">
                  Creative <br />
                  <span className="text-white">Developer</span>
                </h1>
                <p className="md:text-3xl text-lg">
                  I’m a Full Stack Developer &amp; Software Engineer based in South Africa, Johannesburg, focused on React,
                  Next.js, and scalable web systems.
                </p>
                <div className="mt-6 flex flex-wrap gap-4 justify-center md:justify-start">
                  <a
                    href="/Rotshidzwa-Chester-Mavhungu-CV.pdf"
                    download
                    className="rounded-full border border-white px-5 py-2 text-sm uppercase tracking-wide transition-all duration-200 hover:-translate-y-0.5 hover:bg-white hover:text-black"
                  >
                    Download CV
                  </a>
                  <button
                    type="button"
                    onClick={scrollToAbout}
                    className="rounded-full border border-white/40 px-5 py-2 text-sm uppercase tracking-wide transition-all duration-200 hover:-translate-y-0.5 hover:border-white"
                  >
                    About Me
                  </button>
                </div>
              </div>
              <div className="md:mb-12 md:py-20 md:px-10 lg:mb-0 flex flex-col items-center md:items-start">
                <Image src={Rotshi} className="rounded shadow-lg" alt="Rotshidzwa Chester Mavhungu" />
                <span className="text-2xl md:text-3xl font-bold mt-4">
                  Mavhungu R.C{' '}
                  <FontAwesomeIcon
                    icon={faPlayCircle}
                    className="ml-2 cursor-pointer border rounded-full bg-gradient-to-r from-black to-pink-950 hover:text-black hover:bg-gradient-to-r hover:from-white hover:to-pink-200 md:text-3xl text-md transition-all duration-200"
                    onClick={openModal}
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="px-2 mt-2 md:mt-12">
        <div
          className="flex ml-4 mt-8 md:mt-12 justify-center items-center h-12 w-12 md:h-20 md:w-20 text-white border-2 hover:bg-white rounded-full bg-black cursor-pointer transition-all duration-200 hover:-translate-y-0.5"
          onClick={scrollToAbout}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-10 w-10 md:h-12 md:w-12 text-white hover:text-black"
          >
            <path
              fillRule="evenodd"
              d="M10.707 15.707a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L11 13.586V4a1 1 0 1 0-2 0v9.586l-3.293-3.293a1 1 0 0 0-1.414 1.414l4 4z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
