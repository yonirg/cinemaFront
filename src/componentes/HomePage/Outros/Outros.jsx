import React from "react";
import "./Outros.css"

function Outros() {
    return(
        <><div className="tituloOutros">
            <h3>Outros</h3>
            <hr/>
        </div>
        <div className="containerOutros">

                <div className="filme1">
                    <img className="imgsOutros" src={`https://cdnim.prd.cineticket.com.br/asset/movie/7688/after-depois-da-promessa-poster-tablet-4488.jpg`} />
                    <p className="nomeFilmeOutros">AFTER Depois da Promessa</p>
                    <p className="detalhesOutros">2022</p>
                    <p className="detalhesOutros">+10</p>
                    <p className="detalhesOutros">Romance</p>
                </div>
                <div className="filme2">
                    <img className="imgsOutros" src={`https://cdnim.prd.cineticket.com.br/asset/movie/7653/super-quem-poster-mobile-4436.jpg`} />
                    <p className="nomeFilmeOutros">Super Quem?</p>
                    <p className="detalhesOutros">2022</p>
                    <p className="detalhesOutros">+12</p>
                    <p className="detalhesOutros">Comédia</p>
                </div>
                <div className="filme3">
                    <img className="imgsOutros" src={`https://cdnim.prd.cineticket.com.br/asset/movie/7316/avatar-o-caminho-da-agua-poster-tablet-4523.jpg`} />
                    <p className="nomeFilmeOutros">Avatar: O Caminho <br/>da Água</p>
                    <p className="detalhesOutros">2022</p>
                    <p className="detalhesOutros">L</p>
                    <p className="detalhesOutros">Ação e aventura</p>
                </div>
                <div className="filme4">
                    <img className="imgsOutros" src={`https://cdnim.prd.cineticket.com.br/asset/movie/7766/odd-taxi-in-the-woods-poster-tablet-4573.png`} />
                    <p className="nomeFilmeOutros"> Odd Taxi: In The Wood</p>
                    <p className="detalhesOutros">2022</p>
                    <p className="detalhesOutros">L</p>
                    <p className="detalhesOutros">Anime</p>
                </div>
                <div className="filme5">
                    <img className="imgsOutros" src={`https://cdnim.prd.cineticket.com.br/asset/movie/7713/elvis-poster-tablet-4572.jpg`} />
                    <p className="nomeFilmeOutros">Elvis</p>
                    <p className="detalhesOutros">2022</p>
                    <p className="detalhesOutros">+12</p>
                    <p className="detalhesOutros">Drama</p>
                </div>
            </div>
            </>
    )
}

export default Outros;