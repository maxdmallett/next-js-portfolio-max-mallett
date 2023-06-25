import ProjectCard from "../ProjectCard"

const Projects = () => {
    return (
        <section>
            <div className='grid grid-cols-2 gap-8'>
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </div>
        </section>
    )
}

export default Projects