import OtherProjectCard from "./otherProjectCard"
import SectionHeading from "../sectionHeading"
import { projects } from "../../data/projects"

const OtherProjects = () => {
    return (
        <section className='py-24'>
            
            <SectionHeading title='Other Projects' />

            <ul className='grid grid-cols-2 gap-8'>
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