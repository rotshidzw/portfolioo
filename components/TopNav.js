import Link from 'next/link';

const TopNav = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-black/80 backdrop-blur border-b border-white/10">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 text-white">
        <Link href="/" className="text-lg font-bold tracking-wide">
          Rotshidzwa Mavhungu
        </Link>
        <div className="flex flex-wrap gap-4 text-sm uppercase tracking-wide">
          <Link href="/" className="hover:text-purple-300 transition-colors">
            Home
          </Link>
          <Link href="/#Expriance" className="hover:text-purple-300 transition-colors">
            Experience
          </Link>
          <Link href="/#Work" className="hover:text-purple-300 transition-colors">
            Projects
          </Link>
          <Link href="/lab" className="hover:text-purple-300 transition-colors">
            Dev Lab
          </Link>
          <Link href="/contact" className="hover:text-purple-300 transition-colors">
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default TopNav;
