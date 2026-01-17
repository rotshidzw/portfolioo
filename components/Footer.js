import React from 'react';

const Footer = () => {
  return (
    <footer id="contact" className="border-t border-slate-200/60 bg-slate-50/80 px-4 py-10 text-slate-700 dark:border-white/10 dark:bg-slate-950/80 dark:text-slate-200">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-teal-600 dark:text-teal-300">Let&apos;s connect</p>
          <p className="mt-2 max-w-md text-base text-slate-600 dark:text-slate-200/80">
            Open to senior front-end roles, systems projects, and e-waste initiatives. Let&apos;s talk about how I can help your team.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href="mailto:rochidzwachester@gmail.com"
            className="rounded-full border border-slate-300 px-4 py-2 text-sm font-medium transition hover:border-teal-500 hover:text-teal-600 dark:border-white/20 dark:hover:border-teal-400 dark:hover:text-teal-200"
          >
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/rochidzwa-chester/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-slate-300 px-4 py-2 text-sm font-medium transition hover:border-teal-500 hover:text-teal-600 dark:border-white/20 dark:hover:border-teal-400 dark:hover:text-teal-200"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/rotshidzw"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-slate-300 px-4 py-2 text-sm font-medium transition hover:border-teal-500 hover:text-teal-600 dark:border-white/20 dark:hover:border-teal-400 dark:hover:text-teal-200"
          >
            GitHub
          </a>
          <a
            href="https://twitter.com/rotshidzwamavh1"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-slate-300 px-4 py-2 text-sm font-medium transition hover:border-teal-500 hover:text-teal-600 dark:border-white/20 dark:hover:border-teal-400 dark:hover:text-teal-200"
          >
            Twitter
          </a>
        </div>
      </div>
      <div className="mx-auto mt-8 flex w-full max-w-6xl flex-col gap-2 text-xs text-slate-400 dark:text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <span>Design &amp; build by Rotshidzwa Chester Mavhungu.</span>
        <span>Powered by Next.js &amp; Tailwind CSS.</span>
      </div>
    </footer>
  );
};

export default Footer;
