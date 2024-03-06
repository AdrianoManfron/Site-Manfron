import * as React from "react"
import Link from "next/link"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { linksHeader } from "@/schema/schema"

const HeaderNetwork = () => {
    return(
        <div className="flex pl-5">
            <button className="mr-2 p-1 bg-slate-300 hover:bg-slate-400 dark:bg-slate-700 dark:hover:bg-slate-500 rounded-md">
                <Link href={linksHeader.hrefLinkedin} target="_blank" prefetch={false}>
                    <span className="text-xl"><FaLinkedin /></span>
                    <span className="sr-only">{linksHeader.textLinkedin}</span>
                </Link>
            </button>
            <button className="p-1 bg-slate-300 hover:bg-slate-400 dark:bg-slate-700 dark:hover:bg-slate-500 rounded-md">
                <Link href={linksHeader.hrefGithub} target="_blank" prefetch={false}>
                    <span className="text-xl"><FaGithub /></span>
                    <span className="sr-only">{linksHeader.textGithub}</span>
                </Link>
            </button>
        </div>
    )
}

export default HeaderNetwork;