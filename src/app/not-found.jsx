

import Link from 'next/link';
import React from 'react';
import { TfiFaceSad } from 'react-icons/tfi';

const NotFound = () => {
  return (
    <div className='px-4 sm:px-6 lg:px-8'>
      <div className='shadow-[0_3px_6px_0_rgba(0,0,0,0.08)] rounded-xl p-6 sm:p-8 md:p-10 max-w-5xl mx-auto my-6 sm:my-10'>
        <div className='flex flex-col items-center space-y-4 sm:space-y-5 text-center'>
          
          <TfiFaceSad className='text-[120px] sm:text-[160px] md:text-[200px]' />
          <h1 className='text-6xl sm:text-7xl md:text-9xl font-bold'>404</h1>
          <h3 className='text-2xl sm:text-3xl md:text-5xl font-semibold'>
            Page Not Found
          </h3>
          <Link href='/'>
            <button className='mt-2 px-5 py-2 sm:px-6 sm:py-3 rounded-lg bg-[#244D3F] text-white text-sm sm:text-base'>
              Go Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
