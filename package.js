Package.describe({
  summary: "Fancy date ranges for Moment.js packaged for Meteor.",
  version: '1.0.2',
  name: 'kevbuk:moment-range',
  git: 'https://github.com/kevb/meteor-moment-range'
});

Package.onUse(function (api, where) {
  where = where || ['client', 'server'];
  api.use('mrt:moment', where);
  api.addFiles('lib/moment-range/lib/moment-range.js', where);
});
