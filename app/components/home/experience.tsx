import Job from './job';
import SectionHeading from '../sectionHeading';
import { jobs } from '../../data/jobs';

const Experience = () => {
    return (
        <section
            id="experience"
            className="py-12 sm:py-24"
        >
            <SectionHeading title="Experience" />

            {jobs.map((job, index) => (
                <Job
                    key={index}
                    index={index}
                    {...job}
                />
            ))}
        </section>
    );
};

export default Experience;
