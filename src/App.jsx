import React from "react";
import "./assets/css/base/base.css";
import Home from "./paginas/Home.jsx";
import Sobre from "./paginas/Sobre.jsx";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Pagina404 from "./paginas/Pagina404";
import Cabecalho from "./components/Cabecalho";

function App() {
  return (
    <Router>
      <Cabecalho/>
      <Switch> 
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/sobre">
          <Sobre />
        </Route>
        <Route>
          <Pagina404/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

// Switch serve para garantimos que o react não vai ficar procurando outras rotas abaixo.
// exact e necessário na home para declarar o caminho exato.

