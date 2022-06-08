import React, {useState, useEffect} from "react";
import "./Home.css"
import FilmesMarvel from "./FilmesMrvel/FilmesMarvel.jsx";
import FilmesDC from "./FilmesDC/FilmesDC.jsx";
import Lancamento from "./Lancamentos/Lancamento.jsx";
import ParaCriancas from "./ParaCrincas/ParaCriancas.jsx";
import Terror from "./Terror/Terror.jsx";
import Outros from "./Outros/Outros";
import Produtos from "./Produtos/Produtos";
import Banner from "./Banner/Banner";


function Home() {

    return (
        <div className="home">
            <Banner />
            <Lancamento />
            <FilmesMarvel/>
            <FilmesDC/>
            <ParaCriancas />
            <Terror/>
            <Outros />
            <Produtos />
        </div>
    )
}

export default Home;