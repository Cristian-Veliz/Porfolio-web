import React from "react";
import style from "./Proyects.module.css";

function Proyects() {
  return (
    <div className={style.proyectos}>
        <h1 style={{ color: "#2196f3" }}>Proyectos</h1>
      <div className={style.leftContent}>
        <h2>E-Commerce Divano</h2>
        <p>
          "Divano es tu ecommerce de muebles en línea. Nuestra misión es
          proporcionarte una experiencia de compra de muebles en linea
          excepcional. Hemos diseñado nuestro sitio web para que puedas buscar y
          renovar tus muebles favoritos de forma rápida y sencilla. Además,
          garantizamos la máxima seguridad de tus datos personales y de pago,
          para que puedas comprar con total confianza."
        </p>
      </div>
    </div>
  );
}

export default Proyects;
