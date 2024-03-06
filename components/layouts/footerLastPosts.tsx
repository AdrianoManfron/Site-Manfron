"use client"

import Link from "next/link";
import { data } from "./nav";
import { titleFooterLastPosts } from "@/schema/schema";
import { FooterLastPostsApi } from "@/api/FooterLastPosts";

const icon = data[4].icon

const FooterLastPosts = () => {
    return (
        <div className="flex flex-col">
            <h3 className="pb-3 text-2xl">{titleFooterLastPosts.title}</h3>
            {FooterLastPostsApi()?.map((blog) => (
                <Link key={blog.id} href={blog.link} target="_blank" prefetch={false} className="flex items-center gap-1 w-[180px]
                    hover:text-accent hover:underline transition-all duration-300 cursor-pointer capitalize">
                    {icon} {blog.title.rendered}
                </Link>
            ))}
        </div>
    )
}

export default FooterLastPosts;