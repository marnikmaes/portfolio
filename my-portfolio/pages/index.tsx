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

      <main>
        <Nav/>
        <div className='py-10 flex flex-wrap justify-around space-y-[100px] md:space-y-0 md:max-w-full m-auto'>

          <div className='rounded-lg shadow-lg bg-white max-w-sm'>
            <Image src={"/images/projects/Jumping-Fox-Game.png"} alt={"JumpinFox Game"} width={600} height={400}></Image>
            <div className='py-6 px-4'>
              <h5 className='text-gray-900 text-xl font-medium mb-2'> Jumping Fox </h5>
              <p className='text-gray-700 text-base mb-4'>For this project, I will be creating a game for children with disabilities. This means that the game has to be easy to play and very accessible.</p>
              <button type='button' className='inline-block px-6 py-2 bg-cyan-200 text-black font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'>Learn more</button>
            </div>
          </div>

          <div className='rounded-lg shadow-lg bg-white max-w-sm'>
            <Image src={"/images/projects/Jumping-Fox-Game.png"} alt={"JumpinFox Game"} width={600} height={400}></Image>
            <div className='py-6 px-4'>
              <h5 className='text-gray-900 text-xl font-medium mb-2'> Jumping Fox </h5>
              <p className='text-gray-700 text-base mb-4'>For this project, I will be creating a game for children with disabilities. This means that the game has to be easy to play and very accessible.</p>
              <button type='button' className='inline-block px-6 py-2 bg-cyan-200 text-black font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'>Learn more</button>
            </div>
          </div>

          <div className='rounded-lg shadow-lg bg-white max-w-sm'>
            <Image src={"/images/projects/Jumping-Fox-Game.png"} alt={"JumpinFox Game"} width={600} height={400}></Image>
            <div className='py-6 px-4'>
              <h5 className='text-gray-900 text-xl font-medium mb-2'> Jumping Fox </h5>
              <p className='text-gray-700 text-base mb-4'>For this project, I will be creating a game for children with disabilities. This means that the game has to be easy to play and very accessible.</p>
              <button type='button' className='inline-block px-6 py-2 bg-cyan-200 text-black font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'>Learn more</button>
            </div>
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  )
}
export default IndexPage