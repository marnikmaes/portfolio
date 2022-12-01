import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Nav from './components/Nav'
import Footer from './components/Footer'
import { Icon } from '@iconify/react';


function Contactme() {
  return (
    <div>
      <Head>
        <title>Portfolio Marnik Maes - Contact me</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
        <link rel="icon" href="images/MM-favicon.png"/>
      </Head>

      <main className="bg-customBlack text-customWhite font-Roboto z-10 px-5 md:px-0">
        <Nav/>
        
        <div className='text-center xl:text-left xl:ml-[200px] py-6'>
          <h1 className='text-5xl font-Roboto font-semibold'>Wanna friendly chat?</h1>
        </div>
        
        <div className='flex flex-wrap justify-around space-x-1 space-y-10 md:space-y-0 py-6'>

            <div className='w-[300px] md:w-[400px] bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700'>
                <Icon className='text-customWhite m-auto' icon="ic:baseline-discord" width={100} height={100}/>
                <div className='px-3 pb-3'>
                    <h5 className='mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white'>Discord</h5>
                    <p className='mb-3 font-normal text-gray-500 dark:text-gray-400'>Discord is by for my most used communication platform.
                        This app is always running on both my phone and computer. 
                        If you need a fast and friendly response, I would highly suggest contacting me on Discord.
                    </p>
                    <p className='mb-3 font-normal text-gray-500 dark:text-gray-400'>
                        &#40;Down below you can find my Discord user name, copy this and paste it in the add friend section on Discord it.&#41; 
                    </p>
                    <div className='border-[2px] border-towerBlue w-full rounded-full m-auto bg-white text-center text-customBlack'>
                        <p>noob4head#3513</p>
                    </div>
                </div>
            </div>

            <div className='w-[300px] md:w-[400px] bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700'>
                <Icon className='text-customWhite m-auto' icon="mdi:twitter" width={100} height={100}/>
                <div className='px-3 pb-3'>
                    <h5 className='mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white'>Twitter</h5>
                    <p className='mb-3 font-normal text-gray-500 dark:text-gray-400'>Twitter.</p>
                    <div className='border-[2px] border-towerBlue w-[100px] rounded-full m-auto bg-white text-center text-customBlack hover:bg-waterBlue hover:text-customWhite'>
                        <Link href={"/"}>Friend me!</Link>
                    </div>
                </div>
            </div>

            <div className='w-[300px] md:w-[400px] bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700'>
                <Icon className='text-customWhite m-auto' icon="mdi:instagram" width={100} height={100}/>
                <div className='px-3 pb-3'>
                    <h5 className='mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white'>Instagram</h5>
                    <p className='mb-3 font-normal text-gray-500 dark:text-gray-400'>this is a test </p>
                    <div className='border-[2px] border-towerBlue w-[100px] rounded-full m-auto bg-white text-center text-customBlack hover:bg-waterBlue hover:text-customWhite'>
                        <Link href={"/"}>Friend me!</Link>
                    </div>
                </div>
            </div>
        </div>




      </main>
      <Footer/>
    </div>
  )
}
export default Contactme