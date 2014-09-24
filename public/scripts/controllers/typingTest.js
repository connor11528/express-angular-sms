
app.controller('TypingTestCtrl', function($scope, quote){
	$scope.userInput = '';
	$scope.area = { quote: 'When you are ready to begin press Start' };
  $scope.startTest = false;

	$scope.start = function(){
    $scope.startTest = false;
    $scope.result = null;
    $scope.area.quote = 'Waiting...';
    quote.getQuote().then(function(data){
      $scope.startTime = new Date().getTime();
      $scope.area = data;
      $scope.userInput = '';
      $scope.startTest = true;
    });
	};
 
  $scope.end = function(phrase){
    var words = phrase.length/5;  // a word is five keystrokes
    var timeElapsed = (new Date().getTime() - $scope.startTime) / 1000;
    var wpm;
    $scope.result = 'Test complete: ' + words + ' words in ' + timeElapsed + ' seconds. WPM: ' + wpm;
  };

	$scope.$on('keypress', function(e, key){
    $scope.userInput.concat(key);
	});
});