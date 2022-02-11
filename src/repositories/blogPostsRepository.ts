import axios, { AxiosError, AxiosResponse } from "axios";
import { BlogPost } from "../models/BlogPost";

export const getBlogPosts = () => {
    return axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(async (res: AxiosResponse<BlogPost[], {error: string}>) => {
            return res
        })
}

export const getBlogPostImage = () => {
    return axios.get("https://picsum.photos/200")
        .then(async (res: AxiosResponse<any, {error: string}>) => {
            console.log(res.data)
            return res
        })
}