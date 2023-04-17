const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://swe-applicant-challenge.vercel.app',
      changeOrigin: true,
    })
  );
};