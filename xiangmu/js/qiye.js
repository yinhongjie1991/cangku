// 重点推荐JS
var show1=document.getElementById('show1');
var show2=document.getElementById('show2');
var show3=document.getElementById('show3');
var chao=document.getElementById('chao');
// var tim=null;
function mov(obj){
	var tim=null;
	var tp=0;
	obj.onmouseover=function (){
		clearInterval(tim);
	  tim=setInterval(function(){
		tp++;
		if (tp>=5) {
			tp=5;
			clearInterval(tim);
		}
		obj.style.top=-tp+'px';
	},30)
}
    obj.onmouseout=function (){
    	clearInterval(tim);
 	   tim=setInterval(function(){
		tp--;
		if (tp<=0) {
			tp=0;
			clearInterval(tim);
		  }
			// console.log(tp);
		   obj.style.top=-tp+'px';
	    },30)
    }
}
var arr=[show1,show2,show3];
for (var i = 0; i < arr.length; i++) {
	mov(arr[i]);
}
// 企业展示效果
var hd=document.getElementById('hd');
var llg=hd.getElementsByTagName('li');
var hd_ovf=document.getElementById('hd_ovf');
function move(obj){
	var ml=0;
	var tie=null;
	obj.onmouseover=function (){
		clearInterval(tie);
		tie=setInterval(function(){
			ml++;
			if (ml>5) {
				ml=5;
				clearInterval(tie);
			}
			obj.style.marginTop=-ml+'px';
		},20)
	}
	obj.onmouseout=function (){
		clearInterval(tie);
		tie=setInterval(function(){
			ml--;
			if (ml<0) {
				ml=0;
				clearInterval(tie);
			}
			obj.style.marginTop=-ml+'px';
		},20)
	}
}
for (var i = 0; i < llg.length; i++) {
	move(llg[i]);
}
var mor=document.getElementById('mor');
var ss=true;
mor.onclick=function (){
	if (ss) {
		hd_ovf.style.display='block';
		ss=false;
	}else{
		alert("没有更多数据");
		ss=true;
	}
}