import { DataContext } from "../context/UseContextApi"
import { useContext, useState } from "react"
import { BiTransfer } from "react-icons/bi";


interface Props {
    from: string;
    to: string;
    convert: number | null
}

const Convert = () => {
    const [details, setDetails] = useState<Props>({ from: "GHS", to: "USD", convert: null })
    const { rates } = useContext(DataContext)
    const { from, to, convert } = details

    const handleConvert = () => {
        const keys = (1/rates[to])*rates[from]
    }
    const primaryValue = rates[from]
    const secondaryValue = rates[to]

    



    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }


    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setDetails({ ...details, [e.target.name]: e.target.value })
        console.log(convert)
    }

    const keys = ((1/rates[to])*rates[from]) * convert

    return (
        <section className="px-[clamp(1rem,4vw,4rem)] py-[3rem] relative">
            {

                <form onSubmit={handleSubmit} className="p-8 bg-white -top-[4rem] md:-top-[6rem]  absolute m-auto w-[calc(100vw-8vw)]  flex shadow-xl rounded-2xl flex-col gap-8">
                    <div className="flex md:gap-8 flex-col md:flex-row">
                        <div className="border-2 flex-1 grid rounded-[1rem] p-4 min-h-[30vh] ">
                            <label className="text-gray-600 block font-semibold" htmlFor="number">Convert</label>
                            <input
                                type="number"
                                className="border-b-2 py-2 block outline-none w-full"
                                id="number"
                                value={convert}
                                onChange={handleChangeInput}
                                name="number"
                            />
                            <select
                                value={from}
                                className="mt-4 w-full outline-none"
                                onChange={handleChangeInput}
                                name="from"
                            >
                                {
                                    Object.entries(rates).map(([key]) => (
                                        <option key={key} value={key}>{key}</option>
                                    ))
                                }
                            </select>
                        </div>
                        <div className="flex items-center justify-center">
                            <span className="font-[950] text-gray-600 text-[4rem]">
                                <BiTransfer />
                            </span>

                        </div>
                        <div className="border-2 flex-1 grid rounded-[1rem] p-4 min-h-[30vh] ">
                            <p className="text-gray-600 block font-semibold" >To</p>
                            <select
                                value={to}
                                className="mt-4 w-full outline-none"
                                onChange={handleChangeInput}
                                name="to"
                            >
                                {
                                    Object.entries(rates).map(([key]) => (
                                        <option key={key} value={key}>{key}</option>
                                    ))
                                }
                            </select>
                            <h1 className="font-semibold text-[2rem]">{(primaryValue * secondaryValue).toFixed(2)}</h1>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row md:justify-between gap-6">
                        <div>
                            <p className="text-gray-600 block font-bold">Your Rate</p>
                            <h2 className="font-semibold text-green-600 text-[1.5rem]">1.1</h2>
                        </div>
                        <button
                            className="border text-[1.2rem] text-blue-500 p-2 md:px-4 md:py-1 cursor-pointer rounded-md border-blue-500 bg-blue-50 w-full md:w-fit"
                        >
                            Switch Currencies
                        </button>
                    </div>
                </form>

            }

        </section >
    )
}

export default Convert
