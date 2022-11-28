import Head from 'next/head'
import Link from 'next/link'
import Nav from './components/Nav'
import Footer from './components/Footer'

function IndexPage() {
  return (
    <div>
      <Head>
        <title>Portfolio Marnik Maes - Home</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <main>
        <Nav/>
        <Footer/>



      </main>
    </div>
  )
}
export default IndexPage