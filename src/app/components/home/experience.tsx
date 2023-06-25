import PillList from "../shared/PillList"

const Experience = () => {
    return (
        <section className='mb-20'>

            <div className=""></div>

            <div className='flex flex-col bg-cyan-900 bg-opacity-30 p-10'>
                <h6 className='text-white mb-3'>
                    Frontend Developer @ IR35 Shield
                </h6>
                <p className='text-md text-white text-opacity-50 mb-4'>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
                </p>
                <PillList pills={['React', 'HTML', 'CSS']}/>
            </div>

        </section>
    )
}

export default Experience