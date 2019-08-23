module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react'],
  env: {
    development: {
      presets: ['@babel/preset-env', '@babel/preset-react'],
    },
    test: {
      presets: ['@babel/preset-env', '@babel/preset-react'],
    },
    production: {
      presets: ['@babel/preset-env', '@babel/preset-react'],
    },
  },
};
