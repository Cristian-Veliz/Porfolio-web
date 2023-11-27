import React from "react";
import style from "./Home.module.css";
import { Link } from "react-router-dom";
import imgPerfil from "../../assets/img.png";
import linkedinLogo from "../../assets/linkedinLogoN.png"
import FooterSimple from "../../components/FooterSimple/FooterSimple";



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
          <Link to='/contact'>
          <img src={imgPerfil} alt="imagen Perfil" />
          </Link>
          </div>
          <div className={style.logo}>
            <Link to='https://www.linkedin.com/in/cristianvelizfullstack/'>
            <img src={linkedinLogo} alt="LogoLinkedin" />
            </Link>
            
          </div>
        </div>
        <Link to='https://www.linkedin.com/in/cristianvelizfullstack/'>
        <button className={style.button}>Linkedin</button>
        </Link>
        <button className={style.button}>CV</button>
      </div>
      <FooterSimple/>
    </div>
  );
}

export default Home;
