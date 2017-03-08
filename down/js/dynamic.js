onload=function(){
var d1s=document.getElementById('d1').children;
var lis=document.getElementById('uls').children;
for(var i=0;i<d1s.length;i++){
	d1s[i].index=i+1;
	d1s[i].onclick=function(){
		
		 getA(this.index);
		 
			
	}
}
function getA(num){
	for(var i=0;i<lis.length;i++){
		if(lis[i].title==num){
			lis[i].style.display="block";
		    d1s[i].style.opacity="1";
		    
		   
		}else{
			lis[i].style.display="none";
			d1s[i].style.opacity="0.5";
			
			
		}
	}
}
}