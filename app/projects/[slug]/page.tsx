'use client'

import React, { useEffect } from 'react'
import Hero from '../../components/projects/hero'
import Navbar from '../../components/nav/navbar'
import { Project, projects } from '../../data/projects'
import Content from '../../components/projects/content'
import Footer from '../../components/footer'

const ProjectPage = (props: any) => {

    const project: Project = projects.filter(({slug}) => {
        return slug === props.params.slug;
    })[0];

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'instant' });
    }, []);

    return (
        <>
            <Navbar />

            <main className="flex min-h-screen flex-col items-center justify-between">

                <div className='container max-w-screen-lg mx-auto'>
                    <Hero 
                        project={project}
                    />
                </div>

                <article className='bg-zinc-50 text-slate-900 w-full py-16 pb-32'>
                    <Content 
                        project={project}
                    />
                </article>
            
            </main>
            <Footer />
        </>
    )
}

export default ProjectPage

