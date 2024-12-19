import NavBar from "./NavBar"
import Countries from "./Countries"


const Hero = () => {

    return (

        <header className="px-[clamp(1rem,4vw,4rem)] min-h-screen bg-[url(../assets/background.jpg)] bg-cover relative after:absolute after:inset-0 after:bg-violet-950 after:opacity-95  after:content-[''] py-6">
            <NavBar />
            <section className=" md:mt-[5rem] mt-[2rem] min-h-[90vh] ">
                <div className="grid  md:grid-cols-2 relative min-h-[70vh] z-10 h-full text-white">
                    <div className=" grid place-content-center">
                        <h1 className="font-[950] text-[clamp(2.5rem,5vw,3.5rem)]">
                            Convert Now! <br />With Best Rates.
                        </h1>
                        <p>
                            Get the latest exchange rates on 100+ currencies
                        </p>
                    </div>
                    <div className=" md:mt-0 mt-[3rem] place-content-center relative">
                        <Countries />
                    </div>
                </div>
            </section>
        </header>
        
    )
}

export default Hero
