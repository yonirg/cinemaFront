import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import logo from '../imgs/logo.png'


function Footer(){
    return(
        <footer className="rodape">
            <img className="logo" src={logo} alt="logo" />
            <p className="copyright">&copy; 2022 Carboxine - All Rights Reserved </p>
        </footer>  
    )
}

export default Footer;