import { Icon } from '@iconify/react';
import Image from "next/image";
import Link from "next/link";

function Footer(){
    return (
        <div className="absolute w-full overflow-hidden z-10">
            <div className="relative inset-y-0 bottom-0 z-10 ">
                <footer className="bg-emerald-200 m-auto h-auto z-10">
                    <div className="flex justify-between p-5 z-40">
                        <div className="flex-none w-52">
                            <div className="flex flex-col justify-between space-y-2">
                                <h1 className="text-5xl font-Roboto">Contact</h1>
                                <p>Marnik Maes</p>
                            </div>
                        </div>
                        <div>
                            <Image src={"/images/MM-logo.png"} alt={"Logo Marnik"} width={200} height={200}></Image> 
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
                </footer>
            </div>

        </div>
    );
};

export default Footer;