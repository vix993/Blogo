import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { BlogPost } from '../models/BlogPost'
import { BlogPostsRepository } from '../repositories/BlogPosts'

const Home: NextPage = () => {
  BlogPostsRepository.get().then((posts: BlogPost[]) => {console.log(posts)})
  return (
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
  )
}

export default Home
