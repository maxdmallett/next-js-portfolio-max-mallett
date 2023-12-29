import React from 'react'
import Image from 'next/image'
import InlineLink from '../../inlineLink'

const VinniedropArticle = () => {
    return (
        <>

            <figure className="block mb-12">
                <Image
                    src="/projects/vinniedrop/vinniedrop-sg1.png"
                    alt="Vinnie Drop game screen grab"
                    width={798}
                    height={478}
                    className='rounded-md border border-zinc-200 shadow-sm'
                />
                <figcaption className="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">
                    The first level
                </figcaption>
            </figure>

            <p>
                In 2017, I embarked on a personal project - developing the Vinnie Drop mobile game. My inspiration stemmed from the <InlineLink href="https://en.wikipedia.org/wiki/List_of_Net_Yaroze_games">Net Yaroze</InlineLink> game <InlineLink href="https://www.youtube.com/watch?v=tnNNviak-Sk&ab_channel=ACRetro">&apos;Down&apos;</InlineLink>,  a discovery from my childhood days playing a PlayStation 1 demo disk.
            </p>

            <p>
                The gameplay involves guiding a character&apos;s descent through a vertical platform level. The controls are intuitive; a simple left or right movement using the d-pad. Recognising the seamless adaptability of these controls to mobile devices, I used touch events on each side of the screen for character manipulation.
            </p>

            <figure className="block mb-12">
                <Image
                    src="/projects/vinniedrop/vinniedrop-sg2.png"
                    alt="Vinnie Drop game screen grab"
                    width={798}
                    height={478}
                    className='rounded-md border border-zinc-200 shadow-sm'
                />
                <figcaption className="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">
                    The challenge level
                </figcaption>
            </figure>

            <p>
                Drawing upon my proficiency in crafting vector artwork with Flash, I meticulously created all graphical assets from scratch. To maintain precise control over every aspect of the game mechanics, I developed a custom game engine.
            </p>

            <p>
                Coded <InlineLink href="https://en.wikipedia.org/wiki/ActionScript">ActionScript 3</InlineLink>, I bundled the game using the Adobe AIR SDK and released it on Google Play in the summer of 2017.
            </p>

            <figure className="block mb-12">
                <Image
                    src="/projects/vinniedrop/vinniedrop-sg3.png"
                    alt="Vinnie Drop level select"
                    width={798}
                    height={478}
                    className='rounded-md border border-zinc-200 shadow-sm'
                />
                <figcaption className="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">
                    Chapter select screen
                </figcaption>
            </figure>

            <p>
                To bolster the game&apos;s online presence, I established <InlineLink href="https://github.com/maxdmallett/vinniedrop.com">vinniedrop.com</InlineLink> - a single-page website using HTML, CSS, and JS. Inspired by the <InlineLink href="https://www.firewatchgame.com/">Firewatch</InlineLink> website, it featured a background parallax effect on scroll. Additionally, I integrated simple <InlineLink href="https://github.com/maxdmallett/vinniedrop.com/blob/main/js/snowfall.js">snow particle effects</InlineLink> in JS to enhance the overall visual experience.
            </p>

            <figure className="block mb-12">
                <Image
                    src="/projects/vinniedrop/vinniedrop-website-sg.png"
                    alt="Vinnie Drop website home page"
                    width={800}
                    height={420}
                    className='rounded-md border border-zinc-200 shadow-sm'
                />
                <figcaption className="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">
                    Website home page
                </figcaption>
            </figure>

            <h6>Technologies Used:</h6>
            <ul className='list-disc list-inside mb-10'>
                <li>
                    Adobe Animate
                </li>
                <li>
                    Actionscript 3
                </li>
                <li>
                    Adobe AIR
                </li>
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
                    Photoshop
                </li>
            </ul>
           
        </>
    )
}

export default VinniedropArticle