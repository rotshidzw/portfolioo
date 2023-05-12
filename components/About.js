import Image from 'next/image';
import { useRef } from 'react';
const AboutPage = () => {

  return (<>


   <h1 className="text-4xl md:text-7xl font-bold mb-4 mt-20 text-white md:text-left" id="About">ABOUT ME</h1>
    <div className="flex flex-col md:flex-col items-center text-white justify-center md:px-20 py-16">
      <div className="px-4 mb-8 md:mb-0 md:mr-8">
        <p className="text-sm   md:text-left md:max-w-5xl italic md:text-xl">
          I am a passionate web developer with 3 year of experience
         in creating custom websites and web applications. My mission is to help
         businesses and organizations achieve their goals through effective and efficient web development solutions.
        As a dedicated web developer, I am committed to staying up-to-date with the latest
        technologies and trends in the industry. I approach each project with enthusiasm,
         creativity, and a focus on delivering a high-quality end product that meets the unique
          needs of each client. With a passion for innovation and an eye for detail,
           I specialize in creating intuitive and user-friendly web experiences.
            My goal is to not only meet but exceed my clients expectations and deliver exceptional results every time.</p>
      </div>
      <div className="mt-16 grid-cols-2 grid text-2xl md:grid-cols-3 gap-2">
  <div>
    <h2 className="text-2xl  font-bold mb-4">STRATEGY</h2>
    <ul className="list-disc text-sm md:text-lg   list-inside mb-8">
      <li>Brand Building</li>
      <li>Marketing</li>
      <li>Communications</li>
    </ul>
  </div>
  <div>
    <h2 className="text-2xl font-bold mb-4">SKILLS</h2>
    <ul className="list-disc text-sm md:text-lg   list-inside mb-8">
      <li>React</li>
      <li>Nextjs</li>
      <li>JavaScript</li>
      <li>Node.js</li>

    </ul>
  </div>
  <div>
    <h2 className="text-2xl font-bold mb-4">ADVICE</h2>
    <ul className="list-disc text-sm md:text-lg   list-inside">
      <li>Change Management</li>
      <li>Process Management</li>
      <li>Organizational Development</li>
    </ul>
  </div>
</div>
</div>
    </>
  );
};

export default AboutPage;
