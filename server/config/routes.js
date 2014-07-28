var message = require('../controllers/message.js'),
	fileUpload = require('../controllers/fileUpload')

module.exports = function(app){
	app.get('/messages', message.findAll)
	app.get('/messages/:id', message.findById)
	app.post('/messages/send/:number/:message', message.sendSMS)

	// file upload
	app.post('/upload', fileUpload.upload)

	// every other route angular will handle
	app.get('/*', function(req, res) {
		// need to use config.rootPath
		res.sendfile('../../public/index.html')
	});
}