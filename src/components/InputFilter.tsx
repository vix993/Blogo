import React, { useContext } from 'react';
import Image from 'next/image'

import { BlogPostsContext } from '../context/BlogPostsContext';
import searchIcon from '../assets/search.png';

interface InputFilterProps {}

export const InputFilter: React.FC<InputFilterProps> = ({}) => {
    const {blogPosts, doSetFilter} = useContext(BlogPostsContext);
    return (
        <main className='w-full px-8 py-4'>
            <form>
                <div className="relative text-stone-200 focus-within:text-stone-800">
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                    <button type="submit" className="p-1 focus:outline-none focus:shadow-outline">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" className="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </button>
                </span>
                <input
                    onChange={(e) => {
                        e.preventDefault;
                        doSetFilter(e.target.value);
                    }}
                    type="search"
                    name="q"
                    className="w-full py-2 text-sm text-white bg-emerald-300 rounded-md pl-10 focus:outline-none focus:shadow focus:text-stone-800"
                    placeholder="Search..."
                    autoComplete='off'
                />
                </div>
            </form>
        </main>
    )
}