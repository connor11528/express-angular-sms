
app.controller('NavCtrl', function($scope, $rootScope){

	$scope.toggleMenu = function(){
		$rootScope.hideMenu = !$rootScope.hideMenu;
	}
})