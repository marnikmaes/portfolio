import { Icon } from '@iconify/react';
import Image from "next/image";
import Link from "next/link";

function Footer(){
    return (
        <div className="sticky top-[100vh] w-full overflow-hidden z-10">
            <div className="relative inset-y-0 bottom-0 z-10 ">
                <footer className="bg-skyBlue m-auto h-auto z-10">
                    <div className='block xl:hidden'>
                        <div className="flex flex-wrap justify-around items-center py-[20px]">
                            <Link href={"mailto:r0881840@student.thomasmore.be"}><Icon className='text-customWhite m-auto hover:text-waterBlue' icon="material-symbols:mail-rounded" width={50} height={50}/></Link>
                            <Link href={"https://www.linkedin.com/in/marnik-maes-b0aa79250/"}><Icon className='text-customWhite m-auto hover:text-waterBlue' icon="mdi:linkedin" width={50} height={50}/></Link>
                            <Link href={"https://twitter.com/MaesMarnik"}><Icon className='text-customWhite m-auto hover:text-waterBlue' icon="mdi:twitter" width={50} height={50}/></Link>
                            <Link href={"https://github.com/marnikmaes"}><Icon className='text-customWhite m-auto hover:text-waterBlue' icon="mdi:github" width={50} height={50}/></Link>
                            <Link href={"https://www.youtube.com/channel/UC240zO6HBa1WuBYd2z-8Zcw"}><Icon className='text-customWhite m-auto hover:text-waterBlue' icon="mdi:youtube" width={50} height={50}/></Link>
                        </div>
                    </div>

                    <div className='hidden xl:block'>
                        <div className='flex justify-between pr-[100px] pl-[50px] items-center py-[20px]'>
                            <div>
                                <Image className='border rounded-2xl bg-customWhite' src={'/images/MM-logo.png'} alt={'logo marnik'} width={200} height={200}></Image>
                            </div>
                            <div className='pr-[60px]'>
                                <div className="flex bg-[url('/images/endless-constellation.svg')] rounded-2xl">
                                    <Link className='font-Roboto font-semibold text-2xl py-2 px-5 text-customWhite hover:text-waterBlue hover:underline hover:underline-offset-8 hover:decoration-towerBlue' href={'/'}>Home</Link>
                                    <p className='font-Roboto font-semibold text-2xl py-2 text-customWhite '>&#45;</p>
                                    <Link className='font-Roboto font-semibold text-2xl py-2 px-5 text-customWhite hover:text-waterBlue hover:underline hover:underline-offset-8 hover:decoration-towerBlue' href={'/Aboutme'}>About me</Link>
                                    <p className='font-Roboto font-semibold text-2xl py-2 text-customWhite'>&#45;</p>
                                    <Link className='font-Roboto font-semibold text-2xl py-2 px-5 text-customWhite hover:text-waterBlue hover:underline hover:underline-offset-8 hover:decoration-towerBlue' href={'/Myprojects'}>My projects</Link>
                                    <p className='font-Roboto font-semibold text-2xl py-2 text-customWhite'>&#45;</p>
                                    <Link className='font-Roboto font-semibold text-2xl py-2 px-5 text-customWhite hover:text-waterBlue hover:underline hover:underline-offset-8 hover:decoration-towerBlue' href={'/Contactme'}>Contact me</Link>
                                </div>
                            </div>
                            <div className='flex flex-col flex-wrap justify-around items-center'>
                                <Link href={"mailto:r0881840@student.thomasmore.be"}><Icon className='text-customWhite m-auto hover:text-waterBlue' icon="material-symbols:mail-rounded" width={50} height={50}/></Link>
                                <Link href={"https://www.linkedin.com/in/marnik-maes-b0aa79250/"}><Icon className='text-customWhite m-auto hover:text-waterBlue' icon="mdi:linkedin" width={50} height={50}/></Link>
                                <Link href={"https://twitter.com/MaesMarnik"}><Icon className='text-customWhite m-auto hover:text-waterBlue' icon="mdi:twitter" width={50} height={50}/></Link>
                                <Link href={"https://github.com/marnikmaes"}><Icon className='text-customWhite m-auto hover:text-waterBlue' icon="mdi:github" width={50} height={50}/></Link>
                                <Link href={"https://www.youtube.com/channel/UC240zO6HBa1WuBYd2z-8Zcw"}><Icon className='text-customWhite m-auto hover:text-waterBlue' icon="mdi:youtube" width={50} height={50}/></Link>
                            </div>
                        </div>
                    </div>
                    <div className='text-center text-customWhite pb-5'><p className='font-Roboto text-2xl font-semibold'>@2022&#45;2023 Marnik Maes</p></div>
                </footer>
            </div>
        </div>
    );
};

export default Footer;