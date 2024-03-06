"use client"

import { Link } from "react-scroll";
import { data } from "./nav";
import ParticlesContainer from "../ui/particlesContainer";
import { contentHero } from "@/schema/schema";
import Hero3D from "./hero3d";
import { TransitionDown, TransitionUp } from "../ui/transitions";

// Import Links Navigation
const link = data[1].path

const Hero = () => {
    return(
        <section id="home" className="section pt-8 md:pt-0">
            <div className="container pt-10 sm:pt-0 pb-10 sm:pb-0 mx-auto h-full xl:pt-10 landscape:pt-20">
                <div className="flex flex-col xl:flex-row justify-center items-center xl:justify-start h-full">
                    <div className="text-center xl:max-w-xl xl:text-left mt-16 xl:mt-0">
                        <TransitionDown>
                            <p>{contentHero.p1}</p>
                        </TransitionDown>
                        <TransitionDown delay={0.3}>
                            <h1 className="text-accent">{contentHero.h1}</h1>
                        </TransitionDown>
                        <TransitionDown delay={0.4}>
                            <p>{contentHero.p2} 
                                <span className="font-bold text-accent">{contentHero.p3}</span> {contentHero.p4} 
                                <span className="font-bold text-accent">{contentHero.p5}</span>
                            </p>
                        </TransitionDown>
                        <TransitionDown delay={0.5} className="flex justify-center pt-12">
                                <button className="bg-slate-400 text-white pt-3 pb-3 pr-7 pl-7 rounded-md
                                    hover:bg-accent dark:bg-secondary dark:hover:bg-accent transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300">
                                    <Link to={link} smooth>{contentHero.text}</Link>
                                </button>
                        </TransitionDown>
                    </div>
                    <TransitionUp className="hidden md:block relative w-[1150px] h-full max-h-[50vh] xl:max-h-[742px] xl:absolute xl:-right-[100px]
                        min-[1680px]:right-[120px] xl:top-28">
                        <Hero3D />
                        <ParticlesContainer />
                    </TransitionUp>
                </div>
            </div>
        </section>
    )
}

export default Hero;