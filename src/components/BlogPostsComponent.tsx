import React, { useContext } from 'react';
import { BlogPostsContext } from '../context/BlogPostsContext';
import { BlogPostComponent } from './BlogPostComponent';

interface BlogPostsProps {}

export const BlogPostsComponent: React.FC<BlogPostsProps> = ({}) => {
    const {blogPosts} = useContext(BlogPostsContext);
    return (
        <main>
            {blogPosts && blogPosts.map((post) => (
                <div key={post.id}>
                    <BlogPostComponent title={post.title} body={post.body} id={post.id} />
                </div>
            ))}
        </main>
    )
}