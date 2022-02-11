import React from 'react';

interface BlogPostCardProps {
    title: string;
    body: string;
    id: number;
}

export const BlogPostCard: React.FC<BlogPostCardProps> = ({title, body, id}) => {
    var truncatedBody = "";
    if (body.length > 100) {
        truncatedBody = body.substring(0, 100) + '...';
    }
    return (
        <main className='px-8 pt-4 h-full'>
            <div className='w-full h-full flex flex-row rounded-2 gap-2  border border-emerald-200 bg-emerald-100 shadow hover:shadow-lg hover:border-emerald-200 rounded-lg transition duration-400 ease-in-out'>
                <section className='hidden sm:flex w-1/6 align-center justify-center py-4 px-2'>
                    <img className='object-cover rounded-2xl' src={`https://picsum.photos/id/${id}/100`} alt={title.length > 10 ? title.substring(0, 10) + '...': title} />
                </section>
                <section className=' p-2 sm:w-5/6 flex flex-col'>

                    <h5 className='text-lg mb-2'>{title}</h5>
                    <p>{truncatedBody ? truncatedBody : body}</p>
                </section>

            </div>
        </main>
    )
}