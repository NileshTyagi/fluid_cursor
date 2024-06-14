import React from 'react';
import envato from '../assets/envatomarket.png';

const Navbar = () => {
  return (
    <nav className="p-4 z-10 bg-stone-800">
        <div className="flex justify-between items-center">
          <div className="text-white"><img className='h-6' src={envato} alt="envatomarket"/></div>
          <div className="space-x-4">
            <a href="#" className="text-white bg-lime-500 m-1 px-4 py-1.5 rounded hover:bg-lime-600 bg-">Buy Now</a>
          </div>
        </div>
    </nav>
  );
};

export default Navbar;
