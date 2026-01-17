import SectionTitle from './SectionTitle';

const Expreiance = () => {
  const experiences = [
    {
      id: '01',
      position: 'Business Administration',
      year: '2020',
      company: 'Thusanyo investment',
      website: 'https://thusanyo.co.za/',
    },
    {
      id: '02',
      position: 'Front End Developer',
      year: '2021',
      company: 'Microverse',
      website: 'https://www.microverse.org/',
    },
    {
      id: '03',
      position: 'Mentor',
      year: '2022',
      company: 'Microverse',
      website: 'https://www.microverse.org/',
    },
    {
      id: '04',
      position: 'Front End Developer',
      year: '2022',
      company: 'Gybe africa',
      website: 'https://www.linkedin.com/company/gybe-africa',
    },
  ];
  const stats = [
    {
      label: 'Completed Projects',
      value: '30',
    },
    {
      label: 'Client Satisfaction',
      value: '100%',
    },
    {
      label: 'On-Going Project',
      value: '7',
    },
  ];
  return (
    <>
      <SectionTitle id="Expriance" title="MY EXPERIENCE" align="start" />
      <div className="flex mt-6 md:mt-12 text-white flex-col">
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full py-2">
            <div className="overflow-hidden">
              <table className="min-w-full text-left text-sm font-light">
                <thead className="border-b font-medium dark:border-neutral-500">
                  <tr>
                    <th scope="col" className="py-4">
                      #
                    </th>
                    <th scope="col" className="py-4">
                      Position
                    </th>
                    <th scope="col" className="py-4">
                      Company
                    </th>
                    <th scope="col" className="py-4">
                      Website
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {experiences.map((experience) => (
                    <tr
                      key={experience.id}
                      className="border-b transition duration-300 ease-in-out hover:bg-neutral-900/30 dark:border-neutral-500"
                    >
                      <td className="whitespace-nowrap px-2 py-4 font-medium">{experience.id}</td>
                      <td className="whitespace-nowrap px-2 py-4">{experience.position}</td>
                      <td className="whitespace-nowrap px-2 py-4">{experience.company}</td>
                      <td className="whitespace-nowrap px-2 py-4">
                        <a
                          href={experience.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-400 hover:text-blue-300"
                        >
                          {experience.website}
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-12 text-white items-center">
          <hr className="border-gray-300/40 my-4 w-full" />
          <div className="grid-cols-1 grid text-2xl md:grid-cols-3 gap-2 justify-center items-center">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center pt-4 pb-4">
                <p className="md:text-3xl text-lg text-white font-bold">
                  {stat.value}
                  <span className="p-4 text-white/80 text-sm md:text-base">{stat.label}</span>
                </p>
              </div>
            ))}
          </div>
          <hr className="border-gray-300/40 my-4 w-full" />
        </div>
      </div>
    </>
  );
};

export default Expreiance;
