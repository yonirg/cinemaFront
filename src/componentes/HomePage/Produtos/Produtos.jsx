import React from "react";
import "./Produtos.css"

function Produtos () {
    return (
        <>
        <p className="titulo">Produtos</p>
        <hr/>
        <div className="containerProdutos">
            <div><img className="imagem" src={`https://images.pexels.com/photos/7991180/pexels-photo-7991180.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`}/></div>
            <div><img className="imagem" src={`https://images.pexels.com/photos/4199524/pexels-photo-4199524.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`}/></div>
            <div><img className="imagem" src={`https://images.pexels.com/photos/1191710/pexels-photo-1191710.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`}/></div>
        </div>
        </>
        


    )
}

export default Produtos;