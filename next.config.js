/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
  env: {
    storyblokApiToken: process.env.STORYBLOK_API_KEY,
  },
};
