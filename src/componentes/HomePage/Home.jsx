import React, {useState, useEffect} from "react";
import "./Home.css"
import FilmesMarvel from "./FilmesMarvel.jsx";
import FilmesDC from "./FilmesDC";
import Lancamento from "./Lancamento.jsx";
import ParaCriancas from "./ParaCriancas.jsx";
import Terror from "./Terror.jsx";
import Outros from "./Outros";


function Home() {

    return (
        <div className="banner">
            <header className="faixa"> Filmes em cartaz!</header>
            <Lancamento />
            <FilmesMarvel/>
            <FilmesDC/>
            <ParaCriancas />
            <Terror/>
            <Outros />
        </div>
    )
}

export default Home;