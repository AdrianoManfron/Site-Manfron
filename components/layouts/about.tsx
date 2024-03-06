"use client"

import Avatar from "../ui/avatar";
import Title from "../ui/title";
import { TransitionDown, TransitionRight } from "../ui/transitions";
import AboutLink from "./aboutLinks";
import AboutText from "./aboutText";
import { titleAbout } from "@/schema/schema";

const About = () => {
    return(
        <section id="about" className="relative">
            <TransitionRight delay={0.5} className="hidden xl:flex absolute bottom-0 -left-[260px]">
                <Avatar />
            </TransitionRight>
            <div className="section container flex items-center">
                <div className="pt-24 sm:pt-32 pb-10 sm:pb-28 md:pt-0 md:pb-0 md:flex md:grid-cols-2 w-full">
                    <div className="md:flex md:flex-col md:w-3/5">
                        <div className="sm:container flex flex-col">
                            <TransitionDown className="flex pb-5 sm:p-5">
                                <Title title={titleAbout.title} />
                            </TransitionDown>
                        <AboutText />
                        </div>
                    </div>
                    <div className="md:flex md:flex-col md:w-2/5">
                        <AboutLink />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;