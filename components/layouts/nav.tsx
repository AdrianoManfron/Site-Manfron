"use client"

import { HiHomeModern, HiIdentification, HiBriefcase, HiAcademicCap, HiNewspaper, HiEnvelope } from 'react-icons/hi2';
import { Link } from "react-scroll";
import { useMediaQuery } from "react-responsive";

export const data: {name: string; path: string; icon: any}[] = [{
    name: 'início',
    path: 'home',
    icon: <HiHomeModern />
}, {
    name: 'sobre',
    path: 'about',
    icon: <HiIdentification />
}, {
    name: 'habilidades',
    path: 'skills',
    icon: <HiAcademicCap />
}, {
    name: 'projetos',
    path: 'projects',
    icon: <HiBriefcase />
}, {
    name: 'blog',
    path: 'blog',
    icon: <HiNewspaper />
}, {
    name: 'contato',
    path: 'contact',
    icon: <HiEnvelope />
}]

const Nav = () => {
    const mediaQuery = useMediaQuery({
        query: '(min-width: 200px)',
    })

    return(
        <nav className='flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen'>
            <div className='flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-[80px] xl:h-max py-8
            bg-slate-400/50 dark:bg-white/10 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full'>
                {data.map((link, index) => (
                    <Link key={index} to={link.path} activeClass='active' smooth={mediaQuery} spy={true} className='relative flex items-center group
                    hover:text-green-500 dark:hover:text-accent transition-all duration-300 cursor-pointer'>
                        <div className='absolute pr-14 right-0 hidden xl:group-hover:flex rounded-[3px]'>
                            <div className='bg-white relative flex text-primary items-center p-[6px]'>
                                <div className='text-[12px] leading-none font-semibold capitalize'>{link.name}</div>
                                <div className='border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2'></div>
                            </div>
                        </div>
                        <div>{link.icon}</div>
                    </Link>
                ))}
            </div>
        </nav>
    )
}

export default Nav;