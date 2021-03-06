'use strict';

var app = angular.module('app', ['ngRoute', 'ngResource', 'ui.bootstrap.pagination']);

app.constant('baseServiceUrl', 'http://softuni-ads.azurewebsites.net');
app.constant('pageSize', 2);

app.config(function ($routeProvider) {

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

    $routeProvider.when('/user/ads', {
        templateUrl: 'templates/user/user-my-ads.html',
        controller: 'UserGetAllAdsController'
    });

    $routeProvider.when('/user/ads/publish', {
        templateUrl: 'templates/user/publish-new-ad.html',
        controller: 'UserPublishNewAdController'
    });

    $routeProvider.when('/user/ads/deactivate/:id', {
        templateUrl: 'templates/user/user-my-ads.html',
        controller: 'UserGetAllAdsController'
    });

    $routeProvider.when('/admin/ads/publish', {
        templateUrl: 'templates/admin/.html',
        controller: 'Controller'
    });

    $routeProvider.when('/admin/ads', {
        templateUrl: 'templates/.html',
        controller: 'Controller'
    });

    $routeProvider.when('/admin/ads/approve/:id', {
        templateUrl: 'templates/admin/.html',
        controller: 'Controller'
    });

    $routeProvider.otherwise(
        { redirectTo: '/' }
    );

});

app.run(function ($rootScope, $location, authService) {
    $rootScope.$on('$locationChangeStart', function (event) {
        if ($location.path().indexOf("/user/") != -1 && !authService.isLoggedIn()) {
        // Authorization check: anonymous site visitors cannot access user routes
        $location.path("/");
        }
    });
});

