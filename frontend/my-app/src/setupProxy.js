const { createProxyMiddleware } = require('http-proxy-middleware');

// from the frontend, set the target server port to be 8000.
module.exports = function(app) {
    app.use(
        '/api',
        createProxyMiddleware({
          target: 'http://localhost:8000',
          changeOrigin: true,
        })
    );
};