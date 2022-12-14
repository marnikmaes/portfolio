import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { Icon } from '@iconify/react';

function Isolationcontrol() {
    return(
        <div>
            <Head>
                <title>Portfolio Marnik Maes - Isolation control setup </title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
                <link rel="icon" href="images/MM-favicon.png"/>
            </Head>

            
            <div className='min-h-screen'>
                <main className="bg-[url('/images/endless-constellation.svg')] text-customWhite pb-[50px]">
                    <Nav/>
                </main>
                <Footer/>
            </div>
        </div>
    )
}

export default Isolationcontrol