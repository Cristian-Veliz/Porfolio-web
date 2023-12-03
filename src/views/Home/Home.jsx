import React from "react";
import style from "./Home.module.css";
import { Link } from "react-router-dom";
import imgPerfil from "../../assets/img.png";
import linkedinLogo from "../../assets/linkedinLogoN.png"
import gitHubLogo from "../../assets/logoGit.png"
import logoCV from '../../assets/logoCV.png'
import FooterSimple from "../../components/FooterSimple/FooterSimple";


 
function Home() {
  return (
    <div className={style["container-principal"]}>
      <div className={style.leftContent}>
        <p style={{fontSize: '18px', textAlign: 'left', position:'static'}}>
        <h1 style={{  fontSize: '30px', color: "#2196f3", position:'static', marginTop:'-65px'}}>Full Stack Web Developer</h1>
          Con background en estudios de arquitectura y empresas de construcción,
          valoro enormemente el trabajo en equipo. Mi enfoque profesional se
          especializa en el desarrollo Frontend, respaldado por
          conocimientos en metodologías ágiles, GIT, y el uso de tecnologías
          como Sequelize.js, PostgreSQL, React.js, Redux.js y CSS. <br />
          Mis habilidades blandas incluyen la comunicación efectiva, la
          resolución de problemas, la adaptabilidad, la capacidad de liderazgo y
          la colaboración efectiva en equipos. Estoy dedicado a seguir
          aprendiendo y perfeccionando mis habilidades.
        </p>
      </div>
      <div className={style.rightContent}>
        <div className={style.cardPerfil}>
        <h1>Cristian Veliz</h1>
          <div className={style.contentImg}>
          <Link to='/contact'>
          <img src={imgPerfil} alt="imagen Perfil" />
          </Link>
          </div>
          <div className={style.logo}>
            <Link to='https://www.linkedin.com/in/cristianvelizfullstack/'>
            <img src={linkedinLogo} alt="LogoLinkedin" />
            </Link>
            <Link to='https://github.com/Cristian-Veliz'>
            <img src={gitHubLogo} alt="Logo gitHub" />
            </Link>
            <Link>
            <img 
            style={{backgroundColor: 'black', height: '35px', width: '35px', bottom: '-182px', marginLeft: '6px'}}
            src={logoCV} alt="logoCV" 
            />
            </Link>

          </div>
        </div>
        <Link to='https://www.linkedin.com/in/cristianvelizfullstack/'>
       
        </Link>
        
      </div>
      <FooterSimple style={{bottom: '0'}}/>
    </div>
  );
}

export default Home;
