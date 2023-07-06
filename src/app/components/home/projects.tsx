import ProjectCard from "../ProjectCard"
import SectionHeading from "../SectionHeading"

const Projects = () => {
    return (
        <section className='py-24'>
            
            <SectionHeading title='Projects' />

            <ul className='grid grid-cols-1 gap-12 max-w-4xl mx-auto'>
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </ul>
        </section>
    )
}

export default Projects