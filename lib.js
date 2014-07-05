var AWSAccessKeyID;
var AWSSecretKey;

var sendEmail = function(params, callback) {
	var transport = Nodemailer.createTransport("SES", {
	    AWSAccessKeyID: AWSAccessKeyID,
	    AWSSecretKey: AWSSecretKey
	});

	if(!callback) callback = function(err,result) {
		if(err) throw new Meteor.Error(500, err.message, err)
	}

	transport.sendMail(params, callback);
	transport.close();
}

Email.configSES = function(params) {

	AWSSecretKey = params.AWSSecretKey;
	AWSAccessKeyID = params.AWSAccessKeyID;

	Email.send = sendEmail;
}