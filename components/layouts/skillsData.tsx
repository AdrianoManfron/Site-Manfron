"use client"

import ProgressBar from "../ui/progressBar";
import { FaHtml5, FaCss3Alt, FaNodeJs, FaWordpress, FaJava, FaPython, FaFigma, FaVuejs } from "react-icons/fa";
import { SiJavascript, SiReact, SiNextdotjs, SiWoocommerce, SiMysql, SiPhp, SiAdobephotoshop, SiAdobeillustrator, SiTypescript } from "react-icons/si";
import { TransitionUp } from "../ui/transitions";

// Meus conhecimentos em desenvolvimento e edição gráfica
const skillsData = [{
    title: 'HTML',
    icon: <FaHtml5 />,
    bar: 98,
    time: 50
}, {
    title: 'CSS',
    icon: <FaCss3Alt />,
    bar: 90,
    time: 65
}, {
    title: 'JavaScript',
    icon: <SiJavascript />,
    bar: 80,
    time: 100
}, {
    title: 'TypeScript',
    icon: <SiTypescript />,
    bar: 68,
    time: 100
}, {
    title: 'React',
    icon: <SiReact />,
    bar: 85,
    time: 70
}, {
    title: 'Next',
    icon: <SiNextdotjs />,
    bar: 90,
    time: 65
}, {
    title: 'Node.js',
    icon: <FaNodeJs />,
    bar: 35,
    time: 200
}, {
    title: 'Vue',
    icon: <FaVuejs />,
    bar: 20,
    time: 250
}, {
    title: 'Wordpress',
    icon: <FaWordpress />,
    bar: 95,
    time: 50
}, {
    title: 'WooCommerce',
    icon: <SiWoocommerce />,
    bar: 90,
    time: 65
}, {
    title: 'mySQL',
    icon: <SiMysql />,
    bar: 60,
    time: 100
}, {
    title: 'PHP',
    icon: <SiPhp />,
    bar: 55,
    time: 150
}, {
    title: 'Java',
    icon: <FaJava />,
    bar: 45,
    time: 200
}, {
    title: 'Python',
    icon: <FaPython />,
    bar: 50,
    time: 150
}, {
    title: 'Photoshop',
    icon: <SiAdobephotoshop />,
    bar: 75,
    time: 70
}, {
    title: 'Illustrator',
    icon: <SiAdobeillustrator />,
    bar: 60,
    time: 65
}, {
    title: 'Figma',
    icon: <FaFigma />,
    bar: 25,
    time: 250
}]

const SkillsData = () => {
    return(
        <TransitionUp delay={0.4} className="flex flex-col bg-slate-950/10 dark:bg-slate-500/30 rounded-lg shadow-lg w-full xl:max-w-[82%]">
            <div className="flex flex-wrap py-2 xl:py-6 gap-2 xl:gap-6 justify-center items-center xl:items-start">
                {skillsData.map((item, itemIndex) => {
                    return(
                        <div key={itemIndex}>
                            <div className="font-light mb-2 md:mb-0">
                                {item.title}
                            </div>
                            <div className="flex items-center gap-2 text-3xl text-slate-400 dark:text-white">
                                {item.icon} <span className="w-28 sm:w-[154px] md:w-72 pt-3"><ProgressBar bar={item.bar} time={item.time} /></span>
                            </div>
                        </div>
                    )
                })}
            </div>
        </TransitionUp>
    )
}

export default SkillsData;