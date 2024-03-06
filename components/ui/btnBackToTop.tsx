"use client"

import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaChevronUp } from "react-icons/fa";

const BtnBackToTop = () => {
    const [isActive, setIsActive] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY > 900){
                setIsActive(true)
            } else{
                setIsActive(false)
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    })

    return(
        <div className="hidden md:block">
            <Link to="home" smooth className={`${!isActive && 'hidden'} fixed bg-accent hover:bg-accent/80 w-12 h-12 right-16 bottom-24 xl:bottom-10 z-20 cursor-pointer 
                flex justify-center items-center text-white border-2 border-white rounded-md shadow-lg`}>
                <FaChevronUp className='text-xl cursor-pointer z-10' />
            </Link>
        </div>
    )
}

export default BtnBackToTop;