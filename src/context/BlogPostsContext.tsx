import { createContext, useState, ReactNode, useEffect } from 'react';

import { getBlogPostImage, getBlogPosts } from '../repositories/blogPostsRepository';

import { BlogPost } from '../models/BlogPost';
import { BlogPostsContextData } from '../models/BlogPostsContextData';

export interface BlogPostsProviderProps {
    children: ReactNode;
}

export const BlogPostsContext = createContext({} as BlogPostsContextData)

export const BlogPostsProvider = ({ children }: BlogPostsProviderProps) => {
    const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);

    // fetching blog posts data
    const requestBlogPosts = () => {
        getBlogPosts()
        .then((res) => {
            if (res.data) {
                setBlogPosts(res.data);
            }
        })
        .catch((err: any) => {
            console.log(err);
        });
    }

    const requestBlogPostImage = async () => {
        const randomImage = await getBlogPostImage();
        console.log(randomImage.data);
        return randomImage.data;
    }

    useEffect(() => {
        requestBlogPosts();
    }, []);

    return (
        <BlogPostsContext.Provider
            value={{blogPosts, requestBlogPostImage}}>
            {children}
        </BlogPostsContext.Provider>
    );
}