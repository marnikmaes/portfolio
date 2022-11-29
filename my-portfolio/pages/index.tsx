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

        <div className="flex flex-wrap-reverse justify-center items-center py-11">
          <h1 className='text-2xl font-Roboto py-6 px-[40px]'>My name is Marnik Maes, a second-year student studying digital innovation at Thomas More Geel. <br/> I always strive to improve my technology skills on every level!</h1>
          <Image className="object-cover rounded-full" src={"images/Marnik-Maes.png"} alt={"Marnik Maes"} width={300} height={300}/>
        </div>

        <div className='text-center xl:text-left xl:ml-[200px] py-6 '>
          <h1 className='text-5xl font-Roboto'>Some of my projects</h1>
        </div>

        <div className='pt-6 flex flex-wrap justify-around space-y-[50px] md:space-y-0 md:max-w-[1720px] m-auto'>
          <div className='md:py-8'>
            <div className='max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700'>
              <Link className='' href={"/"}>
                <Image className='rounded-lg' src={"/images/projects/Jumping-Fox-Game.png"} alt={"Jumping fox game"} height={400} width={400}></Image>
              </Link>
              <div className='p-5'>
                <Link href={"/"}>
                  <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>Testing</h5>
                </Link>
                <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, delectus.</p>
                <Link className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800' href={"/"}>
                  Read More
                </Link>
              </div>
            </div>
          </div>

          <div className='md:py-8'>
            <div className='max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700'>
              <Link className='' href={"/"}>
                <Image className='rounded-lg' src={"/images/projects/Jumping-Fox-Game.png"} alt={"Jumping fox game"} height={400} width={400}></Image>
              </Link>
              <div className='p-5'>
                <Link href={"/"}>
                  <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>Testing</h5>
                </Link>
                <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, delectus.</p>
                <Link className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800' href={"/"}>
                  Read More
                </Link>
              </div>
            </div>
          </div>

          <div className='md:py-8'>
            <div className='max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700'>
              <Link className='' href={"/"}>
                <Image className='rounded-lg' src={"/images/projects/Jumping-Fox-Game.png"} alt={"Jumping fox game"} height={400} width={400}></Image>
              </Link>
              <div className='p-5'>
                <Link href={"/"}>
                  <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>Testing</h5>
                </Link>
                <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, delectus.</p>
                <Link className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800' href={"/"}>
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className='text-center xl:text-right xl:mr-[200px] py-6'>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-[200px]">
            All projects  
          </button>
        </div>

      </main>
      <Footer/>
    </div>
  )
}
export default IndexPage