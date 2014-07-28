var fs = require('fs')

module.exports = {
	upload: function(req, res){
		var fileName = req.files.fileName.name,
			filePath = req.files.fileName.path;

		console.log(fileName + ' added to uploads')

		// Do something with file here:
		// - save metadata to database
		// - upload file to S3 bucket

		// remove file from our server
		fs.unlink(filePath, function(err){
			console.log(fileName + ' has been deleted!')
		})
		res.redirect('/')
	},
}