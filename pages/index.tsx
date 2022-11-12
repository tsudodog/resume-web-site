import Header from "../components/Header/";
import Hero from '../components/Hero'
import About from './../components/About'
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

            {/** Skills  */}
            {/** Projects  */}
            {/** Contact Me  */}
        </div>
    );
}

export default index;