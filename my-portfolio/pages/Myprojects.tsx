import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Nav from './components/Nav'
import Footer from './components/Footer'

function Myprojects(){
    return(
        <div>
            <Head>
                <title>Portfolio Marnik Maes - My projects</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
                <link rel="icon" href="images/MM-favicon.png"/>
            </Head>
            <div className='min-h-screen'>
                <main className="bg-[url('/images/endless-constellation.svg')] text-customWhite pb-[50px]">
                    <Nav/>
                    
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
                                <Image className='rounded-xl basis-2/6' src={'/images/projects/isolationcontrol/Isolation-control.png'} alt='Isolation control' width={400} height={400}></Image>
                                <div className='basis-4/6'>
                                    <h1 className='font-Roboto font-bold text-md'>Isolation control setup</h1>
                                    <p className='font-Roboto text-sm' >For this project we will be making a isolation control setup. 
                                        It will be used to log temperature, moisture and air pressure.
                                    </p>
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
                </main>
                <Footer/>
            </div>
        </div>
    )
}

export default Myprojects