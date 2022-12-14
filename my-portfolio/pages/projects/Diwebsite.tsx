import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { Icon } from '@iconify/react';

function Diwebsite() {
    return(
        <div>
            <Head>
                <title>Portfolio Marnik Maes - DI website </title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
                <link rel="icon" href="images/MM-favicon.png"/>
            </Head>

            
            <div className='min-h-screen'>
                <main className="bg-[url('/images/endless-constellation.svg')] text-customWhite pb-[50px]">
                    <Nav/>
                    <div className='m-auto w-fit px-10 md:w-[800px] text-center md:text-left md:px-0'>
                        <div className='text-center py-6'>
                            <h1 className='text-5xl font-Roboto font-semibold'>Digital Innovation website</h1>
                        </div>
                        <Image className='object-contain rounded-2xl m-auto' src="/images/projects/diwebsite/DI-website.png" alt="website" width={800} height={800}/>

                        <div>
                            <div className='text-center xl:text-left xl:ml-[200px] py-10'>
                                <h1 className='text-5xl font-Roboto font-semibold'>About the project</h1>
                            </div>

                            <p className='text-lg'>For this project 2DI and 3DI came together to create a central Digital Innovation website. 
                                This has now become the central hub for all information, projects, questions, etc. 
                                For those who search hard enough there might even be a couple of surprises ;D
                            </p>
                        </div>

                        <div>
                            <div className='text-center py-10'>
                                <h1 className='text-5xl font-Roboto font-semibold'>About the website</h1>
                            </div>

                            <p className='text-lg'>
                                The class got split up into two separate teams. The back-end and the front-end team, I ended up in the front-end team.
                                This means producing HTML, CSS and JavaScript for the website including design, colors, fonts, etc.
                            </p>
                            <ul className='text-lg list-disc'> Some of the things that I created:
                                <div className='pl-0 md:pl-10'>
                                    <li>Helping with the design</li>
                                    <li>Creating navbar and footer</li>
                                    <li>Creating the project search function</li>
                                    <li>Creating the inquary portal</li>
                                    <li>Reading the api route for the coffee counter</li>
                                    <li>Helping with the space invader game</li>
                                </div>
                            </ul>
                        </div>

                        <div>
                            <div className='text-center py-10'>
                                <h1 className='text-5xl font-Roboto font-semibold'>Links</h1>
                            </div>
                            <div className='text-lg'>Github repo: <Link className='hover:text-waterBlue hover:underline hover:underline-offset-8 hover:decoration-towerBlue' href={'https://github.com/Thomas-More-Digital-Innovation/2223-Startproject-DinoWebsite'}>https://github.com/Thomas-More-Digital-Innovation/2223-Startproject-DinoWebsite</Link></div>
                            <div className='text-lg'>Website: <Link className='hover:text-waterBlue hover:underline hover:underline-offset-8 hover:decoration-towerBlue' href={'https://digitalinnovation.be/'}>https://digitalinnovation.be/</Link></div>

                        </div>
                    </div>

                    <div className='text-center py-10 md:text-right  md:pr-[100px]'>
                        <Link href={'/Myprojects'} className='text-2xl font-Roboto font-semibold hover:text-waterBlue hover:underline hover:underline-offset-8 hover:decoration-towerBlue'>Back to projects</Link>
                    </div>
                </main>
                <Footer/>
            </div>
        </div>
    )
}

export default Diwebsite