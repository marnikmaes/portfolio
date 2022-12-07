import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Nav from './components/Nav'
import Footer from './components/Footer'

function IndexPage() {
  return (
    <div>

      <Head>
        <title>Portfolio Marnik Maes - Home</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
        <link rel="icon" href="images/MM-favicon.png"/>
      </Head>

      <div className="bg-customBlack xl:bg-[url('https://img.freepik.com/free-vector/matrix-style-binary-code-digital-falling-numbers-blue-background_1017-37387.jpg?w=2000&t=st=1670401340~exp=1670401940~hmac=00b0ab701b3009d502016df7b06fa5079e9e0284809a7698ee42e855df8f3937')] fixed z-1 block  h-full inset-0 "></div>
      <div className='min-h-screen'>
      <main className="text-customWhite z-10 px-5 md:px-0 font-Roboto">
        <Nav/>

        <div className='text-center xl:text-left xl:ml-[200px] py-6 '>
          <h1 className='text-5xl font-Roboto font-semibold'>About me</h1>
        </div>

        <div className="flex flex-wrap justify-center items-center py-6 md:pb-[100px]">
          <Image className="object-cover rounded-full" src={"images/Marnik-Maes.png"} alt={"Marnik Maes"} width={300} height={300}/>
          <h1 className='text-2xl font-Roboto py-6 px-[40px] text-center'>My name is <span className='font-bold italic'>Marnik Maes</span>, a second-year student studying <span className='font-bold italic'>Digital Innovation</span> at Thomas More Geel. <br/> <span className='font-bold'>I always strive to improve my technology skills on every level!</span></h1>
        </div>

        <div className='text-center xl:text-right xl:mr-[200px] py-6'>
            <Link href={"/Aboutme"}>
              <button className="font-semibold py-2 px-4 border-[3px] rounded-full border-towerBlue w-[200px] bg-customWhite text-customBlack hover:bg-waterBlue hover:text-customWhite">
                Read More  
              </button>
            </Link>
          </div>

        <div className='text-center xl:text-left xl:ml-[200px] py-6 '>
          <h1 className='text-5xl font-Roboto font-semibold'>Some of my projects</h1>
        </div>

        <div className='pt-6 flex flex-wrap justify-around space-y-[50px] md:space-y-0 md:max-w-[1500px] m-auto'>
          <div className='md:py-8'>
            <div className='max-w-sm bg-customWhite rounded-lg shadow-lg dark:bg-skyBlue dark:border-skyBlue'>
              <Link className='' href={"/"}>
                <Image className='rounded-lg' src={"/images/projects/Jumping-Fox-Game.png"} alt={"Jumping fox game"} height={400} width={400}></Image>
              </Link>
              <div className='p-5'>
                <Link href={"/"}>
                  <h5 className='mb-2 text-2xl font-Roboto font-semibold tracking-tight text-customWhite dark:text-customWhite'>Jumping Fox game</h5>
                </Link>
                <p className='mb-3 font-normal text-customWhite dark:text-customWhite'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, delectus.</p>
                <Link className='inline-flex items-center px-3 py-2 border-[2px] border-towerBlue rounded-lg text-md font-Roboto font-semibold text-center bg-customWhite text-customBlack hover:bg-waterBlue hover:text-customWhite' href={"/"}>
                  Read More
                </Link>
              </div>
            </div>
          </div>

          <div className='md:py-8'>
            <div className='max-w-sm bg-customWhite rounded-lg shadow-lg dark:bg-skyBlue dark:border-skyBlue'>
              <Link className='' href={"/"}>
                <Image className='rounded-lg' src={"/images/projects/Jumping-Fox-Game.png"} alt={"Jumping fox game"} height={400} width={400}></Image>
              </Link>
              <div className='p-5'>
                <Link href={"/"}>
                  <h5 className='mb-2 text-2xl font-Roboto font-semibold tracking-tight text-customWhite dark:text-customWhite'>Jumping Fox game</h5>
                </Link>
                <p className='mb-3 font-normal text-customWhite dark:text-customWhite'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, delectus.</p>
                <Link className='inline-flex items-center px-3 py-2 border-[2px] border-towerBlue rounded-lg text-md font-Roboto font-semibold text-center bg-customWhite text-customBlack hover:bg-waterBlue hover:text-customWhite' href={"/"}>
                  Read More
                </Link>
              </div>
            </div>
          </div>

          <div className='md:py-8'>
            <div className='max-w-sm bg-customWhite rounded-lg shadow-lg dark:bg-skyBlue dark:border-skyBlue'>
              <Link className='' href={"/"}>
                <Image className='rounded-lg' src={"/images/projects/Jumping-Fox-Game.png"} alt={"Jumping fox game"} height={400} width={400}></Image>
              </Link>
              <div className='p-5'>
                <Link href={"/"}>
                  <h5 className='mb-2 text-2xl font-Roboto font-semibold tracking-tight text-customWhite dark:text-customWhite'>Jumping Fox game</h5>
                </Link>
                <p className='mb-3 font-normal text-customWhite dark:text-customWhite'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, delectus.</p>
                <Link className='inline-flex items-center px-3 py-2 border-[2px] border-towerBlue rounded-lg text-md font-Roboto font-semibold text-center bg-customWhite text-customBlack hover:bg-waterBlue hover:text-customWhite' href={"/"}>
                  Read More
                </Link>
              </div>
            </div>
          </div>

        </div>
        <div className='text-center xl:text-right xl:mr-[200px] py-6'>
          <button className="font-semibold py-2 px-4 border-[2px] rounded-full border-towerBlue w-[200px] bg-customWhite text-customBlack hover:bg-waterBlue hover:text-customWhite">
            All projects  
          </button>
        </div>
      </main>
      <Footer/>
      </div>
    </div>
  )
}
export default IndexPage