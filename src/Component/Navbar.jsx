import Navitem from '@/Ui/Navitem';
import Link from 'next/link';
import React from 'react';
import { ImStatsDots } from 'react-icons/im';
import { IoHomeOutline } from 'react-icons/io5';

import { RiTimeLine } from 'react-icons/ri';

const navLinks = [
    { name: "Home", path: "/", icon: <IoHomeOutline /> },
    { name: "Timeline", path: "/timeline", icon: <RiTimeLine /> },
    { name: "Stats", path: "/stats", icon: <ImStatsDots /> },
];

const Navbar = () => {
    return (
        <>

            <div className='bg-base-100 shadow-sm'>
                <div className="navbar  flex justify-between container mx-auto">


                    <div className="navbar-start">


                        <div className="dropdown">


                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </div>


                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
                            >
                                {navLinks.map((nav) => (
                                    <Navitem key={nav.path} nav={nav} />
                                ))}
                            </ul>

                        </div>


                        <Link href='/' className="btn btn-ghost text-xl font-bold">Keen<span className='font-extrabold'>Keeper</span></Link>

                    </div>


                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {navLinks.map((nav) => (
                                <Navitem key={nav.path} nav={nav} />
                            ))}
                        </ul>
                    </div>

                </div>
            </div>

        </>

    );
};

export default Navbar;