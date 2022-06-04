import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import FilmeCard from "../componentes/FilmeCard.jsx";

function Catalogo() {
  // const API_URL = "https://cinema--api.herokuapp.com/filmes";
  const API_URL = 'http://localhost:3001/filmes'

  const [filmes, setFilmes] = useState([]);
  const [value, setValue] = useState("");

  const getFilmes = () => {
    axios
      .get(API_URL)
      .then((res) => setFilmes(res.data.mensagem.filme))
      .catch((erro) => console.log(erro));
  };

  const getFilmesPorId = id => {
    axios.get(`${API_URL}/${id}`)
         .then(res => setFilmes(res.data.mensagem.filme))
         .catch(erro => console.log(erro));
  }

  useEffect(() => {
    getFilmes();
  }, []);

  return (
    <div className="catalogo">
      <div className="pesquisa">
        <input
          type="text"
          placeholder="qual filme deseja buscar?"
          className="campo-de-busca"
          value={value}
          onChange={e => {setValue(e.target.value)}}
        />
        <button onClick={e => {
          e.preventDefault()
          getFilmesPorId(value)}}>pesquisar</button>
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
