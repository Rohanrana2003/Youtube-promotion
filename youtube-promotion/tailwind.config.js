/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
     boxShadow: {
                'custom': `0px 0px 5px rgba(34, 60, 80, 0.7)`,
                'header-shadow': '0px 1px 10px rgba(0, 0, 0, 0.1)'
            }, 
      animation: {
        'bounce-slow': 'bounce 1s infinite',
      },
    },
    
  },
  plugins: [],
};

export default tailwindConfig;
