"use client"

import { Link } from "react-scroll";
import { data } from "./nav";
import { titleFooterInstitutional } from "@/schema/schema";

const FooterInstitutional = () => {
  return (
    <>
        <h3 className="pb-4 text-2xl">{titleFooterInstitutional.title}</h3>
        {data.map((data, index) => (
            <div key={index}>
                <Link to={data.path} smooth className="flex items-center gap-1 w-[120px] hover:text-accent hover:underline transition-all duration-300 
                    cursor-pointer capitalize">
                    {data.icon} {data.name}
                </Link>
            </div>
        ))}
    </>
  )
}

export default FooterInstitutional;