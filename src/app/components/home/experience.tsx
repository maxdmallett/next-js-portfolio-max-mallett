import Job from "../Job"

const jobs = [0, 1, 2, 3];

const Experience = () => {

    return (
        <section className='mb-20'>

            {
                jobs.map((job, index) => (
                    <Job key={index} index={index} />
                ))
            }

        </section>
    )
}

export default Experience