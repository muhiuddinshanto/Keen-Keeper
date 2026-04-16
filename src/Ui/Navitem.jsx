"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';



const Navitem = ({nav}) => {

    const pathname = usePathname();
    const isActive = pathname === nav.path;
    

    
    
    return (
        <div>
            <li className='mr-2'>
                <Link href={nav.path} className={`${isActive ? 'bg-[#244D3F] text-white' : ""}`}>{nav.icon}{nav.name}</Link>
                
            </li>
        </div>
    );
};

export default Navitem;