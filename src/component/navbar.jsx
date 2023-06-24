import React from "react";
import { Link } from "react-router-dom";

import logo from "../assets/image/potatodoc-logo-removebg-preview.png";
import "./css/navbar.css";
export default function navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <a className="navbar-brand" href="/PotatoDoc-Reactjs">
          <img src={logo} alt="" width="200px" height="100px" />
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
          <i className="bx bx-menu"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto ">
            <Link
              className="nav-link custom-btn btn-1 shadow-none"
              to="/PotatoDoc-Reactjs"
            >
              Home
            </Link>
          </div>
          <div className="navbar-nav">
            <Link
              className="nav-link custom-btn btn-1 shadow-none"
              to="/PotatoDoc-Reactjs/info"
            >
              Information
            </Link>
          </div>
          <div className="navbar-nav">
            <Link
              className="nav-link custom-btn btn-1 shadow-none"
              to="/PotatoDoc-Reactjs/disease"
            >
              Disease Management
            </Link>
            {/* <a
              className="nav-link custom-btn btn-1 shadow-none"
              href="/PotatoDoc-Reactjs/disease"
            >
              Disease Management
            </a> */}
          </div>
          <div className="navbar-nav ">
            <Link
              className="nav-link custom-btn btn-1 shadow-none"
              to="/PotatoDoc-Reactjs/pest"
            >
              Pest Management
            </Link>
            {/* <a
              className="nav-link custom-btn btn-1 shadow-none"
              href="/PotatoDoc-Reactjs/pest"
            >
              Pest Management
            </a> */}
          </div>
          {/* <a className="btn btn-primary shadow-none" href="/#" role="button">Inquiry</a> */}
        </div>
      </nav>
    </div>
  );
}
