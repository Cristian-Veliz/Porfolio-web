import React from "react";
import { Link } from "react-router-dom";
import style from "./Landing.module.css";

function Landing() {
  return (
    <div className={style.container}>
      {/* <h1 style={{ color: "#2196f3", fontSize: '35px' }}>▌│█║▌║▌║Hola 👋, soy Cristian ║▌║▌║█│▌ </h1> */}
      <h1 style={{ color: "#2196f3", fontSize: '35px' }}>Hola 👋, soy Cristian Veliz </h1>
      <h2>¡Bienvenido a mi Porfolio!</h2>
      <Link to="/home">
        <button className={style.button}>Ingresar</button>
      </Link>
    </div>
  );
}

export default Landing;
