import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
const Testimonials = () => {
  return (
    <>
<div className="text-lg md:text-7xl  mb-4 mt-20 text-white flex flex-row justify-between  items-center">
  <h1 className="md:text-left  font-bold">TESTIMONIALS</h1>
  <h3 className="text-sm md:text-3xl justify-end text-right">WHAT MY TEAMMATE&apos;S ARE SAYING  <FontAwesomeIcon icon={faPlayCircle} className="mr-2 text-gray-500 hover:text-white md:text-3xl text-md" /></h3>
</div>
<div className="text-center mt-28 text-white md:text-4xl italic max-w-5xl mx-auto">
    <p>
    <span className="italic">Sharon Odhiambo</span> &quot;Working with rotshidzwa mavhungu was an absolute pleasure. From start to finish, he demonstrated a high level of professionalism, expertise, and dedication to our project. He took the time to understand our needs and goals, and went above and beyond to deliver a website that exceeded our expectations.&quot;
    </p>
    <div className="flex items-center mt-4">
      {/* eslint-disable no-alert, no-console */}
      <img src="https://media.licdn.com/dms/image/D4D03AQFJH0iplXU2rA/profile-displayphoto-shrink_100_100/0/1673943855171?e=1688601600&v=beta&t=bFm5u34Ng3PSRUrpiwg3kSX2JhQ9fMNgEk5_n68hFzs" alt="Person" className="w-12 h-12 rounded-full mr-4" />
      <div>
        <p className="font-bold">Sharon Odhiambo </p>
      </div>
    </div>
  </div>







    </>
  )
}

export default Testimonials
