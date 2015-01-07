app.controller('CategoriesController', ['$scope', 'categoriesData', 'filter', 
	function($scope, categoriesData, filter){
		categoriesData.getCategories()
		.$promise
		.then(function(data){
			$scope.categories = data;
		});	

		$scope.categoryClicked = function(category){
			filter.filterByCategory(category);
		}
	}
]);