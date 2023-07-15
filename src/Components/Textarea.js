import React from 'react'

export default function Textarea(props) {
  const {name,weather, description, icon} = props;
  return (
    <div>
      <div className="container card mb-3" style={{maxWidth: '50%'}}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={icon} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <p className="card-text">{weather}</p>
              <p className="card-text"><small className="text-body-secondary">{description}</small></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
