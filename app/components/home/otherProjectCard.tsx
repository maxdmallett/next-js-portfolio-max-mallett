import Link from "next/link"
import PillList from "../pillList"
import { Project } from "../../data/projects"

const OtherProjectCard = (props: Project) => {
    return (
        <li>
            <Link href={`/projects/${props.slug}`} className='group flex flex-col h-full bg-primary-900 bg-opacity-30 p-8 sm:p-10 transition duration-500 ease-in-out hover:bg-opacity-40'>
                <h6 className='text-white mb-3 transition duration-500 ease-in-out group-hover:text-primary-500'>
                    {props.title}
                </h6>
                <p className='text-md text-white text-opacity-50 mb-4'>
                    {props.shortDescription}
                </p>
                <div className='flex justify-between align-bottom'>
                    <PillList pills={props.skills}/>
                </div>
            </Link>
        </li>
    )
}

export default OtherProjectCard