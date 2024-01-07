import React from 'react';
import styles from './FooterSimple.module.css';

const SimpleFooter = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p>&copy; {new Date().getFullYear()} Developer by Cristian Veliz - Todos los derechos reservados - Correo Electrónico: <strong>cristianvelizdev@gmail.com</strong></p>
        {/* <p>Correo Electrónico: cristianveliz6@gmail.com</p> */}
      </div>
    </footer>
  );
};

export default SimpleFooter;
