'use client'

import { Project } from "../../data/projects"

interface IProps {
    project: Project;
}

const Hero = (props: IProps) => {

    const {title, shortDescription, websiteUrl} = props.project;

    return (
        <header className='text-center pt-40 pb-32 flex flex-col justify-center px-5 sm:px-0'>
           
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-200 mb-5">
                {title}
            </h1>

            <p className='text-md sm:text-lg pb-3 max-w-2xl mx-auto mb-5'>
                {shortDescription}
            </p>

            {
                websiteUrl && (
                    <div>
                        <a
                            href={websiteUrl}
                            target="_blank"
                            className="inline-block flex-grow-0 rounded-md bg-transparent border border-teal-300 px-5 py-3 text-md font-normal text-teal-300"
                        >
                            View live
                        </a>
                    </div>
                )
            }
            
        </header>
    )
}

export default Hero