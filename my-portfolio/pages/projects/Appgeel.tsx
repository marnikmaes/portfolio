import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { Icon } from '@iconify/react';

function Appgeel() {
    return(
        <div>
            <Head>
                <title>Portfolio Marnik Maes - App Geel </title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
                <link rel="icon" href="images/MM-favicon.png"/>
            </Head>

            
            <div className='min-h-screen'>
                <main className="bg-[url('/images/endless-constellation.svg')] text-customWhite pb-[50px]">
                    <Nav/>

                    <div className='text-center py-6'>
                        <h1 className='text-5xl font-Roboto font-semibold'>Services app for the city Geel</h1>
                    </div>

                    <div className='flex flex-wrap justify-around px-10 py-10'>
                        <div>
                            <Image className='object-contain rounded-2xl m-auto' src="/images/projects/serviceapp/Service-app.png" alt="game" width={800} height={800}/>
                            <br />
                            <Image className='object-contain rounded-2xl m-auto' src="/images/projects/serviceapp/Service-app-tabletview.png" alt="gameplay" width={800} height={800}/>
                        </div>

                        <div className='w-[800px]'>

                            <div className='text-lg font-Roboto'>
                                <div className='py-6 text-center md:text-left'>
                                    <h1 className='text-4xl font-Roboto font-semibold'>Status</h1>
                                </div>
                                <p className='text-lg'>Work in progress
                                </p>
                            </div>


                            <div className='text-lg font-Roboto'>
                                <div className='py-6 text-center md:text-left'>
                                    <h1 className='text-4xl font-Roboto font-semibold'>About the project</h1>
                                </div>
                                <p className='text-lg'>For this project I&#39;ll be creating a mobile app for the city Geel. 
                                This app will serve as an information platform where people can view all the services the city Geel has to offer. 
                                Therefor the app must be easily accessible and easy to manage/edit for non-it people. 
                                </p>
                            </div>

                            <div className='text-lg font-Roboto'>
                                <div className='py-6 text-center md:text-left'>
                                    <h1 className='text-4xl font-Roboto font-semibold'>About the app</h1>
                                </div>

                                <p>As of now the app is still in very early stages of development. 
                                    I&#39;ve been experimenting with something called <span className='font-bold'>Glide App</span>, this is an online mobile app build tool that can be used to quickly and efficiently create apps. 
                                    I&#39;m using this because it is very user friendly and easy to adjust, modify/edit/add/delete data, etc.
                                </p>
                                <br />
                                <p>
                                    I have been running into some limitation of the free version, though, so there is a chance that I will have to scrap this idea and create a mobile app myself using a PWA framework.
                                </p>

                            </div>
                        </div>
                    </div>

                    <div className='w-fit m-auto px-10'>
                        <div className='text-center py-6'>
                            <h1 className='text-4xl font-Roboto font-semibold'>Links</h1>
                        </div>
                        <div className='text-lg font-Roboto'>
                            Github repo: <Link className='hover:text-waterBlue hover:underline hover:underline-offset-8 hover:decoration-towerBlue' href={'https://github.com/Thomas-More-Digital-Innovation/2223-Geel-001-app-toegang-tot-hulpverlening'}>https://github.com/Thomas-More-Digital-Innovation/2223-Geel-001-app-toegang-tot-hulpverlening</Link>
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

export default Appgeel