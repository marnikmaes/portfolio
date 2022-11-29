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
        <nav className="bg-customBlue">
            <div className="max-w-screen mx-auto px-8 h-[40px]">
                <div className="flex justify-between py-2">
                    <div className="flex items-center space-x-1">
                        <Link href={"/"} className='border rounded-3xl text-2xl font-Roboto font-semibold px-5 bg-customWhite hover:underline hover:underline-offset-8 hover:decoration-customPurple'>
                            <Image className='inline' src={"/images/MM-logo.png"} alt={"Logo Marnik"} width={100} height={100}></Image> 
                            <span>Portfolio Marnik Maes</span> 
                        </Link>
                    </div>
                    <div className="hidden lg:flex items-center space-x-1 text-xl border rounded-3xl bg-customWhite">
                        <NavItem name="HOME" href="/" />
                        <NavItem name="ABOUT ME" href="/" />
                        <NavItem name="PROJECTS" href="/" />
                        <NavItem name="CONTACT" href="/" />
                    </div>
                    <div className="lg:hidden flex items-center px-3 pr-5">
                        <button className="mobile-menu-button" onClick={toggleMobile}>
                            <Icon className="w-16 h-16 text-customWhite" icon="charm:menu-hamburger" />
                        </button>
                    </div>
                </div>
            </div>
            <div className="py-10">
                <div className={`mobile-menu ${mobileNav ? "" : "hidden"}`}>
                    <NavItem name="HOME" href="/" mobile={true} />
                    <NavItem name="ABOUT ME" href="/" mobile={true} />
                    <NavItem name="PROJECTS" href="/" mobile={true} />
                    <NavItem name="CONTACT" href="/" mobile={true} />
                </div>
            </div>

        </nav>
    );  
};

export default Nav;