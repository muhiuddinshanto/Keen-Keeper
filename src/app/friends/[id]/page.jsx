
import React from 'react';
import Friends from '../../../../public/friends.json'
import Image from 'next/image';
import { RiDeleteBin6Line, RiNotificationSnoozeLine } from 'react-icons/ri';
import { FiArchive } from 'react-icons/fi';
import { MdHistory } from 'react-icons/md';
import SingleCard from '@/Component/SingleCard';

const FriendSingleCard = async ({ params }) => {
    const { id } = await params;
   
    const friend = Friends.find(fr => fr.id == id)
    

   

    if (!friend) {
        return (
            <div className="flex justify-center items-center h-screen">
                <h1 className="text-2xl font-bold">বন্ধু খুঁজে পাওয়া যায়নি!</h1>
            </div>
        );
    }

    return (
        <>
            <SingleCard friend={friend} />

        </>
    );
};

export default FriendSingleCard;