var fs = require('fs')

module.exports = {
	upload: function(req, res){
		console.log(req.files.file.name + ' has been uploaded')

		// Do something with file here:
		// - save metadata to database
		// - upload file to S3 bucket

		// remove file from our server
		fs.unlink(req.files.userFile.path, function(err){
			console.log(req.files.userFile.name + ' has been deleted!')
			// or if you want relative path to upload:
			// req.files.file.split('/').slice(-2).join('/')
		})
		res.send(200)
	},
}