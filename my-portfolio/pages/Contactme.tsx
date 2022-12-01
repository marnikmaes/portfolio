import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Nav from './components/Nav'
import Footer from './components/Footer'

function Contactme() {
  return (
    <div>
      <Head>
        <title>Portfolio Marnik Maes - Contact me</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
        <link rel="icon" href="images/MM-favicon.png"/>
      </Head>

      <div className="bg-customBlack fixed z-1 block  h-full inset-0 "></div>

      <main className="text-customWhite z-10 px-5 md:px-0 font-Roboto">
        <Nav/>

      </main>
      <Footer/>
    </div>
  )
}
export default Contactme