
app.controller('TypingTestCtrl', function($scope, quote){

	$scope.userInput = ''
	$scope.area = { quote: 'When you are ready to begin press Start' };

	$scope.start = function(){
    $scope.area.quote = 'Waiting...';
    quote.getQuote().then(function(data){
      $scope.area = data;
    });
	};

  $scope.$watch('area', function(){
    var startTime = new Date();
  });

	$scope.$on('keypress', function(e, key){
		// console.log(key)
    $scope.userInput.concat(key)
	});
});