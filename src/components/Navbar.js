import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
export default function Navbar(props) {
    return (
        <div>
            <nav className={`navbar navbar-${props.mode} navbar-expand-lg bg-${props.mode}`}>
                <div className="container-fluid">
                    <Link className="navbar-brand text-primary" to="/"><h4>{props.title}</h4></Link>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/about">About</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
                    </div>
                </div>
            </nav>
        </div>
    )
}

Navbar.propTypes = {
    title: PropTypes.string
}
Navbar.defaultProps = {
    title: 'AppName'
}

