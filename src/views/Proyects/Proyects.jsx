import React from "react";
import style from "./Proyects.module.css";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import divano01 from "./assets/divano01.jpg";
import divano02 from "./assets/divano02.jpg";
import divano03 from "./assets/divano03.jpg";
import divano04 from "./assets/divano04.jpg";
import divano05 from "./assets/divano05.jpg";
import divano06 from "./assets/divano06.jpg";
import divano07 from "./assets/divano07.jpg";
import divano08 from "./assets/divano08.jpg";
import divano09 from "./assets/divano09.jpg";
import food01 from "./assets/food01.jpg";
import pokemon01 from "./assets/pokemon01.jpg";
import rickAndMorty from "./assets/rickAndMorty.jpg";
import SimpleFooter from "../../components/FooterSimple/FooterSimple";

function Proyects() {
  return (
    <div className={style.principal}>
      <div className={style.content}>
      <h1 style={{ fontSize: "30px", display: 'inline-flex', margin: 0 }}>PROYECTOS🚀➡️</h1>
        <h2>E-Commerce Divano</h2>
        <p style={{ fontSize: "15px", top: "-20px" }}>
          ¡Bienvenido a tu nuevo espacio con Divano! <br />
          Divano es tu ecommerce de muebles de vanguardia en línea. Nuestra
          misión es proporcionarte una experiencia de compra de muebles en linea
          excepcional. Hemos diseñado nuestro sitio web para que puedas buscar y
          renovar tus muebles favoritos de forma rápida y sencilla. Además,
          garantizamos la máxima seguridad de tus datos personales y de pago,
          para que puedas comprar con total confianza.
        </p>
        <div className={style.botones}>
          <Link
            to="https://github.com/Cristian-Veliz/ProyectoFinal"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button style={{ fontSize: "14px", left: "0px" }}>GitHub</button>
          </Link>
          <Link
            to="https://vimeo.com/manage/videos/874243845"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button style={{ fontSize: "14px", margin: "10px", left: "0px" }}>
              Video
            </button>
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
          <div className={style.carousel}>
            <img src={divano03} alt="divano03" />
          </div>
          <div className={style.carousel}>
            <img src={divano04} alt="divano04" />
          </div>
          <div className={style.carousel}>
            <img src={divano05} alt="divano05" />
          </div>
          <div className={style.carousel}>
            <img src={divano06} alt="divano06" />
          </div>
          <div className={style.carousel}>
            <img src={divano07} alt="divano07" />
          </div>
          <div className={style.carousel}>
            <img src={divano08} alt="divano08" />
          </div>
          <div className={style.carousel}>
            <img src={divano09} alt="divano09" />
          </div>
        </Carousel>
        <div>
          <p style={{ fontSize: "15px", top: "450px" }}>
            <h2 style={{ top: "-150px", marginLeft: "30px" }}>Food-App</h2>
            ¡Bienvenido a Food!, tu entrada al fascinante universo culinario.
            Aquí, exploramos una amplia variedad de recetas provenientes de la
            API de alimentos, desde platos tradicionales hasta creaciones
            innovadoras. Food es el espacio perfecto para la expresión de tu
            creatividad culinaria. Además de descubrir nuevas delicias, tienes
            la oportunidad de contribuir con tus propias recetas y ser parte
            fundamental de esta comunidad única en la red. ¡Únete, explora y
            comparte tus creaciones deliciosas hoy mismo!
          </p>
        </div>
        <div className={style.botones}>
          <Link
            to="https://github.com/Cristian-Veliz/PI-Foods"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button style={{ fontSize: "14px", top: "800px", left: "-1350px" }}>
              GitHub
            </button>
            <Link
              to="https://vimeo.com/890944640?share=copy"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                style={{
                  fontSize: "14px",
                  margin: "10px",
                  top: "800px",
                  left: "-1350px",
                }}
              >
                Video
              </button>
            </Link>
          </Link>
        </div>
        <div className={style.food}>
          <img className={style.food} src={food01} alt="LandingFood" />
        </div>
        <div>
          <p style={{ fontSize: "15px", top: "850px" }}>
            <h2 style={{ top: "-140px", marginLeft: "30px" }}>Pókemon-App</h2>
            ¡Bienvenido a Pokémon! Esta aplicación está diseñada para los
            apasionados del anime que desean sumergirse en el emocionante mundo
            de los Pokémon. Este proyecto nace con la intención de brindar a los
            fanáticos una plataforma interactiva para buscar, filtrar <br /> y
            explorar sus Pokémon favoritos. Pero eso no es todo; también te
            ofrecemos la emocionante oportunidad de crear tus propios Pokémon.
            Utiliza nuestra innovadora herramienta de creación para dar vida a
            tus criaturas personalizadas, definiendo su apariencia, habilidades,
            estadísticas y compártelas con la comunidad!
          </p>
        </div>
        <div className={style.botones}>
          <Link
            to="https://github.com/Cristian-Veliz/PI-Pokemon-main"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button style={{ fontSize: "14px", top: "870px", left: "-2080px" }}>
              GitHub
            </button>
            <Link
              to="https://vimeo.com/891600336?share=copy"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                style={{
                  fontSize: "14px",
                  margin: "10px",
                  top: "870px",
                  left: "-2080px",
                }}
              >
                Video
              </button>
            </Link>
          </Link>
          <div className={style.pokemon}>
            <img
              className={style.pokemon}
              src={pokemon01}
              alt="Landing Pokemon"
            />
          </div>
        </div>
        <div className="style.rick">
          <p style={{ fontSize: "15px", top: "1310px", right: "-1600px" }}>
            <h2 style={{ top: "-140px", marginLeft: "30px" }}>
              Rick And Morty-App
            </h2>
            ¡Bienvenido a R & M! Esta aplicación utiliza una API para recopilar
            información sobre más de 800 personajes de la serie. Los usuarios
            pueden guardar sus personajes favoritos, así como crear y gestionar
            sus propias versiones de personajes dentro del universo de Rick and
            Morty. ¡Únete, explora y comparte tus creaciones!
          </p>
          <div className={style.botones}>
            <Link
              to="https://github.com/Cristian-Veliz/ultimoRick"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                style={{
                  fontSize: "14px",
                  top: "1580px",
                  left: "-3300px",
                  margin: "10px",
                }}
              >
                GitHub
              </button>
              <Link
                to="https://github.com/Cristian-Veliz/ultimoRick"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  style={{
                    fontSize: "14px",
                    margin: "4px",
                    top: "1580px",
                    left: "-3304px",
                    marginBottom: "30px",
                  }}
                >
                  Video
                </button>
              </Link>
            </Link>
            <div className={style.rick}>
              <img
                className="style.rick"
                src={rickAndMorty}
                alt="Landing Rick And Morty"
              />
            </div>
          </div>
        </div>
      </div>
      <SimpleFooter className={style.rick} />
    </div>
  );
}

export default Proyects;
