import { useEffect, useState } from "react"

export const useHeader = () => {
    const [header, setHeader] = useState(false)
    
        useEffect(() => {
            const handleScroll = () => {
                if(window.scrollY > 200){
                    setHeader(true)
                } else{
                    setHeader(false)
                }
            }
    
            window.addEventListener('scroll', handleScroll);
    
            return () => {
                window.removeEventListener('scroll', handleScroll);
            }
        })
    return{
        header
    }
}
