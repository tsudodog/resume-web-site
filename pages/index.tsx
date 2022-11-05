import Header from "../components/Header/";
import Hero from '../components/Hero'
const index = () => {
    return (
        <div className="bg-[rgb(36,36,36)] text-white h-screen">

            <Header></Header>

            {/** Hero  */}
            <section id="hero">
                <Hero/>
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