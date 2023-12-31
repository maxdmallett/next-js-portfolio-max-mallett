import React from 'react'
import Image from 'next/image'
import InlineLink from '../../inlineLink'
import { ambrasoftBrickDonkBrickFillDrawSnippet, ambrasoftGregoryMemorySnippet, ambrasoftWordsearchSnippet } from '../../codeSnippets/ambrasoftCodeSnippets'
import CodeSnippet from '../../codeSnippet'

const AmbrasoftArticle = () => {
    return (
        <>

            <figure className="block mb-12">
                <Image
                    src="/images/ambrasoft/ambrasoft-feature-image.png"
                    alt="Gorillarama intro screen"
                    width={800}
                    height={419}
                    className='rounded-md border border-zinc-200 shadow-sm'
                />
                <figcaption className="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">
                    Gorillarama intro screen
                </figcaption>
            </figure>

            <p>
                Ambrasoft is a suite of educational maths and language games owned by the Dutch company, <InlineLink href="https://www-noordhoff-nl.translate.goog/basisonderwijs/junior-cloud?_x_tr_sl=nl&_x_tr_tl=en&_x_tr_hl=en&_x_tr_pto=sc&_x_tr_hist=true">Noordhoff</InlineLink>. Back in 2015, whilst working at LJ Create, I was part of a project team that converted a large collection of Flash games to HTML Canvas, along with creating new games from scratch.
            </p>

            <p>
                I was responsible for writing the Javascript logic, drawing vector assets and creating sound effects on several of the games. We used the Canvas library <InlineLink href="https://createjs.com/">CreateJS</InlineLink>, a library which allowed us to create rich interactive content that performed well on a range of devices.
            </p>

            <h4 className='mb-5'>
                <span className='text-lg font-bold'>Gorillarama</span> <span className='italic text-sm'>(new game)</span>
            </h4>

            <p>
                A matching pairs game where the player goes up against an AI gorilla. The player has to find more pairs than the gorilla to advance to the next round, with each round getting progressively harder.
            </p>

            <figure className="block mb-12">
                <Image
                    src="/images/ambrasoft/ambrasoft-gorillarama-in-game.png"
                    alt="Gorillarama in-game screen"
                    width={800}
                    height={495}
                    className='rounded-md border border-zinc-200 shadow-sm'
                />
                <figcaption className="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">
                    Gorillarama in-game screen
                </figcaption>
            </figure>

            <p>
                The harder rounds have a larger grid of cards and the gorilla has a better memory of which cards he has already seen, making him more likely to pick correct pairs.
            </p>

            <CodeSnippet
                code={ambrasoftGregoryMemorySnippet}
                caption='Logic for CPU picking a matching pair of cards'
            />

            <h4 className='mb-5'>
                <span className='text-lg font-bold'>Brick Donk</span> <span className='italic text-sm'>(new game)</span>
            </h4>

            <p>
                A breakout clone that uses vector assets from the Ambrasoft library. I created the game engine in JavaScript. It managed ball physics, collisions, dynamic drawing, powerups (extra wide bat, shield, slow ball speed, fireball) and the scoring system.
            </p>

            <figure className="block mb-12">
                <Image
                    src="/images/ambrasoft/ambrasoft-brickdonk-in-game.png"
                    alt="Brick Donk in-game screen"
                    width={800}
                    height={495}
                    className='rounded-md border border-zinc-200 shadow-sm'
                />
                <figcaption className="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">
                    Brick Donk in-game screen
                </figcaption>
            </figure>

            <CodeSnippet
                code={ambrasoftBrickDonkBrickFillDrawSnippet}
                caption='Dynamically fill and draw bricks on the canvas'
            />

            <h4 className='mb-5'>
                <span className='text-lg font-bold'>Word Search</span> <span className='italic text-sm'>(converted game)</span>
            </h4>

            <p>
                A simple word search where the player uses a click and drag mechanism to find 10 words on the grid. Correct guesses trigger positive feedback and incorrect responses trigger negative feedback. The game ends when all of the words have been found.
            </p>

            <figure className="block mb-12">
                <Image
                    src="/images/ambrasoft/ambrasoft-wordsearch-in-game.png"
                    alt="Word Search in-game screen"
                    width={800}
                    height={495}
                    className='rounded-md border border-zinc-200 shadow-sm'
                />
                <figcaption className="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">
                    Word Search in-game screen
                </figcaption>
            </figure>

            <p>
                The words are pushed into a 2d grid array in random directions. The attempted string is calculated using the XY coordinates of the highlight shape start and end points. 
            </p>

            <CodeSnippet
                code={ambrasoftWordsearchSnippet}
                caption='Get the attempted string from XY coordinates'
            />

            <h6>Technologies Used:</h6>

            <ul className='list-disc list-inside mb-10'>
                <li>
                    JavaScript
                </li>
                <li>
                    CreateJS
                </li>
                <li>
                    Adobe Animate
                </li>
                <li>
                    Illustrator
                </li>
                <li>
                    SCSS
                </li>
            </ul>

        </>
    )
}

export default AmbrasoftArticle