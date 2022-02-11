import React, { useContext } from 'react';
import { BlogPostsContext } from '../context/BlogPostsContext';
import { BlogPostCard } from './BlogPostCard';

interface BlogPostsProps {}

export const BlogPosts: React.FC<BlogPostsProps> = ({}) => {
    const {blogPosts} = useContext(BlogPostsContext);
    return (
        <main className='w-full md:grid lg:grid-cols-2 pt-6'>
            {blogPosts && blogPosts.map((post) => (
                <div className='h-full w-full' key={post.id}>
                    <BlogPostCard title={post.title} body={post.body} id={post.id} />
                </div>
            ))}
        </main>
    )
}