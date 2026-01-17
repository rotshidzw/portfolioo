import SectionTitle from './SectionTitle';

const Awards = () => {
  return (
    <>
      <SectionTitle
        title="Credential"
        subtitle="My work has been recognized by industry experts."
      />
      <hr className="border-gray-300/40 mb-8 my-4 w-full" />

      <div className="text-white mt-10 mb-16 md:text-3xl text-left">
        <ol className="max-w-lg mx-auto space-y-6">
          <li>
            <a
              href="https://www.credential.net/ba7844de-cc3a-4835-a3d0-0079a93a4cca"
              className="hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              01. Microverse Ruby/Databases
            </a>
          </li>
          <li>
            <a
              href="https://www.credential.net/e3529ca8-9fe5-4cb8-9cdd-2c6ae722c1f3"
              className="hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              02. Microverse React &amp; Redux
            </a>
          </li>
          <li>
            <a
              href="https://www.credential.net/c917cafa-b0a6-4fc5-be27-1741b442d7af"
              className="hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              03. Microverse JavaScript
            </a>
          </li>
          <li>
            <a
              href="https://www.credential.net/9f401a1e-1350-4336-b0ca-8824cc60474b"
              className="hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              04. Microverse HTML/CSS
            </a>
          </li>
        </ol>
      </div>
    </>
  );
};

export default Awards;
