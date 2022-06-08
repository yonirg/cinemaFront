import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Header from "./componentes/Header.jsx";
import Adicionar from "./paginas/Adicionar.jsx"
import Atualizar from "./paginas/Atualizar.jsx"
import Catalogo from "./paginas/Catalogo.jsx";
import "./App.css";
import Remover from "./paginas/Remover.jsx";
import Home from "./componentes/HomePage/Home.jsx";
import Footer from "./componentes/Footer.jsx";
import Box_linkedin from "./componentes/Box_linkdein.jsx";

function App() {
  return (
  <BrowserRouter>
      <div className="App">
          <Header />
          <Footer />
          <Box_linkedin />
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/catalogo" element={<Catalogo />} />
            <Route path="/adicionar" element={<Adicionar />} />
            <Route path="/atualizar" element={<Atualizar />} />
            <Route path="/remover" element={<Remover />} />
          </Routes> 
      </div>
    </BrowserRouter>
  );
}

export default App;



