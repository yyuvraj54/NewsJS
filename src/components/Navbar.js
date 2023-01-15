import React, { Component } from 'react'
// import  PropTypes  from 'prop-types'
import { Link } from 'react-router-dom'
export class Navbar extends Component {
  render() {
    return (
      <div>

        <nav className="navbar fixed-top navbar-expand-lg bg-light">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">NewsJs</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/Business">Business</Link>
                </li>
                
                <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/Entertainment">Entertainment</Link>
                </li>


                <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/Health">Health</Link>
                </li>

                <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/Science">Science</Link>
                </li>


                <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/Sports">Sports</Link>
                </li>


                <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/Technology">Technology</Link>
                </li>

            </ul>
            <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
            </div>
        </div>
        </nav>
        
      </div>
    )
  }
}

export default Navbar
