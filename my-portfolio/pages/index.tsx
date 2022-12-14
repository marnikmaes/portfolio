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

      <div className='min-h-screen'>
      <main className="bg-[url('/images/endless-constellation.svg')] text-customWhite pb-[50px]">
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

        <div className='flex flex-wrap justify-around items-center px-5 space-y-6'>
			<Link href={'/projects/Diwebsite'} className='bg-skyBlue rounded-xl p-5 hover:bg-waterBlue w-[1000px]'>
            	<div className='flex flex-wrap md:flex-nowrap justify-between items-center space-x-5 space-y-5'>
                	<Image className='rounded-xl basis-2/6' src={'/images/projects/diwebsite/DI-website.png'} alt='di website' width={400} height={400}></Image>
                    	<div className='basis-4/6'>
                        	<h1 className='font-Roboto font-bold text-md'>Digital Innovation website</h1>
                            <p className='font-Roboto text-sm' >For this project 2DI and 3DI came together to create a central Digital Innovation website. 
                            	This now has become the central hub for all information, projects, questions, etc. 
                                For those who search hard enough there might even be a couple of surprises ;D</p>
                        </div>
                </div>
            </Link>

			<Link href={'/projects/Game'} className='bg-skyBlue rounded-xl p-5 hover:bg-waterBlue w-[1000px]'>
            	<div className='flex flex-wrap md:flex-nowrap justify-between items-center space-x-5 space-y-5'>
                    <Image className='rounded-xl basis-2/6' src={'/images/projects/game/Jumping-Fox-Game.png'} alt='jumping fox' width={400} height={400}></Image>
                    <div className='basis-4/6'>
                        <h1 className='font-Roboto font-bold text-md'>Jumping Fox game</h1>
                        <p className='font-Roboto text-sm' >For this project I created a game for children with disabilities. 
                            This means that the game is easy to play and very accessible.</p>
                    </div>
                </div>
            </Link>

			<Link href={'/'} className='bg-skyBlue rounded-xl p-5 hover:bg-waterBlue w-[1000px]'>
                <div className='flex flex-wrap md:flex-nowrap justify-between items-center space-x-5 space-y-5'>
                    <Image className='rounded-xl basis-2/6' src={'/images/projects/serviceapp/Service-app.png'} alt='service app Geel' width={400} height={400}></Image>
                    <div className='basis-4/6'>
                        <h1 className='font-Roboto font-bold text-md'>Service app city Geel</h1>
                        <p className='font-Roboto text-sm' >For this project I will be making an app for the city Geel. 
                            This app will be used to make it easier and more accessible for the people living in Geel to view all the available services.
                        </p>
                    </div>
                </div>
            </Link>
        </div>

        <div className='text-center xl:text-right xl:mr-[200px] py-6'>
          <Link href={'/Myprojects'} className="font-semibold py-2 px-4 border-[2px] rounded-full border-towerBlue w-[200px] bg-customWhite text-customBlack hover:bg-waterBlue hover:text-customWhite">
            All projects  
          </Link>
        </div>
      </main>

      <Footer/>
      </div>
    </div>
  )
}
export default IndexPage