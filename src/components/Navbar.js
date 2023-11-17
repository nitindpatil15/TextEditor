import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} mt-3 p-3`}>
        <div className="container-fluid">
          <Link className="navbar-brand text-primary" to="/">{props.heading}</Link>
          {/* <Link className="navbar-brand text-primary" To="">{props.heading}</Link> */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/"> Home </Link>
                {/* <Link className="nav-link" aria-current="page" To="/"> Home </Link> */}
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about"> About </Link>
                {/* <Link className="nav-link" To="/about"> About </Link> */}
              </li>
            </ul>
            
            <div className="form-check form-switch">
              <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault" />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
                <span className="text-secondary">EnableDarkMode</span>
              </label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

