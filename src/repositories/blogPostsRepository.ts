import axios, { AxiosResponse } from "axios";
import { BlogPost } from "../models/BlogPost";

export const getBlogPosts = () => {
    return axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(async (res: AxiosResponse<BlogPost[], {error: string}>) => {
            return res
        })
}
