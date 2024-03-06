import { schema } from "@/schema/schema";
import { z } from "zod";

export type FormProps = z.infer<typeof schema>

export type blogApi = [{
    id: number
    title: { rendered: string }
    excerpt: {
        rendered: string
    }
    date: string,
    link: string
    _embedded: {
        'wp:featuredmedia':[{
            source_url: string
            alt_text: string
        }]
    }
}]

export type footerBlogApi = [{
    id: number
    title: { rendered: string }
    link: string
}]