import SectionHeading from "../sectionHeading"

const Contact = () => {
    return (
        <section className='py-24'>
            
            <SectionHeading title='Contact' />

            <div className="text-center max-w-xl mx-auto">
                
                <p className="mb-8">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
                </p>

                <a
                    href="#"
                    className="inline-block rounded-md bg-transparent border border-teal-300 px-5 py-3 text-md font-normal text-teal-300 mx-auto"
                >
                    Get in touch
                </a>
            </div>

          
        </section>
    )
}

export default Contact