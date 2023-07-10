import ProjectCard from "./projectCard"
import SectionHeading from "../sectionHeading"
import { projects } from "../../data/projects"

const Projects = () => {
    return (
        <section className='py-24'>
            
            <SectionHeading title='Projects' />

            <ul className='grid grid-cols-1 gap-12 max-w-4xl mx-auto'>
                {
                    projects.slice(0, 4).map((project, index) => (
                        <ProjectCard
                            {...project}
                            key={index}
                        />
                    ))
                }
            </ul>
        </section>
    )
}

export default Projects