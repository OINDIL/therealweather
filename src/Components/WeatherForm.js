import React, { useState, useEffect } from 'react'
import Textarea from './Textarea'

export default function WeatherForm() {
  const [articles, setArticles] = useState(null)
  const [search,setSearch] = useState('bangaon')
  // const [totalResults, setTotalResults] = useState(0)
  // using use effect hook for the first time
  function kelToCel(value){
    return (value - 273.15)
  }
  useEffect(() => {
    const updateWeather = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=a7e695993de0f4dd27081ffac1c6e754`
      // const url = 'https://newsapi.org/v2/everything?q=tesla&from=2023-06-14&sortBy=publishedAt&apiKey=fd09e8fd7ea240baa387a5d28a80b8f8'
      let data = await fetch(url)
      let parsedData = await data.json()
      setArticles(parsedData)
    }
    updateWeather()
  }, [])
  // console.log(articles)
  return (
    <div>
      <nav className="navbar bg-body-tertiary">
                <div className="container">
                    <div className="container-fluid">
                        <form className="d-flex justify-content-center" role="search">
                            <input className="form-control me-2" style={{ borderRadius: '20px', fontFamily: 'fira code', width: '50%' }} type="search" placeholder="Search" aria-label="Search" onChange={(event) => {setSearch(event.target.value)}} />
                            <button className="btn btn-primary" style={{ borderRadius: '20px', fontFamily: 'fira code' }} type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
      {articles !== null ? (
        <div>
          <Textarea icon={articles.weather[0].icon} name={articles.name} temp={Math.ceil(kelToCel(articles.main.temp))} description={articles.weather[0].description} />
        </div>
      ) : (
        <div>
          <Textarea name={'no data found'}/>
        </div>
      )}
    </div>
  )
}
