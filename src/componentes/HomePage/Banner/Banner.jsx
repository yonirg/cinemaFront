import React from "react";
import "./Banner.css"
import carboxine from "./Carboxine.gif" 

export default function Banner() {
    return (
        <>
        <header>
            <div  className="faixa">
             <p>Filmes em cartaz!</p>
            </div>
             <img className="imagemBanner" src={carboxine} alt="imagemBanner" />
        </header>
        </>
    )
}