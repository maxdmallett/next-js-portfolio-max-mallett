import React from 'react'
import PillList from '../pillList';
import Link from 'next/link';
import { IJob } from '../../data/jobs';

interface IJobsProperties extends IJob {
    index: number;
}

const Job = (props: IJobsProperties) => {

    const alignment: string = props.index % 2 === 0 ? 'left' : 'right'

    return (
        <article className="relative flex mb-16 sm:mb-2 last:mb-0 group">

            <div className='grid md:grid-cols-11'>

                <div 
                    className={`md:col-span-5 flex flex-col
                    ${alignment === 'left' ? 'md:text-right' : 'text-left order-last' }`}
                >
                    <Link 
                        href={props.url}
                        target='_blank'
                        className='text-white text-xl mb-1 sm:mb-3 hover:text-teal-400 transition-colors ease-in-out'
                    >
                        <h6 className=''>
                            {props.title}
                        </h6>
                    </Link>

                    <p className={`sm:hidden text-gray-500 uppercase text-sm mb-4`}>
                        {props.timeframe}
                    </p>

                    <p className='text-md text-white text-opacity-50 mb-4'>
                        {props.description}
                    </p>
                    <div className={`${alignment === 'left' ? 'md:ms-auto' : ''} sm:mb-20 group-last:sm:mb-1`}>
                        <PillList pills={props.skills} alignment={alignment} />
                    </div>
                </div>

                <div className="hidden md:flex col-span-1 flex-col items-center pt-1.5">
                    <div className="w-4 h-4 flex-shrink-0 bg-teal-300 rounded-full mb-4"></div>
                    <div className="w-0.5 h-full bg-white/20 flex-grow-1"></div>
                </div>
                
                <p className={`hidden md:block col-span-5 text-gray-500 uppercase text-sm mt-1 
                    ${alignment === 'left' ? 'text-left' : 'text-right order-first' }`}
                >
                    {props.timeframe}
                </p>

            </div>

        </article>
    )
}

export default Job