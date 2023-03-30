import React from 'react'
// import './Navbar.css'

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark">
  <div className="container">
    <a className="navbar-brand fw-bold fs-3 text-white" href="/">News Telportor</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active text-white" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="products">Feed</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="/">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="/">Contact</a>
        </li>
      </ul>

      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success mx-4" type="submit">Search</button>
      </form>

      <div className="buttons">
        <a href="/" className="btn btn-outline-light ">
        Login
        </a>
        <a href="/" className="btn btn-outline-light mx-2">
        Register
        </a>
      </div>

    </div>
  </div>
</nav>
    </div>
  )
}
