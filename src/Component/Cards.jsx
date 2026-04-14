import Image from 'next/image';
import React from 'react';

const Cards = () => {
    return (
        <div>
            <div className='max-w-6xl mx-auto space-y-4 pb-20 px-5'>
                <h2 className='text-2xl font-semibold '>Your Friends</h2>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 '>

                {
                    [1,2,3,4,5,6,7,8,9,10,11,12].map(card=>(<div key={card} className='shadow-[0_3px_6px_0_rgba(0,0,0,0.08)] flex flex-col items-center p-6 rounded-xl'>
                        <Image
                            src='/Images/boy1.png'
                            alt='Pitcure Of The Author'
                            width={80}
                            height={80}
                        ></Image>
                        <h3>Emma Wilson</h3>
                        <p>62d ago</p>
                        <div className='flex flex-col gap-3'>
                            <div className="badge badge-success">Success</div>
                            <div className="badge badge-error">Error</div>
                        </div>
                    </div>))
                }

                    
                </div>
            </div>
        </div>
    );
};

export default Cards;