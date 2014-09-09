
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
    console.log('begin typing..')
    var startTime = new Date();

  });

	$scope.$on('keypress', function(e, key){
		console.log(key)
    $scope.userInput.concat(key)
	});

});






app.directive('captureKeypresses', [
  '$document',
  '$rootScope',
  function($document, $rootScope) {
    return {
      restrict: 'A',
      link: function() {
        $document.bind('keypress', function(e) {
          // console.log('Got keypress:', String.fromCharCode(e.which));

          //Dispatches an event name downwards to all child scopes (and their children) notifying the registered $rootScope.Scope listeners
          $rootScope.$broadcast('keypress', String.fromCharCode(e.which));
          $rootScope.$broadcast('keypress:' + e.which, e);
        });
      }
    };
  }
]);