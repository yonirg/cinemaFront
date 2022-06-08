import React from "react";
import "./Header.css";
import logo from '../imgs/logo.png'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="cabecalho">
      <nav>
        <ul>
          <li>
            <img className="logo" src={logo} alt="logo" />
          </li>
        </ul>
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
