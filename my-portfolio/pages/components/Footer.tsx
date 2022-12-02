import { Icon } from '@iconify/react';
import Image from "next/image";
import Link from "next/link";

function Footer(){
    return (
        <div className="absolute w-full overflow-hidden z-10">
            <div className="relative inset-y-0 bottom-0 z-10 ">
                <footer className="bg-skyBlue m-auto h-auto z-10">
                    <div className="flex flex-wrap justify-around items-center space-x-4 md:space-x-0 md:px-[50px] md:py-[10px] px-5 z-40">
                        <Link href={"mailto:r0881840@student.thomasmore.be"}><Icon className='text-customWhite m-auto hover:text-waterBlue' icon="material-symbols:mail-rounded" width={80} height={80}/></Link>
                        <Link href={"https://www.linkedin.com/in/marnik-maes-b0aa79250/"}><Icon className='text-customWhite m-auto hover:text-waterBlue' icon="mdi:linkedin" width={80} height={80}/></Link>
                        <Link href={"https://twitter.com/MaesMarnik"}><Icon className='text-customWhite m-auto hover:text-waterBlue' icon="mdi:twitter" width={80} height={80}/></Link>
                        <Link href={"https://github.com/marnikmaes"}><Icon className='text-customWhite m-auto hover:text-waterBlue' icon="mdi:github" width={80} height={80}/></Link>
                        <Link href={"https://www.youtube.com/channel/UC240zO6HBa1WuBYd2z-8Zcw"}><Icon className='text-customWhite m-auto hover:text-waterBlue' icon="mdi:youtube" width={80} height={80}/></Link>
                    </div>
                    <div className='text-center text-customWhite pb-5'><p className='font-Roboto text-lg'>@2022&#45;2023 Marnik Maes</p></div>
                </footer>
            </div>
        </div>
    );
};

export default Footer;