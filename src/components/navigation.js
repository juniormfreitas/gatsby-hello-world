import React from "react"
import { Link } from "gatsby"

export default () => (
  <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
    <div className="container">
      <Link className="navbar-brand" to="/">
        Start Bootstrap
      </Link>
      <button
        className="navbar-toggler navbar-toggler-right"
        type="button"
        data-toggle="collapse"
        data-target="#navbarResponsive"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        Menu
        <i className="fas fa-bars"></i>
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about/">
              About
            </Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/my-files/">
              All Files
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
)
