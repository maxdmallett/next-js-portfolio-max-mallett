'use client'

import Image from 'next/image'
import React from 'react'
import Hero from '../../components/projects/hero'
import Navbar from '../../components/navbar'
import { Project, projects } from '../../data/projects'

const ProjectPage = (props: any) => {

    const project: Project = projects.filter(({slug}) => {
        return slug === props.params.slug;
    })[0];

    console.log(project);

    return (
        <>

            <Navbar />

            <main className="flex min-h-screen flex-col items-center justify-between">

                <div className='container max-w-screen-lg mx-auto'>
                    <Hero 
                        project={project}
                    />
                </div>

                <section className='bg-zinc-50 text-slate-900 w-full py-16'>

                    <div className='container max-w-screen-sm mx-auto leading-relaxed'>

                        <a href="/" className='block mb-12'>
                            <Image
                                src="/Dashboard_1.png"
                                alt="placeholder"
                                width={800}
                                height={550}
                                className='rounded-md border border-zinc-200 shadow-sm'
                            />
                        </a>

                        <p className='mb-10'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra quis elit at facilisis. Vivamus imperdiet elementum dui, quis tristique mauris fermentum a. Suspendisse viverra neque et mi pellentesque varius. Proin eu rutrum augue. Aenean nec dui metus. Nam non mi aliquam mi fermentum venenatis ac non ligula. In porttitor nisi id urna vehicula, in pellentesque dui tempor.
                        </p>

                        <p className='mb-10'>
                            Pellentesque lobortis nisi nec libero tempor porttitor. Duis ut rutrum ex, ut iaculis velit. Duis venenatis lacus a gravida tempus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut varius felis nec blandit gravida. Donec nisi ex, aliquet ac ex vitae, convallis rutrum purus. Pellentesque quis efficitur mi, vitae volutpat lorem. Curabitur porttitor turpis et urna imperdiet egestas. Vestibulum enim lectus, venenatis et luctus vel, efficitur eu arcu. Pellentesque ornare ut mauris nec dictum. Quisque commodo aliquam ligula in convallis. Interdum et malesuada fames ac ante ipsum primis in faucibus.
                        </p>

                        <p className='mb-10'>
                            Sed mollis, diam eget porttitor bibendum, augue eros accumsan erat, a malesuada dolor turpis vitae mauris. Proin mollis, diam a pellentesque auctor, est ipsum luctus libero, a tristique sapien massa eget dui. Proin accumsan commodo risus, id tempor arcu cursus at. Etiam vel erat in leo imperdiet venenatis. Nunc fringilla lorem in ligula laoreet semper. Donec ut nunc urna. Proin accumsan at magna et faucibus. Nulla facilisi. Nullam vulputate ligula id vulputate ornare. Donec vel est at metus cursus facilisis eget et est. Curabitur at quam ut diam aliquet facilisis.
                        </p>

                        <p className=''>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra quis elit at facilisis. Vivamus imperdiet elementum dui, quis tristique mauris fermentum a. Suspendisse viverra neque et mi pellentesque varius. Proin eu rutrum augue. Aenean nec dui metus. Nam non mi aliquam mi fermentum venenatis ac non ligula. In porttitor nisi id urna vehicula, in pellentesque dui tempor.
                        </p>

                    </div>

                </section>
            
            </main>
            <footer>
                
            </footer>
        </>
    )
}

export default ProjectPage

