import React from 'react';
import PropTypes from 'prop-types'
// import { Link } from "react-router-dom";


export default function Navbar(props) {
  return (
    <>
    <nav className={`navbar navbar-${props.mode || props.ybgmode} navbar-expand-lg bg-${props.mode || props.ybgmode}`} >
    
        <div className="container-fluid">
            <a className={`navbar-brand text-${props.mode==='light'? 'primary':'warning'}`} href="/">{props.title1}<strong>{props.title2}</strong></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarScroll">
                <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/about">{props.aboutText}</a>
                    </li>
                </ul>
                <button type="button" onClick={props.yellowMode} className="btn btn-warning">Yellow</button>
                <button type="button" onClick={props.greenMode} className="btn btn-success mx-2">Green</button>
                <button type="button" onClick={props.blueMode} className="btn btn-info mx-1">Light Blue</button>
            </div>
        </div>
        <div className={`form-check mx-2 form-switch text-${props.mode==='light'?'dark':'light'}`}>
            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.btntext}</label>
        </div> 
    </nav>
    </>
  )
}


Navbar.propTypes = {
    title1: PropTypes.string.isRequired,
    title2: PropTypes.string,
    aboutText: PropTypes.string,
    contact: PropTypes.string
}

Navbar.defaultProps = {
    title1: 'Set Title Here',
    aboutText: 'set about text here'
}

