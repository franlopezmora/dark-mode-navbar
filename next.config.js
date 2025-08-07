// next.config.js
const path = require('path');

/** @type {import('next').NextConfig} */
module.exports = {
  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      // todo import de "tailwindcss" va a cargar el CSS compilado
      'tailwindcss$': path.resolve(
        __dirname,
        'node_modules/tailwindcss/tailwind.css'
      ),
    };
    return config;
  },
};
