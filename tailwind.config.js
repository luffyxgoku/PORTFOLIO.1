/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "custom-gray": "#dbdbdb",
        "second-gray": "#f1f5f4",
        "third-gray": "#A8D0E6",
        "custom-black": "#3D3C3A",
      },
    },
  },
  plugins: [],
};
