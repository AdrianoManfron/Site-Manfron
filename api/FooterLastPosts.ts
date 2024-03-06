import useSWR  from "swr"
import { footerBlogApi } from "@/types/types";

export const FooterLastPostsApi = () => {
    const headers = new Headers()

    headers.append('Access-Control-Allow-Origin', 'http://localhost:3010');
    headers.append('Access-Control-Allow-Credentials', 'true');
    headers.append('Access-Control-Allow-Headers' , 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization, X-WP-Nonce, Content-Disposition')
    headers.append('Access-Control-Expose-Headers', 'X-WP-Total, X-WP-TotalPages, Link')
    headers.append('Access-Control-Allow-Methods', 'GET');

    const fetcher = (url: string) => fetch(url, { headers: headers, mode: "cors", cache: "default", keepalive: true }).then((res) => res.json())
    const URL = "https://manfron.com.br/wp-json/wp/v2/posts?per_page=6"
    const { data } = useSWR<footerBlogApi>(URL, fetcher)

    return data;
}