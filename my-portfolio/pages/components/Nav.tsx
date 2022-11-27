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
        <nav className="bg-gray-200 pt-11">
            <div className="max-w-screen mx-auto pl-10 sm:px-16 lg:px-28">
                <div className="flex justify-between">
                    <div className="flex items-center space-x-1">
                        <Link href={"/"}> 
                            <Image className='inline' src={"/images/MarnikMaesLogo.png"} alt={"Logo Marnik"} width={100} height={100}></Image> 
                            <span className='hidden md:inline-block text-2xl font-bold font-Roboto'>Portfolio Marnik Maes</span>
                        </Link>
                        
                    </div>
                    <div className="hidden lg:flex items-center space-x-1 text-2xl">
                        <NavItem name="HOME" href="/" />
                        <NavItem name="ABOUT ME" href="/" />
                        <NavItem name="PROJECTS" href="/" />
                        <NavItem name="CONTACT" href="/" />
                    </div>
                    <div className="lg:hidden flex items-center px-3 pr-5">
                        <button className="mobile-menu-button" onClick={toggleMobile}>
                            <Icon className="w-16 h-16" icon="charm:menu-hamburger" />
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