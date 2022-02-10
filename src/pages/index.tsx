import { AxiosError, AxiosResponse } from 'axios'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { BlogPostComponent } from '../components/BlogPostComponent'
import { BlogPostsComponent } from '../components/BlogPostsComponent'
import { BlogPostsProvider } from '../context/BlogPostsContext'

const Home: NextPage = () => {
  return (
    <main>
      <Head>
        <title>blogo | lettem know!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BlogPostsProvider>
        <section>
          <BlogPostsComponent />
        </section>
      </BlogPostsProvider>
    </main>
  )
}

export default Home
