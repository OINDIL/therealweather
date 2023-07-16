import React from 'react'
import Navbar from './Components/Navbar'
import ApiState from './Context/ApiState';
import WeatherForm from './Components/WeatherForm';


export default function App() {
  return (
    <div>
      <ApiState>
        <Navbar />
        <WeatherForm />
      </ApiState>
    </div>
  )
}