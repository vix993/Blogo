import React, { useContext, useEffect, useState } from 'react';
import { BlogPostsContext } from '../context/BlogPostsContext';

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = ({}) => {
    return (
        <header className="w-full bg-emerald-500 h-16 sm:h-24 border-b-2 border-emerald-300">
            <main className='flex w-full h-full text-xl px-6 justify-between items-center'>
                <img className='rounded-full h-4/6' src="https://picsum.photos/70" alt="Header Image" />
        
                <h1 className='text-white'>Bloggy</h1>
            </main>
        </header>
    )
}