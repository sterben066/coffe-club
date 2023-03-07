import React from "react";
import "../style/nav.css";

let Menu = () => {
  return(
    <nav className="Menu">
      <ul className="lista">
        <li className="item"><a href="https://www.google.com" target="_blank" rel="noopener noreferrer">Inicio</a></li>
        <li className="item"><a href="https://www.google.com" target="_blank" rel="noopener noreferrer">Tipos</a></li>
        <li className="item"><a href="https://www.google.com" target="_blank" rel="noopener noreferrer">Compras Online</a></li>
        <li className="item"><a href="https://www.google.com" target="_blank" rel="noopener noreferrer">Contactanos</a></li>
      </ul>
    </nav>
  );
};

export default Menu;