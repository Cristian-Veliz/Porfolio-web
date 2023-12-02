import React from "react";
import style from "./Proyects.module.css";
import { Link } from "react-router-dom";

function Proyects() {
    let sum = 0;
    for (let i = 1; i <= 10; i++) {
      sum += i;
    }
  return (
    <div >
      <div className={style.leftContent}>
        <h1>PROYECTOS</h1>
        <h2>E-Commerce Divano</h2>
        <p>
          Divano es tu ecommerce de muebles en línea. Nuestra misión es
          proporcionarte una experiencia de compra de muebles en linea
          excepcional. Hemos diseñado nuestro sitio web para que puedas buscar y
          renovar tus muebles favoritos de forma rápida y sencilla. Además,
          garantizamos la máxima seguridad de tus datos personales y de pago,
          para que puedas comprar con total confianza.
        </p>
        <div className={style.botones}>
        <Link to='https://github.com/Cristian-Veliz/ProyectoFinal'>
        <button>GitHub Repo</button>
        </Link>
        <Link to='https://vimeo.com/manage/videos/874243845'>
        <button>Video Divano</button>
        </Link>
        </div>
      </div>
    </div>
  );
}

export default Proyects;
