/** @type {import('tailwindcss').Config} */
module.exports = {
   darkMode: 'class',
   content: ['./src/**/*.{html,js}', './src/components/**/*.{html,js}'],
   theme: {
      extend: {
         colors: {
            arkapl: {
               900: '#282d35',
            },
            koyumav: {
               900: '#363b81',
            },
            mavi: {
               900: '#5db9ff',
            },
            tur: {
               900: '#ff1f1f',
            },
            sari: {
               900: '#fbd743',
            },
         },
      },
   },
   plugins: [],
};
