import React, { useEffect, useState } from 'react'
import logo from "../assets/logo.png"
import { TiThMenu } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false)

    useEffect(()=> {
        if(showMobileMenu){
            document.body.style.overflow = 'hidden'
        }else{
            document.body.style.overflow = 'auto'
        }
        return ()=>{
            document.body.style.overflow = 'auto'
        }
    },[showMobileMenu]
    )

    return (
        <div className='absolute top-0 left-0 w-full z-10'>
            <div className='container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent'>
                <img src={logo} alt="logo" className='h-8' />
                <ul className='hidden md:flex gap-7 text-white'>
                    <a href="#Home" className='cursor-pointer hover:text-gray-400'>Home</a>
                    <a href="#About" className='cursor-pointer hover:text-gray-400'>About</a>
                    <a href="#Services" className='cursor-pointer hover:text-gray-400'>Services</a>
                    <a href="#Testimoials" className='cursor-pointer hover:text-gray-400'>Testimoials</a>
                </ul>
                <button className='hidden md:block bg-white px-8 py-2 rounded-full'>Book Courier</button>
                <TiThMenu onClick={() => setShowMobileMenu(true)} className='md:hidden w-7 text-white cursor-pointer' />
            </div>
            {/*-----mobile menu -----*/}
            <div className={`md:hidden ${showMobileMenu ?  'fixed w-full' : 'h-0 w-0'}  right-0 top-0 bottom-0 overflow-hidden bg-white translate-all`}>
                <div className='flex justify-end p-6 cursor-pointer'>
                    <RxCross2 onClick={() => setShowMobileMenu(false)} className='text-2xl' />
                </div>
                <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
                    <a onClick={() => setShowMobileMenu(false)} href="#Home" className='px-4 py-2 rounded-full inline-block'>Home</a>
                    <a onClick={() => setShowMobileMenu(false)} href="#About" className='px-4 py-2 rounded-full inline-block'>About</a>
                    <a onClick={() => setShowMobileMenu(false)} href="#Services" className='px-4 py-2 rounded-full inline-block'>Services</a>
                    <a onClick={() => setShowMobileMenu(false)} href="#Testimoials" className='px-4 py-2 rounded-full inline-block'>Testimoials</a>
                </ul>
            </div>
        </div>
    )
}

export default Navbar