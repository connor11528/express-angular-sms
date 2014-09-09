
app.service('quote', function($http){
	var q = {};

	q.getQuote = function(){
		return $http.get('http://iheartquotes.com/api/v1/random?format=html&max_lines=4&max_characters=320')
			.success(function(res){
				console.log(res.data)
			});
	}


	return q;

})