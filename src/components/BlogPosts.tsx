import React, { useContext } from 'react';
import { BlogPostsContext } from '../context/BlogPostsContext';
import { BlogPostCard } from './BlogPostCard';
import { InputFilter } from './InputFilter';

interface BlogPostsProps {}

export const BlogPosts: React.FC<BlogPostsProps> = ({}) => {
    const {blogPosts, filteredPosts} = useContext(BlogPostsContext);
    console.log(blogPosts, filteredPosts);
    return (
        <main className='w-full pt-6 py-4'>
            <InputFilter />
            <section className='w-full md:grid lg:grid-cols-2'>
                {
                    blogPosts && !filteredPosts
                        ? blogPosts.map((post) => (
                            <div className='h-full w-full' key={post.id}>
                                <BlogPostCard title={post.title} body={post.body} id={post.id} />
                            </div>
                        ))
                        : filteredPosts.map((post) => (
                            <div className='h-full w-full' key={post.id}>
                                <BlogPostCard title={post.title} body={post.body} id={post.id} />
                            </div>
                        ))
                }
            </section>
        </main>
    )
}