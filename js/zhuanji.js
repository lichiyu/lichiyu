var i=1;
var j=1;
var z=1;
var leibie1=document.getElementById("leibie");
var niandai1=document.getElementById("niandai");
var changpiangongsi1=document.getElementById("changpiangongsi");
var geta1=document.getElementById("geta");
var getb1=document.getElementById("getb");
var getc1=document.getElementById("getc");
var con1=document.getElementById("i-one");
var con2=document.getElementById("i-two");
var con3=document.getElementById("i-three");
function getA(obj){
	i=i+1;
	if(i==2){
		j=1;
		z=1;
		getb1.style="background-color:;color:";
		getc1.style="background-color:;color:";
		leibie1.style.display="block";
		niandai1.style.display="none";
		changpiangongsi1.style.display="none";
		obj.style="background-color:#31c27c;color:white";
		con1.className="icon-angle-up";
		con2.className="icon-angle-down";
		con3.className="icon-angle-down";
	}
	if(i==3){
		i=1;
		leibie1.style.display="none";
		obj.style="background-color:;color:";
		con1.className="icon-angle-down";
		
	}
}
function getB(obj){
	j=j+1;
	if(j==2){
		i=1;
		z=1;
		geta1.style="background-color:;color:";
		getc1.style="background-color:;color:";
		niandai1.style.display="block";
		leibie1.style.display="none";
		changpiangongsi1.style.display="none";
		obj.style="background-color:#31c27c;color:white";
		con2.className="icon-angle-up";
		con1.className="icon-angle-down";
		con3.className="icon-angle-down";
	}
	if(j==3){
		j=1;
		niandai1.style.display="none";
		obj.style="background-color:;color:";
		con2.className="icon-angle-down";
	}
}
function getC(obj){
	z=z+1;
	if(z==2){
		i=1;
		j=1;
		geta1.style="background-color:;color:";
		getb1.style="background-color:;color:";
		niandai1.style.display="none";
		leibie1.style.display="none";
		changpiangongsi1.style.display="block";
		obj.style="background-color:#31c27c;color:white";
		con3.className="icon-angle-up";
		con1.className="icon-angle-down";
		con2.className="icon-angle-down";
	}
	if(z==3){
		z=1;
		changpiangongsi1.style.display="none";
		obj.style="background-color:;color:";
		con3.className="icon-angle-down";
	}
}
