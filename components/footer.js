const Footer = () => {
  const handleSendMessage = () => {
    window.location.href = 'mailto:rochidzwachester@gmail.com';
  };

  return (
    <footer className="inset-0 bg-gradient-to-r mb-20 md:mb-0 from-black to-pink-950" id="Footer">
      <div className="text-xl md:text-7xl px-4 mb-16 mt-32 text-white flex flex-col justify-between">
        <h1 className="md:text-left text-white mt-20 font-bold">LET’S CONNECT!</h1>
        <p className="text-md max-w-sm text-white md:text-2xl mt-12 leading-relaxed">
          <span
            className="underline hover:no-underline cursor-pointer transition-all"
            onClick={handleSendMessage}
          >
            Send me a message
          </span>{' '}
          or
          <a
            className="underline hover:no-underline cursor-pointer transition-all ml-2"
            href="https://www.linkedin.com/in/rochidzwa-chester/"
            target="_blank"
            rel="noopener noreferrer"
          >
            connect on LinkedIn
          </a>
          , and let’s discuss how I can help you.
        </p>
      </div>
      <hr className="my-8 border-gray-300/40" />
      <div className="flex text-white flex-wrap md:p-4 underline md:no-underline mb-8 gap-2">
        <a
          href="mailto:rochidzwachester@gmail.com"
          className="footer-link md:p-4 underline md:no-underline md:border md:rounded-full justify-between hover:bg-white hover:text-black transition-all"
        >
          Email
        </a>
        <a
          href="https://www.linkedin.com/in/rochidzwa-chester/"
          className="footer-link md:p-4 underline md:no-underline md:border md:rounded-full justify-between hover:bg-white hover:text-black transition-all"
        >
          LinkedIn
        </a>
        <a
          href="https://twitter.com/rotshidzwamavh1"
          className="footer-link md:p-4 underline md:no-underline md:border md:rounded-full justify-between hover:bg-white hover:text-black transition-all"
        >
          Twitter
        </a>
        <a
          href="https://www.instagram.com/rotshidzwachester/"
          className="footer-link md:p-4 underline md:no-underline md:border md:rounded-full justify-between hover:bg-white hover:text-black transition-all"
        >
          Instagram
        </a>
        <a
          href="https://github.com/rotshidzw"
          className="footer-link md:p-4 underline md:no-underline md:border md:rounded-full justify-between hover:bg-white hover:text-black transition-all"
        >
          GitHub
        </a>
      </div>

      <div className="flex justify-between text-white text-left space-x-2 px-4 pb-10">
        <span className="hover:underline">Design by rotshidzwa</span>
        <span className="hover:underline text-right">Powered by rotshidzwa</span>
      </div>
    </footer>
  );
};

export default Footer;
