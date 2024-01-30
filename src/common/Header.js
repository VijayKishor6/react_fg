import React from "react";

export const Header = () => {
  return (
    <div classNameName="header">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid ">
          <div className="d-flex justify-content-between w-100">
            <div>
              <a className="navbar-brand" href="#">
                <img src={require('../asests/logo.png')} className="logo" alt="sf" />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav  ms-auto gap-4">
                <li className="nav-item">
                  <a className="nav-link fw-medium" aria-current="page" href="#">
                    FEATURES
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link btn border-0 dropdown-toggle fw-medium"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    INDUSTRIES
                  </a>
                  <ul className="dropdown-menu dropdown-menu-dark">
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link fw-medium" href="#">
                    FAQ
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link fw-medium" href="#">
                    CONTACT US
                  </a>
                </li>
                <li className="nav-item">
                  <button
                    type="button"
                    className="btn btn-primary rounded-pill px-4 fw-mediuml"
                  >
                    LOGIN
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
