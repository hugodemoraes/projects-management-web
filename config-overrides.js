const { override, addBabelPlugin, addWebpackAlias } = require('customize-cra');
const path = require('path');

module.exports = override(
  addBabelPlugin([
    'root-import',
    {
      rootPathPrefix: '~',
      rootPathSuffix: 'src',
    },
  ]),
  addWebpackAlias({
    '@pages': path.resolve(__dirname, 'src', 'pages'),
    '@colors': path.resolve(__dirname, 'src', 'styles', 'colors'),
    '@components': path.resolve(__dirname, 'src', 'components'),
  }),
);
