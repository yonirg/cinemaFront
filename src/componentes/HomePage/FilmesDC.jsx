import React from "react";
import "./FilmesDC.css"
function FilmesDC() {
    return(
        <><div className="titulo">
            <h3>Em breve DC Studio</h3>
            <hr/>
        </div>
        <div className="FuturoLançamentoMarvel">

                <div className="filme1">
                    <img className="imgs" src={`https://thedirect.s3.amazonaws.com/media/photos/FEADE5E0-B8D1-4E48-B084-8B2E8E196203.jpg`} />
                    <p className="nomeFilme">Shazan! Fury of gods</p>
                    <p className="detalhes">2022</p>
                    <p className="detalhes">+12</p>
                    <p className="detalhes">Ação e aventura</p>
                </div>
                <div className="filme2">
                    <img className="imgs" src={`data:image/jpeg;base64,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`} />
                    <p className="nomeFilme">Adão Negro</p>
                    <p className="detalhes">2022</p>
                    <p className="detalhes">+12</p>
                    <p className="detalhes">Ação e aventura</p>
                </div>
                <div className="filme3">
                    <img className="imgs" src={`https://cinema10.com.br/upload/filmes/filmes_15709_besouro-azul.jpg`} />
                    <p className="nomeFilme">Besouro azul</p>
                    <p className="detalhes">Sem data</p>
                    <p className="detalhes">+12</p>
                    <p className="detalhes">Ação e aventura</p>
                </div>
                <div className="filme4">
                    <img className="imgs" src={`https://media.fstatic.com/8twIE0sgri3BsnMuTEPriAs0qCw=/290x478/smart/media/movies/covers/2021/10/batgirl-the-movie-fan-casting-poster-37791-medium.jpg`} />
                    <p className="nomeFilme">Batgirl</p>
                    <p className="detalhes">Sem data</p>
                    <p className="detalhes">+12</p>
                    <p className="detalhes">Ação e aventura</p>
                </div>
                <div className="filme5">
                    <img className="imgs" src={`https://cinema10.com.br/upload/filmes/filmes_15945_design-sem-nome-2.png`} />
                    <p className="nomeFilme">Mulher-maravilha 3</p>
                    <p className="detalhes">Sem data</p>
                    <p className="detalhes">+12</p>
                    <p className="detalhes">Ação e aventura</p>
                </div>
            </div>
            </>
    )
}

export default FilmesDC;