import React, { useContext, useEffect, useState } from 'react';
import { BlogPostsContext } from '../context/BlogPostsContext';

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = ({}) => {
    const {requestBlogPostImage} = useContext(BlogPostsContext);
    const [headerImage, setHeaderImage] = useState('');

    useEffect(() => {
        requestBlogPostImage().then(imageURL => {
            setHeaderImage(imageURL);
        });
    }, [])
    return (
        <header className="w-full bg-emerald-500 h-16 border-b-2 border-emerald-300">
            <main className='flex w-full h-full text-xl px-6 justify-between items-center'>
                <img className='rounded-full h-4/6' src="https://picsum.photos/70" alt="Header Image" />
        
                <h1 className='text-white'>Blogo</h1>
            </main>
        </header>
    )
}