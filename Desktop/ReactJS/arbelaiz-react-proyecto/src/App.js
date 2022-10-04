import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/NavBar";
import { ItemListContainer } from "../src/Containers/ItemListContainer";
import {ComponenteEstados} from "./ComponenteEstados";
import {Usuarios} from "./usuarios";

const App = () => {
  const nombre = "Luis";

  const onAdd =() => {
    console.log("agregaste algo al carrito");
  }

  return (
    <>
      <Navbar nombreUsuario={nombre} apellidoUsuario="Fernandez" />
    </>
  );
};

export default App;