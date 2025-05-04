import React from 'react';
import 'remixicon/fonts/remixicon.css'

const Header = () => {
    return (
        <div className='fixed w-full flex justify-end items-center z-10 py-20 px-18 '>
            <button className=' text-xl bg-black  border-4 hover:bg-gray-500 px-6 py-1 rounded-full '>Hire me</button>
            <i className="ri-more-2-fill text-3xl ml-2"></i>
        </div>
    );
    }

export default Header;