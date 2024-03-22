import { DotBackground } from './components/dotBackground';
import DotBackgroundContainer from './components/dotBackgroundContainer';
import Footer from './components/footer';
import Contact from './components/home/contact';
import Experience from './components/home/experience';
import Hero from './components/home/hero';
import OtherProjects from './components/home/otherProjects';
import Projects from './components/home/projects';
import Navbar from './components/nav/navbar';

export default function Home() {
    return (
        <>
            {/* <div className="bg-dot-pattern"></div> */}
            <Navbar fixed={true} />
            <main className="relative flex min-h-screen flex-col items-center justify-between px-5 xl:px-0">

                <DotBackgroundContainer>
                    <div className="container max-w-screen-lg mx-auto relative">
                        <Hero />
                    </div>
                </DotBackgroundContainer>

                <div className="container max-w-screen-lg mx-auto relative">
                    <Experience />
                    <Projects />
                    <OtherProjects />
                    <Contact />
                </div>
            </main>
            <Footer />
        </>
    );
}
