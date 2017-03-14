(function(angular){
	"use strict";
	var jianliApp=angular.module("jianliApp",["ngRoute","homepageApp","skillApp","proApp","otherApp","contactApp"]);
	jianliApp.config(["$routeProvider",function($routeProvider){
		$routeProvider.when("/homepage",{
			templateUrl:"homepage.html"
//			controller:"homepageController"
		}).when("/skill",{
			templateUrl:"skill.html"
//			controller:"skillController"
		}).when("/project",{
			templateUrl:"pro.html"
//			controller:"proController"
			
		}).when("/other",{
			templateUrl:"other.html"
//			controller:"otherController"
			
		}).when("/contact",{
			templateUrl:"contact.html"
//			controller:"contactController"
			
		}).otherwise({
			redirectTo:"/homepage"
		})
		
		
	}])
})(angular)
