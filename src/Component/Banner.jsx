import React from 'react';
import { FaPlus } from 'react-icons/fa';

const Banner = () => {

    const card = [
        {value: 10, label: "Total Friends"},
        {value: 3, label: "On Track"},
        {value: 6, label: "Need Attention"},
        {value: 12, label: "Interactions This Month"}
    ]

    return (
        <div className='max-w-6xl mx-auto px-4 pt-20'>

            {/* TEXT SECTION */}
            <div className='flex flex-col items-center text-center space-y-4 mb-10'>

                <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight'>
                    Friends to keep close in your life
                </h2>

                <p className='text-sm sm:text-base text-gray-500 max-w-xl'>
                    Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
                </p>

                <button className='btn bg-[#244D3F] text-white flex items-center gap-2'>
                    <FaPlus /> Add a Friend
                </button>

            </div>

            {/* CARD SECTION */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5'>

                {card.map((item, ind) => (
                    <div key={ind} className='border border-white shadow-[0_1px_6px_0_rgba(0,0,0,0.08)] rounded-lg p-6 text-center space-y-2'>
                        <h3 className='text-2xl sm:text-3xl font-semibold'>{item.value}</h3>
                        <p className='text-gray-500 text-sm sm:text-base'>{item.label}</p>
                    </div>
                ))}

            </div>

        </div>
    );
};

export default Banner;