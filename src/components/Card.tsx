
interface ElementProps {
    path1: string;
    path2: string;
    rate: number;
    symbol: string;
}

const Card = ({ path1, path2, rate, symbol}: ElementProps) => {
 

    return (
        <article className={`p-4 rounded-2xl bg-white flex`}>
            <div className="flex-1">
                <small className="text-gray-600">{symbol}</small>
                <p className="text-black">{rate.toFixed(2) }</p>
            </div>
            <div className="flex-1 flex  gap-2">
                <span><img src={path1} alt={path1}/></span>
                <span><img src={path2} alt={path2} /></span>
            </div>
        </article>
    )

}

export default Card