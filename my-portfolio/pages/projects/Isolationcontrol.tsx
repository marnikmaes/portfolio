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

                    <div className='text-center py-6'>
                        <h1 className='text-5xl font-Roboto font-semibold'>Isolation control setup</h1>
                    </div>

                    <div className='flex flex-wrap justify-around px-10 py-10'>
                        <div>
                            <Image className='object-contain rounded-2xl m-auto' src="/images/projects/isolationcontrol/Isolation-control.png" alt="isolation control drawing" width={800} height={800}/>
                        </div>

                        <div className='w-[800px]'>
                            <div className='text-lg font-Roboto'>
                                <div className='py-6 text-center md:text-left'>
                                    <h1 className='text-4xl font-Roboto font-semibold'>Status</h1>
                                </div>
                                <p className='text-lg'>Work in progress.
                                </p>
                            </div>

                            <div className='text-lg font-Roboto'>
                                <div className='py-6 text-center md:text-left'>
                                    <h1 className='text-4xl font-Roboto font-semibold'>About the project</h1>
                                </div>
                                <p className='text-lg'>For this project we will be making an isolation control setup. 
                                    It will be used to log temperature, moisture and air pressure. 
                                    The purpose of this setup will be to keep track of moisture buildup in wood. 
                                    This is important since when the moisture percentage reaches a certain threshold, there will be a chance of the wood starting to mold.
                                </p>
                            </div>

                            <div className='text-lg font-Roboto'>
                                <div className='py-6 text-center md:text-left'>
                                    <h1 className='text-4xl font-Roboto font-semibold'>About the setup</h1>
                                </div>
                                <p>As of now we are still in very early stages of the project, we have been running into quite a few problems and are trying to solve these. 
                                    The biggest problem as of now is the budget. 
                                    It is proving to be quite the challenge to get accurate wood moisture percentage readouts with budget components.
                                </p>
                                <br />
                                <p>A full documentary about one of my possible solution, you can find in the Github repo.
                                    Though this solution seems to be far from perfect as after some testing this tends to not be very reliable. 
                                    So as of now we are still looking after different solution and options.</p>

                            </div>
                        </div>
                    </div>

                    <div className='w-fit m-auto px-10'>
                        <div className='text-center py-6'>
                            <h1 className='text-4xl font-Roboto font-semibold'>Links</h1>
                        </div>
                        <div className='text-lg font-Roboto'>
                            Github repo: <Link className='hover:text-waterBlue hover:underline hover:underline-offset-8 hover:decoration-towerBlue' href={'https://github.com/Thomas-More-Digital-Innovation/2223-TM-011-Isolatiecontrole-voor-bouw'}>https://github.com/Thomas-More-Digital-Innovation/2223-TM-011-Isolatiecontrole-voor-bouw</Link>
                        </div>
                    </div>

                    <div className='text-center md:text-right font-Roboto text-xl pt-[100px] md:pr-[100px]'>
                        <Link href={'/Myprojects'} className="font-semibold py-2 px-4 border-[2px] rounded-full border-towerBlue w-[200px] bg-customWhite text-customBlack hover:bg-waterBlue hover:text-customWhite">
                            Back to projects  
                        </Link>
                    </div>


                </main>
                <Footer/>
            </div>
        </div>
    )
}

export default Isolationcontrol