import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { Icon } from '@iconify/react';



function Game() {
    return(
        <div>
            <Head>
                <title>Portfolio Marnik Maes - Jumping Fox game</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
                <link rel="icon" href="images/MM-favicon.png"/>
            </Head>

            <div className='min-h-screen'>
                <main className="bg-[url('/images/endless-constellation.svg')] text-customWhite pb-[50px]">
                    <Nav/>

                    <div className='m-auto w-fit px-10 md:w-[800px] text-center md:text-left md:px-0'>
                        
                         <div className='text-center py-6'>
                            <h1 className='text-5xl font-Roboto font-semibold'>Jumping Fox game</h1>
                        </div>

                        <Image className='object-contain rounded-2xl m-auto' src="/images/projects/game/Jumping-Fox-Game.png" alt="game" width={800} height={800} />


                        <div>
                            <div className='text-center xl:text-left xl:ml-[200px] py-10'>
                                <h1 className='text-5xl font-Roboto font-semibold'>About the project</h1>
                            </div>

                            <p className='text-lg'> For this project, I will be creating a game for children with disabilities. This means that the game has to be easy to play and very accessible.
                                Probably one of the most important requirements for this project is that the game be made solely for entertainment. It should not be educational or include any form of real &#34;purpose&#34; other than having fun.
                            </p>
                        </div>
                        
                        <div>
                            <div className='text-center py-10'>
                                <h1 className='text-5xl font-Roboto font-semibold'>About the game</h1>
                            </div>

                            <p className='text-lg'>
                                For my game I have decided to make a Mario like game. To put it in more game development terms, it&#39;s a 2D platformer combined with endless runner elements.
                                In my game you play as a fox and it&#39;s your job to jump over all the obstacles and collect all gems along the way.
                                The game is made up with different levels and different difficulties.
                            </p>
                            <ul className='text-lg list-none md:list-disc'> Level difficulties:
                                <div className='pl-0 md:pl-10'>
                                    <li>Level 1&#45;3: easy with no game over possibilities</li>
                                    <li>Level 5&#45;7: medium with few game over possibilities</li>
                                    <li>Level 8&#45;10: hard with many game over possibilities</li>
                                </div>
                            </ul>
                        </div>

                        <div>
                            <div className='text-center py-10'>
                                <h1 className='text-5xl font-Roboto font-semibold'>Unreal Engine</h1>
                            </div>
                            <p>A full comparison between Unreal Engine and Unity and why I choice Unreal Engine you can find in my Github repo but I will state my conclusion</p>
                            <p>Personally I have decided on using UE5. While Unity would seem like the better choice since my game is rather small scale and most certainly not a AAA game, I have my reasons for choosing UE5.</p>
                            <ul className='text-lg list-disc list-inside'> Reasons:
                                <div className='pl-0 md:pl-10'>
                                    <li>I&#39;m still very interested in gamedevelopment and getting to use the new ue5 engine is an amazing learning opportunity</li>
                                    <li>UE5 is totally free via Epic Games while for Unity I would have to request a Pro version which would just add an extra step</li>
                                    <li>I&#39;ve already dabbled in UE4 before so I can use my previously learned things in this project.</li>
                                    <li>Project packaging and exporting is really really easy in UE5</li>
                                    <li>Itch.io is a very very solid integration platform for this.</li>
                                </div>
                            </ul>
                        </div>

                        <div>
                            <div className='text-center py-10'>
                                <h1 className='text-5xl font-Roboto font-semibold'>Video&#39;s</h1>
                            </div>
                            <div className="aspect-w-16 aspect-h-9">
                                <iframe src="https://www.youtube.com/embed/BDm2soA4BFI" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                            </div>
                        </div>

                        <div>
                            <div className='text-center py-10'>
                                <h1 className='text-5xl font-Roboto font-semibold'>Links</h1>
                            </div>
                            <div className='text-lg text-left pb-5'>Github repo: <Link className='hover:text-waterBlue hover:underline hover:underline-offset-8 hover:decoration-towerBlue' href={'https://github.com/Thomas-More-Digital-Innovation/2223-MOBI-009-Game-voor-kinderen-met-beperking-MM'}>https://github.com/Thomas-More-Digital-Innovation/2223-MOBI-009-Game-voor-kinderen-met-beperking-MM</Link></div>
                            <div className='text-lg text-left'>Itch.io page: <Link className='hover:text-waterBlue hover:underline hover:underline-offset-8 hover:decoration-towerBlue' href={'https://marnik-maes.itch.io/jumping-fox'}>https://marnik-maes.itch.io/jumping-fox</Link></div>
                        </div>
                    </div>
                    <div className='text-center py-10 md:text-right  md:pr-[100px]'>
                        <Link href={'/Myprojects'} className='text-2xl font-Roboto font-semibold hover:text-waterBlue hover:underline hover:underline-offset-8 hover:decoration-towerBlue'>Back to projects</Link>
                    </div>
                </main>
                <Footer/>
            </div>

        </div>
    )
}

export default Game