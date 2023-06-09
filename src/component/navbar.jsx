import React from "react";
import logo from '../assets/image/potatodoc-logo-removebg-preview.png'
import './css/navbar.css'
export default function navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
          <a className="navbar-brand" href="/PotatoDoc-Reactjs">
            <img src={logo} alt="" width="200px" height="60px"/>
            {/* <span>PotatoDoc</span> */}
          </a>
          <button
            className="navbar-toggler shadow-none"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className='bx bx-menu'></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto ">
                <a className="nav-link custom-btn btn-1 shadow-none" href="/PotatoDoc-Reactjs">Home</a>
            </div>
          <div className="navbar-nav">
                <a className="nav-link custom-btn btn-1 shadow-none" href="/info">Information</a>
            </div>
            <div className="navbar-nav">
                <a className="nav-link custom-btn btn-1 shadow-none" href="/disease">Disease Management</a>
            </div>
            <div className="navbar-nav ">
                <a className="nav-link custom-btn btn-1 shadow-none" href="/pest">Pest Management</a>
            </div>
            {/* <a className="btn btn-primary shadow-none" href="/#" role="button">Inquiry</a> */}

          </div>
      </nav>
    </div>
      
  );
}
