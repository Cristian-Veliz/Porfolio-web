import React from "react";
import style from "./Home.module.css";
import { Link } from "react-router-dom";
import imgPerfil from "../../assets/img.png";
import linkedinLogo from "../../assets/linkedinLogoN.png";
import gitHubLogo from "../../assets/logoGit.png";
import logoCV from "../../assets/logoCV.png";
import FooterSimple from "../../components/FooterSimple/FooterSimple";

function Home() {
  return (
    <div className={style["container-principal"]}>
      <div className={style.leftContent}>
        <p style={{ fontSize: "15px", textAlign: "left", position: "static" }}>
          <h1
            style={{
              fontSize: "30px",
              color: "#2196f3",
              position: "static",
              marginTop: "-50px",
            }}
          >
            Full Stack Web Developer
          </h1>
          Con background en estudios de arquitectura y empresas de construcción,
          valoro enormemente el trabajo en equipo. Mi enfoque profesional se
          especializa en el desarrollo Frontend, respaldado por conocimientos en
          metodologías ágiles, GIT y el uso de tecnologías como{" "}
          <strong>
            JavaScript, HTML, CSS, Sequelize.js, React.js, Redux.js, PostgreSQL,
            Node.js, Express y MySQL entre otros.
          </strong>{" "}
          <br />
          Mis habilidades blandas incluyen la comunicación efectiva, la
          resolución de problemas, la adaptabilidad, la capacidad de liderazgo y
          la colaboración efectiva en equipos. Estoy dedicado a seguir
          aprendiendo y perfeccionando mis habilidades.
          <h2 style={{ fontSize: "25px", color: "#2196f3", marginTop: "40px" }}>
            Skills
          </h2>
          <div className={style["tech-container"]}>
            <div className={style.javascript}>
              <img
                className={style["img-javascript"]}
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                alt=""
              />
              <h1 style={{ color: "#2196f3", top: "525px" }}>Javascript</h1>
            </div>
            <div className={style.html}>
              <img
                className={style["img-html"]}
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
                alt=""
              />
              <h1
                style={{ color: "#2196f3", top: "525px", marginLeft: "10px" }}
              >
                HTML
              </h1>
            </div>
            <div className={style.css}>
              <img
                className={style["img-css"]}
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
                alt=""
              />
              <h1
                style={{ color: "#2196f3", top: "525px", marginLeft: "15px" }}
              >
                CSS
              </h1>
            </div>
            <div className={style.react}>
              <img
                className={style["img-react"]}
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
                alt=""
              />
              <h1
                style={{ color: "#2196f3", top: "525px", marginLeft: "12px" }}
              >
                React
              </h1>
            </div>
            <div className={style.redux}>
              <img
                className={style["img-redux"]}
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg"
                alt=""
              />
              <h1
                style={{ color: "#2196f3", top: "525px", marginLeft: "11px" }}
              >
                Redux
              </h1>
            </div>
            <div className={style.express}>
              <img
                className={style["img-express"]}
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg"
                alt=""
              />
              <h1 style={{ color: "#2196f3", top: "525px", marginLeft: "9px" }}>
                Express
              </h1>
            </div>
            <div className={style.PostgreSQL}>
              <img
                className={style["img-PostgreSQL"]}
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg"
                alt=""
              />
              <h1
                style={{ color: "#2196f3", top: "525px", marginLeft: "-5px" }}
              >
                PostgreSQL
              </h1>
            </div>
            <div className={style.Vite}>
              <img
                className={style["img-Vite"]}
                src="https://logospng.org/wp-content/uploads/vite-js-logo.png"
                alt=""
              />
              <h1
                style={{ color: "#2196f3", top: "525px", marginLeft: "16px" }}
              >
                Vite
              </h1>
            </div>
          </div>
        </p>
      </div>
      <div className={style.rightContent}>
        <div className={style.cardPerfil}>
          <h1>Cristian Veliz</h1>
          <div className={style.contentImg}>
            <Link to="/contact">
              <img src={imgPerfil} alt="imagen Perfil" />
            </Link>
          </div>
          <div className={style.logo}>
            <Link
              to="https://www.linkedin.com/in/cristianvelizfullstack/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedinLogo} alt="LogoLinkedin" />
            </Link>
            <Link
              to="https://github.com/Cristian-Veliz"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={gitHubLogo} alt="Logo gitHub" />
            </Link>
            <Link
              to="https://drive.google.com/file/d/1_NVOiOo62ggwE5w4dpZllp2-zwUIxwfH/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                style={{
                  backgroundColor: "black",
                  height: "35px",
                  width: "35px",
                  bottom: "-182px",
                  marginLeft: "6px",
                }}
                src={logoCV}
                alt="logoCV"
              />
            </Link>
          </div>
        </div>
        <Link to="https://www.linkedin.com/in/cristianvelizfullstack/"></Link>
      </div>
      <FooterSimple style={{ bottom: "0" }} />
    </div>
  );
}

export default Home;

