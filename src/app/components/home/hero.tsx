const Hero = () => {
    return (
        <section className='mb-20 py-10 text-center'>
           
            <h1 className="text-7xl font-bold tracking-tight text-white mb-5">
                Max Mallett
            </h1>
            <h2 className='text-3xl font-extralight text-slate-300 mb-5'>
                Frontend Developer
            </h2>
            <p className='mb-10 pb-3 max-w-lg mx-auto'>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam <a href='/' className='text-teal-300 font-normal'>IR35 Shield</a>.
            </p>
            <a
                href="#"
                className="rounded-md bg-transparent border border-teal-300 px-5 py-3 text-md font-normal text-teal-300"
            >
                See my work
            </a>
            
        </section>
    )
}

export default Hero