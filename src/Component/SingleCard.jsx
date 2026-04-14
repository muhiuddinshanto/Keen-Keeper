import Image from 'next/image';
import React from 'react';
import { FiArchive} from 'react-icons/fi';
import { MdHistory } from 'react-icons/md';

import { RiDeleteBin6Line, RiNotificationSnoozeLine } from 'react-icons/ri';

const SingleCard = () => {
    return (
        <div className='bg-[#F8FAFC]'>
            <div className='flex max-w-6xl mx-auto py-20 gap-5'>
                <div className='w-[30%] space-y-4'>
                    <div className='shadow-[0_3px_6px_0_rgba(0,0,0,0.08)] flex flex-col items-center p-6 rounded-xl bg-white'>
                        <Image
                            src='/Images/boy1.png'
                            alt='Pitcure Of The Author'
                            width={80}
                            height={80}>
                        </Image>
                        <h3>Emma Wilson</h3>
                        <p>62d ago</p>

                        <div className='flex flex-col gap-3'>
                            <div className="badge badge-success">Success</div>
                            <div className="badge badge-error">Error</div>
                        </div>
                        <p>"Former colleague, great mentor"</p>
                        <p>Preferred: email</p>
                    </div>
                    <div className=' shadow-[0_3px_6px_0_rgba(0,0,0,0.08)] rounded-md bg-white p-4 flex gap-3 items-center justify-center'>
                        <RiNotificationSnoozeLine />
                        <p>Snooze 2 weeks</p>
                    </div>
                    <div className=' shadow-[0_3px_6px_0_rgba(0,0,0,0.08)] rounded-md bg-white p-4 flex gap-3 items-center justify-center'>
                        <FiArchive />
                        <p>Archive</p>
                    </div>
                    <div className=' shadow-[0_3px_6px_0_rgba(0,0,0,0.08)] rounded-md bg-white p-4 flex gap-3 items-center justify-center text-red-500'>
                        <RiDeleteBin6Line />
                        <p>Delete</p>
                    </div>
                </div>
                <div className='space-y-6'>
                    {/* 3Card */}
                    <div >
                        <div className='flex gap-5'>
                            <div className='shadow-[0_3px_6px_0_rgba(0,0,0,0.08)] flex flex-col items-center p-6 rounded-xl bg-white'>
                                <h3>62</h3>
                                <p>Days Since Contact</p>
                            </div>
                            <div className='shadow-[0_3px_6px_0_rgba(0,0,0,0.08)] flex flex-col items-center p-6 rounded-xl bg-white'>
                                <h3>30</h3>
                                <p>Days Since Contact</p>
                            </div>
                            <div className='shadow-[0_3px_6px_0_rgba(0,0,0,0.08)] flex flex-col items-center p-6 rounded-xl bg-white'>
                                <h3>Feb 27, 2026</h3>
                                <p>Days Since Contact</p>
                            </div>
                        </div>
                    </div>
                    {/* Relationship Goal*/}
                    <div >
                        <div className='shadow-[0_3px_6px_0_rgba(0,0,0,0.08)] flex flex-col  p-6 rounded-xl bg-white '>
                            <div className='flex justify-between w-full items-center'>
                                <div><p>Relationship Goal</p></div>
                                <div><button className='btn'>Edit</button></div>
                            </div>
                            <p>Connect every <span className='font-bold'>30 days</span> </p>
                        </div>
                    </div>
                    {/* Quick Check-In */}
                    <div>
                        <div className='shadow-[0_3px_6px_0_rgba(0,0,0,0.08)] flex flex-col  p-6 rounded-xl bg-white space-y-1.5'>
                            <h2 className='text-xl'>Quick Check-In</h2>
                            {/* 3Card */}
                            <div className='grid grid-cols-3 gap-3'>
                                <div className=' flex flex-col  p-6 rounded-xl gap-2 bg-[#F8FAFC] items-center max-h-24 justify-center'>

                                    <Image
                                        src='/Images/PhoneCall.png'
                                        alt='Pitcure Of The Author'
                                        width={32}
                                        height={32}
                                    ></Image>
                                    <p className='text-lg text-[#64748B]'>Call</p>

                                </div>
                                <div className=' flex flex-col  p-6 rounded-xl gap-2 bg-[#F8FAFC] items-center max-h-24 justify-center'>

                                    <Image
                                        src='/Images/ChatDots.png'
                                        alt='Pitcure Of The Author'
                                        width={32}
                                        height={32}
                                    ></Image>
                                    <p className='text-lg text-[#64748B]'>Text</p>

                                </div>
                                <div className=' flex flex-col  p-6 rounded-xl gap-2 bg-[#F8FAFC] items-center max-h-24 justify-center'>

                                    <Image
                                        src='/Images/VideoCamera.png'
                                        alt='Pitcure Of The Author'
                                        width={32}
                                        height={32}
                                    ></Image>
                                    <p className='text-lg text-[#64748B]'>Video</p>

                                </div>

                            </div>
                        </div>
                    </div>
                    {/* Recent Interactions */}
                    <div>
                        <div className='bg-white px-4 py-3 rounded-xl'>
                            <div>
                                <div className='flex justify-between w-full items-center'>
                                    <div><p>Recent Interactions</p></div>
                                    <div><button className='btn'><MdHistory className='text-xl' />Full History</button></div>
                                </div>
                            </div>
                            <div className='flex flex justify-between items-center w-full'>
                                <div className='flex items-center gap-5'>
                                    <div><Image
                                        src='/Images/PhoneCall.png'
                                        alt='Pitcure Of The Author'
                                        width={32}
                                        height={32}
                                    ></Image></div>
                                    <div>
                                        <p>Text</p>
                                        <p>Asked for career advice</p>
                                    </div>
                                </div>
                                <div><div><p>Jan 28, 2026</p></div></div>

                                
                            </div>
                            <div className="divider"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleCard;