import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import Modal from 'react-modal';
import Rotshi from '../components/assests/rotshidzwa.jpg';

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
    <section className="relative overflow-hidden" id="Home">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-900 to-purple-950 opacity-95" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.15),_transparent_45%)]" />
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Video Modal"
        className="bg-black text-white bg-gradient-to-r from-black to-purple-950 h-full"
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

      <div className="relative px-6 pt-20 pb-16 md:px-10 text-white">
        <div className="container mx-auto xl:px-3">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-emerald-300">Creative Developer · Systems Builder</p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mt-4">
                Rotshidzwa Chester
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-sky-400">
                  Mavhungu
                </span>
              </h1>
              <p className="mt-6 text-lg md:text-xl text-white/80 max-w-xl">
                Full Stack Developer and Software Engineer based in Johannesburg. I craft modern web experiences, scalable
                systems, and analytics dashboards that keep teams moving fast.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="/Rotshidzwa-Chester-Mavhungu-CV.pdf"
                  download
                  className="rounded-full border border-white/60 px-5 py-2 text-xs uppercase tracking-wide transition-all duration-200 hover:-translate-y-0.5 hover:bg-white hover:text-black"
                >
                  Download CV
                </a>
                <Link
                  href="/lab"
                  className="rounded-full border border-emerald-400/70 px-5 py-2 text-xs uppercase tracking-wide transition-all duration-200 hover:-translate-y-0.5 hover:border-emerald-300 hover:text-emerald-200"
                >
                  Explore Dev Lab
                </Link>
                <button
                  type="button"
                  onClick={scrollToAbout}
                  className="rounded-full border border-white/20 px-5 py-2 text-xs uppercase tracking-wide transition-all duration-200 hover:-translate-y-0.5 hover:border-white"
                >
                  About Me
                </button>
              </div>
              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                <div className="border border-white/10 rounded-2xl p-4 bg-white/5">
                  <p className="text-xs uppercase tracking-wide text-emerald-300">Impact</p>
                  <p className="text-lg font-semibold mt-2">30+ shipped projects</p>
                </div>
                <div className="border border-white/10 rounded-2xl p-4 bg-white/5">
                  <p className="text-xs uppercase tracking-wide text-emerald-300">Focus</p>
                  <p className="text-lg font-semibold mt-2">Next.js · React · Ops</p>
                </div>
                <div className="border border-white/10 rounded-2xl p-4 bg-white/5">
                  <p className="text-xs uppercase tracking-wide text-emerald-300">Dev Lab</p>
                  <p className="text-lg font-semibold mt-2">Interactive demos</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center lg:items-end">
              <div className="relative">
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-emerald-400/30 via-transparent to-purple-500/30 blur-xl" />
                <Image
                  src={Rotshi}
                  className="relative rounded-3xl shadow-2xl"
                  alt="Rotshidzwa Chester Mavhungu"
                />
              </div>
              <div className="mt-6 flex items-center gap-3">
                <span className="text-xl md:text-2xl font-bold">Mavhungu R.C</span>
                <FontAwesomeIcon
                  icon={faPlayCircle}
                  className="cursor-pointer border rounded-full bg-gradient-to-r from-black to-purple-950 hover:text-black hover:bg-gradient-to-r hover:from-white hover:to-purple-200 text-2xl transition-all duration-200"
                  onClick={openModal}
                />
              </div>
              <div className="mt-6 border border-emerald-400/40 rounded-2xl p-4 bg-black/60 max-w-sm text-sm text-white/70">
                <p className="font-semibold text-white">Need a quick tour?</p>
                <p className="mt-2">
                  Jump into the Dev Lab to explore interactive demos, sysadmin tooling, and a live matrix console.
                </p>
                <Link href="/lab" className="inline-flex mt-3 text-emerald-300 hover:text-emerald-200">
                  Enter Dev Lab →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
