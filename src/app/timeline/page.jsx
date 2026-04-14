'use client'
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import React from 'react';

const TimelinePage = () => {
    const pathname = usePathname();
    console.log(pathname);
    return (
        <div className='bg-[#F8FAFC] py-20 space-y-3'>
            <div className='max-w-6xl mx-auto'>
                <h2 className='text-[#1F2937] text-5xl font-bold'>Timeline</h2>
            </div>
            <div className='shadow-[0_3px_6px_0_rgba(0,0,0,0.08)] bg-white rounded-xl p-3 max-w-6xl mx-auto flex gap-5 items-center'>
                <div>
                    <Image
                        src='/Images/hug.png'
                        alt='hug'
                        height={40}
                        width={40}
                    ></Image>
                </div>
                <div>
                    <div className='flex gap-2 items-center'>
                        <div><p className='text-xl font-medium'>meetup</p></div>
                        <div><p className=''>with Tom Baker</p></div>
                    </div>
                    <div><p>March 29, 2026</p></div>
                </div>
            </div>
        </div>
    );
};

export default TimelinePage;