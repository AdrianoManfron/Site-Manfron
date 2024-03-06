import { useEffect, useRef } from "react"
import { motion, useInView, useAnimation } from "framer-motion"
import { fadeIn } from "@/functions/variants";

type TransitionProps = {
    children: React.ReactNode
    delay?: number
    className?: string
}

export const TransitionRight = ({ children, delay = 0.2, className }: TransitionProps) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    const mainControls = useAnimation()

    useEffect(() => {
        if(isInView) {
            mainControls.start("show")
        }
    }, [isInView, mainControls])

    return(
        <motion.div ref={ref} variants={fadeIn('right', delay)} initial="hidden" animate={mainControls} exit="hidden" transition={{ duration: 1, ease: 'easeInOut' }}
            className={className}>{children}</motion.div>
    )
}

export const TransitionLeft = ({ children, delay = 0.2, className }: TransitionProps) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    const mainControls = useAnimation()

    useEffect(() => {
        if(isInView) {
            mainControls.start("show")
        }
    }, [isInView, mainControls])

    return(
        <motion.div ref={ref} variants={fadeIn('left', delay)} initial='hidden' animate={mainControls} exit='hidden'
            className={className}>{children}</motion.div>
    )
}

export const TransitionDown = ({ children, delay = 0.2, className }: TransitionProps) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    const mainControls = useAnimation()

    useEffect(() => {
        if(isInView) {
            mainControls.start("show")
        }
    }, [isInView, mainControls])

    return(
        <motion.div ref={ref} variants={fadeIn('down', delay)} initial='hidden' animate={mainControls} exit='hidden'
        className={className}>{children}</motion.div>
    )
}

export const TransitionUp = ({ children, delay = 0.2, className }: TransitionProps) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    const mainControls = useAnimation()

    useEffect(() => {
        if(isInView) {
            mainControls.start("show")
        }
    }, [isInView, mainControls])

    return(
        <motion.div ref={ref} variants={fadeIn('up', delay)} initial='hidden' animate={mainControls} exit='hidden' transition={{ duration: 1, ease: 'easeInOut' }}
        className={className}>{children}</motion.div>
    )
}