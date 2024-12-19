import { useEffect, useState, createContext, ReactNode } from "react";
import axios from "axios";

interface Props {
    rates: Record<string, number>;
    setRates: (data: Record<string, number>) => void
}
const value: Props = {
    rates: {},
    setRates: () => null

}

export const DataContext = createContext<Props>(value)

interface ElementProp {
    children: ReactNode
}

const ContextProvider = ({ children }: ElementProp) => {
    const [rates, setRates] = useState<Record<string, number>>({})
    useEffect(() => {

        localStorage.getItem("currencyRate")
        const cacheDuration = 24 * 60 * 60 * 100

        const getCached = () => {
            const cachedData = localStorage.getItem("currencyRate")

            if (cachedData) {
                const { data, timestamp } = JSON.parse(cachedData);
                if (Date.now() - timestamp < cacheDuration) {
                    return data
                }

            }
            return null
        }

        const collectedData = async () => {
            const API_URL = "https://v6.exchangerate-api.com/v6/"
            try {
                const response = await axios.get(`${API_URL}${import.meta.env.VITE_API_KEY}/latest/USD`)
                const data = response?.data?.conversion_rates
                localStorage.setItem("currencyRate", JSON.stringify({data,timestamp:Date.now()}))
                setRates((prev) => ({ ...prev, ...data }))
            } catch (error) {
                console.log("Sorry something went wrong", error)
            }
        }

        const cacheRates = getCached()
        if(cacheRates){
            setRates(cacheRates)
        }else{
        collectedData()
        }
    }, [])

    return (
        <DataContext.Provider value={{ rates, setRates }}>
            {
                children
            }
        </DataContext.Provider>
    )
}

export default ContextProvider