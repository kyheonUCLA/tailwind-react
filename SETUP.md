# Tailwind Setup

npm install -D tailwindcss postcss autoprefixer

then install craco to override react configurations

npm install @craco/craco

then replace react configs in package.json with craco

"scripts": {
   "start": "craco start",
   "build": "craco build"
   "test": "craco test"
    ...
}

create a file craco.config.js and add below code:

module.exports = {
    style: {
        potcss: {
            plugins: [
                require('tailwindcss'),
                require('autoprefixer'),
            ],
        },
    },
}

then use command below to create tailwind config file from craco.config.js

npx tailwindcss-cli@latest init

The tailwind.config.js file should look like:

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

then add tailwind directives into index.css shown below:

@tailwind base;
@tailwind components;
@tailwind utilities;

import icons with:

npm install react-icons --save
