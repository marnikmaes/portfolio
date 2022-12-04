import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Nav from './components/Nav'
import Footer from './components/Footer'
import { Icon } from '@iconify/react';

function Projects() {
  return (
    <div>
      <Head>
        <title>Portfolio Marnik Maes - About me</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
        <link rel="icon" href="images/MM-favicon.png"/>
      </Head>
      <main className="bg-customBlack text-customWhite font-Roboto z-10 px-5 md:px-0">
        <Nav/>
      </main>
      <Footer/>
    </div>
  );
};
export default Projects;