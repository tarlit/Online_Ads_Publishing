app.controller('TownsController', ['$scope', '$rootScope','townsData', 'filter', 
	function($scope, $rootScope, townsData, filter){
		townsData.getTowns()
			.$promise
			.then(function(data){
				$scope.towns = data;
			});

		$scope.townClicked = function(town){
			filter.filterByTown(town);
			$rootScope.$broadcast('townClicked', town);
		}
	}
])