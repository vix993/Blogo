import React, { useContext } from 'react';
import { BlogPostsContext } from '../context/BlogPostsContext';

interface BlogPostProps {
    title: string;
    body: string;
    id: number;
}

export const BlogPostComponent: React.FC<BlogPostProps> = ({title, body, id}) => {
    return (
        <main>
            <h1>{title}</h1>
            <p>{body}</p>
            <p>{id}</p>
        </main>
    )
}