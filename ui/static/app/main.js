(function(){

var app = angular.module('app.main', [
	'ui.router',
	'restangular',
	'ui.bootstrap'
]);

app.config(function(RestangularProvider){
	RestangularProvider.setBaseUrl('/api');
});
app.run(function($rootScope){
	$rootScope.app_base = '/';
});

app.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/');
	$stateProvider
		.state('root', {
			url: '/',
			templateUrl: 'templates/root.html',
			controller: 'MainAuthController'
		});
});

app.controller('MainAuthController', function($rootScope, Restangular, $state, $scope){
	$scope.words = "";

	$scope.sendWord = function(){
		$http.post('http://52.221.229.121/hadoop/input='+words,words).success(function(data){
        	
        });
	}


});

})();