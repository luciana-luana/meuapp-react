import { BrowserRouter, Routes, Route } from "react-router-dom";  

import Home from "./paginas/home/index";
import Filmes from "./paginas/filmes";
import Header from "./components/header";

function RoutesApp() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/filmes/:id" element={<Filmes />} />
    </Routes>

    </BrowserRouter>
  );
}
export default RoutesApp;