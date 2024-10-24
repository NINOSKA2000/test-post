module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET'), // Usando la variable de entorno para el secreto
  },
  apiToken: {
    salt: env('API_TOKEN_SALT'), // Usando la variable de entorno para el salt
  },
});
