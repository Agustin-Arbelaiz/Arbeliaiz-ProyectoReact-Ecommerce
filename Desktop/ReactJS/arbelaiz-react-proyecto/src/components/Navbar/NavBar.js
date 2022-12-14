
import React from "react";
import logo from "../../assets/logo.png";
import { CartWidget } from "../CartWidget/CartWidget";
import { styles } from "./Navbar.style";

const Navbar = ({ nombreUsuario, apellidoUsuario, children }) => {


  const categorias = [
    {nombre:"Categoria 1", id:0, ruta:"#"},
    {nombre:"Categoria 2", id:1, ruta:"#"},
    {nombre:"Categoria 3", id:2, ruta:"#"},
  ];

  return (
    <header style={styles.container}>
      <img style={styles.imagenes} src={logo} alt="tienda online" />
      <h1>Bienvendio {nombreUsuario}</h1>
      <nav>
        {
          categorias.map((categoria)=>{
            return <a key={categoria.id} style={styles.categorias} href={categoria.ruta}>{categoria.nombre}</a>
          })
        }
      </nav>
      <CartWidget />
    </header>
  );
};

export default Navbar;

