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
    const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([]);
    const [filter, setFilter] = useState('');

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

    const filterPosts = (filter: string) => {
        setFilteredPosts(blogPosts.filter(
            (post) =>
                post.title
                    .toLowerCase()
                    .includes(filter.toLowerCase())
                && post.title
                    .toLowerCase()
                    .indexOf(filter.toLowerCase()) === 0
        ));
    }
    const doSetFilter = (filter: string) => {
        setFilter(filter);
    }

    useEffect(() => {
        requestBlogPosts();
    }, []);

    useEffect(() => {
        filterPosts(filter);
    }, [filter]);

    return (
        <BlogPostsContext.Provider
            value={{blogPosts, doSetFilter, filteredPosts}}>
            {children}
        </BlogPostsContext.Provider>
    );
}