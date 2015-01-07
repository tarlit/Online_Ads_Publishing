app.controller('TownsController', ['$scope', 'townsData', 
	function($scope, townsData){
		townsData.getTowns()
			.$promise
			.then(function(data){
				$scope.towns = data;
			});
	}
])