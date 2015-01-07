app.directive('categories', 
	function(){
		return {
			controller: 'CategoriesController',
			restrict: 'E',
			templateUrl: 'templates/categories.html',
			replace: true
		};
	}
);