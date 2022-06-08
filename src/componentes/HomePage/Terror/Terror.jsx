import React from "react";
import "./Terror.css"

function Terror() {
    return(
        <><div className="titulo">
            <h3>Terror</h3>
            <hr/>
        </div>
        <div className="container">

                <div className="filme1">
                    <img className="imgs" src={`https://cdnim.prd.cineticket.com.br/asset/movie/7651/veja-por-mim-poster-tablet-4458.jpg`} />
                    <p className="nomeFilme">Veja Por Mim</p>
                    <p className="detalhes">2022</p>
                    <p className="detalhes">+14</p>
                    <p className="detalhes">Suspense</p>
                </div>
                <div className="filme2">
                    <img className="imgs" src={`https://cdnim.prd.cineticket.com.br/asset/movie/7722/ate-a-morte-poster-tablet-4510.jpg`} />
                    <p className="nomeFilme">Até a morte</p>
                    <p className="detalhes">2022</p>
                    <p className="detalhes">+16</p>
                    <p className="detalhes">Suspense</p>
                </div>
                <div className="filme3">
                    <img className="imgs" src={`https://cdnim.prd.cineticket.com.br/asset/movie/7726/gemeo-maligno-poster-tablet-4567.jpg`} />
                    <p className="nomeFilme">Gêmeo Maligno</p>
                    <p className="detalhes">2022</p>
                    <p className="detalhes">+16</p>
                    <p className="detalhes">Terror</p>
                </div>
                <div className="filme4">
                    <img className="imgs" src={`https://cdnim.prd.cineticket.com.br/asset/movie/7587/o-telefone-preto-poster-tablet-4301.jpg`} />
                    <p className="nomeFilme">O Telefone Preto</p>
                    <p className="detalhes">2022</p>
                    <p className="detalhes">+18</p>
                    <p className="detalhes">Terror</p>
                </div>
                <div className="filme5">
                    <img className="imgs" src={`https://cdnim.prd.cineticket.com.br/asset/movie/7718/nao-nao-olhe-poster-desktop-4503.jpg`} />
                    <p className="nomeFilme">Não! Não Olhe!</p>
                    <p className="detalhes">2022</p>
                    <p className="detalhes">+16</p>
                    <p className="detalhes">Terror</p>
                </div>
            </div>
            </>
    )
}

export default Terror;