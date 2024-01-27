import React from 'react'
import Link from "next/link"
import { navItems } from './navData';
import { scrollToElement } from '../../helpers/scrollTo';
import { handleRouteLinkClick } from '../../helpers/handleRouteLinkClick';
import MobileMenuIconLink from '../mobileMenuIconLink';
import { contactEmailAddress, gitHubLink, linkedInLink } from '../../data/links';
import EmailIcon from '../icons/email';
import LinkedInIcon from '../icons/linkedIn';
import GitHubIcon from '../icons/github';

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
            mobile-nav-menu fixed top-0 left-0 w-full h-screen bg-primary-950 z-50 px-5
            ${visible ? 'open' : ''}
        `}>
            <button onClick={closeMenu} type="button" className="top-4 right-4 absolute p-2 inline-flex items-center justify-center text-white focus:outline-none focus:bg-transparent">
                <span className="sr-only">Close menu</span>
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
            <ul className="items-start flex flex-col list-none mt-16">
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
                    <Link href="/docs/Max Mallett CV.pdf" target='_blank' className="block px-4 py-2 mb-3 text-lg font-normal text-primary-300 uppercase">
                        CV
                    </Link>
                </li>
            </ul>
            <hr className="h-px my-8 border-0 bg-white/5" />

            <div className="flex justify-start mt-12">
                <MobileMenuIconLink
                    href={`mailto:${contactEmailAddress}`}
                    label='Email'
                    icon={<EmailIcon />}
                />
                <MobileMenuIconLink
                    href={gitHubLink} 
                    label='GitHub'
                    icon={<GitHubIcon />}
                />
                <MobileMenuIconLink
                    href={linkedInLink} 
                    label='LinkedIn'
                    icon={<LinkedInIcon />}
                />
            </div>
        </div>
    )
}

export default MobileNavMenu