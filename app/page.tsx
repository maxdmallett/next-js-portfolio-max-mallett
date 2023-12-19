import Footer from './components/footer'
import Contact from './components/home/contact'
import Experience from './components/home/experience'
import Hero from './components/home/hero'
import OtherProjects from './components/home/otherProjects'
import Projects from './components/home/projects'
import Navbar from './components/nav/navbar'

export default function Home() {
    return (
        <>

            <Navbar />

            <main className="flex min-h-screen flex-col items-center justify-between px-5 xl:px-0">

                <div className='container max-w-screen-lg mx-auto'>

                    <Hero />
                    <Experience />
                    <Projects />
                    <OtherProjects />
                    <Contact />

                </div>
            
            </main>
            <Footer />
        </>
    )
}
