import React from "react";
import "./ParaCriancas.css"

function ParaCriancas() {
    return(
        <><div className="tituloParaCriancas">
            <h3>Para as crianças</h3>
            <hr/>
        </div>
        <div className="containerParaCriancas">

                <div className="filme1">
                    <img className="imgsParaCriancas" src={`https://cdnim.prd.cineticket.com.br/asset/movie/7209/minions-2-poster-tablet.jpg`} />
                    <p className="nomeFilmeParaCriancas">Minions 2: A Origem de Gru</p>
                    <p className="detalhesParaCriancas">2022</p>
                    <p className="detalhesParaCriancas">L</p>
                    <p className="detalhesParaCriancas">Aventura</p>
                </div>
                <div className="filme2">
                    <img className="imgsParaCriancas" src={`https://cdnim.prd.cineticket.com.br/asset/movie/7220/pluft-o-fantasminha-poster-tablet-4492.jpg`} />
                    <p className="nomeFilmeParaCriancas">Pluft o Fantasminha</p>
                    <p className="detalhesParaCriancas">2022</p>
                    <p className="detalhesParaCriancas">L</p>
                    <p className="detalhesParaCriancas">ficção cientifica</p>
                </div>
                <div className="filme3">
                    <img className="imgsParaCriancas" src={`https://cdnim.prd.cineticket.com.br/asset/movie/7588/dc-liga-dos-superpets-poster-tablet-4527.jpg`} />
                    <p className="nomeFilmeParaCriancas">DC Liga dos Superpets</p>
                    <p className="detalhesParaCriancas">2022</p>
                    <p className="detalhesParaCriancas">L</p>
                    <p className="detalhesParaCriancas">Ação e aventura</p>
                </div>
                <div className="filme4">
                    <img className="imgsParaCriancas" src={`https://cdnim.prd.cineticket.com.br/asset/movie/7519/lightyear-poster-tablet-4519.jpg`} />
                    <p className="nomeFilmeParaCriancas">Lithyear</p>
                    <p className="detalhesParaCriancas">2022</p>
                    <p className="detalhesParaCriancas">L</p>
                    <p className="detalhesParaCriancas">Ação e aventura</p>
                </div>
                <div className="filme5">
                    <img className="imgsParaCriancas" src={`https://cdnim.prd.cineticket.com.br/asset/movie/7719/gato-de-botas-2-o-ultimo-pedido-poster-tablet-4504.jpg`} />
                    <p className="nomeFilmeParaCriancas">Gato de Botas 2 O Último Pedido</p>
                    <p className="detalhesParaCriancas">2022</p>
                    <p className="detalhesParaCriancas">L</p>
                    <p className="detalhesParaCriancas">Ação e aventura</p>
                </div>
            </div>
            </>
    )
}

export default ParaCriancas;