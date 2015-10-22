var mainApplicationModuleName = 'mean';

//Create a the main application module 
var mainApplicationModule = angular.module(mainApplicationModuleName, ['ngRoute', 'users', 'example']);

mainApplicationModule.config(['$locationProvider', function($locationProvider) {
		$locationProvider.hashPrefix('!');
	}
]);

//This solves Facebook's redirect bug that adds a hash part to the application's URL after the OAuth authentication round-trip
if (window.location.hash === '#_=_') window.location.hash = '#!';

angular.element(document).ready(function() {
	//Initiates a new AngularJS application using the main application module
  	angular.bootstrap(document, [mainApplicationModuleName]);
});