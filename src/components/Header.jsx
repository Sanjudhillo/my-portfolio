import React from 'react';
import 'remixicon/fonts/remixicon.css'

const Header = () => {
    return (
        <div className='fixed w-full flex justify-end items-center z-10 py-4 sm:py-6 lg:py-8 px-4 sm:px-6 lg:px-8'>
            <button className='text-base sm:text-lg lg:text-xl bg-black border-2 sm:border-3 lg:border-4 hover:bg-gray-500 px-4 sm:px-6 py-1 rounded-full transition-all duration-300'>Hire me</button>
            <i className="ri-more-2-fill text-2xl sm:text-2xl lg:text-3xl ml-2 sm:ml-3 lg:ml-4"></i>
        </div>
    );
}

export default Header;