Package.describe({
  summary: 'Use Amazon SES for Email with Meteor',
  version: "1.0.0"
});

Package.on_use(function (api) {
	if(api.versionsFrom) api.versionsFrom("METEOR-CORE@0.9.0-atm");
	api.use(['mrt:meteor-nodemailer@0.2.0', 'email'], 'server');
	api.imply(['mrt:meteor-nodemailer@0.2.0', 'email'], 'server');
	api.add_files('lib.js', 'server');
});