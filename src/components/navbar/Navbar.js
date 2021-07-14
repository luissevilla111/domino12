import classes from "./Navbar.module.css";
import { useState, Fragment } from "react";
import { NavLink } from "react-router-dom";
import PreGameBar from "./PreGameBar/PreGameBar";
import { useSelector } from "react-redux";
import IconNavBar from "../UI/IconNavbar/IconNavBar";

const NavBar = () => {
  const isMenuAct = useSelector((state) => state.navbarSite.opened);
  const isLogged = useSelector((state) => state.auth.isLogged);
  return (
    <div style={{ position: "relative", zIndex: 99 }}>
      <div className={classes["cont-nav"]}>
        <ul className={classes["list-menu"]}>
          {isMenuAct && (
            <Fragment>
              {!isLogged && (
                <Fragment>
                  <li>
                    <NavLink to="/home">Home</NavLink>
                  </li>
                  <li>
                    <NavLink to="/login">Login</NavLink>
                  </li>
                </Fragment>
              )}

              {isLogged && <PreGameBar />}
            </Fragment>
          )}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
