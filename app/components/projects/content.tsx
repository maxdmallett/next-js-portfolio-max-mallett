import React from 'react';
import { Project } from '../../data/projects';
import Link from 'next/link';

interface IProps {
    project: Project;
}

const Content = (props: IProps) => {
    const project = props.project;

    return (
        <article className="project-article container max-w-screen-sm mx-auto leading-relaxed px-5 sm:px-0">
            {project.articleContent()}

            <Link
                href="/#projects"
                className="inline-block bg-primary-600 hover:bg-primary-500 text-white font-semibold py-2 px-4 mt-10 rounded-md text-md transition duration-200 ease-in-out"
            >
                <div className="flex flex-row align-middle">
                    <svg
                        className="w-5 mr-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                            clipRule="evenodd"
                        ></path>
                    </svg>
                    <span>Back to all projects</span>
                </div>
            </Link>
        </article>
    );
};

export default Content;
