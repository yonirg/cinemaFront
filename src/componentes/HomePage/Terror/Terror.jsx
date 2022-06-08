import React from "react";
import "./Terror.css"

function Terror() {
    return(
        <><div className="tituloTerror">
            <h3>Terror</h3>
            <hr/>
        </div>
        <div className="containerTerror">

                <div className="filme1">
                    <img className="imgsTerror" src={`https://cdnim.prd.cineticket.com.br/asset/movie/7651/veja-por-mim-poster-tablet-4458.jpg`} />
                    <p className="nomeFilmeTerror">Veja Por Mim</p>
                    <p className="detalhesTerror">2022</p>
                    <p className="detalhesTerror">+14</p>
                    <p className="detalhesTerror">Suspense</p>
                </div>
                <div className="filme2">
                    <img className="imgsTerror" src={`https://cdnim.prd.cineticket.com.br/asset/movie/7722/ate-a-morte-poster-tablet-4510.jpg`} />
                    <p className="nomeFilmeTerror">Até a morte</p>
                    <p className="detalhesTerror">2022</p>
                    <p className="detalhesTerror">+16</p>
                    <p className="detalhesTerror">Suspense</p>
                </div>
                <div className="filme3">
                    <img className="imgsTerror" src={`https://cdnim.prd.cineticket.com.br/asset/movie/7726/gemeo-maligno-poster-tablet-4567.jpg`} />
                    <p className="nomeFilmeTerror">Gêmeo Maligno</p>
                    <p className="detalhesTerror">2022</p>
                    <p className="detalhesTerror">+16</p>
                    <p className="detalhesTerror">Terror</p>
                </div>
                <div className="filme4">
                    <img className="imgsTerror" src={`https://cdnim.prd.cineticket.com.br/asset/movie/7587/o-telefone-preto-poster-tablet-4301.jpg`} />
                    <p className="nomeFilmeTerror">O Telefone Preto</p>
                    <p className="detalhesTerror">2022</p>
                    <p className="detalhesTerror">+18</p>
                    <p className="detalhesTerror">Terror</p>
                </div>
                <div className="filme5">
                    <img className="imgsTerror" src={`https://cdnim.prd.cineticket.com.br/asset/movie/7718/nao-nao-olhe-poster-desktop-4503.jpg`} />
                    <p className="nomeFilmeTerror">Não! Não Olhe!</p>
                    <p className="detalhesTerror">2022</p>
                    <p className="detalhesTerror">+16</p>
                    <p className="detalhesTerror">Terror</p>
                </div>
            </div>
            </>
    )
}

export default Terror;