import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Nav from './components/Nav'
import Footer from './components/Footer'
import { Icon } from '@iconify/react';

function Aboutme() {
  return (
    <div>
      <Head>
        <title>Portfolio Marnik Maes - About me</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
        <link rel="icon" href="images/MM-favicon.png"/>
      </Head>

      <div className='min-h-screen'>
        <main className="bg-[url('/images/endless-constellation.svg')] text-customWhite pb-[50px]">
          <Nav/>
          <div className='flex flex-wrap justify-around items-center'>

            <div className='basis-6/6 md:basis-3/6'>
              <div className="flex flex-wrap justify-center items-center pb-[50px]">
                <Image className="basis-6/6 object-cover rounded-full" src={"images/Marnik-Maes.png"} alt={"Marnik Maes"} width={300} height={300}/>
                <h1 className='basis-6/6 text-2xl font-Roboto py-6 px-[40px] text-center'>My name is <span className='font-bold italic'>Marnik Maes</span>, a second-year student studying <span className='font-bold italic'>Digital Innovation</span> at Thomas More Geel. <br/> <span className='font-bold'>I always strive to improve my technology skills on every level!</span></h1>
              </div>
            </div>

            <div className='basis-6/6 md:basis-3/6 pt-0 md:pt-[100px] md:pb-[50px]'>
              <div className='text-center pb-6 md:hidden'>
                <h1 className='text-5xl font-Roboto font-semibold'>My studies</h1>
              </div>

              <div className='flex flex-col justify-around items-center text-center px-5 md:px-0 md:w-[700px] lg:w-[800px] md:m-auto pb-[50px]'>
                <div>
                  <p className='text-3xl font-bold font-Roboto'>2015 - 2017</p>
                  <p>In my <span className='font-semibold italic'> first and second year of high school</span>, I studied <span className='font-semibold italic'>industrial science STEM</span> at &#39;t Peperstraatje high school located in Geel. 
                    STEM is short for Science, Technology, Engineering and Mathematics.</p>
                </div>
                <Icon className='text-blue-300' icon="material-symbols:arrow-downward" width={100} height={100}/>
                <div>
                  <p className='text-3xl font-bold font-Roboto'>2017 - 2019</p>
                  <p>In my <span className='font-semibold italic'>third and fourth year of high school</span>, I studied <span className='font-semibold italic'>Mechatronics sciences</span> at Sint Jozef high school located in Geel. 
                    This focused on both electronics and mechanics.</p>
                </div>
                <Icon className='text-blue-400' icon="material-symbols:arrow-downward" width={100} height={100}/>
                <div>
                  <p className='text-3xl font-bold font-Roboto'>2019 - 2021</p>
                  <p>In my <span className='font-semibold italic'>fifth and sixth year of high school</span>, I studied <span className='font-semibold italic'>Electronics and ICT</span> at Sint Jozef high school located in Geel. 
                    Here I learned all the basics about coding in multiple languages such as: Python, C++, Labview, Codesys and more. Here I also learned the basics about networking, electronics, code debugging and other viable knowledge for every IT person.</p>
                </div>
                <Icon className='text-blue-600' icon="material-symbols:arrow-downward" width={100} height={100}/>
                <div>
                  <p className='text-3xl font-bold font-Roboto'>2021 - 2022</p>
                  <p>In my <span className='font-semibold italic'>first year of college</span>, I studied the Dutch version of <span className='font-semibold italic'>Applied computer science</span> at Thomas More college located in Geel. 
                    Here I relearned the basics I&#39;d already picked up in high school, but also expanded my horizons mainly in Networking, Cloud and Cyber security related subjects, IoT and web development.</p>
                </div>
                <Icon className='text-blue-800' icon="material-symbols:arrow-downward" width={100} height={100}/>
                <div> 
                  <p className='text-3xl font-bold font-Roboto'>2022 - 2023</p>
                  <p><span className='font-semibold italic'>Currently I&#39;m in my second year of college studying Digital Innovation</span> at Thomas More college located in Geel. 
                    Here I&#39;m learning how to work independently on IT related projects. 
                    Getting the opportunity to work independently on projects instead of sitting in class the entire day is truly in my opinion the best way to find what suits you and most importantly find the thing that you love to do!</p>
                </div>
              </div>
            </div>


            <div className='basis-6/6'>
              <div className='text-center pb-6'>
                <h1 className='text-5xl font-Roboto font-semibold'>My interests</h1>
              </div>

              <div className='text-center px-5 md:px-0 md:w-[700px] lg:w-[800px] md:m-auto pb-[50px]'>
                <p className='pb-3'>I&#39;m a very curious and sometimes nosy person. That&#39;s my interests are fairly diverse though my interests are more software oriented than hardware.</p>
                <p>Some of my main interests in and out school are:</p>
              </div>

              <div className='flex flex-wrap justify-around px-1 md:max-w-[1720px] md:m-auto pb-[50px]'>
                  <p className='basis-2/6 bg-skyBlue border-2 border-customWhite text-center p-2'>Game development</p>
                  <p className='basis-2/6 bg-skyBlue border-2 border-customWhite text-center p-2'>Web development</p>
                  <p className='basis-2/6 bg-skyBlue border-2 border-customWhite text-center p-2'>App development</p>
                  <p className='basis-2/6 bg-skyBlue border-2 border-customWhite text-center p-2'>Coding e.g. Python&#44; Java&#44; Javascript&#44; ...</p>
                  <p className='basis-2/6 bg-skyBlue border-2 border-customWhite text-center p-2'>Desktop building</p>
                  <p className='basis-2/6 bg-skyBlue border-2 border-customWhite text-center p-2'>Headphones and IEM&#39;s</p>
              </div>
            </div>
          </div>
        </main>
        <Footer/>
      </div>

    </div>
  )
}
export default Aboutme