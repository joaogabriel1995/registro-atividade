/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F3B61F',
        'primary-hover': '#E39D0F',
        'primary-active': '#F7CD4D',
        'primary-disabled': 	"rgb(243,182,31, 0.5)",
        'primary-subtle': "#814312",
        'primary-strong': '#FCF3C5',
        success: "#17D05B",
        'success-hover': '#40E87D',
        'success-active': '#0CAD47',
        'success-disabled': "rgb(23,208,91, 0.5)",
        information: "#3280FF",
        'information-hover': '#5BA4FF',
        'information-active': '#185EF8',
        'information-disabled': "rgb(50,128,255, 0.5)",
        warning: "#FF7210",
        'warning-hover': '#FF9238',
        'warning-active': '#F65400',
        'warning-disabled': "rgb(255,114,16, 0.5)",
        danger: "#FA1E1E",
        'warning-hover': '#FF6A6A',
        'warning-active': '#E81a1a',
        'warning-disabled': "rgb(250,30,30, 0.5)",
        background: "#FFFFFF",
        "background-paper": "#F4F1ED",
        "background-paper-hover": "#D1D1D1",
        title: "#000000",
        "title-body": "#454545",
        "title-subtle": "#5D5D5D",
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'] ,
      },
      
    },
  },
  plugins: [],
}

