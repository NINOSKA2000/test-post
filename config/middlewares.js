module.exports = [
  'strapi::errors',
  {
  name: 'strapi::security',
  config: {
  contentSecurityPolicy: {
  useDefaults: true,
  directives: {
  'connect-src': ["'self'", 'https:'],
  'img-src': ["'self'", 'data:', 'blob:', '[res.cloudinary.com](http://res.cloudinary.com/)'],
  'media-src': ["'self'", 'data:', 'blob:', '[res.cloudinary.com](http://res.cloudinary.com/)'],
  upgradeInsecureRequests: null,
  },
  },
  },
  },
  {
  name: 'strapi::cors',
  config: {
  origin: ['https://dev.ariapp.ai', 'https://www.ariapp.ai' , 'http://localhost:1337'], // Reemplaza por tu dominio permitido
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  headers: ['Content-Type', 'Authorization'],
  credentials: true,
  },
  },
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
  ];