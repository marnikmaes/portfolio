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

                    <div className='text-center py-6'>
                        <h1 className='text-5xl font-Roboto font-semibold'>Jumping fox video game</h1>
                    </div>

                    <div className='flex flex-wrap justify-around px-10 py-10'>
                        <div>
                            <Image className='object-contain rounded-2xl m-auto' src="/images/projects/game/Jumping-Fox-Game.png" alt="game" width={800} height={800}/>
                            <br />
                            <Image className='object-contain rounded-2xl m-auto' src="/images/projects/game/gameplay.png" alt="gameplay" width={800} height={800}/>
                        </div>

                        <div className='w-[800px]'>
                            <div className='text-lg font-Roboto'>
                                <div className='py-6 text-center md:text-left'>
                                    <h1 className='text-4xl font-Roboto font-semibold'>Status</h1>
                                </div>
                                <p className='text-lg'>Finished
                                </p>
                            </div>

                            <div className='text-lg font-Roboto'>
                                <div className='py-6 text-center md:text-left'>
                                    <h1 className='text-4xl font-Roboto font-semibold'>About the project</h1>
                                </div>
                                <p className='text-lg'> For this project, I will be creating a game for children with disabilities. This means that the game has to be easy to play and very accessible.
                                    Probably one of the most important requirements for this project is that the game be made solely for entertainment. It should not be educational or include any form of real &#34;purpose&#34; other than having fun.
                                </p>
                            </div>
                            
                            <div className='text-lg font-Roboto'>
                                <div className='py-6 text-center md:text-left'>
                                    <h1 className='text-4xl font-Roboto font-semibold'>About the game</h1>
                                </div>
                                <p className='text-lg'>
                                    For my game I have decided to make a Mario like game. To put it in more game development terms, it&#39;s a 2D platformer combined with endless runner elements.
                                    In my game you play as a fox and it&#39;s your job to jump over all the obstacles and collect all gems along the way.
                                    The game is made up with different levels and different difficulties.
                                </p>
                                <ul className='text-lg list-disc'> Level difficulties:
                                    <div className='pl-10'>
                                        <li>Level 1&#45;3: easy with no game over possibilities</li>
                                        <li>Level 5&#45;7: medium with few game over possibilities</li>
                                        <li>Level 8&#45;10: hard with many game over possibilities</li>
                                    </div>
                                </ul>   
                            </div>

                            <div className='text-lg font-Roboto'>
                                <div className='py-6 text-center md:text-left'>
                                    <h1 className='text-4xl font-Roboto font-semibold'>Unreal Engine 5</h1>
                                </div>
                                <p>A full comparison between Unreal Engine and Unity and why I choice Unreal Engine you can find in my Github repo but I will state my conclusion</p>
                                <p>Personally I have decided on using UE5. While Unity would seem like the better choice since my game is rather small scale and most certainly not a AAA game, I have my reasons for choosing UE5.</p>
                                <ul className='text-lg list-disc'> Reasons:
                                    <div className='pl-10'>
                                        <li>I&#39;m still very interested in gamedevelopment and getting to use the new ue5 engine is an amazing learning opportunity</li>
                                        <li>UE5 is totally free via Epic Games while for Unity I would have to request a Pro version which would just add an extra step</li>
                                        <li>I&#39;ve already dabbled in UE4 before so I can use my previously learned things in this project.</li>
                                        <li>Project packaging and exporting is really really easy in UE5</li>
                                        <li>Itch.io is a very very solid integration platform for this.</li>
                                    </div>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className='w-fit m-auto px-10'>
                        <div className='text-center py-6'>
                            <h1 className='text-4xl font-Roboto font-semibold'>Links</h1>
                        </div>
                        <div className='text-lg font-Roboto'>
                            Github repo: <Link className='hover:text-waterBlue hover:underline hover:underline-offset-8 hover:decoration-towerBlue' href={'https://github.com/Thomas-More-Digital-Innovation/2223-MOBI-009-Game-voor-kinderen-met-beperking-MM'}>https://github.com/Thomas-More-Digital-Innovation/2223-MOBI-009-Game-voor-kinderen-met-beperking-MM</Link>
                        </div>
                        <div className='text-lg font-Roboto'>
                            Itch.io webpage: <Link className='hover:text-waterBlue hover:underline hover:underline-offset-8 hover:decoration-towerBlue' href={'https://marnik-maes.itch.io/jumping-fox'}>https://marnik-maes.itch.io/jumping-fox</Link>
                        </div>
                    </div>

                    <div className='text-center md:text-right font-Roboto text-xl pt-[100px] md:pr-[100px]'>
                        <Link href={'/Myprojects'} className="font-semibold py-2 px-4 border-[2px] rounded-full border-towerBlue w-[200px] bg-customWhite text-customBlack hover:bg-waterBlue hover:text-customWhite">
                            Back to projects  
                        </Link>
                    </div>
                </main>
                <Footer/>
            </div>

        </div>
    )
}

export default Game