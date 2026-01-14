import { Routes, Route } from "react-router-dom";  
import Home from "./paginas/home"; // Verifique se "home" tem um index.js
import Filmes from "./paginas/filmes"; // Verifique se "filmes" tem um index.js
import Header from "./components/header"; // Corrija "components" se essa pasta realmente existir

function RoutesApp() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/filmes/:id" element={<Filmes />} />
      </Routes>
    </>
  );
}

export default RoutesApp;