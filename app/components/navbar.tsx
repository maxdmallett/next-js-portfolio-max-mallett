'use client'

import Link from "next/link"
import { useEffect, useState } from "react";
interface NavItem {
    label: string;
    href: string;
    sectionId: string;
}

const navigation: NavItem[] = [
    {
        label: 'Home',
        href: '/',
        sectionId: 'hero',
    },
    {
        label: 'Experience',
        href: '/#experience',
        sectionId: 'experience',
    },
    {
        label: 'Projects',
        href: '/#projects',
        sectionId: 'projects',
    },
    {
        label: 'Contact',
        href: '/#contact',
        sectionId: 'contact',
    },
];

const Navbar = () => {

    const [showBg, setShowBg] = useState<boolean>(false);

    const handleScroll = () => {
        setShowBg(window.scrollY > 100);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }   
    });

    const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>) => {

        const sectionId: string = event.currentTarget.getAttribute('data-sectionid') || '';
        const scrollTarget = document.getElementById(sectionId);

        if (scrollTarget) {
            event.preventDefault();
            scrollTarget.scrollIntoView({behavior: 'smooth'});
        }
    }

    return (
        
        <nav 
            className={`fixed flex flex-wrap items-center justify-end py-8 w-full px-10 mx-auto z-10 transition-colors
            ${showBg ? 'bg-sky-950/50 backdrop-blur py-5' : ''}
            `}
        >

            <div className="hidden text-center lg:flex lg:items-center">
                <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
                    {navigation.map((item, index) => (
                        <li className="mr-3 nav__item" key={index}>
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

            <div className="hidden mr-3 space-x-4 lg:flex nav__item">
                <Link href="/" className="px-6 py-1.5 text-teal-300 bg-transparent border border-teal-300 rounded-md md:ml-5 hover:bg-teal-500 hover:border-transparent hover:text-white transition duration-200 ease-in-out">
                    CV
                </Link>
            </div>
        </nav>
       
    )
}

export default Navbar