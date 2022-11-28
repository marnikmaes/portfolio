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
        <div className='flex justify-around'>
          <div className='rounded-lg shadow-lg bg-white max-w-sm'>
            <Link href={"/"}>
              <Image src={"/images/MM-logo.png"} alt={"logo marnik"} width={200} height={200}></Image>
            </Link>
            <div className='py-6'>
              <h5 className='text-gray-900 text-xl font-medium mb-2'> Testing </h5>
              <p className='text-gray-700 text-base mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis nam unde, maxime temporibus similique ratione nulla dolorum beatae odio ab!</p>
              <button type='button' className='inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'>Button</button>
            </div>
          </div>
          <div className='rounded-lg shadow-lg bg-white max-w-sm'>
            <Link href={"/"}>
              <Image src={"/images/MM-logo.png"} alt={"logo marnik"} width={200} height={200}></Image>
            </Link>
            <div className='py-6'>
              <h5 className='text-gray-900 text-xl font-medium mb-2'> Testing </h5>
              <p className='text-gray-700 text-base mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis nam unde, maxime temporibus similique ratione nulla dolorum beatae odio ab!</p>
              <button type='button' className='inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'>Button</button>
            </div>
          </div>
          <div className='rounded-lg shadow-lg bg-white max-w-sm'>
            <Link href={"/"}>
              <Image src={"/images/MM-logo.png"} alt={"logo marnik"} width={200} height={200}></Image>
            </Link>
            <div className='py-6'>
              <h5 className='text-gray-900 text-xl font-medium mb-2'> Testing </h5>
              <p className='text-gray-700 text-base mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis nam unde, maxime temporibus similique ratione nulla dolorum beatae odio ab!</p>
              <button type='button' className='inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'>Button</button>
            </div>
          </div>
        </div>
        <Footer/>
      </main>
    </div>
  )
}
export default IndexPage