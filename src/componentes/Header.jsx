import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="cabecalho">
      <nav>
        <ul>
          <Link to="/adicionar">
            <li> adicionar filme</li>
          </Link>
        </ul>
        <ul>
          <Link to="/remover">
            <li> remover filme</li>
          </Link>
          
        </ul>
        <ul>
          <Link to="/atualizar">
            <li> atualizar filme</li>
          </Link>
          
        </ul>
      </nav>
    </header>
  );
}

export default Header;
