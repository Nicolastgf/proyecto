import React from "react";
import NavBar from "/src/components/NavBar.jsx";
import TableEdit from "/src/components/Table.jsx"; // O asegurate que esté bien la ruta
import "../css/HomePage.css";

const HomePage = () => {
  return (
    <div className="page-container">
      <div className="navbar-container">
        <NavBar />
      </div>
      <div className="tableedit-container">
        <TableEdit />
      </div>
    </div>
  );
};

export default HomePage;
