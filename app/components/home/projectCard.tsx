import Image from 'next/image'
import PillList from '../pillList'

const ProjectCard = () => {
    return (
        <li className='flex'>

            <div className='w-96 mr-10'>
                <a className='block rounded-md overflow-hidden border-2 border-slate-100/50'>
                    <Image
                        src="/Dashboard_1.png"
                        alt="placeholder"
                        width={400}
                        height={300}
                        className=''
                    />
                </a>
            </div>

            <div>
                <h3 className='text-white text-xl mb-3 font-medium'>
                    React migration of IR35 Shield Dashboard
                </h3>
                <p className='text-md text-white text-opacity-50 mb-4'>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
                </p>
                <PillList pills={['React', 'HTML', 'CSS']}/>
            </div>
           
        </li>
    )
}

export default ProjectCard