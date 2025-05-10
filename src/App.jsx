import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Movimientos from "./pages/Movimientos";
import Personal from "./pages/Personal";
import Rendicion from "./pages/Rendicion";
import Camion from "./pages/Camion";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Camion" element={<Camion />} />
          <Route path="/Personal" element={<Personal />} />
          <Route path="/Movimientos" element={<Movimientos />} />
          <Route path="/Rendicion" element={<Personal />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
