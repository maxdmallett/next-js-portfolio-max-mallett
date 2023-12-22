import React from 'react'
import Link from "next/link"
import { navItems } from './navData';
import { scrollToElement } from '../../helpers/scrollTo';
import { handleRouteLinkClick } from '../../helpers/handleRouteLinkClick';

interface MobileNavMenuProps {
    visible: boolean;
    closeMenu: () => void;
}

const MobileNavMenu = (props: MobileNavMenuProps) => {

    const { visible, closeMenu } = props;

    const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
        handleRouteLinkClick(event);
        closeMenu();
    }

    return (
        <div className={`
            mobile-nav-menu fixed top-0 left-0 w-full h-screen bg-cyan-950 z-50
            ${visible ? 'open' : ''}
        `}>
            <button onClick={closeMenu} type="button" className="top-4 right-4 absolute p-2 inline-flex items-center justify-center text-white focus:outline-none focus:bg-transparent">
                <span className="sr-only">Close menu</span>
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
            <ul className="items-start flex flex-col list-none mt-16 ms-5">
                {navItems.map((item, index) => (
                    <li key={index}>
                        <Link 
                            href={`${item.href}`}
                            data-sectionid={item.sectionId}
                            onClick={handleLinkClick}
                            className="block px-4 py-2 mb-3 text-lg font-normal text-slate-400 uppercase"
                        >
                            {item.label}
                        </Link>
                    </li>
                ))}
                <li>
                    <Link href="/" className="block px-4 py-2 mb-3 text-lg font-normal text-teal-300 uppercase">
                        CV
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default MobileNavMenu