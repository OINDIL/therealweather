import React from 'react'
import ApiContext from './ApiContext'


const ApiState = (props) => {
    console.log(props)
  const state = {
    "lon": props.lon,
  }
  return (
    <ApiContext.Provider value={state}>
      {props.children}
    </ApiContext.Provider>
  )
}
export default ApiState