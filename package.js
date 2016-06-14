Package.describe({
  name: 'mys:fonts',
  version: '0.0.1',
  summary: 'Load fonts from node modules and imports',
  documentation: 'README.md'
});

Package.registerBuildPlugin({
  name: 'compileFonts',
  use: [
    'caching-compiler@1.0.0',
    'ecmascript@0.2.0'
  ],
  sources: [
    'plugin.js'
  ],
  npmDependencies: {
    lodash: '4.13.1'
  }
});

Package.onUse(function (api) {
  api.use('isobuild:compiler-plugin@1.0.0');
});
