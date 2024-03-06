"use client"

import Image from "next/image";
import Link from "next/link";
import { LuLogIn } from "react-icons/lu"
import formatDate from "@/functions/date";
import { textBlogPosts } from "@/schema/schema";
import { BlogPostsApi } from "@/api/BlogPosts";
import { TransitionUp } from "../ui/transitions";

const BlogPosts = () => {
    return(
        <TransitionUp delay={0.4}>
            <div className="sm:container grid w-full gap-10 lg:gap-5 md:grid-cols-2 lg:grid-cols-3">
                {BlogPostsApi()?.map((blog) => (
                    <div key={blog.id} className="grid w-full md:grid-rows-1 md:last:w-[209%] lg:last:w-full border-2 border-white rounded-lg shadow-sm">
                        <div className="flex-col h-full">
                            <Link href={blog.link} target="_blank" prefetch={false}>
                                <Image 
                                    src={blog._embedded["wp:featuredmedia"][0].source_url}
                                    width={820}
                                    height={300}
                                    alt={blog._embedded["wp:featuredmedia"][0].alt_text}
                                    quality={75}
                                />
                                <h3 className="text-center text-xl font-semibold pt-6 pb-3">{blog.title.rendered}</h3>
                            </Link>
                            <p className="text-center lg:hidden xl:block text-sm font-normal pl-8 pr-8 pb-4">{blog.excerpt.rendered}</p>
                        </div>
                        <span className="pl-4 pb-2 lg:hidden xl:block text-xs italic">{formatDate(blog.date)}</span>
                        <div className="flex justify-center pt-2 mb-2 border-t-2 border-white">
                            <button className="bg-secondary text-white pt-2 pb-2 pr-4 pl-4 rounded-md text-sm
                                hover:bg-accent dark:bg-slate-600 dark:hover:bg-accent transition ease-in-out duration-500">
                                <Link href={blog.link} target="_blank" prefetch={false}>{textBlogPosts.link}</Link>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-center items-center mt-5">
                <button className="font-medium pt-4 pb-4 pr-8 pl-8 rounded-lg
                transition ease-in-out bg-gradient-to-br from-secondary to-accent dark:from-black dark:to-accent hover:-translate-y-1 hover:scale-110 duration-300">
                    <Link href={textBlogPosts.href} target="_blank" prefetch={false}>
                        <span className="flex text-white">
                            {textBlogPosts.button}
                            <span className="pl-3 text-2xl"><LuLogIn /></span>
                        </span>
                    </Link>
                </button>
            </div>
        </TransitionUp>
    )
}

export default BlogPosts;