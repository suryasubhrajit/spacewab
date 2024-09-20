import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import WhiteLogo from '/images/logos/white-cosmic_chakra-logo.png';
import Switcher from '../utils/Switcher';
import useDarkSide from '../utils/useDarkSide';
import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import { HiOutlineRocketLaunch } from 'react-icons/hi2';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { BiLogInCircle } from 'react-icons/bi';

const Header = () => {
    const colorTheme = useDarkSide();
    // const darkSide = useState(colorTheme === 'dark' ? true : false);


    const styles = {
        className: 'dhfjhefhvf inline-block py-2 px-3 text-gray-900 rounded md:border-0 hover:text-blue-700 md:p-0 dark:text-white dark:hover:text-blue-500',
        activeClassName: 'text-blue-700',
    };

    const navLinks = [
        {
            id: 1,
            label: 'Home',
            path: '/',
            activeClassName: styles.activeClassName,
            className: styles.className
        },
        {
            id: 2,
            label: 'About',
            path: '/about',
            activeClassName: styles.activeClassName,
            className: styles.className
        },
        {
            id: 3,
            label: 'Explore',
            path: '/explore',
            activeClassName: styles.activeClassName,
            className: styles.className
        },
        {
            id: 4,
            label: 'Booking',
            path: '/booking',
            activeClassName: styles.activeClassName,
            className: styles.className
        }
    ];


    return (
        <>
            <nav className="">
                <div className="flex flex-wrap justify-between">
                    <div className="p-4 md:pl-[4rem]">
                        <Link to="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                            <img src={WhiteLogo} className="h-[5rem]" alt="Cosmic Chakra Logo" />
                        </Link>
                    </div>


                    <div className="hidden w-full md:block md:w-auto" id="navbar-multi-level">
                        <ul className="flex flex-col font-medium md:px-6 border border-gray-100 bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-black dark:border-gray-700 h-[4rem] items-center transition-colors duration-200 ease-linear md:pr-[4rem]">

                            {navLinks.map(link => (
                                <li key={link.id}>
                                    <NavLink to={link.path} activeClassName={link.activeClassName} className={link.className}>{link.label}</NavLink>
                                </li>
                            ))}


                            <button id="accounts" data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover" className="text-black hover:text-blue-700 focus:outline-none font-medium rounded-lg text-sm text-center inline-flex items-center dark:text-white dark:hover:text-blue-700" type="button">Account <MdKeyboardArrowDown size={20} />
                            </button>

                            <div id="dropdownHover" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="accounts">
                                    <li>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                            <span className='flex items-center'>
                                                <AiOutlineUser size={16} style={{ marginRight: '0.5rem' }} />  Profile
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                            <span className='flex items-center'>
                                                <BiLogInCircle size={16} style={{ marginRight: '0.5rem' }} />  Login
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"><span className='flex items-center'>
                                            <HiOutlineRocketLaunch size={16} style={{ marginRight: '0.5rem' }} />  My Bookings
                                        </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"><span className='flex items-center'>
                                            <AiOutlineShoppingCart size={16} style={{ marginRight: '0.5rem' }} />  My Cart
                                        </span>
                                        </a>
                                    </li>
                                </ul>
                            </div>


                            <Switcher />

                        </ul>
                    </div>
                </div>
            </nav>

        </>
    );
}

export default Header;