import { BlogPost } from "./BlogPost";

export interface BlogPostsContextData {
    blogPosts: BlogPost[]
    requestBlogPostImage: () => Promise<string>
}