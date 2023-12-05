import React, { useState, useRef } from 'react';
import styles from './Contact.module.css';
import Swal from 'sweetalert2';
import SimpleFooter from '../../components/FooterSimple/FooterSimple';

const Contact = () => {
  const datosFormulario = useRef(false);

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

  const manejarCambio = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    setErrores({ ...errores, [event.target.name]: '' });
  };

  const manejarEnvio = (event) => {
    event.preventDefault();
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
      // Envía los datos del formulario si no hay errores
      // Aquí puedes agregar la lógica para enviar el correo electrónico
      // y luego mostrar la alerta de SweetAlert
      mostrarSweetAlert();

      // Limpia los campos del formulario
      setFormData({
        nombre: '',
        apellido: '',
        email: '',
        consulta: '',
      });
    }
  };

  const mostrarSweetAlert = () => {
    Swal.fire({
      icon: 'success',
      title: 'Consulta Enviada',
      text: 'Tu consulta se ha enviado correctamente. Me pondré en contacto contigo pronto.',
      timer: 3000,
      customClass: {
        // Agrega una clase personalizada al SweetAlert
        popup: 'miSweetAlert',
      },
    }).then(() => {
      // Redirige a /home después de cerrar la alerta
      window.location.href = '/home';
    });
  };

  return (
    <div className={styles.contactanos}>
      <h3>¿Te gustaría contactarme?</h3>
      <p> Si tienes alguna pregunta o necesitas más información, no dudes en contactarme. <br /> Estoy aquí para ayudarte en lo que necesites. </p>
      <h4>Escribeme tu consulta 📝</h4>
      <div>
        <form onSubmit={manejarEnvio} ref={datosFormulario} id='formulario' className={styles.formulario}>
          <input className={styles.input} type="text" name="nombre" value={formData.nombre} onChange={manejarCambio} placeholder='Ingresa tu nombre...' />
          {errores.nombre && <span className={styles.error}>{errores.nombre}</span>}
          <input className={styles.input} type="text" name="apellido" value={formData.apellido} onChange={manejarCambio} placeholder='Ingresa tu apellido...' />
          {errores.apellido && <span className={styles.error}>{errores.apellido}</span>}
          <input className={styles.input} type="email" name="email" value={formData.email} onChange={manejarCambio} placeholder='Ingresa tu correo de contacto...' />
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
          <button className={styles.button} type="submit">Enviar</button>
        </form>
      </div>
      
      <SimpleFooter style={{display:'flex', position: 'relative'}}/>
      
    </div>
  );
};

export default Contact;









// /* Contact.js */

// import React, { useState, useRef } from 'react';
// import styles from './Contact.module.css';

// const Contact = () => {
//   const datosFormulario = useRef(false);

//   const [formData, setFormData] = useState({
//     nombre: '',
//     apellido: '',
//     email: '',
//     consulta: '',
//   });

//   const [errores, setErrores] = useState({
//     nombre: '',
//     apellido: '',
//     email: '',
//     consulta: '',
//   });

//   const [modalVisible, setModalVisible] = useState(false); // Estado para controlar la visibilidad del modal

//   const manejarCambio = (event) => {
//     setFormData({ ...formData, [event.target.name]: event.target.value });
//     setErrores({ ...errores, [event.target.name]: '' });
//   };

//   const manejarEnvio = (event) => {
//     event.preventDefault();
//     const nuevosErrores = {};

//     const letrasRegex = /^[A-Za-z]+$/;

//     if (formData.nombre.trim() === '') {
//       nuevosErrores.nombre = 'El nombre es obligatorio';
//     } else if (!letrasRegex.test(formData.nombre) || formData.nombre.trim().length < 3) {
//       nuevosErrores.nombre = 'El nombre debe contener al menos 3 letras y solo letras';
//     }

//     if (formData.apellido.trim() === '') {
//       nuevosErrores.apellido = 'El apellido es obligatorio';
//     } else if (!letrasRegex.test(formData.apellido) || formData.apellido.trim().length < 3) {
//       nuevosErrores.apellido = 'El apellido debe contener al menos 3 letras y solo letras';
//     }

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (formData.email.trim() === '') {
//       nuevosErrores.email = 'El correo electrónico es obligatorio';
//     } else if (!emailRegex.test(formData.email)) {
//       nuevosErrores.email = 'El correo electrónico no es válido';
//     }

//     if (formData.consulta.trim() === '') {
//       nuevosErrores.consulta = 'La consulta es obligatoria';
//     }

//     setErrores(nuevosErrores);

//     if (Object.keys(nuevosErrores).length === 0) {
//       // Envía los datos del formulario si no hay errores
//       // Aquí puedes agregar la lógica para enviar el correo electrónico
//       // y luego mostrar el modal
//       mostrarModal();

//       // Limpia los campos del formulario
//       setFormData({
//         nombre: '',
//         apellido: '',
//         email: '',
//         consulta: '',
//       });
//     }
//   };

//   const mostrarModal = () => {
//     setModalVisible(true);
//   };

//   const cerrarModal = () => {
//     setModalVisible(false);
//   };

//   return (
//     <div className={styles.contactanos}>
//       <h3>¿Te gustaría contactarme?</h3>
//       <p> Si tienes alguna pregunta o necesitas más información, no dudes en contactarme. <br /> Estoy aquí para ayudarte en lo que necesites. </p>
//       <h4>Escribíme tu consulta 📝</h4>
//       <div>
//         <form onSubmit={manejarEnvio} ref={datosFormulario} id='formulario' className={styles.formulario}>
       
//             <input className={styles.input} type="text" name="nombre" value={formData.nombre} onChange={manejarCambio}
//               placeholder='Ingresa tu nombre...'
//             />
//             {errores.nombre && <span className={styles.error}>{errores.nombre}</span>}
          
          
//             <input className={styles.input} type="text" name="apellido" value={formData.apellido} onChange={manejarCambio}
//               placeholder='Ingresa tu apellido...'
//             />
//             {errores.apellido && <span className={styles.error}>{errores.apellido}</span>}
         
        
//             <input className={styles.input} type="email" name="email" value={formData.email} onChange={manejarCambio}
//               placeholder='Ingresa tu correo de contacto...'
//             />
//             {errores.email && <span className={styles.error}>{errores.email}</span>}
        
//           <div id="consulta" className={styles.consulta}>
//             <textarea
//               placeholder="Escribe tus preguntas o comentarios aquí"
//               name="consulta"
//               value={formData.consulta}
//               onChange={manejarCambio}
//             ></textarea>
//             {errores.consulta && <span className={styles.error}>{errores.consulta}</span>}
//           </div>
//           <br />
//           <button className={styles.button}  type="submit">Enviar</button>
//         </form>

//         {/* Modal */}
//         {modalVisible && (
//           <div className={styles.modalContainer}>
//             <div className={styles.modal}>
//               <h2>Consulta Enviada Exitosamente</h2>
//               <p>Tu consulta se ha enviado correctamente. Me pondre en contacto contigo pronto.</p>
//               <button onClick={cerrarModal}>Cerrar</button>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Contact;

