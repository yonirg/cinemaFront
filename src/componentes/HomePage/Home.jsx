import React, {useState, useEffect} from "react";
import "./Home.css"
import FilmesMarvel from "./FilmesMarvel.jsx";
import FilmesDC from "./FilmesDC";


function Home() {

    return (
        <div className="banner">
            <header className="faixa"> Filmes em cartaz!</header>
            <FilmesMarvel/>
            <FilmesDC/>
        </div>
    )
}

export default Home;