import React from "react";
import "./ParaCriancas.css"

function ParaCriancas() {
    return(
        <><div className="titulo">
            <h3>Para as crianças</h3>
            <hr/>
        </div>
        <div className="FuturoLançamentoMarvel">

                <div className="filme1">
                    <img className="imgs" src={`https://cdnim.prd.cineticket.com.br/asset/movie/7209/minions-2-poster-tablet.jpg`} />
                    <p className="nomeFilme">Minions 2: A Origem de Gru</p>
                    <p className="detalhes">2022</p>
                    <p className="detalhes">L</p>
                    <p className="detalhes">Aventura</p>
                </div>
                <div className="filme2">
                    <img className="imgs" src={`https://cdnim.prd.cineticket.com.br/asset/movie/7220/pluft-o-fantasminha-poster-tablet-4492.jpg`} />
                    <p className="nomeFilme">Pluft o Fantasminha</p>
                    <p className="detalhes">2022</p>
                    <p className="detalhes">L</p>
                    <p className="detalhes">ficção cientifica</p>
                </div>
                <div className="filme3">
                    <img className="imgs" src={`https://cdnim.prd.cineticket.com.br/asset/movie/7588/dc-liga-dos-superpets-poster-tablet-4527.jpg`} />
                    <p className="nomeFilme">DC Liga dos Superpets</p>
                    <p className="detalhes">2022</p>
                    <p className="detalhes">L</p>
                    <p className="detalhes">Ação e aventura</p>
                </div>
                <div className="filme4">
                    <img className="imgs" src={`https://cdnim.prd.cineticket.com.br/asset/movie/7519/lightyear-poster-tablet-4519.jpg`} />
                    <p className="nomeFilme">Lithyear</p>
                    <p className="detalhes">2022</p>
                    <p className="detalhes">L</p>
                    <p className="detalhes">Ação e aventura</p>
                </div>
                <div className="filme5">
                    <img className="imgs" src={`https://cdnim.prd.cineticket.com.br/asset/movie/7719/gato-de-botas-2-o-ultimo-pedido-poster-tablet-4504.jpg`} />
                    <p className="nomeFilme">Gato de Botas 2 O Último Pedido</p>
                    <p className="detalhes">2022</p>
                    <p className="detalhes">L</p>
                    <p className="detalhes">Ação e aventura</p>
                </div>
            </div>
            </>
    )
}

export default ParaCriancas;