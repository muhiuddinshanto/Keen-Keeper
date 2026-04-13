'use client'
import { usePathname } from 'next/navigation';
import React from 'react';

const TimelinePage = () => {
    const pathname = usePathname();
        console.log(pathname);
    return (
        <div>
            <h2>Timeline</h2>
        </div>
    );
};

export default TimelinePage;