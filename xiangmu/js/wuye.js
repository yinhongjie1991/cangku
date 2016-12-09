var bu=document.getElementById('bu');
var chu=document.getElementById('chu')
var fi=document.getElementById('fi');
var f=document.getElementById('f');
var tp=-200;
var s=null;
bu.onclick=function (){	
	f.style.display='block';
	chu.style.display='block';
		s=setInterval(function(){
		tp+=5;
		if (tp>=200) {
			tp=200;
		}
		
		var ksh=document.documentElement.clientHeight||document.body.clientHeight;
	    var ksw=document.documentElement.clientWidth||document.body.clientWidth;
	    var bt=chu.offsetWidth;
	    var bh=chu.offsetHeight;
	    chu.style.left=(ksw-bt)/2+'px';
	    chu.style.top=(ksh-bh)/2+tp/5+'px';
	},3)
  }
fi.onclick=function (){
	f.style.display='none';
	chu.style.display='none';
	chu.style.top=-200+'px';
}
var tte=document.getElementById('tte');
var yz=document.getElementById('yz');
var pss=document.getElementById('pss');
var conta=document.getElementById('conta');
var br=document.getElementById('br');
var buto1=document.getElementById('buto1');
var cod=null;
var cos=4;
function yze(){
	var  cod='';
	var ar=[1,2,3,4,5,6,7,8,9,0,'A','B','C','D','E','F','G','H','a','b','c','d','e','f','g'];
	for (var i = 0; i < cos; i++) {
		cod+=ar[Math.floor(Math.random()*25)];
		// console.log(cod);
	    conta.value=cod;
	}
}
yze();
conta.onclick=yze;
// 滚动条
var wen=document.getElementById('wenzi');
var sp=wen.getElementsByTagName('span');
var tt=null;
var n=0;
document.onscroll=function (){
	var sct=document.documentElement.scrollTop||document.body.scrollTop;
	if (sct>541) {
		wen.style.position='fixed';
		wen.style.top=0;
		wen.style.left=100+'px';	
	}
	if (sct>=940) {
		sp[1].className='active';
		sp[0].className='';
	}
	if (sct<940) {
		sp[0].className='active';
		sp[1].className='';

	}
	if (sct<541) {
		wen.style.position='';	
	}	
}
function ff(df){
 	df=document.documentElement.scrollTop;
 	df=document.body.scrollTop;
 }
sp[0].onclick=function (){
var sct=document.documentElement.scrollTop=document.body.scrollTop;
		console.log(sct)
		if (sct<555) {
			var mbjl=(555-sct)/50;
			// console.log(mbjl);
			tt=setInterval(function(){
				sct+=mbjl;
				// console.log(sct);
				if (sct>=500) {
					sct=500;
					clearInterval(tt);
				}	
document.documentElement.scrollTop=document.body.scrollTop=sct;
	
			},2)
		}else{
			var mbjl1=(sct-500)/50;
			// console.log(mbjl);
			tt=setInterval(function(){
				sct-=mbjl1;
				// console.log(sct);
				if (sct<=500) {
					sct=500;
					clearInterval(tt);
				}
document.documentElement.scrollTop=document.body.scrollTop=sct;
		   },2)
		}
	}
sp[1].onclick=function (){
var sct=document.documentElement.scrollTop=document.body.scrollTop;
		console.log(sct)
		if (sct<940) {
			var mbjl=(940-sct)/20;
			// console.log(mbjl);
			tt=setInterval(function(){
				sct+=mbjl;
				// console.log(sct);
				if (sct>=940) {
					sct=940;
					clearInterval(tt);
				}
				// ff(sct);
document.documentElement.scrollTop=document.body.scrollTop=sct;
	
			},2)
		}else{
			var mbjl1=(sct-940)/20;
			// console.log(mbjl);
			tt=setInterval(function(){
				sct-=mbjl1;
				// console.log(sct);
				if (sct<=940) {
					sct=940;
					clearInterval(tt);
				}
document.documentElement.scrollTop=document.body.scrollTop=sct;
		   },2)
		}
	}
var ddp=document.getElementById('ddp');
var xuan=document.getElementById('xuan');
var li=xuan.getElementsByTagName('li');
var im=xuan.getElementsByTagName('img');
var n=0;
var timg=null;
var elw=im[0].offsetWidth;
var elh=im[0].offsetHeight;
// console.log(elh);
function bi(obj,iiu){
	obj.onmouseover=function (){
	clearInterval(timg);
	timg=setInterval(function(){
		n++;
		if (n>=32) {
			n=32;
			clearInterval(timg);	
		}
		iiu.style.width=(elw+n)+'px';
		iiu.style.height=(n*elh/elw+elh)+'px';
		iiu.style.left=(-n/2)+'px';
		iiu.style.top=(-n/2*elh/elw)+'px';


	},20)
}
obj.onmouseout=function (){
		clearInterval(timg);
	    timg=setInterval(function(){
		n--;
		if (n<=0) {
			n=0;
			clearInterval(timg);	
		}
		iiu.style.width=(elw+n)+'px';
		iiu.style.height=(n*elh/elw+elh)+'px';
		iiu.style.left=(-n/2)+'px';
		iiu.style.top=(-n/2*elh/elw)+'px';


	 },20)
   }
}
for (var i = 0; i < li.length; i++) {
	bi(li[i],im[i]);
}