import React from 'react';
import { FaFacebookSquare, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <div>
      <div className='bg-[#244D3F] flex flex-col items-center pt-14 sm:pt-20 pb-6 px-4 px-3'>
        
        <div className='max-w-6xl mx-auto text-white text-center space-y-4'>
          
          {/* Title */}
          <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold'>
            KeenKeeper
          </h2>

          {/* Description */}
          <p className='text-sm sm:text-base md:text-lg max-w-2xl mx-auto'>
            Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
          </p>

          {/* Social Title */}
          <p className='text-lg sm:text-xl font-medium'>
            Social Links
          </p>

          {/* Icons */}
          <div className='flex justify-center gap-3 sm:gap-4 mt-2'>
            
            <div className='p-2 sm:p-2.5 border rounded-full bg-white hover:scale-110 transition duration-300 cursor-pointer'>
              <FaInstagram className='text-black text-lg sm:text-xl' />
            </div>

            <div className='p-2 sm:p-2.5 border rounded-full bg-white hover:scale-110 transition duration-300 cursor-pointer'>
              <FaFacebookSquare className='text-black text-lg sm:text-xl'/>
            </div>

            <div className='p-2 sm:p-2.5 border rounded-full bg-white hover:scale-110 transition duration-300 cursor-pointer'>
              <FaXTwitter className='text-black text-lg sm:text-xl'/>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Footer;