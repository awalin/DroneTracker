	var scotchApp = angular.module('droneApp', ['ngRoute']);

	// configure our routes
	scotchApp.config(function($routeProvider) {
		$routeProvider

			//home page
			.when('/', {
				templateUrl : 'pages/home.html',
				controller  : 'mainController'
			})

			//about page
			.when('/about', {
				templateUrl : 'pages/about.html',
				controller  : 'aboutController'
			})

			//contact page
			.when('/contact', {
				templateUrl : 'pages/contact.html',
				controller  : 'contactController'
			});
	});

	// create the controller 
	scotchApp.controller('mainController', function($scope) {
		$scope.message = 'This is page 1';
	});

	scotchApp.controller('aboutController', function($scope) {
		$scope.message = 'This is page 2';
	});

	scotchApp.controller('contactController', function($scope) {
		$scope.message = 'This is page 3';
	});