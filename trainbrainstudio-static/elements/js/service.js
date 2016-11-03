var serviceM= angular.module('servicesM', ['ngResource']);

serviceM.factory('AppService', function($resource){
    var webResource= {};
    return webResource;
});

serviceM.factory('appGlobleDataService', function($resource){
    var globleDataService= {};
    return globleDataService;
});