var path = require('path');
var request = require('request');
var message = require('../controllers/message.js'),
	fileUpload = require('../controllers/fileUpload')

module.exports = function(app){
	app.get('/messages', message.findAll)
	app.get('/messages/:id', message.findById)
	app.post('/messages/send/:number/:message', message.sendSMS);

	app.post('/getQuote', function(req, res){
		request({
			method: 'POST',
			url: "https://andruxnet-random-famous-quotes.p.mashape.com/cat=movies",
			headers: {
				"X-Mashape-Key": "18xN7oh3kpmshc1xZIBLnT4UpG8ap1fQZ7rjsnLxlITG717Yaq"
			},
			json: true
		}, function(err, x, quote){
			if(err){
				console.log(err)
				return next(err)
			}
			console.log(x)
			res.json(quote);
		})
	})

	// file upload
	app.post('/upload', fileUpload.upload)

	// every other route angular will handle
	app.get('/*', function(req, res) {
		res.sendfile(path.resolve('./public/index.html'))
	});
}