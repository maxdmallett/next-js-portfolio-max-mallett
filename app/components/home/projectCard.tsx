import Image from 'next/image'
import PillList from '../pillList'
import { Project } from '../../data/projects'
import Link from 'next/link'

const ProjectCard = (props: Project) => {
    return (
        <li className='flex flex-col lg:flex-row'>

            <div className='w-full lg:w-1/3 mr-5 lg:mr-10 mb-4 lg:mb-0'>
                <Link 
                    href={`/projects/${props.slug}`}
                    className='block rounded-md overflow-hidden border-2 border-slate-100/50'
                >
                    <Image
                        src={props.thumbnailImageUrl ? props.thumbnailImageUrl : '/images/project-thumbnail-placeholder.png'}
                        alt={props.title}
                        width={400}
                        height={300}
                        className=''
                    />
                </Link>
            </div>

            <div className='w-full lg:w-2/3'>
                <Link 
                    href={`/projects/${props.slug}`}
                    className='inline-block text-white text-xl mb-2 lg:mb-2 font-medium hover:text-teal-400 transition-colors ease-in-out'
                >
                    <h3>
                        {props.title}
                    </h3>
                </Link>
                <p className='text-md text-white text-opacity-50 mb-4'>
                    {props.shortDescription}
                </p>
                <PillList pills={props.skills}/>
            </div>
           
        </li>
    )
}

export default ProjectCard