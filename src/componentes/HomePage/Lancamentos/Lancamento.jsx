import React from "react";
import "./Lancamento.css"

function Lancamento() {
    return(
        <><div className="titulo">
            <h3>Lançamentos</h3>
            <hr/>
        </div>
        <div className="containerLancamento">

                <div className="filme1">
                    <img className="imgsLancamento" src={`https://cdnim.prd.cineticket.com.br/asset/movie/6541/top-gun-maverick-poster-desktop-4478.jpg`} />
                    <p className="nomeFilme">Namor</p>
                    <p className="detalhes">Em breve</p>
                    <p className="detalhes">+12</p>
                    <p className="detalhes">Ação e aventura</p>
                </div>
                <div className="filme2">
                    <img className="imgs" src={`https://cdnim.prd.cineticket.com.br/asset/movie/7517/doutor-estranho-no-multiverso-da-loucura-poster-desktop-4479.jpg`} />
                    <p className="nomeFilme">Doutor Estranho<br/> no Multiverso<br/> da Loucura</p>
                    <p className="detalhes">2022</p>
                    <p className="detalhes">+14</p>
                    <p className="detalhes">ficção cientifica</p>
                </div>
                <div className="filme3">
                    <img className="imgs" src={`https://cdnim.prd.cineticket.com.br/asset/movie/7689/jurassic-world-dominio-poster-desktop-4502.jpg`} />
                    <p className="nomeFilme">Jurassic World: Domínio</p>
                    <p className="detalhes">2022</p>
                    <p className="detalhes">L</p>
                    <p className="detalhes">Ação e aventura</p>
                </div>
                <div className="filme4">
                    <img className="imgs" src={`https://cdnim.prd.cineticket.com.br/asset/movie/7534/sonic-2-poster-desktop-4380.jpg`} />
                    <p className="nomeFilme">Sonic 2</p>
                    <p className="detalhes">2022</p>
                    <p className="detalhes">+10</p>
                    <p className="detalhes">Ação e aventura</p>
                </div>
                <div className="filme5">
                    <img className="imgs" src={`https://cdnim.prd.cineticket.com.br/asset/movie/7720/a-medium-poster-desktop-4509.jpg`} />
                    <p className="nomeFilme">A médium</p>
                    <p className="detalhes">2022</p>
                    <p className="detalhes">+16</p>
                    <p className="detalhes">Terror</p>
                </div>
            </div>
            </>
    )
}

export default Lancamento;