app.directive('towns', 
	function(){
		return {
			controller: 'TownsController',
			restrict: 'E',
			templateUrl: 'templates/towns.html',
			replace: true
		};
	}
);