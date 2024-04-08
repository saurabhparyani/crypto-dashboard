const ExchangeRate = ({ exchangeRate, chosenPrimaryCurrency, chosenSecondaryCurrency }) => {
    return <div className="bg-badgreen rounded drop-shadow-xl shadow-inner mt-4 w-full">
        <div className="text-3xl font-semibold text-center pt-3">Exchange Rate</div>
        <div className="text-6xl text-center py-9 font-bold">{exchangeRate}</div>
        <div className="text-xl text-center pb-9 pt-1">{chosenPrimaryCurrency} to {chosenSecondaryCurrency}</div>
    </div>
}

export default ExchangeRate