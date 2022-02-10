import axios, { AxiosResponse } from "axios";
import { BlogPost } from "../models/BlogPost";

interface BlogPostsRepositoryProps {
    get(): () => Promise<BlogPost[]>
}

export class BlogPostsRepository {
    async get(): Promise<BlogPost[]> {
        const blogPosts: AxiosResponse<BlogPost[]> = await axios.get("https://jsonplaceholder.typicode.com/posts")
        return blogPosts.data
    }
}