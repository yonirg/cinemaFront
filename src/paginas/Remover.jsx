import axios from "axios";

import React, { useState } from "react";

const API_URL = "http://localhost:3001/filmes";

function Remover() {
  const deleteFilme = (id) => {
    axios
      .delete(`${API_URL}/${id}`)
      .then((res) => console.log(res))
      .catch((erro) => console.log(erro));
  };

  const [id, setId] = useState("");
  return (
    <div className="remover">
    <form>
      <label className='label' htmlFor="id">Id:</label>
      <br />
      <input
      className="campo-de-busca"
        type="text"
        id="id"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <button
      className="bnt"
        onClick={(e) => {
          e.preventDefault();
          deleteFilme(id);
        }}
      >
        Deletar
      </button>
    </form>
    </div>
  );
}

export default Remover;
