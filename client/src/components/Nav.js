import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <ul className="nav justify-content-end">
        <li className="nav-item">
          <Link to="/" style={{ textDecoration: "none" }}>
            <a className="nav-link active" aria-current="page" href="#">
              <button type="button" className="btn btn-info">
                Home
              </button>
            </a>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/create" style={{ textDecoration: "none" }}>
            <a className="nav-link" href="#">
              <button type="button" className="btn btn-info">
                Create
              </button>
            </a>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/signin" style={{ textDecoration: "none" }}>
            <a className="nav-link" href="#">
              <button type="button" className="btn btn-info">
                Logout
              </button>
            </a>
          </Link>
        </li>
      </ul>
    </>
  );
}

export default Nav;
