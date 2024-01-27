import { Metadata } from 'next/types';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Max Mallett | Frontend Developer',
    description:
        'I specialise in building user interfaces for web applications.',
    applicationName: 'Max Mallett Portfolio',
    authors: { name: 'Max Mallett' },
    generator: 'Next.js',
    themeColor: '#171717',
    colorScheme: 'dark',
    viewport: 'width=device-width, initial-scale=1.0',
    alternates: { canonical: 'https://maxmallett.com' },
    icons: '/images/favicon.png',
    openGraph: {
        type: 'website',
        url: 'https://maxmallett.com',
        title: 'Max Mallett | Frontend Developer',
        description:
            'I specialise in building user interfaces for web applications.',
        siteName: 'Max Mallett Portfolio',
        images: [
            {
                url: 'https://maxmallett.com/images/og.png',
            },
        ],
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body
                className={
                    inter.className +
                    ' text-slate-400 antialiased selection:bg-primary-300 selection:text-primary-900"'
                }
            >
                {children}
                <Analytics />
            </body>
        </html>
    );
}
