import SectionTitle from './SectionTitle';

const AboutPage = () => {
  return (
    <>
      <SectionTitle id="About" title="ABOUT ME" align="start" />
      <div className="flex flex-col items-center text-white justify-center md:px-20 py-10 md:py-16">
        <div className="px-4 mb-10 md:mb-12">
          <p className="text-sm md:text-left md:max-w-5xl md:text-xl leading-relaxed text-white/80">
            I&apos;m a full stack developer who blends UI craft with systems thinking. From marketing sites to analytics
            dashboards, I focus on clean architecture, performance, and real business outcomes. I love translating complex
            ideas into simple, human experiences.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
          <div className="border border-white/10 rounded-2xl p-6 bg-black/60">
            <h2 className="text-lg font-semibold mb-3">Strategy + Direction</h2>
            <ul className="text-sm text-white/70 space-y-2">
              <li>• Product storytelling and brand clarity</li>
              <li>• KPI-driven experimentation</li>
              <li>• Roadmaps aligned to business outcomes</li>
            </ul>
          </div>
          <div className="border border-white/10 rounded-2xl p-6 bg-black/60">
            <h2 className="text-lg font-semibold mb-3">Engineering</h2>
            <ul className="text-sm text-white/70 space-y-2">
              <li>• React, Next.js, and TypeScript</li>
              <li>• API design &amp; full-stack delivery</li>
              <li>• Performance, accessibility, and QA</li>
            </ul>
          </div>
          <div className="border border-white/10 rounded-2xl p-6 bg-black/60">
            <h2 className="text-lg font-semibold mb-3">Leadership</h2>
            <ul className="text-sm text-white/70 space-y-2">
              <li>• Mentorship and coaching</li>
              <li>• Cross-functional communication</li>
              <li>• Continuous improvement mindset</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
