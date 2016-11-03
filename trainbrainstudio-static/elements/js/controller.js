var controllersM= angular.module('controllersM', ['servicesM', 'ui.bootstrap']);

console.log("Controller");

controllersM.controller('CoreController', function($scope, $http, $location, $rootScope, AppService){
	console.log("CoreController");

	$http.get('data/json/work.json').then(function(response){
		$scope.core= {};
		$scope.core.work= response.data;
	}, function(response){
		alert('something wrong with: data/json/work.json');
	});
});


controllersM.controller('HomeController', function($scope, $http, $location, $rootScope, AppService, $window){
	console.log("HomeController");


});