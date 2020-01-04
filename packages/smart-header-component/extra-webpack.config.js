module.exports = (config, options) => {
  config.output.jsonpFunction = 'webpackJsonpSmartHeader';
  config.output.library = 'smartHeader';

  return config;
};
