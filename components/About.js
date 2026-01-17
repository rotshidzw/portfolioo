import SectionTitle from './SectionTitle';

const AboutPage = () => {
  return (
    <>
      <SectionTitle id="About" title="ABOUT ME" align="start" />
      <div className="flex flex-col items-center text-white justify-center md:px-20 py-10 md:py-16">
        <div className="px-4 mb-8 md:mb-0 md:mr-8">
          <p className="text-sm md:text-left md:max-w-5xl italic md:text-xl leading-relaxed">
            I am a passionate web developer with 3 years of experience in creating custom websites and web applications. My
            mission is to help businesses and organizations achieve their goals through effective and efficient web development
            solutions. As a dedicated web developer, I am committed to staying up-to-date with the latest technologies and trends
            in the industry. I approach each project with enthusiasm, creativity, and a focus on delivering a high-quality end
            product that meets the unique needs of each client. With a passion for innovation and an eye for detail, I specialize
            in creating intuitive and user-friendly web experiences. My goal is to not only meet but exceed my clients' expectations
            and deliver exceptional results every time.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-5xl">
          <div className="border border-white/10 rounded-lg p-4 md:p-0 md:border-0">
            <h2 className="text-2xl font-bold mb-4">STRATEGY</h2>
            <ul className="list-disc text-sm md:text-lg list-inside mb-4">
              <li>Brand Building</li>
              <li>Marketing</li>
              <li>Communications</li>
            </ul>
          </div>
          <div className="border border-white/10 rounded-lg p-4 md:p-0 md:border-0">
            <h2 className="text-2xl font-bold mb-4">SKILLS</h2>
            <ul className="list-disc text-sm md:text-lg list-inside mb-4">
              <li>React</li>
              <li>Next.js</li>
              <li>JavaScript</li>
              <li>Node.js</li>
            </ul>
          </div>
          <div className="border border-white/10 rounded-lg p-4 md:p-0 md:border-0">
            <h2 className="text-2xl font-bold mb-4">ADVICE</h2>
            <ul className="list-disc text-sm md:text-lg list-inside">
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
