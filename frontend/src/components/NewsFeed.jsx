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

    const first7News = news ? news.slice(0, 7) : []
    console.log(first7News)
    return <div className="bg-red-500">
        <h1>News Feed</h1>
        {first7News.map((newsItem, index) => {
            return (
                <div key={index}>
                    <a href={newsItem.URL}><h2>{newsItem.Title}</h2> </a>
                </div>
            )
        })}
    </div>
}

export default NewsFeed