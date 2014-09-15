
app.service('quote', function($http, $q){
	var quote = {};

	quote.getQuote = function(){
		var dfd = $q.defer()
		$http.post('/getQuote').success(function(res){
			dfd.resolve(res);
		})
		return dfd.promise;
	};

	return quote;
});