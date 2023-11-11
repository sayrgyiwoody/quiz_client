/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  
  theme: {
    extend: {
      backgroundColor: {
        'gray-900': '#18181b',
      },
        colors: {
            primary: '#2563EB',
            primary_hover : '#1d4ed8',
            muted : '#ababab',
        },
        fontFamily: {
          orelega: ['Orelega One', 'serif'],
          poppins : ['Poppins', 'sans-serif'],
            
        },
    },
},
  plugins: [
    require('flowbite/plugin')
  ],
}