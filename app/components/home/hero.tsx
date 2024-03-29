'use client'

import Link from "next/link"
import { handleRouteLinkClick } from "../../helpers/handleRouteLinkClick"

const Hero = () => {
    return (
        <header id="hero" className='text-center h-screen flex flex-col justify-center'>
           
            <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-slate-200 mb-3 sm:mb-5">
                Max Mallett
            </h1>

            <h2 className='text-4xl sm:text-6xl tracking-tighter sm:tracking-tight font-extrabold text-slate-500 mb-8 sm:mb-6'>
                Frontend Developer
            </h2>

            <p className='text-lg pb-3 max-w-xl mx-auto mb-8 sm:mb-12'>
                I specialise in building user interfaces for web applications. Currently working at <a href='https://www.ir35shield.co.uk/' className='text-primary-500 hover:underline whitespace-nowrap'>IR35 Shield</a>.
            </p>

            <div>
                <Link
                    href="#experience"
                    data-sectionid='experience'
                    onClick={handleRouteLinkClick}
                    className="inline-block flex-grow-0 rounded-md bg-transparent border border-primary-500 px-5 py-3 text-md font-normal text-primary-500 hover:bg-primary-700 hover:border-transparent hover:text-white transition duration-200 ease-in-out"
                >
                    View my experience
                </Link>
            </div>
            
        </header>
    )
}

export default Hero