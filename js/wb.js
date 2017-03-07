var mfApp=angular.module("mfApp",[]).controller("mfController",["$scope","$http",function($scope,$http){
	$http({
		method:"get",
		url:"data.json"
	}).then(function(data){
		
		$scope.data=data.data.data.slice(0,4)
	})
	
}])