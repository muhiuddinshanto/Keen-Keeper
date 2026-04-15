'use client'
import Image from 'next/image';



import React, { useEffect, useState } from 'react';
import { FaArrowDown } from 'react-icons/fa';

const TimelinePage = () => {
    const [interactions, setInteractions] = useState([]);
    const [filter, setFilter] = useState('All');

    useEffect(() => {
        const data = JSON.parse(sessionStorage.getItem('interaction')) || [];
        setInteractions(data);

    }, []);

    const filteredData = filter == 'All'
        ? interactions
        : interactions.filter(item => item.type == filter);

    console.log(interactions);


    return (
        <div className='bg-[#F8FAFC] py-20 space-y-3'>
            <div className='max-w-6xl mx-auto'>
                <h2 className='text-[#1F2937] text-5xl font-bold'>Timeline</h2>
            </div>
            <div className='max-w-6xl mx-auto '>
                <div className="dropdown dropdown-bottom dropdown-end ">
                    <div tabIndex={0} role="button" className="btn m-1 shadow-[0_3px_6px_0_rgba(0,0,0,0.08)] bg-[#F8FAFC]">Filter timeline <FaArrowDown /></div>
                    <ul tabIndex={-1} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li><button onClick={() => setFilter('All')}>All</button></li>
                        <li><button onClick={() => setFilter('Call')}>Call</button></li>
                        <li><button onClick={() => setFilter('Text')}>Text</button></li>
                        <li><button onClick={() => setFilter('Video')}>Video</button></li>

                    </ul>
                </div>
            </div>

            <div className='p-5'>
                {
                    filteredData.map((item) => {
                        return (
                            <div
                                key={item.id}
                                className='shadow-[0_3px_6px_0_rgba(0,0,0,0.08)] bg-white rounded-xl p-3 w-full max-w-6xl mx-auto flex flex-col sm:flex-row gap-4 sm:gap-5 items-start sm:items-center'
                            >
                                {/* Icon */}
                                <div className='flex justify-center sm:justify-start w-full sm:w-auto'>
                                    <Image
                                        src={
                                            item.type == 'Call'
                                                ? '/Images/callTimeline.png'
                                                : item.type == 'Text'
                                                    ? '/Images/massegTimeline.png'
                                                    : '/Images/VideoCamera.png'
                                        }
                                        alt='hug'
                                        height={40}
                                        width={40}
                                    />
                                </div>

                                {/* Text */}
                                <div className='text-center sm:text-left w-full'>
                                    <div className='flex flex-col sm:flex-row gap-1 sm:gap-2 items-center sm:items-center justify-center sm:justify-start'>
                                        <p className='text-lg sm:text-xl font-medium'>
                                            {item.type} with
                                        </p>
                                        <p className='text-sm sm:text-base'>
                                            {item.name}
                                        </p>
                                    </div>

                                    <p className='text-xs sm:text-sm text-gray-500 mt-1'>
                                        {item.date}
                                    </p>
                                </div>
                            </div>
                        );
                    })
                }

            </div>




        </div>
    );
};

export default TimelinePage;