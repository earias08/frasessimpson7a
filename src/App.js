import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Frase from "./components/Frase";
import { useState, useEffect } from "react";

function App() {
  // crear el state
  const [personaje, setPersonaje] = useState({});

  useEffect(() => {
    //  aqui traigo los datos de la api
    consultarAPI();
  }, []);

  const consultarAPI = async() => {
    const respuesta = await fetch("https://thesimpsonsquoteapi.glitch.me/quotes");
    const resultado = await respuesta.json();
    console.log(resultado[0]);
    setPersonaje(resultado[0]);
  };

  return (
    <section className="container d-flex flex-column my-5 align-items-center">
      <img
        src={process.env.PUBLIC_URL + "logo.png"}
        alt="logo de los simpsons"
        className="w-75"
      />
      <Button variant="warning" className="my-4 w-75" onClick={() => consultarAPI()}>
        Obtener frase
      </Button>
      <Frase personaje={personaje}></Frase>
    </section>
  );
}

export default App;
