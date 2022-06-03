import React from "react";
import "./FilmeCard.css"

function FilmeCard({ filme }) {
  return (
      <div className="filme-card">
        {filme.nome}<br /><br />
        {filme.genero}<br /><br />
        {filme.descricao}
      </div>
  )

}

export default FilmeCard;
