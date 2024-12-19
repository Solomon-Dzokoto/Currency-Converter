import { useContext, useEffect, useState } from "react";
import { DataContext } from "../context/UseContextApi";
import Card from "./Card";
import NIG from '../assets/ghana.png'


enum CountryFlags {
    GBP = 'src/assets/united-kingdom.png',
    CAD = 'src/assets/canada.png',
    NGN = 'src/assets/nigeria.png',
    USD = 'src/assets/united-states.png'
}

const Countries = () => {
    const { rates } = useContext(DataContext)
    const [majorCountriesRates, setMajorCountriesRates] = useState<Record<string, number>>({})

    useEffect(() => {
        if (!rates) {
            console.warn("Data or rates not available yet.");
            return;
        }
        const majorCounties = ["GBP", "CAD", "GHS", "NGN", "USD"]
        const filteredCountries = Object.fromEntries(
            Object.entries(rates).filter(([key]) => majorCounties.includes(key)))
        setMajorCountriesRates(filteredCountries)
    }, [rates])

    return (
        <ul className="grid grid-cols-6 gap-4">
            {
                Object.entries((majorCountriesRates || {}))
                    .filter(([key]) => key !== "GHS") //removes the middle item
                    .map(([country, rate]) => {
                        const rateInGh = country === "NGN"
                            ? (1 / majorCountriesRates["NGN"]) * majorCountriesRates["GHS"]
                            : country === "CAD"
                                ? (1 / majorCountriesRates["CAD"]) * majorCountriesRates["GHS"]
                                : country === "GBP"
                                    ? (1 / majorCountriesRates["GBP"]) * majorCountriesRates["GHS"]
                                    : country === "USD"
                                        ? majorCountriesRates["USD"] * majorCountriesRates["GHS"]
                                        : 1

                        const specialClasses =
                            country === "NGN"
                                ? "col-start-2 col-span-4"
                                : country === "CAD"
                                    ? "col-start-1 col-span-2"
                                    : country === "GBP"
                                        ? "col-start-4 col-span-2"
                                        : country === "USD"
                                            ? "col-start-2 col-span-4"
                                            : "";
                        return (
                            <li key={country} className={`col-span-3 ${specialClasses}`}>
                                {

                                }
                                <Card
                                    path1={NIG}
                                    path2={CountryFlags[country as keyof typeof CountryFlags] || ""}
                                    rate={rateInGh || rate}
                                    symbol={country}
                                />
                            </li>
                        )
                    }
                    )
            }

        </ul>
    )
}

export default Countries