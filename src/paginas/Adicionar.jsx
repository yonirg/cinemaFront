import React, { useState } from "react";
import "./Adicionar.css";
import axios from "axios";

const API_URL = "http://localhost:3001/filmes";

function Adicionar() {
  const [id, setId] = useState("");
  const [nome, setNome] = useState("");
  const [tipo, setTipo] = useState("");
  const [genero, setGenero] = useState("");
  const [descricao, setDescricao] = useState("");
  const [lancamento, setLancamento] = useState("");

  const postFilme = () => {
    axios
      .post(API_URL, {
        id: id,
        nome: nome,
        tipo: tipo,
        genero: genero,
        descricao: descricao,
        lancamento: lancamento,
      })
      .then((res) => console.log(res))
      .catch((erro) => console.log(erro));
  };

  return (
    <div>
      <form>
        <label htmlFor="id">Id</label>
        <input
          type="text"
          id="id"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />

        <label htmlFor="nome">Nome</label>
        <input
          type="text"
          id="nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />

        <label htmlFor="tipo">Tipo</label>
        <input
          type="text"
          id="tipo"
          placeholder="2D ou 3D"
          value={tipo}
          onChange={(e) => setTipo(e.target.value)}
        />

        <label htmlFor="genero">Genero</label>
        <input
          type="text"
          id="genero"
          placeholder="Ação, Aventura, etc"
          value={genero}
          onChange={(e) => setGenero(e.target.value)}
        />

        <label htmlFor="lancamento">Lançamento</label>
        <input
          type="text"
          id="lancamento"
          placeholder="Ex: 1969"
          value={lancamento}
          onChange={(e) => setLancamento(e.target.value)}
        />

        <label htmlFor="descricao">Descrição</label>
        <textarea
          id="descricao"
          cols="30"
          rows="5"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
        ></textarea>

        <button
          onClick={(e) => {
            e.preventDefault();
            postFilme();
          }}
        >
          Enviar
        </button>
      </form>
    </div>
  );
}

export default Adicionar;
