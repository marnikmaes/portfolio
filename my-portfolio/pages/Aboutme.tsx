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

      <main className="bg-customBlack text-customWhite font-Roboto z-10 px-5 md:px-0">
        <Nav/>

        <div className='text-center xl:text-left xl:ml-[200px] pt-6'>
          <h1 className='text-5xl font-Roboto font-semibold sm:block md:hidden'>Hi!</h1>
        </div>
        <div className="flex flex-wrap-reverse justify-center items-center py-6 md:pb-[100px]">
          <h1 className='text-2xl font-Roboto py-6 px-[40px] text-center'>My name is <span className='font-bold italic'>Marnik Maes</span>, a second-year student studying <span className='font-bold italic'>Digital Innovation</span> at Thomas More Geel. <br/> <span className='font-bold'>I always strive to improve my technology skills on every level!</span></h1>
          <Image className="object-cover rounded-full" src={"images/Marnik-Maes.png"} alt={"Marnik Maes"} width={300} height={300}/>
        </div>

        <div className='text-center xl:text-left xl:ml-[200px] py-6'>
          <h1 className='text-5xl font-Roboto font-semibold'>My studies</h1>
        </div>
        <div className='py-6 flex flex-col justify-around items-center m-auto sm:w-[200px] md:w-[500px] lg:w-[900px] text-customWhite text-lg text-center font-Roboto'>
          <div>
            <p className='text-3xl font-bold font-Roboto'>2015 - 2017</p>
            In my <span className='font-semibold italic'> first and second year of high school</span>, I studied <span className='font-semibold italic'>industrial science STEM</span> at &#39;t Peperstraatje high school located in Geel. 
            STEM is short for Science, Technology, Engineering and Mathematics.
            </div>
          <div><Icon className='text-blue-300' icon="material-symbols:arrow-downward" width={100} height={100}/></div>
          <div>
            <p className='text-3xl font-bold font-Roboto'>2017 - 2019</p>
            In my <span className='font-semibold italic'>third and fourth year of high school</span>, I studied <span className='font-semibold italic'>Mechatronics sciences</span> at Sint Jozef high school located in Geel. This focused on both electronics and mechanics.
          </div>
          <div><Icon className='text-blue-400' icon="material-symbols:arrow-downward" width={100} height={100}/></div>
          <div>
            <p className='text-3xl font-bold font-Roboto'>2019 - 2021</p>
            In my <span className='font-semibold italic'>fifth and sixth year of high school</span>, I studied <span className='font-semibold italic'>Electronics and ICT</span> at Sint Jozef high school located in Geel. Here I learned all the basics about coding in multiple languages such as: Python, C++, Labview, Codesys and more. Here I also learned the basics about networking, electronics, code debugging and other viable knowledge for every IT person
          </div>
          <div><Icon className='text-blue-600' icon="material-symbols:arrow-downward" width={100} height={100}/></div>
          <div>
            <p className='text-3xl font-bold font-Roboto'>2021 - 2022</p>
            In my <span className='font-semibold italic'>first year of college</span>, I studied the Dutch version of <span className='font-semibold italic'>Applied computer science</span> at Thomas More college located in Geel. Here I relearned the basics I&#39;d already picked up in high school, but also expanded my horizons mainly in Networking, Cloud and Cyber security related subjects, IoT and web development.
          </div>
          <div><Icon className='text-blue-800' icon="material-symbols:arrow-downward" width={100} height={100}/></div>
          <div> 
            <p className='text-3xl font-bold font-Roboto'>2022 - 2023</p>
            <span className='font-semibold italic'>Currently I&#39;m in my second year of college studying Digital Innovation</span> at Thomas More college located in Geel. Here I&#39;m learning how to work independently on IT related projects. Getting the opportunity to work independently on projects instead of sitting in class the entire day is truly in my opinion the best way to find what suits you and most importantly find the thing that you love to do!
          </div>
        </div>

        <div className='text-center xl:text-left xl:ml-[200px] py-6'>
          <h1 className='text-5xl font-Roboto font-semibold'>My interests</h1>
        </div>

        <div className='py-6 m-auto sm:w-[200px] md:w-[500px] lg:w-[1200px] text-customWhite text-lg font-Roboto'>
          <p className='pb-3'>I&#39;m a very curious and sometimes nosy person. That&#39;s my interests are fairly diverse though my interests are more software oriented than hardware.</p>
          <p>Some of my main interests in and out school are:</p>
          <ul className='list-disc list-inside pl-[30px] text-left'>
            <li>Game development</li>
            <li>&#40;Playing games&#41;</li>
            <li>Website development</li>
            <li>App development</li>
            <li>Desktop building</li>
            <li>Desktop components</li>
            <li>Desktop peripherals</li>
            <li>Headphones and IEM&#39;s</li>
            <li>...</li>
          </ul>
        </div>

        
        <div className='text-center xl:text-left xl:ml-[200px] py-6'>
          <h1 className='text-5xl font-Roboto font-semibold'>My skills</h1>
        </div>

        <div className='py-6 m-auto sm:w-[200px] md:w-[500px] lg:w-[1200px] text-customWhite text-lg font-Roboto'>
          <p className='pb-3'>Over the years I&#39;ve picked up on quite a few skills in both hardware and software.</p>
          <p>Some of my skills are:</p>
          <ul className='list-disc list-inside pl-[30px] text-left'>
            <li>Game development in Unreal Engine</li>
            <li>Python</li>
            <li>Java</li>
            <li>Webdesign</li>
            <li>Working agile</li>
            <li>...</li>
          </ul>
        </div>

      </main>
      <Footer/>
    </div>
  )
}
export default Aboutme