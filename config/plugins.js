module.exports = ({ env }) => ({
    cloudinary: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_CLOUD_NAME'), // Tu Cloud Name
        api_key: env('CLOUDINARY_API_KEY'),       // Tu API Key
        api_secret: env('CLOUDINARY_API_SECRET'), // Tu API Secret
      },
    },
  });
  