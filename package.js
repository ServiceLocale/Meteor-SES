Package.describe({
  summary: 'Use Amazon SES for Email with Meteor'
});

Package.on_use(function (api) {
	api.use(['meteor-nodemailer', 'email'], 'server');
	api.imply(['meteor-nodemailer', 'email'], 'server');
	api.add_files('lib.js', 'server');
});