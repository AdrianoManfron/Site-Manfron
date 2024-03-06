"use client"

import { motion } from "framer-motion";
import { fadeIn } from "@/functions/variants";

type TitleProps ={
    title: string
}

const Title = ( title: TitleProps) => {
    return(
        <motion.div variants={fadeIn('down', 0.2)} initial='hidden' animate='show' exit='hidden' className="flex">
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-accent underline decoration-slate-400 dark:decoration-white">{title.title}</h2>
            <span className="text-slate-400 dark:text-white font-bold text-3xl sm:text-4xl md:text-5xl">{`( )`}</span>
        </motion.div>
    )
}

export default Title;