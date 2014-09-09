
app.service('quote', function($http, $q){
	var q = {};

	q.getQuote = function(){
		var dfd = $q.defer()
		$http.post('/getQuote').success(function(res){
			
			dfd.resolve(res)
		})

		return dfd.promise;
	}

	return q;

});