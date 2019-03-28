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
    '@components': path.resolve(__dirname, 'src', 'components'),
  }),
);
