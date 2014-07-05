#Email Package for SES

Allows you to use Amazon SES as your email provider in Meteor.

###Configuring


Server side code:
```
Email.configSES({
	AWSAccessKeyID: '<youraccesskey>,
    AWSSecretKey: '<accesskey>'
});
```

##Sending Email

To send email, use the ordinary Email.send (http://docs.meteor.com/#email_send) with Meteor.


###Notes

With SES you can only send email from verified emails, make sure you have set the from address as a verified email

```
Accounts.emailTemplates.from = "Meteor Accounts <no-reply@meteor.com>";
```

###Additional Functionality

Nodemailer is used under the hood, so extra functionality is available, e.g attachments. To see what you can do have a look at nodemailer and just pass the params in Email.send