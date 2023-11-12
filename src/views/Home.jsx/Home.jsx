// import React from "react";

// function Home() {
//   return (
//     <div>
//       <div>
//         <h1 style={{ color: "green" }}>Full Stack Web Developer</h1>
//         <p>
//           Con background en estudios de arquitectura y empresas de construcción,
//           valoro enormemente el trabajo en equipo. Mi enfoque profesional se
//           especializa en el desarrollo Front end y Back end, respaldado por
//           conocimientos en metodologías ágiles, GIT, y el uso de tecnologías
//           como Sequelize.js, PostgreSQL, React.js, Redux.js y CSS entre otros.
//           Mis habilidades blandas incluyen la comunicación efectiva, la
//           resolución de problemas, la adaptabilidad, la capacidad de liderazgo y
//           la colaboración efectiva en equipos. Estoy dedicado a seguir
//           aprendiendo y perfeccionando mis habilidades.
//         </p>
//         <div>
//        <h1 style={{color: "green"}}>Cristian Ariel Veliz</h1>
//        <button>Correo</button>
//        <button>CV</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Home;

import React from "react";
import style from "./Home.module.css";

function Home() {
  return (
    <div className={style.container}>
      <div className={style.leftContent}>
        <h1 style={{ color: "green" }}>Full Stack Web Developer</h1>
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
        <h1 style={{ color: "green" }}>Cristian Ariel Veliz</h1>
        <button className={style.button}>Linkedin</button>
        <button className={style.button}>CV</button>
      </div>
    </div>
  );
}

export default Home;

