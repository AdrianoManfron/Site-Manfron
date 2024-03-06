"use client"

import { createContext } from "react"

type ModalContext = {
    show: boolean;
    setShow: (value: boolean) => void;
    id: number;
    setId: (value: number) => void;
}

export const ModalContext = createContext({
    show: false
} as ModalContext)