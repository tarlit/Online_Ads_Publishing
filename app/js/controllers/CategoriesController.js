app.controller('CategoriesController', ['$scope', '$rootScope', 'categoriesData', 'filter', 
	function($scope, $rootScope, categoriesData, filter){
		categoriesData.getCategories()
		.$promise
		.then(function(data){
			$scope.categories = data;
		});	

		$scope.categoryClicked = function(category){
			filter.filterByCategory(category);
			$rootScope.$broadcast('categoryClicked', category);
		}
	}
]);