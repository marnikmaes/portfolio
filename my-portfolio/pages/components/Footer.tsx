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
                        <div className='flex justify-between items-center px-[100px] pt-5'>
                            <div>
                                <Image className='border rounded-2xl bg-customWhite' src={'/images/MM-logo.png'} alt={'logo marnik'} width={100} height={100}></Image>
                            </div>
                            <div className='flex space-x-[50px] flex-wrap justify-around'>
                                <Link href={"mailto:r0881840@student.thomasmore.be"}><Icon className='text-customWhite m-auto hover:text-waterBlue' icon="material-symbols:mail-rounded" width={50} height={50}/></Link>
                                <Link href={"https://www.linkedin.com/in/marnik-maes-b0aa79250/"}><Icon className='text-customWhite m-auto hover:text-waterBlue' icon="mdi:linkedin" width={50} height={50}/></Link>
                                <Link href={"https://twitter.com/MaesMarnik"}><Icon className='text-customWhite m-auto hover:text-waterBlue' icon="mdi:twitter" width={50} height={50}/></Link>
                                <Link href={"https://github.com/marnikmaes"}><Icon className='text-customWhite m-auto hover:text-waterBlue' icon="mdi:github" width={50} height={50}/></Link>
                                <Link href={"https://www.youtube.com/channel/UC240zO6HBa1WuBYd2z-8Zcw"}><Icon className='text-customWhite m-auto hover:text-waterBlue' icon="mdi:youtube" width={50} height={50}/></Link>
                            </div>
                        </div>
                    </div>

                    <div className='text-center text-customWhite pb-2'><p className='font-Roboto text-lg'>@2022&#45;2023 Marnik Maes</p></div>
                </footer>
            </div>
        </div>
    );
};

export default Footer;