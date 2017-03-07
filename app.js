(function(angular){
	var qidianApp=angular.module("qidianApp",["ngRoute","rxApp","qyApp","fyApp","tjApp"]);
	qidianApp.config(["$routeProvider",function($routeProvider){
		
		$routeProvider.when("/rxb",{
			templateUrl:"rx/rx.html",
			controller:"rxController"
		}).when("/fyb",{
			templateUrl:"fy/fy.html",
			controller:"fyController"
		}).when("/qyb",{
			templateUrl:"qy/qy.html",
			controller:"qyController"
		}).when("/tjb",{
			templateUrl:"tj/tj.html",
			controller:"tjController"
			}).otherwise({
		redirectTo:"/rxb"
		
	})
			
	}])
	
var qidianApp=angular.module("qidianApp",[]).controller("shujuController",["$scope","$http",function($scope,$http){
			$http({
					method:"get",
					url:"data.json"
					
				}).then(function(data){
					
				alert(1)
					$scope.data=data.data.data.slice(0,3);
					
				})
				
			}])
})(angular);
