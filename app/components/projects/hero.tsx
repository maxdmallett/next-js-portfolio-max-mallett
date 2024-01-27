'use client';

import { Project } from '../../data/projects';

interface IProps {
    project: Project;
}

const Hero = (props: IProps) => {
    const { title, shortDescription, websiteUrl } = props.project;

    return (
        <header className="text-center pt-24 pb-16 sm:pt-32 sm:pb-36 flex flex-col justify-center px-5 sm:px-0">
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-200 mb-5">
                {title}
            </h1>

            <p className="text-md sm:text-lg max-w-2xl mx-auto">
                {shortDescription}
            </p>

            {websiteUrl && (
                <div className="mt-10">
                    <a
                        href={websiteUrl}
                        target="_blank"
                        className="inline-block flex-grow-0 px-5 py-2 text-primary-500 bg-transparent border border-primary-500 rounded-md hover:bg-primary-700 hover:border-transparent hover:text-white transition duration-200 ease-in-out"
                    >
                        View live
                    </a>
                </div>
            )}
        </header>
    );
};

export default Hero;
