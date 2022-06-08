import React from "react";
import "./Banner.css"
import carboxine from "../../../imgs/Carboxine.gif"

export default function Banner() {
    return (
        <>
        <header>
            <div  className="faixaBanner">
             <p>Filmes em cartaz!</p>
            </div>
             <img className="imagemBanner" src={carboxine} alt="imagemBanner" />
        </header>
        </>
    )
}