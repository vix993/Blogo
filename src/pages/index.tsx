import type { NextPage } from 'next'
import Head from 'next/head'

import { BlogPostsProvider } from '../context/BlogPostsContext'

import { BlogPosts } from '../components/BlogPosts'
import { Header } from '../components/Header'

const Home: NextPage = () => {
  return (
    <main className='w-screen'>
      <Head>
        <title>blogo | lettem know!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BlogPostsProvider>
        <Header />
        <section>
          <BlogPosts />
        </section>
      </BlogPostsProvider>
    </main>
  )
}

export default Home
