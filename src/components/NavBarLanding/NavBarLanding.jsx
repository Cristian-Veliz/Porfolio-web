import { Link } from 'react-router-dom';
import style from './NavBar.module.css';
import Logo from '../../assets/CristianVeliz.png'


const NavBarLanding = () => {
  

  return (
    <div >
      <nav className={style.navbar}>
        <div>
        <div className={style.logo}>
          <Link to="/">
            <img src={Logo} alt="logoCristianVeliz" />
          </Link>
        </div>
          <div className={style.divLink}>
            <Link className={style.container} to="/home">
              Sobre Mi
            </Link>
            <div className={style.divLink}>
              <Link className={style.container} to="/proyects">
              Proyectos
              </Link>
            </div>
            <div className={style.divLink}>
              <Link className={style.container} to="/contact">
                Contacto
              </Link>
            </div>
          </div>
        
        </div>
      </nav>
    </div>
  );
};

export default NavBarLanding;