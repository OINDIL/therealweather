import React from 'react'

export default function Navbar() {
    return (
        <div>
            <nav className="navbar bg-body-tertiary">
                <div className="container">
                    <div className="container-fluid">
                        <form className="d-flex justify-content-center" role="search">
                            <input className="form-control me-2" style={{ borderRadius: '20px', fontFamily: 'fira code', width: '50%' }} type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-primary" style={{ borderRadius: '20px', fontFamily: 'fira code' }} type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <div className="container">
                        <ul className="navbar-nav d-flex justify-content-center" style={{fontFamily: 'fira code',fontWeight:'500'}}>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="/">Today</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Tomorrow</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Day-3</a>
                            </li>
                        </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
