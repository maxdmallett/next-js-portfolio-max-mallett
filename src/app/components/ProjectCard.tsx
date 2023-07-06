import Image from 'next/image'

const ProjectCard = () => {
    return (
        <li>

            {/* <Image src="https://cdn.sisense.com/wp-content/uploads/dashboard-4-300-1-1024x581.png" alt="placeholder" /> */}

            <a className='block mb-5'>
                <Image
                    src="/dashboard-example-image.png"
                    alt="placeholder"
                    width={600}
                    height={400}
                />
            </a>

            <h3 className='text-white text-xl mb-3 font-medium'>
                React migration of IR35 Shield Dashboard
            </h3>
            <p className='text-md text-white text-opacity-50 mb-4'>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
            </p>


            {/* <a href="/" className='flex flex-col bg-cyan-900 bg-opacity-30 p-10'>
                <h6 className='text-white mb-3'>
                    Frontend Developer @ IR35 Shield
                </h6>
                <p className='text-md text-white text-opacity-50 mb-4'>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
                </p>
                <div className='flex justify-between align-bottom'>
                    <PillList pills={['React', 'HTML', 'CSS']}/>
                    <span className='uppercase text-sm opacity-50 self-end leading-none'>
                        2019 - Present
                    </span>
                </div>
            </a> */}
        </li>
    )
}

export default ProjectCard