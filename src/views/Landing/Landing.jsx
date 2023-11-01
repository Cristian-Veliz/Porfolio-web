import React from 'react'
import style from './Landing.module.css';
import imgLanding from '../../assets/imgLanding.jpg'

const Landing = () => {
  return (
    <div className={style.container}>
    <img src={imgLanding} alt="LandingImg" className={style.image} />
    <div className={style.content}>
      <h1 style={{ color: "#e55743" }}>BIENVENIDO A MI PORFOLIO </h1>
      <h2 >¡Gracias por tu visita!</h2>
      <Link to='/home'>
        <button className={style.button}>Ingresar</button>
      </Link>
    </div>
  </div>
  )
}

export default Landing

 