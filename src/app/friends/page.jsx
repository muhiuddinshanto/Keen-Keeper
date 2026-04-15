
import Image from 'next/image';

import friends from '../../../public/friends.json';
import Link from 'next/link';
const FriendsPage = async () => {

   



    return (
        
            <div>
                <div className='max-w-6xl mx-auto space-y-4 pb-20 px-5'>
                    <h2 className='text-2xl font-semibold '>Your Friends</h2>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 '>

                        {
                            friends.map(friend => (
                                <Link href={`/friends/${friend.id}`} key={friend.id}>
                                    <div className='shadow-[0_3px_6px_0_rgba(0,0,0,0.08)] flex flex-col items-center p-6 rounded-xl'>
                                        <Image className='rounded-full'
                                            src={friend.picture}
                                            alt={friend.name}
                                            width={80}
                                            height={80}
                                        ></Image>
                                        <h3>{friend.name}</h3>
                                        <p>{friend.days_since_contact}d ago</p>
                                        <div className='flex flex-col gap-3 items-center'>
                                            {/* tags */}
                                            <div className=" flex gap-2">{friend.tags.map((tag, ind) => <span key={ind} className='badge bg-[#CBFADB] text-[#244D3F]'>{tag}</span>)}</div>
                                            {/* Status */}
                                            <div className={`badge ${friend.status == 'almost due'
                                                ? 'bg-[#EFAD44] text-white'
                                                : friend.status == 'overdue' ? 'bg-[#EF4444] text-white'
                                                    : friend.status == 'on-track' ? 'bg-[#244D3F] text-white' : ''}`}>
                                                {friend.status}</div>
                                        </div>
                                    </div> </Link>
                            ))
                        }


                    </div>
                </div>
            </div>
        

    );
};

export default FriendsPage;