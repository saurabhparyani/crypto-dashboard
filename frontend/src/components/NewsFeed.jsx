import { useEffect, useState } from "react"
import axios from 'axios'


const NewsFeed = () => {
    const [news, setNews] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            const options = {
                method: 'GET',
                url: 'https://crypto-update-live.p.rapidapi.com/news',
                headers: {
                    'X-RapidAPI-Key': '4db41ad448mshe49295da916db9ap140962jsn326061ef4e09',
                    'X-RapidAPI-Host': 'crypto-update-live.p.rapidapi.com'
                }
            };

            try {
                const response = await axios.request(options);
                setNews(response.data)
            } catch (error) {
                alert('An error occurred fetching the news data from the API. Please try again later.')
                console.error(error);
            }
        };

        fetchData();
    }, [])

    const first5News = news ? news.slice(0, 5) : []
    console.log(first5News)
    return <div className="flex flex-col justify-start px-7">
        <div className="text-3xl font-bold pt-5"> News Feed</div >
        {
            first5News.map((newsItem, index) => {
                return (
                    <div className="mt-3 pt-4" key={index}>
                        <a href={newsItem.URL} target="_blank"><div className="font-semibold text-sm text-prpl">{newsItem.Title}</div> </a>
                    </div>
                )
            })
        }
    </div >
}

export default NewsFeed