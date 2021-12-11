module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '779ee7fd272415e8366adc775199ffc6'),
  },
});
