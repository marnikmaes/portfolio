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

                    <div className='text-center py-6'>
                        <h1 className='text-5xl font-Roboto font-semibold'>Digital Innovation website</h1>
                    </div>

                    <div className='flex flex-wrap justify-around px-10 py-10'>
                        <div>
                            <Image className='object-contain rounded-2xl m-auto' src="/images/projects/diwebsite/DI-website.png" alt="website" width={800} height={800}/>
                            <br />
                            <Image className='object-contain rounded-2xl m-auto' src="/images/projects/diwebsite/DI-website-altcolors.png" alt="website" width={800} height={800}/>
                        </div>

                        <div className='w-[800px]'>
                            <div className='text-lg font-Roboto'>
                                <div className='py-6 text-center md:text-left'>
                                    <h1 className='text-4xl font-Roboto font-semibold'>Status</h1>
                                </div>
                                <p className='text-lg'>Finished
                                </p>
                            </div>

                            <div className='py-6 text-center md:text-left'>
                                <h1 className='text-4xl font-Roboto font-semibold'>About the project</h1>
                            </div>
                            <div className='text-lg font-Roboto w[300px]'>
                                <p>For this project 2DI and 3DI came together to create a central Digital Innovation website.</p>
                                <p>This has now become the central hub for all information, projects, questions, etc.</p>
                                <p>For those who search hard enough there might even be a couple of surprises ;D </p>
                            </div>

                            <div className='py-6 text-center md:text-left'>
                                <h1 className='text-4xl font-Roboto font-semibold'>About the website</h1>
                            </div>

                            <div className='text-lg font-Roboto'>
                                <p>The class got split up into two separate teams. The back-end and the front-end team, I ended up in the front-end team.</p>
                                <p>This means producing HTML, CSS and JavaScript for the website including design, colors, fonts, etc.</p>
                                <p>Some of the things I helped with are: helping with the design, creating navbar and footer, creating the project search function, creating the inquary portal, API for coffee counter and helping with the space invader game.</p>
                            </div>

                            <div className='py-6 text-center md:text-left'>
                                <h1 className='text-4xl font-Roboto font-semibold'>Used frameworks</h1>
                            </div>
                            
                            <div className='text-lg font-Roboto'>
                                <h2 className='text-xl font-semibold font-Roboto'>Front-end framework</h2>
                                <p>You can find a full framework comparison in the Github repo under the document, but to quickly summarize, we have chosen to work with <span className='font-bold'>NEXT.JS </span>
                                    because it would best suit our needs and there were some team members that had had previous experience using <span className='font-bold'>NEXT.JS </span>.
                                </p>
                                <br />
                                <h2 className='text-xl font-semibold font-Roboto'>CSS framework</h2>
                                <p>This decision was very quickly made with no real other options. 
                                    Almost everyone unanimously decided on using <span className='font-bold'>Tailwind CSS</span> after a team member showed a quick demo of how it works. 
                                    <span className='font-bold'>Tailwind CSS</span> is a massive collection of CSS classes that can be quickly used without the need of writing semantic CSS yourself. 
                                    It removes the need for writing CSS classes yourself and gives a massive assortment of classes that you can use
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='w-fit m-auto px-10'>
                        <div className='text-center py-6'>
                            <h1 className='text-4xl font-Roboto font-semibold'>Links</h1>
                        </div>
                        <div className='text-lg font-Roboto'>
                            Github repo: <Link className='hover:text-waterBlue hover:underline hover:underline-offset-8 hover:decoration-towerBlue' href={'https://github.com/Thomas-More-Digital-Innovation/2223-Startproject-DinoWebsite'}>https://github.com/Thomas-More-Digital-Innovation/2223-Startproject-DinoWebsite</Link>
                        </div>
                        <div className='text-lg font-Roboto'>
                            DI website: <Link className='hover:text-waterBlue hover:underline hover:underline-offset-8 hover:decoration-towerBlue' href={'https://digitalinnovation.be/'}>https://digitalinnovation.be/</Link>
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

export default Diwebsite