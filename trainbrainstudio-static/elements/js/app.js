var appM= angular.module('appM', ['ngRoute','controllersM','servicesM','directiveM','ui.bootstrap']);

appM.config(function($resourceProvider){});

appM.config(['$routeProvider', function($routeProvider){
	console.log("appM route config");
	//Home
	$routeProvider.when('/home', {
		templateUrl: 'elements/html/core/home_amoeba.html',
		controller: 'HomeController'
	});
	//otherwise
	$routeProvider.otherwise({
		redirectTo: '/home'
	});
}]);

appM.config(['$locationProvider', function($locationProvider){}]);

