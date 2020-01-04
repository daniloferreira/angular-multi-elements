module.exports = (config, options) => {
  config.output.jsonpFunction = 'webpackJsonpSmartFooter';
  config.output.library = 'smartFooter';

  return config;
};
