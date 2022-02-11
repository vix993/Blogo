import React, { useContext } from 'react';
import { BlogPostsContext } from '../context/BlogPostsContext';

interface BlogPostCardProps {
    title: string;
    body: string;
    id: number;
}

export const BlogPostCard: React.FC<BlogPostCardProps> = ({title, body, id}) => {
    return (
        <main>
            <h3>{title}</h3>
            <p>{body}</p>
            <p>{id}</p>
        </main>
    )
}