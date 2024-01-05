import SectionHeading from "../sectionHeading"

const Contact = () => {
    return (
        <section id="contact" className='py-12 sm:py-24'>
            <SectionHeading title='Contact' />
            <div className="text-center max-w-2xl mx-auto">
                <p className="mb-8">
                    Get in touch by emailing <a href="mailto:maxdmallett@gmail.com" target="_blank" className='font-medium text-white hover:underline'>maxdmallett@gmail.com</a><br />or message me on <a href="https://www.linkedin.com/in/max-mallett-aa3434107/" target="_blank" className='font-medium text-white hover:underline'>LinkedIn</a>.
                </p>
            </div>
        </section>
    )
}

export default Contact