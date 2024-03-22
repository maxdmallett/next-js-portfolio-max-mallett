import React, { ReactNode } from 'react'

interface DotBackgroundContainerProps {
    children: ReactNode;
}

const DotBackgroundContainer = ({children}: DotBackgroundContainerProps) => {
    return (
        <div className='relative bg-dot-white/[0.15] w-full'>
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-[#171717] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
            {children}
        </div>
    )
}

export default DotBackgroundContainer