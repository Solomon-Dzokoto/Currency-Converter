import { TbWorld } from "react-icons/tb";
import { HiScale } from "react-icons/hi";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { MdOutlineMessage } from "react-icons/md";

const About = () => {
    const info = [
        { id: 1, icon: <TbWorld />, title: "Over 100 Currencies", desc: "Our Data gives you the currency rates of over 100 countries and more being added everyday" },
        { id: 2, icon: <HiScale />, title: "No hidden fees", desc: "Our app is totally free with no hidden charges. Just Convert and enjoy" },
        { id: 3, icon: <AiOutlineThunderbolt />, title: "Instant Conversion", desc: "Our conversion process is instant. No long waits but we provide you with the most accurate information" },
        { id: 4, icon: <MdOutlineMessage />, title: "Updates every 5 minutes", desc: "Our rates are updated every 5 minutes to give you the best conversions." },
    ]
    

    return (
        <section className="px-[clamp(1rem,4vw,4rem)] py-[2.5rem] bg-sky-50">
            <ul className="grid md:grid-cols-2 gap-4 gap-y-8">
                {
                    info.map((item) => (
                        <li className="flex gap-4" key={item.id}>
                            <span className="p-3 h-fit bg-blue-950 text-white text-[1.7rem] rounded-md inline-block">{item.icon}</span>
                            <div className="">
                             <p className="font-semibold text-[1.2rem] ">{item.title}</p>
                             <p className="font-[400] text-gray-500">{item.desc}</p>
                            </div>
                          
                        </li>

                    ))
                }
            </ul>
        </section>
    )

}

export default About 