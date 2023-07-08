import Link from "next/link"
import PillList from "../pillList"

const OtherProjectCard = () => {
    return (
        <li>
            <Link href="/projects/react-migration-ir35-shield-dashboard" className='flex flex-col bg-cyan-900 bg-opacity-30 p-10'>
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
            </Link>
        </li>
    )
}

export default OtherProjectCard