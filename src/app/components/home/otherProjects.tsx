import OtherProjectCard from "../OtherProjectCard"
import SectionHeading from "../SectionHeading"

const OtherProjects = () => {
    return (
        <section className='py-24'>
            
            <SectionHeading title='Other Projects' />

            <ul className='grid grid-cols-2 gap-8'>
                <OtherProjectCard />
                <OtherProjectCard />
                <OtherProjectCard />
                <OtherProjectCard />
            </ul>
        </section>
    )
}

export default OtherProjects