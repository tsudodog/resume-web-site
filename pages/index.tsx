import Header from "../components/Header/";
import Hero from '../components/Hero'
const index = () => {
    return (
        <div className="bg-[rgb(36,36,36)] text-white 
        h-screen 
        snap-y snap-mandatory 
        overflow-scroll 
        z-0">

            <Header></Header>

            {/** Hero  */}
            <section className="snap-center" id="hero">
                <Hero />
            </section>
            {/** About  */}
            {/** Experience  */}

            {/** Skills  */}
            {/** Projects  */}
            {/** Contact Me  */}
        </div>
    );
}

export default index;