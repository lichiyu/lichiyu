window.onload=function(){
	sktime()
}

function sktime(){
    var sk = 5*60*60;
    var skDiv = document.querySelector(".sk_time");
    var spanS = skDiv.children;
    skDiv.timer=setInterval(function(){
        if(sk<0){
           clearInterval(skDiv.timer)
        }else{
            sk--;
            var hour = Math.floor(sk/3600);
            var minute = Math.floor(sk%3600/60);
            var second = sk%60;
            spanS[0].innerHTML=0;
            spanS[1].innerHTML=hour;
            if(minute<10){
                spanS[3].innerHTML=0;
                spanS[4].innerHTML=minute;
            }else{
                spanS[3].innerHTML=Math.floor(minute/10);
                spanS[4].innerHTML=minute%10;
            }
            if(second<10){
                spanS[6].innerHTML=0;
                spanS[7].innerHTML=second;
            }else{
                spanS[6].innerHTML=Math.floor(second/10);
                spanS[7].innerHTML=second%10;
            }
        }
    }, 1000)
}



var mfApp=angular.module("mfApp",[]).controller("mfController",["$scope","$http",function($scope,$http){
	$http({
		method:"get",
		url:"data.json"
	}).then(function(data){
		
		$scope.data=data.data.data.slice(0,4)
	})
	
}])
