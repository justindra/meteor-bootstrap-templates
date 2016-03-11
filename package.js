Package.describe({
  name: 'justindra:bootstrap-templates',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Bootstrap Components as Blaze Templates',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/justindra/meteor-bootstrap-templates.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.use([
      'templating',
      'less@1.0.0 || 2.5.0'
    ], 'client');
  api.addFiles('justindra-bootstrap-templates.js');
  api.addFiles([
      'client/panel.html',
      'client/modal.html',
      'client/forms.html',
      'client/forms.js',
      'client/stylesheets/forms.less'
    ], 'client');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('justindra:bootstrap-templates');
  api.addFiles('justindra-bootstrap-templates-tests.js');
});
