import React from 'react'
import PillList from './shared/PillList'

interface IJobsProperties {
    index: number;
}

const Job = (props: IJobsProperties) => {

    const alignment: string = props.index % 2 === 0 ? 'left' : 'right'
    //const alignment: string = 'right'

    console.log(props.index);

    return (
        <article className="relative flex mb-24">

            <div className='grid grid-cols-9'>

                <div 
                    className={`col-span-4 flex flex-col
                    ${alignment === 'left' ? 'text-right' : 'text-left order-last' }`}
                >
                    <h6 className='text-white text-xl mb-3'>
                        Frontend Developer @ IR35 Shield
                    </h6>
                    <p className='text-md text-white text-opacity-50 mb-4'>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
                    </p>
                    <div className={`${alignment === 'left' ? 'ms-auto' : ''}`}>

                        <PillList pills={['React', 'HTML', 'CSS']}/>
                    </div>
                </div>

                <div className="col-span-1 flex flex-col items-center pt-1.5">
                    <div className="w-4 h-4 flex-shrink-0 bg-teal-300 rounded-full mb-4"></div>
                    <div className="w-0.5 h-full bg-white flex-grow-1"></div>
                </div>
                
                <p className={`col-span-4 text-gray-500 uppercase text-sm  mt-1 
                    ${alignment === 'left' ? 'text-left' : 'text-right order-first' }`}
                >
                    2019 - present
                </p>

            </div>

            {/* <p className='text-gray-500 uppercase text-sm absolute right-full text-right whitespace-nowrap mt-1 pr-10'>
                2019 - present
            </p>

            <div className="flex flex-col items-center pt-1.5">
                <div className="w-4 h-4 flex-shrink-0 bg-teal-300 rounded-full mb-4"></div>
                <div className="w-0.5 h-full bg-white flex-grow-1"></div>
            </div>

            <div className='flex flex-col ml-10'>
                <h6 className='text-white text-xl mb-3'>
                    Frontend Developer @ IR35 Shield
                </h6>
                <p className='text-md text-white text-opacity-50 mb-4'>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
                </p>
                <PillList pills={['React', 'HTML', 'CSS']}/>
            </div> */}
        </article>
    )
}

export default Job