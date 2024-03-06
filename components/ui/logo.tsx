"use client"

import { Link } from "react-scroll";
import Image from "next/image";

type LogoProps = {
    width?: number
    height?: number
}

const logo = {
    image: '/Logo_Manfron.png',
    alt: 'Logo, Adriano Manfron, desenvolvedor frontend.',
}

const Logo = ( props: LogoProps ) => {
    return(
        <Link to="home" smooth className="cursor-pointer">
            <Image 
                src={logo.image}
                width={!props.width ? 200 : props.width}
                height={!props.height ? 40 : props.height}
                alt={logo.alt}
            />
        </Link>
    )
}

export default Logo;