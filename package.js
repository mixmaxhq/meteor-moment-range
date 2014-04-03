Package.describe({
  summary: "Fancy date ranges for Moment.js packaged for Meteor."
});

Package.on_use(function (api, where) {
  where = where || ['client', 'server'];
  api.use('moment', where);
  api.add_files('lib/moment-range/lib/moment-range.js', where);
  api.add_files('export-moment-range.js', where);
});
