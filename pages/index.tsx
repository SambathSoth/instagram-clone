import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Feed from '../components/Feed'
import Modal from '../components/Modal'

const Home: NextPage = () => {
  return (
    <div className="h-screen overflow-y-scroll bg-gray-50 scrollbar-hide">
      <Head>
        <title>Instagram</title>
        <link
          rel="icon"
          href="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png"
        />
      </Head>

      {/* Header */}
      <Header />

      {/* Feed */}
      <Feed />

      {/* Model */}
      <Modal />
    </div>
  )
}

export default Home
