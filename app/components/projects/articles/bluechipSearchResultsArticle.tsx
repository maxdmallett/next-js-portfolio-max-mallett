import React from 'react'
import Image from 'next/image'
import InlineLink from '../../inlineLink'

const BlueChipSearchResultsArticle = () => {
    return (
        <>

            <figure className="block mb-12">
                <Image
                    src="/projects/bluechip/bluechip-sr-desktop.png"
                    alt="Blue Chip Holidays search results page"
                    width={800}
                    height={550}
                    className='rounded-md border border-zinc-200 shadow-sm'
                />
                <figcaption className="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">
                    Search results page
                </figcaption>
            </figure>

            <p>
                During my time on the ecommerce team at <InlineLink href="https://www.awaze.com/">Awaze</InlineLink>, I primarily focused on improving the user experience for <InlineLink href="https://www.hoseasons.co.uk/">hoseasons.co.uk</InlineLink> and <InlineLink href="https://www.cottages.com/">cottages.com</InlineLink>. I played a key role in the integration of Blue Chip Holidays, specifically in building the frontend of the search results page for their new website.
            </p>

            <p>
                My tasks involved translating provided UI designs for desktop, tablet, and mobile into a functional and cohesive webpage. Given the absence of a JavaScript framework, I utilised vanilla JS for AJAX updates, emphasising the need for robust code to prevent potential errors on a high-revenue site.
            </p>

            <div className='columns-2 gap-1 px-10'>
                <figure className="block mb-12">
                    <Image
                        src="/projects/bluechip/bluechip-sr-mobile-1.png"
                        alt="Blue Chip Holidays search results page (mobile)"
                        width={250}
                        height={542}
                        className='rounded-md border border-zinc-200 shadow-sm mx-auto'
                    />
                    <figcaption className="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">
                        Search results page (mobile)
                    </figcaption>
                </figure>

                <figure className="block mb-12">
                    <Image
                        src="/projects/bluechip/bluechip-sr-filters-mobile-1.png"
                        alt="Blue Chip Holidays search results filters (mobile)"
                        width={250}
                        height={542}
                        className='rounded-md border border-zinc-200 shadow-sm mx-auto'
                    />
                    <figcaption className="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">
                        Search result filters (mobile)
                    </figcaption>
                </figure>
            </div>

            <p>
                The project required various frontend skills, including creating responsive custom filter and sort controls, implementing lazy loading for images, and managing AJAX updates alongside shortlisting with cookies.
            </p>

            <h6>Technologies Used:</h6>

            <ul className='list-disc list-inside mb-10'>
                <li>
                    JavaScript
                </li>
                <li>
                    HTML
                </li>
                <li>
                    CSS
                </li>
                <li>
                    Spectre CSS
                </li>
            </ul>

            <p>
                Although the page is no longer live due to the integration of Blue Chip Holidays into cottages.com, this experience provided valuable insights into practical aspects of frontend development within the context of a constantly evolving digital landscape.
            </p>
            
        </>
    )
}

export default BlueChipSearchResultsArticle