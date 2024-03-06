"use client"

import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog"
import { componentsProjects } from "../projectsContent";
import { useContext } from "react"

import { ModalContext } from "./modal-context"
import FrameProject from "./frame-project";

function getProjectId(id: number){
    const project = componentsProjects.find( project => id === project.id )
    return project
}

const Modal = () => {
    const { show, setShow, id } = useContext(ModalContext)
    const project = getProjectId(id)
    
    return(
        <Dialog open={show} onOpenChange={setShow}>
            <DialogContent className="max-w-[550px] flex flex-col justify-center items-center">
                <DialogHeader onClick={() => setShow(false)}></DialogHeader>
                <FrameProject {...project} />
            </DialogContent>
        </Dialog>
    )
}

export default Modal;