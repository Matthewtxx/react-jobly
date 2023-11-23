const path = require('path');

module.exports = {
  webpack: function (config, env) {
    // Add fallbacks for crypto and stream modules
    config.resolve.fallback = {
      ...config.resolve.fallback,
      crypto: require.resolve('crypto-browserify'),
      stream: require.resolve('stream-browserify'),
    };

    return config;
  },
};
