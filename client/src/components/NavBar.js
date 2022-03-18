import { AuthContext } from "../context/AuthContext.js";
import React, { useContext } from "react";
import { Outlet, NavLink, useNavigate } from "react-router-dom";

export const NavBar = () => {
  const navigate = useNavigate();
  const auth = useContext(AuthContext);

  const logoutHandler = (event) => {
    event.preventDefault();
    auth.logout();
    navigate("/");
  };

  return (
    <>
      <nav>
        <div className="nav-wrapper blue">
          <span className="brand-logo">Reduce Links</span>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <NavLink to="/links">links</NavLink>
            </li>
            <li>
              <NavLink to="/create">create</NavLink>
            </li>
            <li>
              <NavLink to="/detail">detail</NavLink>
            </li>
            <li>
              <a href="/" onClick={logoutHandler}>
                Logout
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="container">
        <Outlet />
      </div>
    </>
  );
};
