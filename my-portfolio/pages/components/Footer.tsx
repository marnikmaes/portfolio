import { Icon } from '@iconify/react';
import Image from "next/image";
import Link from "next/link";

function Footer(){
    return (
        <div className="absolute w-full overflow-hidden z-10">
            <div className="relative inset-y-0 bottom-0 z-10 ">
                <footer className="bg-gray-100 border border-black m-auto h-auto z-10">
                    <div className="flex justify-between items-center md:px-[50px] md:py-[10px] py-5 px-0 z-40">
                        <div>
                            <Image src={"/images/MM-logo.png"} alt={"Logo Marnik"} width={200} height={200}></Image> 
                        </div>
                        <div className='hidden xl:block'>
                            <h1 className='text-lg font-Roboto font-semibold'>&#34;Life is not a game of luck. If you wanne win, work hard.&#34; &#45; Sora &#40;No Game No Life&#41;</h1>
                        </div>
                        <div className="flex-none w-52">
                            <div className='flex flex-col justify-between space-y-2 items-center'>
                                <Link href={"/"}><Icon icon="material-symbols:mail-rounded" width={40} height={40}/></Link>
                                <Link href={"/"}><Icon icon="mdi:github" width={40} height={40}/></Link>
                                <Link href={"/"}><Icon icon="mdi:twitter" width={40} height={40}/></Link>
                                <Link href={"/"}><Icon icon="mdi:linkedin" width={40} height={40}/></Link>
                            </div>
                        </div>
                    </div>
                    <div className='text-center'><p className='font-Roboto text-lg'>@2022&#45;2023 Marnik Maes</p></div>
                </footer>
            </div>

        </div>
    );
};

export default Footer;