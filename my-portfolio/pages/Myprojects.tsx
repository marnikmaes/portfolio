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
                    
                    <div className='pt-6 flex flex-wrap justify-around space-y-[50px] md:space-y-0 md:max-w-[1720px] m-auto'>
                        <div className='max-w-sm bg-customWhite rounded-lg shadow-lg dark:bg-skyBlue dark:border-skyBlue'>
                            <Image className='rounded-lg' src={"/images/projects/Jumping-Fox-Game.png"} alt={"Jumping fox game"} height={400} width={400}></Image>
                            <div className='p-5'>
                                <h5 className='mb-2 text-2xl font-Roboto font-semibold tracking-tight text-customWhite dark:text-customWhite'>Jumping Fox game</h5>
                                <p className='mb-3 font-normal text-customWhite dark:text-customWhite'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, delectus.</p>
                                <Link className='inline-flex items-center px-3 py-2 border-[2px] border-towerBlue rounded-lg text-md font-Roboto font-semibold text-center bg-customWhite text-customBlack hover:bg-waterBlue hover:text-customWhite' href={"/"}>
                                    Read More
                                </Link>
                            </div>
                        </div>

                        <div className='max-w-sm bg-customWhite rounded-lg shadow-lg dark:bg-skyBlue dark:border-skyBlue'>
                            <Image className='rounded-lg' src={"/images/projects/DI-website.png"} alt={"DI website"} height={400} width={400}></Image>
                            <div className='p-5'>
                                <h5 className='mb-2 text-2xl font-Roboto font-semibold tracking-tight text-customWhite dark:text-customWhite'>Digital Innovation website</h5>
                                <p className='mb-3 font-normal text-customWhite dark:text-customWhite'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, delectus.</p>
                                <Link className='inline-flex items-center px-3 py-2 border-[2px] border-towerBlue rounded-lg text-md font-Roboto font-semibold text-center bg-customWhite text-customBlack hover:bg-waterBlue hover:text-customWhite' href={"/"}>
                                    Read More
                                </Link>
                            </div>
                        </div>

                        <div className='max-w-sm bg-customWhite rounded-lg shadow-lg dark:bg-skyBlue dark:border-skyBlue'>
                            <Image className='rounded-lg' src={"/images/projects/Service-app.png"} alt={"Service app Geel"} height={400} width={400}></Image>
                            <div className='p-5'>
                                <h5 className='mb-2 text-2xl font-Roboto font-semibold tracking-tight text-customWhite dark:text-customWhite'>Service app for the city Geel</h5>
                                <p className='mb-3 font-normal text-customWhite dark:text-customWhite'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, delectus.</p>
                                <Link className='inline-flex items-center px-3 py-2 border-[2px] border-towerBlue rounded-lg text-md font-Roboto font-semibold text-center bg-customWhite text-customBlack hover:bg-waterBlue hover:text-customWhite' href={"/"}>
                                    Read More
                                </Link>
                            </div>
                        </div>

                        <div className='max-w-sm bg-customWhite rounded-lg shadow-lg dark:bg-skyBlue dark:border-skyBlue'>
                            <Image className='rounded-lg' src={"/images/projects/Isolation-control.png"} alt={"isolation control"} height={400} width={400}></Image>
                            <div className='p-5'>
                                <h5 className='mb-2 text-2xl font-Roboto font-semibold tracking-tight text-customWhite dark:text-customWhite'>Isolation control setup</h5>
                                <p className='mb-3 font-normal text-customWhite dark:text-customWhite'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, delectus.</p>
                                <Link className='inline-flex items-center px-3 py-2 border-[2px] border-towerBlue rounded-lg text-md font-Roboto font-semibold text-center bg-customWhite text-customBlack hover:bg-waterBlue hover:text-customWhite' href={"/"}>
                                    Read More
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

export default Myprojects