import React from 'react'

interface ContactIconLinkProps {
    href: string;
    label: string;
    icon: React.ReactNode;
}

const ContactIconLink = (props: ContactIconLinkProps) => {
    const { href, label, icon } = props
    return (
        <a 
            className="block hover:text-slate-200 p-10 bg-black/20 rounded-xl mx-3"
            href={`${href}`}
            target="_blank" 
            rel="noreferrer noopener"
            aria-label={`${label} (opens in a new tab)`}
        >
            {icon}
        </a>
    )
}

export default ContactIconLink

