import React from 'react';

interface MobileMenuIconLinkProps {
    href: string;
    label: string;
    icon: React.ReactNode;
}

const MobileMenuIconLink = (props: MobileMenuIconLinkProps) => {
    const { href, label, icon } = props;
    return (
        <a
            className="block hover:text-slate-200 p-4 bg-black/10 rounded-lg mr-3"
            href={`${href}`}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={`${label} (opens in a new tab)`}
        >
            {icon}
        </a>
    );
};

export default MobileMenuIconLink;
