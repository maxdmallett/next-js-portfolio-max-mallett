import React from 'react'
import InlineLink from '../../inlineLink'

const PortfolioArticle = () => {
    return (
        <>

            <p>
                Welcome to my portfolio site!
            </p>

            <p>
                If you’d like to dig into the code, check out the <InlineLink href="https://github.com/maxdmallett/next-js-portfolio-max-mallett">Github Repo</InlineLink>.
            </p>

            <h6>Technologies used:</h6>

            <ul className='list-disc list-inside mb-10'>
                <li>
                    NextJS
                </li>
                <li>
                    Typescript
                </li>
                <li>
                    Tailwind
                </li>
                <li>
                    Figma
                </li>
                <li>
                    Vercel
                </li>
                <li>
                    Framer Motion
                </li>
            </ul>

        </>
    )
}

export default PortfolioArticle