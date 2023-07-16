import React, { useState, useEffect } from 'react'
import Textarea from './Textarea'
export default function WeatherForm() {
  const [articles, setArticles] = useState(null)
  const [search,setSearch] = useState('')
  // const [totalResults, setTotalResults] = useState(0)
  const updateWeather = async (query) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=a7e695993de0f4dd27081ffac1c6e754` 
    let data = await fetch(url)
    let parsedData = await data.json()
    setArticles(parsedData)
    console.log(parsedData)
  }
  // using use effect hook for the first time
  function kelToCel(value){
    return (value - 273.15)
  }
  const handleChange = (event) => {
    // console.log(event.target.value)
    // event.preventDefault()
    setSearch(event.target.value)
  }
  const handleClick = (e) =>{
    // alert('hello')
    updateWeather(search)
    e.preventDefault();
  }

  useEffect(() => {
    updateWeather('Bongaon')
  }, [])
  // console.log(articles)
  return (
    <div>
      <nav className="navbar bg-body-tertiary">
                <div className="container">
                    <div className="container-fluid">
                        <form className="d-flex justify-content-center" role="search">
                            <input className="form-control me-2" style={{ borderRadius: '20px', fontFamily: 'fira code', width: '50%' }} type="search" placeholder="Search" aria-label="Search" value={search} onChange={handleChange} />
                            <button className="btn btn-primary" onClick={handleClick} style={{ borderRadius: '20px', fontFamily: 'fira code' }} type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
      {articles !== null ? (
        <div>
          <Textarea icon={articles.weather[0].icon} name={articles.name} temp={kelToCel(articles.main.temp).toFixed(1)} description={articles.weather[0].description} />
        </div>
      ) : (
        <div>
          <Textarea name={'no data found'}/>
        </div>
      )}
    </div>
  )
}
