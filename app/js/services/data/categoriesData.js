app.factory('categoriesData', ['$resource', 'baseServiceUrl', 
	function($resource, baseServiceUrl){
		var resource = $resource(baseServiceUrl + 'categories');

		function getAllCategories () {
			return resource.query();
		}
		return {
			getCategories: getAllCategories
		}
	}
])