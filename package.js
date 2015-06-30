Package.describe({
  name: 'yasinuslu:jq-helper',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'A helper to quickly initialize jQuery plugins',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/yasinuslu/jq-helper',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.use(['templating'], 'client');
  api.addFiles([
    'jq-helper.html',
    'jq-helper.js'
  ], 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('yasinuslu:jq-helper');
  api.addFiles('jq-helper-tests.js');
});
