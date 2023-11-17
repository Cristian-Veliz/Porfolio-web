import { Link } from 'react-router-dom';
import style from './NavBar.module.css';
import LogoNav from '../../assets/logoPorfolio.png';


const NavBarLanding = () => {
  

  return (
    <div >
      <nav className={style.navbar}>
        <div>
        <div className={style.logo}>
          <Link to="/">
            <img src={LogoNav} alt="logo" />
          </Link>
        </div>
          <div className={style.divLink}>
            <Link className={style.container} to="/home">
              Inicio
            </Link>
            <div className={style.divLink}>
              <Link className={style.container} to="/proyects">
              Proyectos
              </Link>
            </div>
            <div className={style.divLink}>
              <Link className={style.container} to="/about">
                Sobre Mi
              </Link>
            </div>
            <div className={style.divLink}>
              <Link className={style.container} to="/contact">
                Contacto
              </Link>
            </div>
            <div className={style.divLink}>
              <Link className={style.container} to="/cv">
                CV
              </Link>
            </div>
          </div>
        
        </div>
      </nav>
    </div>
  );
};

export default NavBarLanding;