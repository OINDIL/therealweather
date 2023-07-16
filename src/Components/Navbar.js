import React from 'react'

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <div className="container">
                            <ul className="navbar-nav d-flex justify-content-evenly" style={{ fontFamily: 'fira code', fontWeight: '500' }}>
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