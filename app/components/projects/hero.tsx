'use client'

import { Project } from "../../data/projects"

interface IProps {
    project: Project;
}

const Hero = (props: IProps) => {
    return (
        <header className='text-center pt-40 pb-32 flex flex-col justify-center'>
           
            <h1 className="text-5xl font-bold tracking-tight text-slate-200 mb-5">
                {props.project.title}
            </h1>

            <p className='mb-5 text-lg pb-3 max-w-2xl mx-auto'>
                {props.project.shortDescription}
            </p>

            <div>
                <a
                    href="#"
                    className="inline-block flex-grow-0 rounded-md bg-transparent border border-teal-300 px-5 py-3 text-md font-normal text-teal-300"
                >
                    Website
                </a>
            </div>
            
        </header>
    )
}

export default Hero