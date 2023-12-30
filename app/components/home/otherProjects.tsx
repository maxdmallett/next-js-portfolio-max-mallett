import OtherProjectCard from "./otherProjectCard"
import SectionHeading from "../sectionHeading"
import { projects } from "../../data/projects"

const OtherProjects = () => {
    return (
        <section className='py-12 sm:py-24'>
            
            <SectionHeading title='More Projects' />

            <ul className='grid md:grid-cols-2 gap-y-4 md:gap-8'>
                {
                    projects.slice(4, 8).map((project, index) => (
                        <OtherProjectCard
                            {...project}
                            key={index}
                        />
                    ))
                }
            </ul>
        </section>
    )
}

export default OtherProjects