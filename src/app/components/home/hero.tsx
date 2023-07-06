const Hero = () => {
    return (
        <section className='text-center h-screen flex flex-col justify-center'>
           
            <h1 className="text-7xl font-bold tracking-tight text-slate-200 mb-5">
                Max Mallett
            </h1>
            <h2 className='text-6xl font-extrabold text-slate-500 mb-6'>
                Frontend Developer
            </h2>

            <p className='mb-12 text-lg pb-3 max-w-xl mx-auto'>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam <a href='/' className='text-teal-300 font-normal'>IR35 Shield</a>.
            </p>

            <div>
                <a
                    href="#"
                    className="inline-block flex-grow-0 rounded-md bg-transparent border border-teal-300 px-5 py-3 text-md font-normal text-teal-300"
                >
                    See my work
                </a>
            </div>
            
        </section>
    )
}

export default Hero