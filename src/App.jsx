import React from "react";
import "./assets/css/base/base.css";
import Home from "./paginas/Home.jsx";
import Sobre from "./paginas/Sobre.jsx";

function App() {
  const Render = () => {
    const location = window.location.pathname;
    if (location == "/sobre") {
      return <Sobre />;
    } else {
      return <Home />;
    }
  };

  return <>{Render()}</>;
}

export default App;
