const path = require('path');

module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'ep-round-hat-a8jp2t76.eastus2.azure.neon.tech'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'neondb'),
      user: env('DATABASE_USERNAME', 'neondb_owner'),
      password: env('DATABASE_PASSWORD', 'oX2NZx4Fuwqp'),
      ssl: {
        rejectUnauthorized: false, // Importante para Neon
      },
    },
    debug: false,
  },
});
