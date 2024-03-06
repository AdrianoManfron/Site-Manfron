"use client"

import { titleProjects } from "@/schema/schema";
import Title from "../ui/title";
import ProjectContent from "./projectsContent";
import { TransitionDown } from "../ui/transitions";

const Projects = () => {
    return(
        <section id="projects" className="xl:section container pt-24 md:pt-10 lg:pt-20 xl:pt-16">
            <div className="sm:container flex flex-col">
                <TransitionDown className="flex pb-5 sm:p-5">
                    <Title title={titleProjects.title} />
                </TransitionDown>
            </div>
            <ProjectContent />
        </section>
    )
}

export default Projects;