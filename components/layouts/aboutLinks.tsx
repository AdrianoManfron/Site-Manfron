"use client"

import { Link } from "react-scroll";
import { data } from "./nav";
import { TransitionLeft } from "../ui/transitions";

const components: { subtitle: string; path: string; link: string; icon: string; }[] = [{
    subtitle: 'Desenvolvedor ReactJs/NextJs e Desenvolvedor de Temas Wordpress',
    path: data[2].path,
    link: 'Conheça os meus Projetos',
    icon: '[]'
}, {
    subtitle: 'Linguagens de Programação Utilizadas/Conhecidas',
    path: data[3].path,
    link: 'Conheça minhas habilidades',
    icon: '=>'
}, {
    subtitle: 'Freelancer',
    path: data[5].path,
    link: 'Contrate-me',
    icon: '{}'
}]

const AboutLink = () => {    
    return(
        <>
            {components.map( (content, index) => (
            <TransitionLeft key={index} delay={0.4} className="flex w-full p-5 first:mt-1 mt-5 grid-cols-2 rounded-md shadow-lg text-slate-400
                bg-gradient-to-tr from-slate-100 to-slate-300 dark:bg-gradient-to-tr dark:from-gray-700 dark:to-gray-500 dark:text-white">                        
                <div className="flex-col w-[90%]">
                    <h3 className="text-base font-bold mb-5">{content.subtitle}</h3>
                    <p className="text-sm font-semibold underline text-accent"><Link to={content.path} smooth className="cursor-pointer">{content.link}</Link></p>
                </div>
                <h3 className="hidden sm:flex justify-center items-center w-[10%] text-5xl font-semibold text-accent">{content.icon}</h3>
            </TransitionLeft>
            ))}
        </>
    )
}

export default AboutLink;