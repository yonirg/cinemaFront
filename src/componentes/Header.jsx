import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="cabecalho">
      <nav>
        <ul>
          <Link className="links" to="/">
            <li>Home</li>
          </Link>
        </ul>
        <ul>
          <Link className="links" to="/adicionar">
            <li> Adicionar filme</li>
          </Link>
        </ul>
        <ul>
          <Link className="links" to="/remover">
            <li> Remover filme</li>
          </Link>
          
        </ul>
        <ul>
          <Link className="links" to="/atualizar">
            <li> Atualizar filme</li>
          </Link>
          
        </ul>
      </nav>
    </header>
  );
}

export default Header;
