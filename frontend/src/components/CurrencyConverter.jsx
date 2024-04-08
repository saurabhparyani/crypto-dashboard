import { useState } from "react"
import ExchangeRate from "./ExchangeRate"
import axios from 'axios'

const CurrencyConverter = () => {

    const currencies = ['BTC', 'ETH', 'USD', 'XRP', 'LTC', 'ADA']

    const [chosenPrimaryCurrency, setChosenPrimaryCurrency] = useState(currencies[0])
    const [chosenSecondaryCurrency, setChosenSecondaryCurrency] = useState(currencies[0])
    const [amount, setAmount] = useState(1)
    const [result, setResult] = useState(0)
    const [exchangedData, setExchangedData] = useState({
        primaryCurrency: currencies[0],
        secondaryCurrency: currencies[0],
        exchangeRate: 0
    })

    const [loading, setLoading] = useState(false);

    const convert = async () => {

        setLoading(true);

        if (chosenPrimaryCurrency === chosenSecondaryCurrency) {
            alert("Primary and secondary currencies cannot be the same.");
            setLoading(false);
            return;
        }

        const options = {
            method: 'GET',
            url: 'https://alpha-vantage.p.rapidapi.com/query',
            params: {
                from_currency: chosenPrimaryCurrency,
                function: 'CURRENCY_EXCHANGE_RATE',
                to_currency: chosenSecondaryCurrency
            },
            headers: {
                'X-RapidAPI-Key': '4db41ad448mshe49295da916db9ap140962jsn326061ef4e09',
                'X-RapidAPI-Host': 'alpha-vantage.p.rapidapi.com'
            }
        };

        try {
            const response = await axios.request(options);
            console.log(response.data['Realtime Currency Exchange Rate']['5. Exchange Rate']);
            setResult(response.data['Realtime Currency Exchange Rate']['5. Exchange Rate'] * amount)
            setExchangedData({
                primaryCurrency: chosenPrimaryCurrency,
                secondaryCurrency: chosenSecondaryCurrency,
                exchangeRate: response.data['Realtime Currency Exchange Rate']['5. Exchange Rate']
            })
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }


    return <div className="flex flex-col items-center px-9 h-fit">
        <div className="text-3xl font-bold mt-6 mb-4">Currency Converter</div>
        <div className="bg-linkwater px-5 w-fit h-fit rounded drop-shadow-xl shadow-inner">
            <table className="mt-9 table-auto">
                <tbody>
                    <tr>
                        <td className="pl-5 text-xl font-medium">Primary Currency</td>
                        <td className="pl-1 text-xl">
                            <input
                                placeholder="Enter amount"
                                type="number"
                                name="currency-amount-1"
                                value={amount === 1 ? "" : amount}
                                onChange={(e) => setAmount(e.target.value)}
                                className="bg-linkwater border border-slate-400 shadow-lg text-black font-semibold placeholder:slate-400 placeholder:font-normal pl-1 mr-1"
                            />
                        </td>
                        <td className="text-xl">
                            <select
                                value={chosenPrimaryCurrency}
                                name="currency-option-1"
                                onChange={(e) => setChosenPrimaryCurrency(e.target.value)}
                            >
                                {currencies.map((currency, index) => {
                                    return <option key={index} value={currency}>{currency}</option>
                                })}
                            </select>

                        </td>
                    </tr>
                    <tr>
                        <td className="px-2 text-xl pt-3 font-medium" >Secondary Currency</td>
                        <td className="text-xl pt-3">
                            <input
                                name="currency-amount-2"
                                value={result === 0 ? "" : result}
                                disabled={true}
                                className="ml-1 border border-slate-400 shadow-lg text-black font-semibold mt-1 pl-1 mr-1"
                            />
                        </td>
                        <td className="text-xl pt-3">
                            <select
                                value={chosenSecondaryCurrency}
                                name="currency-option-2"
                                onChange={(e) => setChosenSecondaryCurrency(e.target.value)}
                            >
                                {currencies.map((currency, index) => {
                                    return <option key={index} value={currency}>{currency}</option>
                                })}
                            </select>
                        </td>
                    </tr>
                </tbody>
            </table>
            <button className="my-4 ml-52 text-xl font-medium rounded-lg border-2 border-slate-800 bg-slate-200 p-3" onClick={convert}>
                {loading ? (
                    <div role="status">
                        <svg aria-hidden="true" class="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                        </svg>
                        <span class="sr-only">Converting...</span>
                    </div>) : "Convert"}
            </button>
        </div>
        <ExchangeRate exchangeRate={exchangedData.exchangeRate} chosenPrimaryCurrency={exchangedData.primaryCurrency} chosenSecondaryCurrency={exchangedData.secondaryCurrency} />
    </div>
}

export default CurrencyConverter