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
          <h1 className='text-2xl font-Roboto py-6 px-[40px] text-center'>My name is <span className='font-bold italic'>Marnik Maes</span>, a second-year student studying <span className='font-bold italic'>Digital Innovation</span> at Thomas More Geel. <br/> <span className='font-bold italic'>I always strive to improve my technology skills on every level!</span></h1>
          <Image className="object-cover rounded-full" src={"images/Marnik-Maes.png"} alt={"Marnik Maes"} width={300} height={300}/>
        </div>

        <div className='text-center xl:text-left xl:ml-[200px] py-6'>
          <h1 className='text-5xl font-Roboto font-semibold'>My studies</h1>
        </div>
        <div className='py-6 flex flex-col justify-around items-center m-auto sm:w-[200px] md:w-[500px] lg:w-[900px] text-customWhite text-lg text-center font-Roboto'>
          <div>In my<span className='font-semibold italic'>first and second year of high school</span>, I studied <span className='font-semibold italic'>industrial science STEM</span> at &#39;t peperstraatje located in Geel. 
            STEM is short for Science, Technology, Engineering and Mathematics.</div>
          <div><Icon className='text-blue-300' icon="material-symbols:arrow-downward" width={80} height={150}/></div>
          <div>In my <span className='font-semibold italic'>third and fourth year of high school</span>, I studied <span className='font-semibold italic'>Mechatronics sciences</span> at Sint Jozen in Geel. This focused on both electronics and mechanics.</div>
          <div><Icon className='text-blue-400' icon="material-symbols:arrow-downward" width={80} height={150}/></div>
          <div>In my <span className='font-semibold italic'>fifth and sixth year of high school</span>, I studied <span className='font-semibold italic'>Electronics and ICT</span> at Sint Jozen in Geel. Here I learned all the basics about coding in multiple languages such as: Python, C++, Labview, Codesys and more. Here I also learned the basics about networking, electronics, code debugging and other viable knowledge for every IT person</div>
          <div><Icon className='text-blue-600' icon="material-symbols:arrow-downward" width={80} height={150}/></div>
          <div>In my <span className='font-semibold italic'>first year of college</span>, I studied the Dutch version of <span className='font-semibold italic'>Applied computer science</span>. Here I relearned the basics I&#39;d already picked up in high school, but also expanded my horizons mainly in Networking, Cloud and Cyber security related subjects, IoT and web development</div>
          <div><Icon className='text-blue-800' icon="material-symbols:arrow-downward" width={80} height={150}/></div>
          <div> <span className='font-semibold italic'>Currently I&#39;m in my second year of college studying Digital Innovation</span>. Here I&#39;m learning how to work independently on IT related projects. Getting the opportunity to work independently on projects instead of sitting in class the entire day is truly in my opinion the best way to find what suits you and most importantly find the thing that you love to do! </div>
        </div>
      </main>
      <Footer/>
    </div>
  )
}
export default Aboutme