'use client'

import Link from "next/link"
import { useEffect, useState } from "react";
import { scrollToElement } from "../../helpers/scrollTo";
import MobileNavMenu from "./mobileNavMenu";
import { navItems } from "./navData";

export const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>) => {

    const sectionId: string = event.currentTarget.getAttribute('data-sectionid') || '';
    const scrollTarget = document.getElementById(sectionId);

    if (scrollTarget) {
        event.preventDefault();
        scrollToElement(scrollTarget);
    }
}

const Navbar = () => {

    const [showBg, setShowBg] = useState<boolean>(false);
    const [mobileMenuVisible, setMobileMenuVisible] = useState<boolean>(false);

    const handleScroll = () => setShowBg(window.scrollY > 100);

    const hamburgerButtonClicked = () => toggleMobileMenu(true);

    const toggleMobileMenu = (visible: boolean) => {
        visible ? document.body.classList.add('position-fixed') : document.body.classList.remove('position-fixed');
        setMobileMenuVisible(visible)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }   
    });

    return (
        
        <nav 
            className={`fixed flex flex-wrap items-center justify-end p-4 lg:py-8 lg:px-10 w-full mx-auto z-10 transition-colors duration-300 ease-in-out
            ${showBg ? 'lg:bg-sky-950/50 lg:backdrop-blur lg:p-4 lg:py-5 bg-gradient-to-b from-black/20' : ''}
            `}
        >

            <div className="hidden text-center lg:flex lg:items-center">
                <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
                    {navItems.map((item, index) => (
                        <li className="mr-3" key={index}>
                            <Link 
                                href={`${item.href}`}
                                data-sectionid={item.sectionId}
                                onClick={handleLinkClick}
                                className="inline-block px-4 py-2 text-md font-normal text-slate-400  hover:text-white focus:text-white uppercase"
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="hidden mr-3 space-x-4 lg:flex">
                <Link href="/" className="px-6 py-1.5 text-teal-300 bg-transparent border border-teal-300 rounded-md md:ml-5 hover:bg-teal-500 hover:border-transparent hover:text-white transition duration-200 ease-in-out">
                    CV
                </Link>
            </div>

            <button 
                className={`lg:hidden navbar-burger flex items-center text-white p-3 rounded-full transition-colors duration-300 ease-in-out
                    ${showBg ? 'bg-teal-500 shadow-md' : ''}
                `}
                onClick={hamburgerButtonClicked}
            >
                <svg className="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <title>Mobile menu</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                </svg>
            </button>

            <MobileNavMenu
                visible={mobileMenuVisible}
                closeMenu={() => toggleMobileMenu(false)}
            />

        </nav>
       
    )
}

export default Navbar