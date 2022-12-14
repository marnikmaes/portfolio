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
                    
                    <div className='flex flex-wrap justify-around items-center px-5 space-y-6'>

                        <Link href={'/'} className='bg-skyBlue rounded-xl p-5 hover:bg-waterBlue'>
                            <div className='flex flex-wrap md:flex-nowrap justify-between items-center space-x-5 space-y-5'>
                                <Image className='rounded-xl basis-2/6' src={'/images/projects/DI-website.png'} alt='di website' width={400} height={400}></Image>
                                <div className='basis-4/6'>
                                    <h1 className='font-Roboto font-bold text-md'>Digital Innovation website</h1>
                                    <p className='font-Roboto text-sm' >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, quisquam?</p>
                                </div>
                            </div>
                        </Link>

                        <Link href={'/'} className='bg-skyBlue rounded-xl p-5 hover:bg-waterBlue'>
                            <div className='flex flex-wrap md:flex-nowrap justify-between items-center space-x-5 space-y-5'>
                                <Image className='rounded-xl basis-2/6' src={'/images/projects/Jumping-Fox-Game.png'} alt='jumping fox' width={400} height={400}></Image>
                                <div className='basis-4/6'>
                                    <h1 className='font-Roboto font-bold text-md'>Jumping Fox game</h1>
                                    <p className='font-Roboto text-sm' >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, quisquam?</p>
                                </div>
                            </div>
                        </Link>

                        <Link href={'/'} className='bg-skyBlue rounded-xl p-5 hover:bg-waterBlue'>
                            <div className='flex flex-wrap md:flex-nowrap justify-between items-center space-x-5 space-y-5'>
                                <Image className='rounded-xl basis-2/6' src={'/images/projects/Isolation-control.png'} alt='Isolation control' width={400} height={400}></Image>
                                <div className='basis-4/6'>
                                    <h1 className='font-Roboto font-bold text-md'>Isolation control setup</h1>
                                    <p className='font-Roboto text-sm' >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, quisquam?</p>
                                </div>
                            </div>
                        </Link>

                        <Link href={'/'} className='bg-skyBlue rounded-xl p-5 hover:bg-waterBlue'>
                            <div className='flex flex-wrap md:flex-nowrap justify-between items-center space-x-5 space-y-5'>
                                <Image className='rounded-xl basis-2/6' src={'/images/projects/Service-app.png'} alt='service app Geel' width={400} height={400}></Image>
                                <div className='basis-4/6'>
                                    <h1 className='font-Roboto font-bold text-md'>Service app city Geel</h1>
                                    <p className='font-Roboto text-sm' >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, quisquam?</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </main>
                <Footer/>
            </div>
        </div>
    )
}

export default Myprojects