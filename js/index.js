var flag=2;
var num1;
var num2;
var tem1;
var tem2;
var time;
$(function(){
	
	$("#li1").css({"width":"600px","height":"240px","z-index":"80","opacity":"0.8"});
	$("#li2").css({"width":"752px","height":"300px","z-index":"90"});
	$("#li3").css({"width":"600px","height":"240px","z-index":"80","opacity":"0.8"});
	$("#li4").css({"width":"600px","height":"240px","z-index":"80","opacity":"0"});
	$("#li5").css({"width":"600px","height":"240px","z-index":"80","opacity":"0"});
	$("#li6").css({"width":"600px","height":"240px","z-index":"80","opacity":"0"});
	$("#li7").css({"width":"600px","height":"240px","z-index":"80","opacity":"0"});
	$("#li8").css({"width":"600px","height":"240px","z-index":"80","opacity":"0"});
//		alert(123);
    time=setInterval(function(){
		flag++;
		if(flag>8){
			flag=1;
		}
		
		$(".event_banner li").css("z-index","50");
					if(flag+2>8 && flag==7){
						tem1=1;
					}else if(flag+2>8 && flag==8){
						tem1=2;	
					}else {
						tem1=flag+2;
					}
		$("#li"+tem1).css({"left":"-300px","z-index":"70","width":"600px","height":"240px","opacity":"0"});
			if(flag+1>8){
				num1=1;
			}else{
				num1=flag+1;
			}
			$("#li"+num1).css({"left":"0px","z-index":"80","width":"600px","height":"240px","opacity":"0.8"});
			$("#li"+flag).css({"left":"224px","z-index":"90","width":"752px","height":"300px","opacity":"1"});
			if(flag-1<1){
				num2=8;
			}else{
				num2=flag-1;
			}
			$("#li"+num2).css({"left":"600px","z-index":"80","width":"600px","height":"240px","opacity":"0.8"});
			if(flag-2<1 && flag==1){
						tem2=7;
					}else if(flag-2<1 && flag==2){
						tem2=8;
					}else {
						tem2=flag-2;
					}
			$("#li"+tem2).css({"left":"900px","z-index":"70","width":"600px","height":"240px","opacity":"0"});
	},4000);
	
	$(".mod_index--event .new_buleft a").click(function(){
		clearInterval(time);
		flag--;
		if(flag<1){
			flag=8;
		}
		
		$(".event_banner li").css("z-index","50");
					if(flag+2>8 && flag==7){
						tem1=1;
					}else if(flag+2>8 && flag==8){
						tem1=2;	
					}else {
						tem1=flag+2;
					}
		$("#li"+tem1).css({"left":"-300px","z-index":"70","width":"600px","height":"240px","opacity":"0"});
			if(flag+1>8){
				num1=1;
			}else{
				num1=flag+1;
			}
			$("#li"+num1).css({"left":"0px","z-index":"80","width":"600px","height":"240px","opacity":"0.8"});
			$("#li"+flag).css({"left":"224px","z-index":"90","width":"752px","height":"300px","opacity":"1"});
			if(flag-1<1){
				num2=8;
			}else{
				num2=flag-1;
			}
			$("#li"+num2).css({"left":"600px","z-index":"80","width":"600px","height":"240px","opacity":"0.8"});
			if(flag-2<1 && flag==1){
						tem2=7;
					}else if(flag-2<1 && flag==2){
						tem2=8;
					}else {
						tem2=flag-2;
					}
			$("#li"+tem2).css({"left":"900px","z-index":"70","width":"600px","height":"240px","opacity":"0"});
		time=setInterval(function(){
		flag++;
		if(flag>8){
			flag=1;
		}
		
		$(".event_banner li").css("z-index","50");
					if(flag+2>8 && flag==7){
						tem1=1;
					}else if(flag+2>8 && flag==8){
						tem1=2;	
					}else {
						tem1=flag+2;
					}
		$("#li"+tem1).css({"left":"-300px","z-index":"70","width":"600px","height":"240px","opacity":"0"});
			if(flag+1>8){
				num1=1;
			}else{
				num1=flag+1;
			}
			$("#li"+num1).css({"left":"0px","z-index":"80","width":"600px","height":"240px","opacity":"0.8"});
			$("#li"+flag).css({"left":"224px","z-index":"90","width":"752px","height":"300px","opacity":"1"});
			if(flag-1<1){
				num2=8;
			}else{
				num2=flag-1;
			}
			$("#li"+num2).css({"left":"600px","z-index":"80","width":"600px","height":"240px","opacity":"0.8"});
			if(flag-2<1 && flag==1){
						tem2=7;
					}else if(flag-2<1 && flag==2){
						tem2=8;
					}else {
						tem2=flag-2;
					}
			$("#li"+tem2).css({"left":"900px","z-index":"70","width":"600px","height":"240px","opacity":"0"});
	},4000);
	});
	
	$(".mod_index--event .new_buright a").click(function(){
		clearInterval(time);
//		flag++;
		flag++;
		if(flag>8){
			flag=1;
		}
		
		$(".event_banner li").css("z-index","50");
					if(flag+2>8 && flag==7){
						tem1=1;
					}else if(flag+2>8 && flag==8){
						tem1=2;	
					}else {
						tem1=flag+2;
					}
		$("#li"+tem1).css({"left":"-300px","z-index":"70","width":"600px","height":"240px","opacity":"0"});
			if(flag+1>8){
				num1=1;
			}else{
				num1=flag+1;
			}
			$("#li"+num1).css({"left":"0px","z-index":"80","width":"600px","height":"240px","opacity":"0.8"});
			$("#li"+flag).css({"left":"224px","z-index":"90","width":"752px","height":"300px","opacity":"1"});
			if(flag-1<1){
				num2=8;
			}else{
				num2=flag-1;
			}
			$("#li"+num2).css({"left":"600px","z-index":"80","width":"600px","height":"240px","opacity":"0.8"});
			if(flag-2<1 && flag==1){
						tem2=7;
					}else if(flag-2<1 && flag==2){
						tem2=8;
					}else {
						tem2=flag-2;
					}
			$("#li"+tem2).css({"left":"900px","z-index":"70","width":"600px","height":"240px","opacity":"0"});
		time=setInterval(function(){
		flag++;
		if(flag>8){
			flag=1;
		}
		
		$(".event_banner li").css("z-index","50");
					if(flag+2>8 && flag==7){
						tem1=1;
					}else if(flag+2>8 && flag==8){
						tem1=2;	
					}else {
						tem1=flag+2;
					}
		$("#li"+tem1).css({"left":"-300px","z-index":"70","width":"600px","height":"240px","opacity":"0"});
			if(flag+1>8){
				num1=1;
			}else{
				num1=flag+1;
			}
			$("#li"+num1).css({"left":"0px","z-index":"80","width":"600px","height":"240px","opacity":"0.8"});
			$("#li"+flag).css({"left":"224px","z-index":"90","width":"752px","height":"300px","opacity":"1"});
			if(flag-1<1){
				num2=8;
			}else{
				num2=flag-1;
			}
			$("#li"+num2).css({"left":"600px","z-index":"80","width":"600px","height":"240px","opacity":"0.8"});
			if(flag-2<1 && flag==1){
						tem2=7;
					}else if(flag-2<1 && flag==2){
						tem2=8;
					}else {
						tem2=flag-2;
					}
			$("#li"+tem2).css({"left":"900px","z-index":"70","width":"600px","height":"240px","opacity":"0"});
	},4000);
	});
});