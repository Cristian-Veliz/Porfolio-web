import React from "react";
import style from "./Proyects.module.css";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import divano01 from './assets/divano01.jpg';
import divano02 from './assets/divano02.jpg';

function Proyects() {
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
        
        <Carousel 
         showArrows={false}
         showStatus={false}
         showThumbs={true}
         dynamicHeight={false}
        >
        <div className={style.carousel}>
        <img src={divano01} alt="divano01" />
        </div>
        <div className={style.carousel}>
        <img src={divano02} alt="divano02" />
        </div>
        
     

        </Carousel>
        
      </div>
    </div>
  );
}

export default Proyects;
