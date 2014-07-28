var credentials = require('../../credentials');
var querystring = require('querystring');
var https = require('https');

var api_key = credentials.api_key;
var username = credentials.username;

exports.sendMessage = function(to_, message_){
	var post_data = querystring.stringify({
		'username' : username,
	    'to'       : to_,
	    'message'  : message_
	})

	var post_options = {
		host: 'api.africastalking.com',
		port: '443',
		path: '/version1/messaging',
		method: 'POST',
		headers: {
	    	'Content-Type' : 'application/x-www-form-urlencoded',
	    	'Content-Length': post_data.length,
	    	'Accept': 'application/json',
	    	'apikey': api_key
		}
    };
    var post_req = https.request(post_options, function(res) {
	    res.setEncoding('utf8');
	    res.on('data', function (chunk) {
		    var jsObject   = JSON.parse(chunk);
		    var recipients = jsObject.SMSMessageData.Recipients;
		    if ( recipients.length > 0 ) {
			for (var i = 0; i < recipients.length; ++i ) {
			    var logStr  = 'number=' + recipients[i].number;
			    logStr     += ';cost='   + recipients[i].cost;
			    logStr     += ';messageId='   + recipients[i].messageId;
			    logStr     += ';status=' + recipients[i].status;
			    console.log(logStr);
			}
		    } else {
				console.error('Error while sending: ' + jsObject.SMSMessageData.Message);
		    }
		});
	});
    
    post_req.write(post_data);
    post_req.end();
};