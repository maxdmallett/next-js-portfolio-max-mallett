import React from 'react'
import Image from 'next/image'
import InlineLink from '../../inlineLink'

const HyperfoxBandArticle = () => {
    return (
        <>

            <figure className="block mb-12">
                <Image
                    src="/images/hyperfox/hyperfox-homepage-desktop.png"
                    alt="HyperFox website homepage"
                    width={800}
                    height={550}
                    className='rounded-md border border-zinc-200 shadow-sm'
                />
                <figcaption className="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">
                    Homepage
                </figcaption>
            </figure>

            <p>
                This project involved creating a website for Hyperfox, a band I used to play bass in. The primary goal of this project was to establish an engaging online platform that effectively showcased the band&apos;s music, videos, photos, and latest news.
            </p>

            <p>
                I started by designing a basic homepage in Photoshop and then built the site from there. Instead of using a framework like Bootstrap, I opted for a simple design and wrote custom CSS. To add some functionality, I used a bit of JavaScript for dynamic elements, audio playback, and a photo gallery.
            </p>

            <h6>Technologies Used:</h6>

            <ul className='list-disc list-inside mb-10'>
                <li>
                    HTML
                </li>
                <li>
                    CSS
                </li>
                <li>
                    JavaScript
                </li>
                <li>
                    jQuery
                </li>
                <li>
                    Photoshop
                </li>
            </ul>

            <figure className="block mb-12">
                <Image
                    src="/images/hyperfox/hyperfox-gallery-desktop.png"
                    alt="HyperFox website gallery"
                    width={800}
                    height={550}
                    className='rounded-md border border-zinc-200 shadow-sm'
                />
                <figcaption className="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">
                    Gallery
                </figcaption>
            </figure>

            <figure className="block mb-12">
                <Image
                    src="/images/hyperfox/hyperfox-homepage-mobile.png"
                    alt="HyperFox website homepage (mobile)"
                    width={250}
                    height={542}
                    className='rounded-md border border-zinc-200 shadow-sm mx-auto'
                />
                <figcaption className="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">
                    Homepage (mobile)
                </figcaption>
            </figure>

            <p>
                The site was hosted on cPanel via GoDaddy, and updates were pushed using FTP. The website served its purpose until 2022, when the band embarked on new ventures, prompting the decision to take the site offline.
            </p>

            <p>
                Explore the project further on the <InlineLink href="https://github.com/maxdmallett/hyperfoxband.com">GitHub repository</InlineLink>.
            </p>

            <p>
                During my time in the band, I also designed the album artwork and promo material, as well as produced and mixed a few releases.
            </p>

            <figure className="block">
                <Image
                    src="/images/hyperfox/hyperfox-social-media-banner.png"
                    alt="HyperFox social media banner"
                    width={800}
                    height={351}
                    className='rounded-md border border-zinc-200 shadow-sm'
                />
                <figcaption className="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">
                    Social media banner
                </figcaption>
            </figure>
           
        </>
    )
}

export default HyperfoxBandArticle