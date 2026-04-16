'use client'
import { Geist } from "next/font/google";
import Image from 'next/image';


import React from 'react';
import { FiArchive } from 'react-icons/fi';
import { MdHistory } from 'react-icons/md';

import { RiDeleteBin6Line, RiNotificationSnoozeLine } from 'react-icons/ri';
import { toast } from "react-toastify";

const SingleCard = ({ friend }) => {

const handleInteraction = (type) => {
        const newDataInteraction = {
            id: Date.now(), 
            name: friend.name,
            type: type,
            date: new Date().toLocaleDateString('en-US', {
                weekday: 'long',
                month: 'long',
                day: 'numeric', 
                year: 'numeric'
            })
        };

        
        const oldData = JSON.parse(sessionStorage.getItem('interaction')) || [];
        const newData = [newDataInteraction, ...oldData];
        
        sessionStorage.setItem('interaction', JSON.stringify(newData));
        console.log("Updated History:", newData);
    };


    const callHandle = (type) => {
        console.log(type, friend.name);
        toast.success(`Call with ${friend.name}`)
        handleInteraction(type)

       


    }



    const textHandle = (type) => {
        console.log(type, friend.name);
        toast.success(`Text with ${friend.name}`)
        handleInteraction(type)

    }
    const videoHandle = (type) => {
        console.log(type, friend.name);
        toast.success(`Video with ${friend.name}`)
        handleInteraction(type)

    }


    return (
        <div className='bg-[#F8FAFC]'>
            <div className='flex flex-col lg:flex-row max-w-6xl mx-auto py-20 gap-5'>
                <div className='w-full lg:w-[30%] space-y-4 px-5'>
                    <div className='shadow-[0_3px_6px_0_rgba(0,0,0,0.08)] flex flex-col items-center p-6 rounded-xl bg-white space-y-3'>
                        <Image
                            className='rounded-full'
                            src={friend.picture}
                            alt='Pitcure Of The Author'
                            width={80}
                            height={80}>
                        </Image>
                        <h3>{friend.name}</h3>
                        <p>{friend.days_since_contact}d ago</p>

                        <div className='flex flex-col gap-3 items-center'>
                            {/* Status */}
                            <div className={`badge ${friend.status == 'almost due'
                                ? 'bg-[#EFAD44] text-white'
                                : friend.status == 'overdue' ? 'bg-[#EF4444] text-white'
                                    : friend.status == 'on-track' ? 'bg-[#244D3F] text-white' : ''}`}>
                                {friend.status}</div>
                            {/* tags */}
                            <div className=" flex gap-2">{friend.tags.map((tag, ind) => <span key={ind} className='badge bg-[#CBFADB] text-[#244D3F]'>{tag}</span>)}</div>
                        </div>
                        <p>{friend.bio}</p>
                        <p>Preferred: {friend.email}</p>
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
                <div className='space-y-6 w-full lg:w-[70%] px-5'>
                    {/* 3Card */}
                    <div >
                        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
                            <div className='shadow-[0_3px_6px_0_rgba(0,0,0,0.08)] flex flex-col items-center p-6 rounded-xl bg-white'>
                                <h3>{friend.days_since_contact}</h3>
                                <p>Days Since Contact</p>
                            </div>
                            <div className='shadow-[0_3px_6px_0_rgba(0,0,0,0.08)] flex flex-col items-center p-6 rounded-xl bg-white'>
                                <h3>{friend.goal}</h3>
                                <p>Goal (Days)</p>
                            </div>
                            <div className='shadow-[0_3px_6px_0_rgba(0,0,0,0.08)] flex flex-col items-center p-6 rounded-xl bg-white'>
                                <h3>{friend.next_due_date}</h3>
                                <p>Next Due Date</p>
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
                            <p>Connect every <span className='font-bold'>{friend.goal} days</span> </p>
                        </div>
                    </div>
                    {/* Quick Check-In */}
                    <div>
                        <div className='shadow-[0_3px_6px_0_rgba(0,0,0,0.08)] flex flex-col  p-6 rounded-xl bg-white space-y-1.5'>
                            <h2 className='text-xl'>Quick Check-In</h2>
                            {/* 3Card */}
                            <div className='grid grid-cols-1 sm:grid-cols-3 gap-3'>

                                <div onClick={() => callHandle('Call')} className=' btn flex flex-col  p-6 rounded-xl gap-2 bg-[#F8FAFC] items-center min-h-[100px] justify-center h-full'>

                                    <Image
                                        src='/Images/PhoneCall.png'
                                        alt='Pitcure Of The Author'
                                        width={32}
                                        height={32}
                                    ></Image>
                                    <p className='text-lg text-[#64748B]'>Call</p>

                                </div>
                                <div onClick={() => textHandle('Text')} className=' btn flex flex-col  p-6 rounded-xl gap-2 bg-[#F8FAFC] items-center min-h-[100px] justify-center h-full'>

                                    <Image
                                        src='/Images/ChatDots.png'
                                        alt='Pitcure Of The Author'
                                        width={32}
                                        height={32}
                                    ></Image>
                                    <p className='text-lg text-[#64748B]'>Text</p>

                                </div>
                                <div onClick={() => videoHandle('Video')} className='btn flex flex-col  p-6 rounded-xl gap-2 bg-[#F8FAFC] items-center min-h-[100px]justify-center h-full'>

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
                    
                </div>
            </div>
        </div>
    );
};

export default SingleCard;