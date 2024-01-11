// vite.config.js
import react from '@vitejs/plugin-react';

export default {
  plugins: [react()],
  base: 'Porfolio-web', // Ajusta esto según tu necesidad
  build: {
    rollupOptions: {
      external: ['@formspree/react'],
    },
  },
};



// import react from '@vitejs/plugin-react';

// export default {
//   plugins: [react()],
//   build: {
//     rollupOptions: {
//       external: ['@formspree/react'],
//     },
//   },
// };
