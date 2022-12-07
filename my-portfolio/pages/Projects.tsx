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

      
      <div className="bg-customBlack xl:bg-[url('https://img.freepik.com/free-vector/matrix-style-binary-code-digital-falling-numbers-blue-background_1017-37387.jpg?w=2000&t=st=1670401340~exp=1670401940~hmac=00b0ab701b3009d502016df7b06fa5079e9e0284809a7698ee42e855df8f3937')] fixed z-1 block  h-full inset-0 "></div>
      <div className='min-h-screen'>
        <main className="text-customWhite z-10 px-5 md:px-0 font-Roboto">
          <Nav/>
        </main>
        <Footer/>
      </div>
    </div>
  );
};
export default Projects;