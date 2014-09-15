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
      quote: '=',
      finishTest: '&'
    },
    link: function(scope, elem, attrs){
      scope.$watch('input', function(){
        var inputLength = scope.input.length;
        var quoteSoFar = scope.quote.substring(0, inputLength)

        // user typed a wrong letter
        if(quoteSoFar !== scope.input){
          elem.css('background-color', 'rgb(224,0,0)')
        } else {
          elem.css('background-color', 'white')
        }

        if(scope.quote === scope.input){
          // pass phrase to controller
          scope.finishTest({phrase: scope.quote});
        }
      })
    }
  }
})

app.directive('focusCursor', function($timeout){
  return {
    restrict: 'A',
    link: function(scope, elem, attrs){
      scope.$watch('startTest', function(startTest){
        if(startTest){
          $timeout(function(){
            elem[0].focus()
          }, 0);
          attrs.$set('placeholder', 'Go!');
        }
      });
    }
  };
});