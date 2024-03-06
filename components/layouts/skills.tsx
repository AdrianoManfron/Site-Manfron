"use client"

import { titleSkill } from "@/schema/schema";
import Title from "../ui/title";
import SkillsData from "./skillsData";
import { TransitionDown } from "../ui/transitions";

const Skills = () => {
    return(
        <section id="skills" className="container flex flex-col w-full items-center sm:h-screen gap-x-6 mx-auto py-28 sm:py-40 md:py-12 xl:py-32 text-center xl:text-left ">
            <div className="sm:container flex flex-col">
                <TransitionDown className="flex pb-5 sm:p-5">
                        <Title title={titleSkill.title} />
                </TransitionDown>
            </div>
            <SkillsData />
        </section>
    )
}

export default Skills;