import { Icon } from '@iconify/react';
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import NavItem from '../../nonPageComponents/NavItem';

function Nav() {

    const [mobileNav, setMobileNav] = useState(false);

    function toggleMobile() {
        setMobileNav(!mobileNav);
      }

    return(
        <nav>
            <div className="max-w-screen mx-auto px-8 h-[40px]">
                <div className="flex justify-between py-8">
                    <div className="flex items-center space-x-1">
                        <Link href={"/"} className='text-2xl font-Roboto font-semibold px-5 border rounded-2xl bg-customWhite'>
                            <Image className='inline' src={"/images/MM-logo.png"} alt={"Logo Marnik"} width={100} height={100}></Image> 
                            <span className='hidden md:inline-block text-customBlack'>Portfolio Marnik Maes</span> 
                        </Link>
                    </div>
                    <div className="hidden px-5 lg:flex items-center space-x-1 text-xl font-Roboto font-semibold border rounded-2xl bg-customWhite">
                        <NavItem name="Home" href="/" />
                        <NavItem name="About me" href="/Aboutme" />
                        <NavItem name="My projects" href="/" />
                        <NavItem name="Contact me" href="/" />
                    </div>
                    <div className="lg:hidden flex items-center px-3 pr-5">
                        <button className="mobile-menu-button" onClick={toggleMobile}>
                            <Icon className="w-16 h-16 text-customWhite" icon="charm:menu-hamburger" />
                        </button>
                    </div>
                </div>
            </div>
            <div className="py-10 pt-[100px]">
                <div className={`mobile-menu ${mobileNav ? "" : "hidden"}`}>
                    <NavItem name="Home" href="/" mobile={true} />
                    <NavItem name="About me" href="/" mobile={true} />
                    <NavItem name="My projects" href="/" mobile={true} />
                    <NavItem name="Contact me" href="/" mobile={true} />
                </div>
            </div>

        </nav>
    );  
};

export default Nav;