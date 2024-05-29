import React, { useState } from 'react';
import styles from './Contact.module.css';
import Swal from 'sweetalert2';
import { useForm, ValidationError } from '@formspree/react';
import SimpleFooter from '../../components/FooterSimple/FooterSimple';

const Contact = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    consulta: '',
  });

  const [errores, setErrores] = useState({
    nombre: '',
    apellido: '',
    email: '',
    consulta: '',
  });

  const [state, handleSubmit] = useForm('xdoqovla');

  const manejarCambio = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    setErrores({ ...errores, [event.target.name]: '' });
  };

  const manejarEnvio = async (event) => {
    try {
      if (event) {
        event.preventDefault(); // Evitar que el formulario se envíe de forma predeterminada
      }

      const nuevosErrores = {};

      const letrasRegex = /^[A-Za-z]+$/;

      if (formData.nombre.trim() === '') {
        nuevosErrores.nombre = 'El nombre es obligatorio';
      } else if (!letrasRegex.test(formData.nombre) || formData.nombre.trim().length < 3) {
        nuevosErrores.nombre = 'El nombre debe contener al menos 3 letras y solo letras';
      }

      if (formData.apellido.trim() === '') {
        nuevosErrores.apellido = 'El apellido es obligatorio';
      } else if (!letrasRegex.test(formData.apellido) || formData.apellido.trim().length < 3) {
        nuevosErrores.apellido = 'El apellido debe contener al menos 3 letras y solo letras';
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (formData.email.trim() === '') {
        nuevosErrores.email = 'El correo electrónico es obligatorio';
      } else if (!emailRegex.test(formData.email)) {
        nuevosErrores.email = 'El correo electrónico no es válido';
      }

      if (formData.consulta.trim() === '') {
        nuevosErrores.consulta = 'La consulta es obligatoria';
      }

      setErrores(nuevosErrores);

      if (Object.keys(nuevosErrores).length === 0) {
        await handleSubmit(event);
        mostrarSweetAlert();
        setFormData({
          nombre: '',
          apellido: '',
          email: '',
          consulta: '',
        });
      }
    } catch (error) {
      console.error('Error al enviar el formulario', error);
    }
  };

  const mostrarSweetAlert = () => {
    Swal.fire({
      icon: 'success',
      title: 'Consulta Enviada',
      text: 'Tu consulta se ha enviado correctamente. Me pondré en contacto contigo pronto.',
      timer: 6000,
      customClass: {
        popup: 'miSweetAlert',
      },
    }).then(() => {
      window.location.href = '/home';
    });
  };

  return (
    <div className={styles.contactanos}>
      <h3 style={{ color: "#2196f3",}}>Desata Tu Potencial: Contáctame Ahora 🚀</h3>
      <p> ¿Listo para dar el siguiente paso? Si tienes preguntas, ideas o simplemente quieres explorar posibilidades,  <br />estoy a solo un mensaje de distancia. ¡Haz clic y comencemos el viaje juntos! 📬✨</p>
      <h4 style={{ color: "#2196f3",}}>Escríbeme tu consulta 📝</h4>
      <div>
        <form className={styles.formulario} onSubmit={manejarEnvio}>
          <input
            className={styles.input}
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={manejarCambio}
            placeholder='Ingresa tu nombre...'
          />
          {errores.nombre && <span className={styles.error}>{errores.nombre}</span>}
          <input
            className={styles.input}
            type="text"
            name="apellido"
            value={formData.apellido}
            onChange={manejarCambio}
            placeholder='Ingresa tu apellido...'
          />
          {errores.apellido && <span className={styles.error}>{errores.apellido}</span>}
          <input
            className={styles.input}
            type="email"
            name="email"
            value={formData.email}
            onChange={manejarCambio}
            placeholder='Ingresa tu correo de contacto...'
          />
          {errores.email && <span className={styles.error}>{errores.email}</span>}
          <div id="consulta" className={styles.consulta}>
            <textarea
              placeholder="Escribe tus preguntas o comentarios aquí"
              name="consulta"
              value={formData.consulta}
              onChange={manejarCambio}
            ></textarea>
            {errores.consulta && <span className={styles.error}>{errores.consulta}</span>}
          </div>
          <br />
          <button className={styles.button} type="submit" disabled={state.submitting}>
            Enviar
          </button>
        </form>
      </div>
      
      <SimpleFooter style={{ display: 'flex', position: 'relative' }} />
    </div>
  );
};

export default Contact;

