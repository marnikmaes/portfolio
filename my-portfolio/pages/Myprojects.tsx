import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Nav from './components/Nav'
import Footer from './components/Footer'

function Myprojects(){
    return(
        <div>
            <Head>
                <title>Portfolio Marnik Maes - My projects</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
                <link rel="icon" href="images/MM-favicon.png"/>
            </Head>
            <div className='min-h-screen'>
                <main className="bg-[url('/images/endless-constellation.svg')] text-customWhite pb-[50px]">
                    <Nav/>
                    
                    <div className='flex justify-around items-center'>
                        <div className='bg-skyBlue rounded-xl p-5'>
                            <div className='flex justify-between items-center space-x-5'>
                                <Image className='rounded-xl basis-2/6' src={'/images/projects/DI-website.png'} alt='di website' width={400} height={400}></Image>
                                <div className='basis-4/6'>
                                    <h1 className='font-Roboto font-semibold text-lg'>Digital Innovation website</h1>
                                    <p className='font-Roboto text-sm' >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, quisquam?</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
                <Footer/>
            </div>
        </div>
    )
}

export default Myprojects