import React from "react";
import logo from '../assets/image/potatodoc-logo-removebg-preview.png'
import './css/navbar.css'
export default function navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="" width="100px" height="50px"/>
            {/* <span>PotatoDoc</span> */}
          </a>
          <button
            className="navbar-toggler shadow-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className='bx bx-menu'></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
                <a className="nav-link" href="/info">Information</a>
            </div>
            <div className="navbar-nav">
                <a className="nav-link" href="/disease">Disease Management</a>
            </div>
            <div className="navbar-nav ">
                <a className="nav-link" href="/pest">Pest Management</a>
            </div>
            <a className="btn btn-primary shadow-none" href="/#" role="button">Inquiry</a>

          </div>
        </div>
      </nav>
    </div>
  );
}
