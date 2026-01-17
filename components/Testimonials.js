import SectionTitle from './SectionTitle';

const Testimonials = () => {
  return (
    <>
      <SectionTitle title="TESTIMONIALS" subtitle="WHAT MY TEAMMATES ARE SAYING" />
      <div className="mt-10 md:mt-16 text-white max-w-4xl mx-auto px-4">
        <div className="rounded-2xl border border-white/10 bg-black/60 p-6 md:p-8">
          <p className="text-base md:text-lg text-white/80 leading-relaxed">
            <span className="font-semibold text-white">Sharon Odhiambo</span> &quot;Working with Rotshidzwa Mavhungu was an
            absolute pleasure. From start to finish, he demonstrated a high level of professionalism, expertise, and
            dedication to our project. He took the time to understand our needs and goals, and went above and beyond to
            deliver a website that exceeded our expectations.&quot;
          </p>
          <div className="flex items-center mt-6">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://media.licdn.com/dms/image/D4D03AQFJH0iplXU2rA/profile-displayphoto-shrink_100_100/0/1673943855171?e=1688601600&v=beta&t=bFm5u34Ng3PSRUrpiwg3kSX2JhQ9fMNgEk5_n68hFzs"
              alt="Sharon Odhiambo"
              className="w-12 h-12 rounded-full mr-4"
            />
            <div>
              <p className="font-semibold">Sharon Odhiambo</p>
              <p className="text-xs text-white/60">Product Partner</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
