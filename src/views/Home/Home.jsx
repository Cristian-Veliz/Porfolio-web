import React from "react";
import style from "./Home.module.css";
import imgPerfil from "../../assets/img.png";

function Home() {
  return (
    <div className={style["container-principal"]}>
      <div className={style.leftContent}>
        <h1 style={{ color: "#2196f3" }}>Full Stack Web Developer</h1>
        <p>
          Con background en estudios de arquitectura y empresas de construcción,
          valoro enormemente el trabajo en equipo. Mi enfoque profesional se
          especializa en el desarrollo Frontend y Backend, respaldado por
          conocimientos en metodologías ágiles, GIT, y el uso de tecnologías
          como Sequelize.js, PostgreSQL, React.js, Redux.js y CSS, entre otros.
          Mis habilidades blandas incluyen la comunicación efectiva, la
          resolución de problemas, la adaptabilidad, la capacidad de liderazgo y
          la colaboración efectiva en equipos. Estoy dedicado a seguir
          aprendiendo y perfeccionando mis habilidades.
        </p>
      </div>
      <div className={style.rightContent}>
        <h1 style={{ color: "#2196f3" }}>Cristian Ariel Veliz</h1>
        <div className={style.cardPerfil}>
          <div className={style.contentImg}>

          <img src={imgPerfil} alt="imagen Perfil" />
          </div>
        </div>
        <button className={style.button}>Linkedin</button>
        <button className={style.button}>CV</button>
      </div>
    </div>
  );
}

export default Home;
