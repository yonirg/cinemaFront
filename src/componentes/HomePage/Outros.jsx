import React from "react";
import "./Outros.css"

function Outros() {
    return(
        <><div className="titulo">
            <h3>Outros</h3>
            <hr/>
        </div>
        <div className="FuturoLançamentoMarvel">

                <div className="filme1">
                    <img className="imgs" src={`https://cdnim.prd.cineticket.com.br/asset/movie/7688/after-depois-da-promessa-poster-tablet-4488.jpg`} />
                    <p className="nomeFilme">AFTER Depois da Promessa</p>
                    <p className="detalhes">2022</p>
                    <p className="detalhes">+10</p>
                    <p className="detalhes">Romance</p>
                </div>
                <div className="filme2">
                    <img className="imgs" src={`https://cdnim.prd.cineticket.com.br/asset/movie/7653/super-quem-poster-mobile-4436.jpg`} />
                    <p className="nomeFilme">Super Quem?</p>
                    <p className="detalhes">2022</p>
                    <p className="detalhes">+12</p>
                    <p className="detalhes">Comédia</p>
                </div>
                <div className="filme3">
                    <img className="imgs" src={`https://cdnim.prd.cineticket.com.br/asset/movie/7316/avatar-o-caminho-da-agua-poster-tablet-4523.jpg`} />
                    <p className="nomeFilme">Avatar: O Caminho <br/>da Água</p>
                    <p className="detalhes">2022</p>
                    <p className="detalhes">L</p>
                    <p className="detalhes">Ação e aventura</p>
                </div>
                <div className="filme4">
                    <img className="imgs" src={`https://cdnim.prd.cineticket.com.br/asset/movie/7766/odd-taxi-in-the-woods-poster-tablet-4573.png`} />
                    <p className="nomeFilme"> Odd Taxi: In The Wood</p>
                    <p className="detalhes">2022</p>
                    <p className="detalhes">L</p>
                    <p className="detalhes">Anime</p>
                </div>
                <div className="filme5">
                    <img className="imgs" src={`https://cdnim.prd.cineticket.com.br/asset/movie/7713/elvis-poster-tablet-4572.jpg`} />
                    <p className="nomeFilme">Elvis</p>
                    <p className="detalhes">2022</p>
                    <p className="detalhes">+12</p>
                    <p className="detalhes">Drama</p>
                </div>
            </div>
            </>
    )
}

export default Outros;