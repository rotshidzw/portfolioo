import SectionTitle from './SectionTitle';

const Awards = () => {
  return (
    <>
      <SectionTitle title="Credentials" subtitle="Recognition and certifications earned." />
      <div className="text-white mt-10 mb-16 px-4">
        <div className="max-w-3xl mx-auto rounded-2xl border border-white/10 bg-black/60 p-6 md:p-8">
          <ol className="space-y-4 text-sm md:text-base">
            <li className="flex items-start gap-3">
              <span className="text-emerald-300 font-semibold">01</span>
              <a
                href="https://www.credential.net/ba7844de-cc3a-4835-a3d0-0079a93a4cca"
                className="hover:underline text-white/80"
                target="_blank"
                rel="noopener noreferrer"
              >
                Microverse Ruby/Databases
              </a>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-emerald-300 font-semibold">02</span>
              <a
                href="https://www.credential.net/e3529ca8-9fe5-4cb8-9cdd-2c6ae722c1f3"
                className="hover:underline text-white/80"
                target="_blank"
                rel="noopener noreferrer"
              >
                Microverse React &amp; Redux
              </a>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-emerald-300 font-semibold">03</span>
              <a
                href="https://www.credential.net/c917cafa-b0a6-4fc5-be27-1741b442d7af"
                className="hover:underline text-white/80"
                target="_blank"
                rel="noopener noreferrer"
              >
                Microverse JavaScript
              </a>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-emerald-300 font-semibold">04</span>
              <a
                href="https://www.credential.net/9f401a1e-1350-4336-b0ca-8824cc60474b"
                className="hover:underline text-white/80"
                target="_blank"
                rel="noopener noreferrer"
              >
                Microverse HTML/CSS
              </a>
            </li>
          </ol>
        </div>
      </div>
    </>
  );
};

export default Awards;
