import React from 'react'
import Image from 'next/image'
import InlineLink from '../../inlineLink'

const DeeDeeCareArticle = () => {
    return (
        <>

            <figure className="block mb-12">
                <Image
                    src="/images/deedeecare/deedeecare-home-desktop-1.png"
                    alt="Dee Dee Care website home page"
                    width={800}
                    height={550}
                    className='rounded-md border border-zinc-200 shadow-sm'
                />
                <figcaption className="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">
                    Home page
                </figcaption>
            </figure>

            <p>
                I designed and built the original Dee Dee Care website back in 2018. The site would serve as a digital showcase for the services offered by the business, as well as display information about the company such as history, core values, testimonials and contact information. The site was created without using any frameworks, using HTML, CSS and JS.
            </p>

            <p>
                In 2023 I decided to migrate the site to <InlineLink href="https://nextjs.org/">Next.js</InlineLink> to take advantage of the React ecosystem and Vercel’s deployment infrastructure. Creating reusable components for common UI elements, such as the navigation bar and footer has allowed for an efficient maintainable codebase. Code changes could now be committed to the Github repository and automatically published to live deployment.
            </p>

            <figure className="block mb-12">
                <Image
                    src="/images/deedeecare/deedeecare-home-mobile.png"
                    alt="Dee Dee Care website home page (mobile)"
                    width={250}
                    height={542}
                    className='rounded-md border border-zinc-200 shadow-sm mx-auto'
                />
                <figcaption className="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">
                    Home page (mobile)
                </figcaption>
            </figure>

            <p>
                Next.js uses a file-based routing system that simplifies the organisation of pages. This approach makes it easier to structure your project. Additionally, Next.js automatically handles code splitting, ensuring that only the necessary JavaScript is loaded for each page, optimising load times and resource utilisation.
            </p>

            <p>
                During this process, I also updated the testimonial quotes to load via <InlineLink href="https://www.contentful.com/">Contentful</InlineLink> (a headless CMS). This allows the client to add, edit and delete testimonial quotes on the Contentful dashboard without the need for any development work.
            </p>

            <figure className="block mb-12">
                <Image
                    src="/images/deedeecare/deedeecare-testimonials-desktop-1.png"
                    alt="Dee Dee Care website testimonials"
                    width={800}
                    height={550}
                    className='rounded-md border border-zinc-200 shadow-sm'
                />
                <figcaption className="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">
                    Testimonials carousel
                </figcaption>
            </figure>

            <h6>Technologies Used:</h6>

            <ul className='list-disc list-inside mb-10'>
                <li>
                    Next.js
                </li>
                <li>
                    React
                </li>
                <li>
                    Typescript
                </li>
                <li>
                    HTML
                </li>
                <li>
                    SCSS
                </li>
            </ul>
            
            <p>
                Explore the project further on the <InlineLink href="https://github.com/maxdmallett/deedeecare-headless-cms">GitHub repository</InlineLink> or visit the live <InlineLink href="https://www.deedeecare.co.uk/">Dee Dee Care website</InlineLink>.
            </p>
            
        </>
    )
}

export default DeeDeeCareArticle