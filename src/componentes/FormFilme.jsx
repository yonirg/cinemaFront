import React from "react";

function FormFilme() {
  return (
    <form>
      <label htmlFor="id">Id</label>
      <input type="text" id="id" />

      <label htmlFor="nome">Nome</label>
      <input type="text" id="nome" />

      <label htmlFor="tipo">Tipo</label>
      <input type="text" id="tipo" placeholder="2D ou 3D" />

      <label htmlFor="genero">Genero</label>
      <input type="text" id="genero" placeholder="Ação, Aventura, etc" />

      <label htmlFor="lancamento">Lançamento</label>
      <input type="text" id="lancamento" placeholder="Ex: 1969" />

      <label htmlFor="descricao">Descrição</label>
      <textarea id="descricao" cols="30" rows="5"></textarea>

      <button>Enviar</button>
    </form>
  );
}

export default FormFilme;
