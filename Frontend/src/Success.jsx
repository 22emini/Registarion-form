import React from 'react';
import { Link } from "react-router-dom";


const Congrats = () => {
  return (
    <>
      <div className='bg-gradient-to-r from-blue-600 to-purple-600 w-full h-screen flex items-center justify-center'>
        <div className='bg-gray-800 p-10 rounded-lg shadow-xl w-80 text-center'>
          <div className="w-24 h-24 bg-gray-800 flex items-center justify-center mb-6 overflow-hidden mx-auto shadow-lg">
            <img
              src="images/Group.png"
              alt="Placeholder"
              className="object-cover w-full h-full"
            />
          </div>
          <h1 className="text-2xl text-white font-semibold mb-4">Your Message has been sent</h1>
          <p className="text-gray-300 mb-8">Thank you for reaching out to us. We will get back to you shortly!</p>
          <Link to='/home'>
            <button
              type="button"
              className="bg-blue-600 hover:bg-white hover:text-blue-600 text-white font-medium rounded-full px-6 py-3 shadow-md border-2 border-purple-700 transition-all duration-200"
            >
              Return to the Website
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Congrats;
