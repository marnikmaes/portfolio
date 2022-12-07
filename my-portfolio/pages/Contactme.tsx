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

      <div className='min-h-screen'>
        <main className="bg-[url('/images/endless-constellation.svg')] text-customWhite pb-[50px]">
          <Nav/>

          <div className='text-center xl:text-left xl:ml-[200px] py-6 '>
            <h1 className='text-5xl font-Roboto font-semibold'>Formal contact?</h1>
          </div>

          <div className='flex flex-wrap justify-around'>
            <div className='basis-5/6 lg:basis-2/6 py-[25px]'>
              <div className="p-6 bg-skyBlue rounded-2xl shadow-md h-full">
                <Icon className='text-customWhite m-auto' icon="material-symbols:mail-rounded" width={200} height={200}/>
                <h5 className="mb-2 text-2xl font-semibold">Email</h5>
                <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">The quickest and easiest way to contact me is by sending me an email on either my school email address for school related things or my personal email.
                  I check these everyday and you can expect a response within a day or 2 at max.</p>
                <Link href={"mailto:r0881840@student.thomasmore.be"}>
                  <div className='w-[200px] md:w-[250px] rounded-full m-auto bg-white text-center text-customBlack hover:bg-waterBlue hover:text-customWhite'>
                    Send me an email.
                  </div>
                </Link>
              </div>
            </div>

            <div className='basis-5/6 lg:basis-2/6 py-[25px]'>
              <div className="p-6 bg-skyBlue rounded-2xl shadow-md h-full">
                <Icon className='text-customWhite m-auto' icon="mdi:linkedin" width={200} height={200}/>
                <h5 className="mb-2 text-2xl font-semibold">LinkedIn</h5>
                <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">For more professional contact LinkedIn is a good option. There you can also check my network and other important things.</p>
                <Link href={"https://www.linkedin.com/in/marnik-maes-b0aa79250/"}>
                  <div className='w-[200px] md:w-[250px] rounded-full m-auto bg-white text-center text-customBlack hover:bg-waterBlue hover:text-customWhite'>
                    My LinkedIn account.
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <div className='text-center xl:text-right py-6 xl:pr-[200px]'>
            <h1 className='text-5xl font-Roboto font-semibold'>Wanna friendly chat?</h1>
          </div>

          <div className='flex flex-wrap justify-around'>
            <div className='basis-5/6 lg:basis-2/6 py-[25px]'>
              <div className="p-6 bg-skyBlue rounded-2xl shadow-md h-full">
                <Icon className='text-customWhite m-auto' icon="ic:baseline-discord" width={200} height={200}/>
                <h5 className="mb-2 text-2xl font-semibold">Discord</h5>
                <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Discord is by for my most used communication platform.
                  This app is always running on both my phone and computer. 
                  If you need a fast and friendly response, I would highly suggest contacting me on Discord.
                </p>
                <p className='mb-3 font-normal text-gray-500 dark:text-gray-400'>
                  &#40;Down below you can find my Discord user name, copy this and paste it in the add friend section on Discord it.&#41; 
                </p>
                <div className='w-[200px] md:w-[250px] rounded-full m-auto bg-white text-center text-customBlack hover:bg-waterBlue hover:text-customWhite'>
                <p>noob4head#3513</p>
                  </div>
              </div>
            </div>

            <div className='basis-5/6 lg:basis-2/6 py-[25px]'>
              <div className="p-6 bg-skyBlue rounded-2xl shadow-md h-full">
                <Icon className='text-customWhite m-auto' icon="mdi:twitter" width={200} height={200}/>
                <h5 className="mb-2 text-2xl font-semibold">Twitter</h5>
                <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Twitter is the social media I mainly use for school. I&#39;m often active here and you can follow my Thomas More experiences.</p>
                <Link href={"https://twitter.com/MaesMarnik"}>
                  <div className='w-[200px] md:w-[250px] rounded-full m-auto bg-white text-center text-customBlack hover:bg-waterBlue hover:text-customWhite'>
                    My Twitter account.
                  </div>
                </Link>
              </div>
            </div>
          </div>

        </main>
        <Footer/>
      </div>
    </div>
  )
}
export default Contactme