import Job, { IJob } from "./job"
import SectionHeading from "../sectionHeading";

const jobs: IJob[] = [
    {
        title: 'Frontend Developer @ IR35 Shield',
        description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.',
        skills: ['React', 'Typescript', 'SCSS', 'Redux', 'Jest', 'RTL'],
        timeframe: '2019 - present'
    },
    {
        title: 'Frontend Developer @ Awaze',
        description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.',
        skills: ['HTML', 'CSS', 'Javascript', 'jQuery'],
        timeframe: 'Aug 2017 - Jan 2019'
    },
    {
        title: 'Javascript Developer @ LJ Create',
        description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.',
        skills: ['Javascript', 'Canvas', 'CreateJS', 'HTML', 'CSS'],
        timeframe: '2013 - 2017'
    },
    {
        title: 'Flash Developer @ LJ Create',
        description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.',
        skills: ['ActionScript 3', 'XML', 'Photoshop', 'Illustrator'],
        timeframe: '2010 - 2013'
    },
    {
        title: 'Assistant Graphic Designer @ LJ Create',
        description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.',
        skills: ['Photoshop', 'Illustrator', 'Powerpoint'],
        timeframe: '2009 - 2010'
    },
    {
        title: 'CAD Draughtsperson @ LJ Create',
        description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.',
        skills: ['Solidworks', 'AutoCAD'],
        timeframe: '2008 - 2009'
    }
];

const Experience = () => {

    return (
        <section id="experience" className='py-24'>

           <SectionHeading title='Experience' />

            {
                jobs.map((job, index) => (
                    <Job 
                        key={index}
                        index={index}
                        {...job}
                    />
                ))
            }

        </section>
    )
}

export default Experience