import React, { useContext } from 'react';
import { BlogPostsContext } from '../context/BlogPostsContext';
import { BlogPostCard } from './BlogPostCard';

interface BlogPostsProps {}

export const BlogPosts: React.FC<BlogPostsProps> = ({}) => {
    const {blogPosts} = useContext(BlogPostsContext);
    return (
        <main>
            {blogPosts && blogPosts.map((post) => (
                <div key={post.id}>
                    <BlogPostCard title={post.title} body={post.body} id={post.id} />
                </div>
            ))}
        </main>
    )
}