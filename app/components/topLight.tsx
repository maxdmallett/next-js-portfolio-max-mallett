const TopLight = () => {
    return (
        <div className='relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0 mix-blend-color-dodge'>
            <div className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-cyan-500 opacity-80 blur-3xl max-w-full"></div>
            <div className="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-cyan-400 blur-2xl max-w-full"></div>
        </div>
    )
}

export default TopLight