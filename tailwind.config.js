/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/*.html',
    './src/*.js',
    './src/test.html'
  ],
  theme: {
    extend: {
      fontFamily: {
        NanumMyeongjo: ["Nanum Myeongjo", 'serif']
      }
    },
  },
  plugins: [],
}
