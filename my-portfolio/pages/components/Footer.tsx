import { Icon } from '@iconify/react';
import Image from "next/image";
import Link from "next/link";

function Footer(){
    return (
        <div className="absolute w-full overflow-hidden z-10">
            <div className="relative inset-y-0 bottom-0 z-10 ">
                <footer className="bg-skyBlue m-auto h-auto z-10">
                    <div className="flex justify-between items-center md:px-[50px] md:py-[10px] px-5 z-40">
                        <div className='border rounded-3xl bg-customWhite'>
                            <Image src={"/images/MM-logo.png"} alt={"Logo Marnik"} width={150} height={150}></Image> 
                        </div>
                        <div className="flex-none w-[50px] pt-5">
                            <div className='flex flex-col justify-between space-y-2 items-center'>
                                <Link href={"/"}><Icon className='text-customWhite hover:text-waterBlue ' icon="material-symbols:mail-rounded" width={40} height={40}/></Link>
                                <Link href={"/"}><Icon className='text-customWhite hover:text-waterBlue ' icon="mdi:github" width={40} height={40}/></Link>
                                <Link href={"/"}><Icon className='text-customWhite hover:text-waterBlue' icon="mdi:twitter" width={40} height={40}/></Link>
                                <Link href={"/"}><Icon className='text-customWhite hover:text-waterBlue' icon="mdi:linkedin" width={40} height={40}/></Link>
                            </div>
                        </div>
                    </div>
                    <div className='text-center text-customWhite pb-5'><p className='font-Roboto text-lg'>@2022&#45;2023 Marnik Maes</p></div>
                </footer>
            </div>

        </div>
    );
};

export default Footer;