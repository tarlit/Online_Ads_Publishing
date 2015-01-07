app.factory('authentication', ['localStorageService', 
	function(localStorageServiceProvider){
		var key = 'user';

		function saveUserData (data){
			localStorageServiceProvider.set(key, data);
		}

		function getUserData (){
			return localStorageServiceProvider.get(key);
		}

		function getHeaders () {
			var headers = {};
			var userData = getUserData();
			if (userData) {
				headers.Authorization = 'Bearer ' + getUserData().access_token;
			};

			return headers;
		}

		function removeUser () {
			localStorageServiceProvider.removeItem(key);
		}

		function isAdmin () {
			var isAdmin = getUserData().isAdmin;
			return isAdmin;
		}

		function isLoggedIn () {
			return !!getUserData();
		}

		return {
			saveUser: saveUserData,
			getUser: getUserData,
			getHeaders: getHeaders,
			removeUser: removeUser,
			isAdmin: isAdmin,
			isLoggedIn: isLoggedIn
		}
	}
])