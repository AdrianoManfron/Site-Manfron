"use client"

import { useEffect, useState } from "react";

type ProgressBarProps = {
    bar: number
    time: number
    step?: number
}

const ProgressBar = ( { bar, time, step = 1 }: ProgressBarProps ) => {
    const [progress, setProgress] = useState(0);
    
    const getColor = () => {
        if(progress < 40){
            return '#ff0000'
        } else if(progress < 70){
            return '#ffa500'
        } else{
            return '#10F500'
        }
    }

    useEffect(() => {
        if(progress < bar){
            setTimeout(() => setProgress(prev => prev += step), time)
        }
    }, [progress, bar, step, time])

    return(
        <>
            <div className='w-full h-3 rounded-xl mb-3 bg-slate-200'>
                <div className='h-full rounded-xl bg-accent transition duration-300 ease-out relative shadow-sm'
                    style={{ width: `${progress}%`, backgroundColor: getColor() }}>
                    <div className='absolute -right-4 -top-[26px] text-xs font-medium text-white shadow-sm py-1 px-2 rounded bg-accent z-10
                        before:content-center before:absolute before:left-2/4 before:-bottom-1 before:h-3 before:w-3 before:-z-10
                        before:-translate-x-1/2 before:rotate-45' style={{ backgroundColor: getColor() }}>
                        {progress}%
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProgressBar;