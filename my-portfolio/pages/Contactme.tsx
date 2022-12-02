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

      <div className="bg-[url('https://images.pexels.com/photos/3075993/pexels-photo-3075993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] fixed z-1 block  h-full inset-0 "></div>

      <main className="text-customWhite z-10 px-5 md:px-0 font-Roboto">
        <Nav/>

        <div className='text-center xl:text-left xl:ml-[200px] py-6'>
          <h1 className='text-5xl font-Roboto font-semibold'>Formal contact?</h1>
        </div>

        <div className='flex flex-wrap justify-around space-y-10 md:space-y-0 py-6'>
          <div className='w-[300px] md:w-[500px] bg-white border border-gray-200 rounded-lg shadow-md dark:bg-skyBlue dark:border-skyBlue flex flex-col justify-end'>
            <Icon className='text-customWhite m-auto' icon="material-symbols:mail-rounded" width={150} height={150}/>
            <div className='px-3 pb-3'>
              <h5 className='mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white'>Email</h5>
                <p className='mb-3 font-normal text-gray-500 dark:text-gray-400'>The quickest and easiest way to contact me is by sending me an email on either my school email address for school related things or my personal email.
                  I check these everyday and you can expect a response within a day or 2 at max.
                </p>
                <Link href={"mailto:r0881840@student.thomasmore.be"}>
                  <div className='border-[2px] border-towerBlue  w-[200px] md:w-[250px] rounded-full m-auto bg-white text-center text-customBlack hover:bg-waterBlue hover:text-customWhite'>Student email</div>
                </Link>
                <Link href={"mailto:marnikmaes46@hotmail.com"}>
                  <div className='border-[2px] border-towerBlue  w-[200px] md:w-[250px] rounded-full m-auto bg-white text-center text-customBlack hover:bg-waterBlue hover:text-customWhite'>Personal email</div>
                </Link>  
            </div>
          </div>

          <div className='w-[300px] md:w-[500px] bg-white border border-gray-200 rounded-lg shadow-md dark:bg-skyBlue dark:border-skyBlue flex flex-col justify-end'>
            <Icon className='text-customWhite m-auto' icon="mdi:linkedin" width={150} height={150}/>
            <div className='px-3 pb-3'>
              <h5 className='mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white'>LinkedIn</h5>
                <p className='mb-3 font-normal text-gray-500 dark:text-gray-400'>For more professional contact LinkedIn is a good option. There you can also check my network and other important things.
                </p>
                <div className='border-[2px] border-towerBlue  w-[200px] md:w-[250px] rounded-full m-auto bg-white text-center text-customBlack hover:bg-waterBlue hover:text-customWhite'>
                  <Link href={"https://www.linkedin.com/in/marnik-maes-b0aa79250/"}>Add me &#64;Marnik Maes</Link>
                </div>  
            </div>
          </div>

        </div>

        
        <div className='text-center xl:text-left xl:ml-[200px] py-6'>
          <h1 className='text-5xl font-Roboto font-semibold'>Wanna friendly chat?</h1>
        </div>
        
        <div className='flex flex-wrap justify-around space-x-1 space-y-10 md:space-y-0 py-6'>
          <div className='w-[300px] md:w-[500px] bg-white border border-gray-200 rounded-lg shadow-md dark:bg-skyBlue dark:border-skyBlue flex flex-col justify-end'>
            <Icon className='text-customWhite m-auto' icon="ic:baseline-discord" width={150} height={150}/>
            <div className='px-3 pb-3'>
              <h5 className='mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white'>Discord</h5>
                <p className='mb-3 font-normal text-gray-500 dark:text-gray-400'>Discord is by for my most used communication platform.
                  This app is always running on both my phone and computer. 
                  If you need a fast and friendly response, I would highly suggest contacting me on Discord.
                </p>
                <p className='mb-3 font-normal text-gray-500 dark:text-gray-400'>
                  &#40;Down below you can find my Discord user name, copy this and paste it in the add friend section on Discord it.&#41; 
                </p>
                <div className='border-[2px] border-towerBlue  w-[200px] md:w-[250px] rounded-full m-auto bg-white text-center text-customBlack hover:bg-waterBlue hover:text-customWhite'>
                  <p>noob4head#3513</p>
                </div>
            </div>
          </div>

          <div className='w-[300px] md:w-[500px] bg-white border border-gray-200 rounded-lg shadow-md dark:bg-skyBlue dark:border-skyBlue flex flex-col justify-end'>
            <Icon className='text-customWhite m-auto' icon="mdi:twitter" width={150} height={150}/>
            <div className='px-3 pb-3'>
              <h5 className='mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white'>Twitter</h5>
              <p className='mb-3 font-normal text-gray-500 dark:text-gray-400'>Twitter is the social media I mainly use for school. I&#39;m often active here and you can follow my Thomas More experiences.</p>
              <Link href={"https://twitter.com/MaesMarnik"}>
                <div className='border-[2px] border-towerBlue w-[200px] md:w-[250px] rounded-full m-auto bg-white text-center text-customBlack hover:bg-waterBlue hover:text-customWhite'>Add me &#64;MaesMarnik</div>
              </Link>   
            </div>
          </div>
        </div>

      </main>
      <Footer/>
    </div>
  )
}
export default Contactme