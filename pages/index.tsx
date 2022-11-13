import Header from "../components/Header/";
import Hero from '../components/Hero'
import About from './../components/About'
import Experience from "../components/Experience";
import Skills from "../components/Skills";
const index = () => {
    return (
        <div className="bg-[rgb(36,36,36)] text-white 
        h-screen 
        snap-y snap-mandatory 
        overflow-scroll 
        z-0">

            <Header></Header>

            {/** Hero  */}
            <section className="snap-start" id="hero">
                <Hero />
            </section>
            {/** About  */}
            <section className="snap-center" id="about" >
                <About/>
            </section>
            {/** Experience  */}
            <section className="snap-center" id="experiences">
                <Experience></Experience>
            </section>

            {/** Skills  */}
            <section className="snap-center" id="skills">
                <Skills/>
            </section>
            {/** Projects  */}
            {/** Contact Me  */}
        </div>
    );
}

export default index;