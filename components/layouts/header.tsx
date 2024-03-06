"use client"

import Nav from "./nav";
import Logo from "../ui/logo";
import { ThemeMode } from "./theme";
import HeaderNetwork from "./headerNetworks";
import { useHeader } from "@/hooks/useHeader";

const Header = () => {
    const { header } = useHeader()

    return(
        <header className={`${header 
            ? 'bg-gradient-to-tr from-slate-100 via-slate-300 to-slate-400 text-slate-500 shadow dark:bg-gradient-to-tr dark:from-black dark:via-gray-700 dark:to-gray-600 dark:text-white py-2'
            : 'bg-transparent shadow-none py-4'}
            fixed w-full max-w-[1920px] mx-auto z-20 transition-all duration-300`}>
            <div className="xl:container mx-auto flex flex-col xl:flex-row xl:justify-between xl:items-center">
                <div className="flex flex-col md:flex-row w-full justify-between items-center px-4">
                    {/* Logo */}
                    <Logo />
                    <div className="flex md:justify-end md:w-1/5">
                        {/* Theme */}
                        <ThemeMode />
                        <HeaderNetwork />
                    </div>
                </div>
            </div>
            <Nav />
        </header>
    )
}

export default Header;