import React from 'react'

export default function Textarea(props) {
  const {name,temp, description, icon} = props;
  return (
    <div>
      
      <div className="container card mb-3 my-4" style={{maxWidth: '50%',height:'27rem',backgroundImage:`url('')`}}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={`https://openweathermap.org/img/wn/${icon}.png`} style={{height:'83px',width:'82px'}} className="img-fluid  rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title"><strong>{name}</strong></h5>
              <h1 className="card-text">{temp} ℃</h1>
              <p className="card-text">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
