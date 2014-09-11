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

app.directive('checkTyping', function(){
  return {
    restrict: 'A',
    scope: {
      input: '=',
      quote: '='
    },
    link: function(scope, elem, attrs){
      scope.$watch('input', function(){
        console.log(scope.input)
      })
    }
  }
})