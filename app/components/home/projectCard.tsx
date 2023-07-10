import Image from 'next/image'
import PillList from '../pillList'
import { Project } from '../../data/projects'

const ProjectCard = (props: Project) => {
    return (
        <li className='flex'>

            <div className='w-96 mr-10'>
                <a className='block rounded-md overflow-hidden border-2 border-slate-100/50'>
                    <Image
                        src={props.cardImageUrl}
                        alt={props.title}
                        width={400}
                        height={300}
                        className=''
                    />
                </a>
            </div>

            <div>
                <h3 className='text-white text-xl mb-3 font-medium'>
                    {props.title}
                </h3>
                <p className='text-md text-white text-opacity-50 mb-4'>
                    {props.shortDescription}
                </p>
                <PillList pills={props.skills}/>
            </div>
           
        </li>
    )
}

export default ProjectCard