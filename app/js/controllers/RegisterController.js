app.controller('RegisterController', ['$scope', 'townsData', 'userData', function($scope, townsData, userData){

	townsData.getTowns()
		.$promise
		.then(function(data){
			$scope.towns = data;
		});

	$scope.register = function(user){
		userData.register(user);
	}
}]);