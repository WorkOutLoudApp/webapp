/** @type {import('next').NextConfig} */
module.exports = {
  output: 'standalone',
  env: {
    apiUrl: process.env.NODE_ENV == 'production' || process.env.APP_ENV == 'production' ? 'https://workoutloud.me' : 'http://localhost:3000',
  },
}
