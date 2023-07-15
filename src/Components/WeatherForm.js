import React, { useState, useEffect } from 'react'
import Textarea from './Textarea'

export default function WeatherForm() {
  const [articles, setArticles] = useState(null)
  // const [totalResults, setTotalResults] = useState(0)
  // using use effect hook for the first time

  useEffect(() => {
    const updateWeather = async () => {
      const url = 'https://api.openweathermap.org/data/2.5/weather?q=kolkata&appid=a7e695993de0f4dd27081ffac1c6e754'
      // const url = 'https://newsapi.org/v2/everything?q=tesla&from=2023-06-14&sortBy=publishedAt&apiKey=fd09e8fd7ea240baa387a5d28a80b8f8'
      let data = await fetch(url)
      let parsedData = await data.json()
      setArticles(parsedData)
    }
    updateWeather()
  }, [])
  console.log(articles)
  return (
    <div>
      {articles !== null ? (
        <div>
          <Textarea icon={articles.weather[0].icon} name={articles.name} weather={articles.main.temp} description={articles.weather[0].description}/>
        </div>
      ) : (
        <div>
          <Textarea name={'no data found'}/>
        </div>
      )}
    </div>
  )
}
