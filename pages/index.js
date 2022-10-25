import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Pixlayer Design</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="We are Processing and will be launched soon. 🚀" />
        <p className="description">
           <a href="https://dribbble.com/pixlayer">Dribbble</a>
        </p>
      </main>

      <Footer />
    </div>
  )
}
