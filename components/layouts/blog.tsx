"use client"

import Title from "../ui/title";
import { TransitionDown } from "../ui/transitions";
import BlogPosts from "./blogPosts";
import { titleBlog } from "@/schema/schema";

const Blog = () => {
    return(
        <section id="blog" className="pb-10 lg:section container flex items-center pt-24 md:pt-10 lg:pt-20 xl:pt-16">
            <div className="sm:container flex flex-col">
                <TransitionDown className="flex pb-5 sm:p-5">
                    <Title title={titleBlog.title} />
                </TransitionDown>
                <BlogPosts />
            </div>
        </section>
    )
}

export default Blog;