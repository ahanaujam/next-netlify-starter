import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Download more music at <code><a href="https://cutt.ly/Cloud9" target="_blank" rel="noopener noreferrer">Cloud9Play.com</a>
</code>
        </p>
  
      </main>

      <Footer />
    </div>
  )
}
