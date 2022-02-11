import React, { useContext } from 'react';
import Image from 'next/image'

import { BlogPostsContext } from '../context/BlogPostsContext';
import searchIcon from '../assets/search.png';

interface InputFilterProps {}

export const InputFilter: React.FC<InputFilterProps> = ({}) => {
    const {blogPosts} = useContext(BlogPostsContext);
    return (
        <main className='w-full md:grid lg:grid-cols-2 py-6'>
            <div className="flex flex-row mb-4">
                <span className='opacity-6'>

                    <Image src={searchIcon} width="10px" height="10px"></Image>
                </span>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline" id="filter" type="text" />
            </div>
                
        </main>
    )
}