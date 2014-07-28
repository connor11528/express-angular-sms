var messages = require('../utils/sendMessage')

exports.findAll = function(req, res){
	res.send([{message: 'message1'}, {message: 'message2'}])
};

exports.findById = function(req, res){
	res.send({id:req.params.id, name: 'the name', description: 'the description'})
};

exports.sendSMS = function(req, res){
	sendMessage('+254714019079', 'Hello this is the message')
}



