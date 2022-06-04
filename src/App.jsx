import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Header from "./componentes/Header.jsx";
import Adicionar from "./paginas/Adicionar.jsx";
import Atualizar from "./paginas/Atualizar.jsx";
import Catalogo from "./paginas/Catalogo.jsx";
import "./App.css";
import Remover from "./paginas/Remover.jsx";

function App() {

  return (
    <div className="App">
      <Header />

      <BrowserRouter>
        <Routes>
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/adicionar" element={<Adicionar />} />
          <Route path="/atualizar" element={<Atualizar />} />
          <Route path="/remover" element={<Remover />} />
        </Routes> 
      </BrowserRouter>
    </div>
  );
}

export default App;
