import React from 'react'
import PillList from './shared/PillList'
export interface IJob {
    title: string;
    description: string;
    skills: string[];
    timeframe: string;
}

interface IJobsProperties extends IJob {
    index: number;
}

const Job = (props: IJobsProperties) => {

    const alignment: string = props.index % 2 === 0 ? 'left' : 'right'

    return (
        <article className="relative flex mb-24">

            <div className='grid grid-cols-11'>

                <div 
                    className={`col-span-5 flex flex-col
                    ${alignment === 'left' ? 'text-right' : 'text-left order-last' }`}
                >
                    <h6 className='text-white text-xl mb-3'>
                        {props.title}
                    </h6>
                    <p className='text-md text-white text-opacity-50 mb-4'>
                        {props.description}
                    </p>
                    <div className={`${alignment === 'left' ? 'ms-auto' : ''}`}>

                        <PillList pills={props.skills}/>
                    </div>
                </div>

                <div className="col-span-1 flex flex-col items-center pt-1.5">
                    <div className="w-4 h-4 flex-shrink-0 bg-teal-300 rounded-full mb-4"></div>
                    <div className="w-0.5 h-full bg-white flex-grow-1"></div>
                </div>
                
                <p className={`col-span-5 text-gray-500 uppercase text-sm  mt-1 
                    ${alignment === 'left' ? 'text-left' : 'text-right order-first' }`}
                >
                    {props.timeframe}
                </p>

            </div>

        </article>
    )
}

export default Job