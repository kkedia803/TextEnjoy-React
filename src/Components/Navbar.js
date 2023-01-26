import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
    return (
      
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme='dark' >
                <div className="container-fluid">
                    
                    <Link className="navbar-brand" to="/">{props.title}</Link>
                    <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon bg-light"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link " aria-current="page" to="/home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                        </ul>
                        <div className="form-check form-switch text-light">
                            <input className="form-check-input my-1 bg-secondary" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault" />Dark
                        </div>
                        <div className='bg-success rounded mx-2 my-1' onClick={props.greMode} style={{ height: '30px', width: '30px', cursor: 'pointer' }}></div>
                        <div className='bg-danger rounded mx-2 my-1' onClick={props.redMode} style={{ height: '30px', width: '30px', cursor: 'pointer' }}></div>
                        <div className='bg-warning rounded mx-2 my-1' onClick={props.yelMode} style={{ height: '30px', width: '30px', cursor: 'pointer' }}></div>
                    </div>
                </div>
            </nav>
        </div>
       
    )
}
