import axios from "axios";
import React, { useEffect, useState } from "react";
import FilmeCard from "./FilmeCard.jsx";

function Catalogo() {
  const API_URL = "https://cinema--api.herokuapp.com/filmes";

  const [filmes, setFilmes] = useState([]);

  const getFilmes = () => {
    axios
      .get(API_URL)
      .then((res) => setFilmes(res.data.mensagem.filme))
      .catch((erro) => console.log(erro));
  };

  useEffect(() => {
    getFilmes();
    console.log(filmes);
  }, []);

  return (
    <div className="catalogo">
      <div className="pesquisa">
        <input
          type="text"
          placeholder="qual filme deseja buscar?"
          className="campo-de-busca"
        />
        <button>pesquisar</button>
      </div>

      <div className="lista-de-filmes">
        {filmes.map((filme) => {
          return <FilmeCard key={filme.nome} filme={filme} />;
        })}
      </div>
    </div>
  );
}

export default Catalogo;
