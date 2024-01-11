import React from "react";
import { Link } from "react-router-dom";
import style from "./Landing.module.css";

function Landing() {
  return (
    <div className={style.container}>
      {/* <img src={image} alt="imageLanding" className={style.image} /> */}
      {/* <h1 style={{ color: "#e55743" }}>Hola, Soy Cristian Veliz</h1> */}
      <h1 style={{ color: "#2196f3", fontSize: '35px' }}>Hola, Soy Cristian Veliz</h1>
      <h2>¡Bienvenido a mi Porfolio!</h2>
      <Link to="/home">
        <button className={style.button}>Ingresar</button>
      </Link>
    </div>
  );
}

export default Landing;
