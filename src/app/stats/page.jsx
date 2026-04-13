'use client'
import { usePathname } from 'next/navigation';
import React from 'react';

const StatsPage = () => {
        const pathname = usePathname();
        console.log(pathname);
        
    return (
        <div>
            <h2>Stats</h2>
        </div>
    );
};

export default StatsPage;