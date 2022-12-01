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
        <title>Portfolio Marnik Maes - Home</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
        <link rel="icon" href="images/MM-favicon.png"/>
      </Head>

      <main className="bg-customBlack text-customWhite z-10">
        <Nav/>

        <div className="flex flex-wrap justify-center items-center py-6 md:pb-[100px]">
          <Image className="object-cover rounded-full" src={"images/Marnik-Maes.png"} alt={"Marnik Maes"} width={300} height={300}/>
          <h1 className='text-2xl font-Roboto py-6 px-[40px] text-center'>My name is Marnik Maes, a second-year student studying digital innovation at Thomas More Geel. <br/> I always strive to improve my technology skills on every level!</h1>
        </div>

        <div className='text-center xl:text-left xl:ml-[200px] py-6'>
          <h1 className='text-5xl font-Roboto font-semibold'>My studies</h1>
        </div>
        <div className='py-6 flex flex-col justify-around items-center m-auto sm:w-[200px] md:w-[500px] lg:w-[900px] text-customWhite text-lg text-center font-Roboto'>
          <div>In my<span className='font-semibold italic'>first and second year of high school</span>, I studied <span className='font-semibold italic'>industrial science STEM</span> at &#39;t peperstraatje located in Geel. 
            STEM is short for Science, Technology, Engineering and Mathematics.</div>
          <div><Icon className='text-skyBlue' icon="material-symbols:arrow-downward" width={80} height={150}/></div>
          <div>In my <span className='font-semibold italic'>third and fourth year of high school</span>, I studied <span className='font-semibold italic'>Mechatronics sciences</span>. This focused on both electronics and mechanics.</div>
          <div><Icon className='text-waterBlue' icon="material-symbols:arrow-downward" width={80} height={150}/></div>
          <div>In my <span className='font-semibold italic'>fifth and sixth year of high school</span>, I studied <span className='font-semibold italic'>Electronics and ICT</span>. Here I learned all the basics about coding in multiple languages such as: Python, C++, Labview, Codesys and more. Here I also learned the basics about networking, electronics, code debugging, ...</div>
          <div><Icon className='text-towerBlue' icon="material-symbols:arrow-downward" width={80} height={150}/></div>
          <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum dolor repellendus maiores, itaque adipisci omnis ratione quibusdam cupiditate mollitia ducimus!</div>

        </div>

      </main>
      <Footer/>
    </div>
  )
}
export default Aboutme