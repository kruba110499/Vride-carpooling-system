var app = angular.module('main', ['ngRoute']);
app.config(function($routeProvider) {
	$routeProvider.when('/login', {
		templateUrl: '/home1',
		controller: 'loginCtrl'
    })
});