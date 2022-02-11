import { Dispatch, SetStateAction } from "react";
import { BlogPost } from "./BlogPost";

export interface BlogPostsContextData {
    blogPosts: BlogPost[]
    filter: string
    doSetFilter: (filter: string) => void
    filteredPosts: BlogPost[]
}