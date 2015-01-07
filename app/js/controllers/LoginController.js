app.controller('LoginController', ['$scope', '$location', 'userData', 
	function($scope, $location, userData){
	
		$scope.login = function(user){
			userData.login(user)
				.$promise
				.then(function(data){
					$location.path('/');
				});
		}
	}
]);