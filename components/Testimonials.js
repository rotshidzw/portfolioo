import SectionTitle from './SectionTitle';

const Testimonials = () => {
  return (
    <>
      <SectionTitle title="TESTIMONIALS" subtitle="WHAT MY TEAMMATES ARE SAYING" />
      <div className="text-center mt-12 md:mt-20 text-white md:text-4xl italic max-w-5xl mx-auto">
        <p>
          <span className="italic">Sharon Odhiambo</span> &quot;Working with Rotshidzwa Mavhungu was an absolute pleasure. From
          start to finish, he demonstrated a high level of professionalism, expertise, and dedication to our project. He took
          the time to understand our needs and goals, and went above and beyond to deliver a website that exceeded our
          expectations.&quot;
        </p>
        <div className="flex items-center justify-center mt-6">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://media.licdn.com/dms/image/D4D03AQFJH0iplXU2rA/profile-displayphoto-shrink_100_100/0/1673943855171?e=1688601600&v=beta&t=bFm5u34Ng3PSRUrpiwg3kSX2JhQ9fMNgEk5_n68hFzs"
            alt="Sharon Odhiambo"
            className="w-12 h-12 rounded-full mr-4"
          />
          <div>
            <p className="font-bold">Sharon Odhiambo</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
