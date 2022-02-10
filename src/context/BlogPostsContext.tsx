import { createContext, useState, ReactNode, useEffect } from 'react';

import { getBlogPosts } from '../repositories/blogPostsRepository';

import { BlogPost } from '../models/BlogPost';
import { BlogPostsContextData } from '../models/BlogPostsContextData';

export interface BlogPostsProviderProps {
    children: ReactNode;
}

export const BlogPostsContext = createContext({} as BlogPostsContextData)

export const BlogPostsProvider = ({ children }: BlogPostsProviderProps) => {
    const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);

    // fetching blog posts data
    const requestBlogPosts = async () => {
        await getBlogPosts()
        .then((res) => {
            if (res.data) {
                console.log(res.data, "here rearg")
                console.log(blogPosts)
                setBlogPosts(res.data);
            }
        })
        .catch((err: any) => {
            console.log(err);
        });
    }

    useEffect(() => {
        requestBlogPosts();
    }, []);

    return (
        <BlogPostsContext.Provider
            value={{blogPosts}}>
            {children}
        </BlogPostsContext.Provider>
    );
}