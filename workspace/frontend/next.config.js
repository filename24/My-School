const withPWA = require('next-pwa');

/**@type {import('next').NextConfig} */
const Config = {
  publicRuntimeConfig: {
    site: {
      name: 'My School',
      url: process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://school.anhgerel.ml',
      title: 'My School',
      description: '',
      socialPreview: '/images/preview.png',
    },
  },
  swcMinify: true,
  /*i18n: {
    locales: ['en-US', 'mn-MN', 'ko-KR'],
    defaultLocale: 'mn-MN',
  },*/
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }
    return config;
  },
  pwa: {
    disable: process.env.NODE_ENV !== 'production',
    register: false,
  },
  future: {},
  experimental: {
    scrollRestoration: true,
  },
};

module.exports = withPWA(Config);
