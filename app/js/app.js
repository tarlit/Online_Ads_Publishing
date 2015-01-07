'use strict';

var app = angular.module('adsApp', ['ngRoute', 'ngResource', 'LocalStorageModule']);

app.constant('baseServiceUrl', 'http://softuni-ads.azurewebsites.net/api/');

app.config(['$routeProvider', '$locationProvider', 'localStorageServiceProvider', 
	function($routeProvider, $locationProvider, localStorageServiceProvider){
		$routeProvider.when('/', {
			templateUrl: 'templates/home.html',
			controller: 'HomeController'
		});
		$routeProvider.when('/login', {
			templateUrl: 'templates/login.html',
			controller: 'LoginController'
		});
		$routeProvider.when('/register', {
			templateUrl: 'templates/register.html',
			controller: 'RegisterController'
		});
		$routeProvider.otherwise({
			redirectTo: '/'
		});

		//Web storage settings
		localStorageServiceProvider
			.setStorageType('sessionStorage')
			.setPrefix('adsApp')
			.setNotify(true, true);

		$locationProvider.html5Mode(true);
	}
]);


