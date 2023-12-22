import React from 'react'
import Image from 'next/image'
import { Project } from '../../data/projects';
import Link from 'next/link';

interface IProps {
    project: Project;
}

const Content = (props: IProps) => {
    return (
        <div className='container max-w-screen-sm mx-auto leading-relaxed px-5 sm:px-0'>

            <a href="/" className='block mb-12'>
                <Image
                    src="/Dashboard_1.png"
                    alt="placeholder"
                    width={800}
                    height={550}
                    className='rounded-md border border-zinc-200 shadow-sm'
                />
            </a>

            <p className='mb-10'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra quis elit at facilisis. Vivamus imperdiet elementum dui, quis tristique mauris fermentum a. Suspendisse viverra neque et mi pellentesque varius. Proin eu rutrum augue. Aenean nec dui metus. Nam non mi aliquam mi fermentum venenatis ac non ligula. In porttitor nisi id urna vehicula, in pellentesque dui tempor.
            </p>

            <p className='mb-10'>
                Pellentesque lobortis nisi nec libero tempor porttitor. Duis ut rutrum ex, ut iaculis velit. Duis venenatis lacus a gravida tempus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut varius felis nec blandit gravida. Donec nisi ex, aliquet ac ex vitae, convallis rutrum purus. Pellentesque quis efficitur mi, vitae volutpat lorem. Curabitur porttitor turpis et urna imperdiet egestas. Vestibulum enim lectus, venenatis et luctus vel, efficitur eu arcu. Pellentesque ornare ut mauris nec dictum. Quisque commodo aliquam ligula in convallis. Interdum et malesuada fames ac ante ipsum primis in faucibus.
            </p>

            <p className='mb-10'>
                Sed mollis, diam eget porttitor bibendum, augue eros accumsan erat, a malesuada dolor turpis vitae mauris. Proin mollis, diam a pellentesque auctor, est ipsum luctus libero, a tristique sapien massa eget dui. Proin accumsan commodo risus, id tempor arcu cursus at. Etiam vel erat in leo imperdiet venenatis. Nunc fringilla lorem in ligula laoreet semper. Donec ut nunc urna. Proin accumsan at magna et faucibus. Nulla facilisi. Nullam vulputate ligula id vulputate ornare. Donec vel est at metus cursus facilisis eget et est. Curabitur at quam ut diam aliquet facilisis.
            </p>

            <p className=''>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra quis elit at facilisis. Vivamus imperdiet elementum dui, quis tristique mauris fermentum a. Suspendisse viverra neque et mi pellentesque varius. Proin eu rutrum augue. Aenean nec dui metus. Nam non mi aliquam mi fermentum venenatis ac non ligula. In porttitor nisi id urna vehicula, in pellentesque dui tempor.
            </p>

            <Link
                href="/"
                scroll={true}
                className="inline-block bg-teal-300 hover:bg-teal-400 text-white font-bold py-2 px-4 mt-10 rounded-md text-md transition duration-200 ease-in-out shadow"
            >
                <div className="flex flex-row align-middle">
                    <svg className="w-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd"></path>
                    </svg>
                    <p className="ml-2">Back to home</p>
                </div>
            </Link>

        </div>
    )
}

export default Content