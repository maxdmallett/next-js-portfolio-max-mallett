import React from 'react'
import Image from 'next/image'
import InlineLink from '../../inlineLink'

const IR35ShieldBlogArticle = () => {
    return (
        <>

            <figure className="block mb-12">
                <Image
                    src="/projects/ir35shieldblog/shield-blog-list-desktop.png"
                    alt="IR35 Shield Blog list page"
                    width={800}
                    height={450}
                    className='rounded-md border border-zinc-200 shadow-sm'
                />
                <figcaption className="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">
                    IR35 Shield Blog list page
                </figcaption>
            </figure>

            <p>
                The specification for this project was to design and create a blog area on the IR35 Shield website. The main goals were to enhance user engagement, establish thought leadership, and boost SEO. Regular, relevant content educates users, attracts organic traffic, and fosters a community, ultimately contributing to brand credibility and customer retention.
            </p>

            <h4 className='text-lg font-bold mb-5'>
                Design
            </h4>

            <p>
                In the design phase, I researched several popular blog websites across the web, seeking effective design techniques and popular features. I particularly liked the design of articles on <InlineLink href="https://medium.com/">Medium</InlineLink>; the narrow maximum width of paragraphs and high line heights make the content easy to digest. Each article is presented with a focus on information structure. Details such as author name, publication date, and article image are displayed in a concise and user-friendly format. Social media sharing buttons were added to increase organic traffic.
            </p>

            <figure className="block mb-12">
                <Image
                    src="/projects/ir35shieldblog/shield-blog-xd.png"
                    alt="IR35 Shield Blog XD design"
                    width={800}
                    height={438}
                    className='rounded-md border border-zinc-200 shadow-sm'
                />
                <figcaption className="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">
                    IR35 Shield Blog XD design
                </figcaption>
            </figure>

            <h4 className='text-lg font-bold mb-5'>
                Build
            </h4>

            <p>
                The build was split into two main areas: the customer-facing pages and an article editor for the admin dashboard. The IR35 Shield brochure website runs on .NET Core, CSHTML Razor, SCSS, and Vanilla JS. I started by building the frontend using static data, first creating the markup structure, then applying style in SCSS (including media breakpoints for mobile devices). The work was then handed over to a backend team member for connecting to the database.
            </p>

            <p>
                I then moved on to the admin article editor build. The editor needed to be intuitive so that non-technical members of the team could easily add and edit their content. I added functionality so that our content creators could upload an article written in .doc format (using <InlineLink href="https://github.com/mwilliamson/mammoth.js/">mammoth.js</InlineLink> and <InlineLink href="https://github.com/htacg/tidy-html5/">tidy-html5</InlineLink>). The document would then be converted and populate the article editor with a live preview of the article. From there, content could be fine-tuned using an on-page HTML editor (using <InlineLink href="https://codemirror.net/">CodeMirror</InlineLink>).
            </p>

            <div className='columns-2 gap-1 px-10'>
                <figure className="block mb-12">
                    <Image
                        src="/projects/ir35shieldblog/shield-blog-list-mobile.png"
                        alt="IR35 Shield Blog list page (mobile)"
                        width={250}
                        height={541}
                        className='rounded-md border border-zinc-200 shadow-sm mx-auto'
                    />
                    <figcaption className="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">
                        Blog list page (mobile)
                    </figcaption>
                </figure>

                <figure className="block mb-12">
                    <Image
                        src="/projects/ir35shieldblog/shield-blog-mobile.png"
                        alt="IR35 Shield Blog page (mobile)"
                        width={250}
                        height={541}
                        className='rounded-md border border-zinc-200 shadow-sm mx-auto'
                    />
                    <figcaption className="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">
                        Blog page (mobile)
                    </figcaption>
                </figure>
            </div>

            <h4 className='text-lg font-bold mb-5'>
                Outcome
            </h4>

            <p>
                The IR35 Shield blog still receives regular updates, with new articles published regularly. The article editor has been well received by other members of the team, with plans for it to be added to IR35 Shield’s sister site, <InlineLink href="https://contractorcalculator.co.uk/">Contractor Calculator</InlineLink>, in the near future.
            </p>

            <p>
                Check out the IR35 Shield website to <InlineLink href="https://www.ir35shield.co.uk/Articles/">view the blog</InlineLink>.
            </p>

            <h6>Technologies Used:</h6>

            <ul className='list-disc list-inside mb-10'>
                <li>
                    HTML
                </li>
                <li>
                    SCSS
                </li>
                <li>
                    JavaScript
                </li>
                <li>
                    Bootstrap
                </li>
                <li>
                    Adobe XD
                </li>
            </ul>
        </>
    )
}

export default IR35ShieldBlogArticle