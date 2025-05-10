import React from "react";
import "../css/HomePage.css";
import { PiTruckDuotone } from "react-icons/pi";
import { AiOutlineHome } from "react-icons/ai";
import { GrTransaction } from "react-icons/gr";
import { IoMdPaper } from "react-icons/io";
import logo from "/src/assets/img/LogoFyLNoa.png";
import { BsPeople } from "react-icons/bs";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav className="sidebar">
        <header>
          <div className="image-text">
            <span className="image">
              <img src={logo} alt="logo" />
            </span>
            <div className="text header-text">
              <span className="name">Flete y Logistica</span>
              <span className="profession">NOA</span>
            </div>
          </div>
        </header>
        <div className="menu-bar">
          <div className="menu">
            <ul className="menu-links">
              <li className="nav-link">
                <Link to="/HomePage">
                  <AiOutlineHome className="icon" />
                  <span className="text nav-text">Inicio</span>
                </Link>
              </li>
              <li className="nav-link">
                <Link to="/Camion">
                  <PiTruckDuotone className="icon" />
                  <span className="text nav-text">Camion</span>
                </Link>
              </li>
              <li className="nav-link">
                <Link to="/Personal">
                  <BsPeople className="icon" />
                  <span className="text nav-text">Personal</span>
                </Link>
              </li>
              <li className="nav-link">
                <Link to="/Movimientos">
                  <GrTransaction className="icon" />
                  <span className="text nav-text">Movimientos</span>
                </Link>
              </li>
              <li className="nav-link">
                <Link to="/Rendicion">
                  <IoMdPaper className="icon" />
                  <span className="text nav-text">Rendicion</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
