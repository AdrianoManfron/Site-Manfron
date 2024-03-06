"use client"

import { ModalContext } from "./modal-context"
import { useState } from "react"

const ModalProvider = ({ children } : { children: React.ReactNode }) => {
    const [show, setShow] = useState<boolean>(false)
    const [ id, setId ] = useState(0)

    return (
        <ModalContext.Provider value={{ show, setShow, id, setId }}>
            {children}
        </ModalContext.Provider>
    )
}

export default ModalProvider;