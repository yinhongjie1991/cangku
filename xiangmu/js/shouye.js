
// 头部地域框显现JS
var show=document.getElementById('diqu_show');
var click=document.getElementById('click');
var pa=document.getElementById('pa');
var di_list=document.getElementById('di_list');
var im=document.getElementById('im');
var lis=di_list.getElementsByTagName('li');
var cp=document.getElementById('cp');
var s=true;
pa.onclick=function (){
	if (s) {
		show.style.display='block';
		im.src='http://img.toulianwang.com/images/arrow_top.png';
		s=false;
	}else{
		show.style.display='none';
		im.src='http://img.toulianwang.com/images/arrow_down.png';
		s=true;
	}
	
}

// 转换地名

for (var i = 0; i <lis.length; i++) {
	lis[i].onclick=function (){
		for (var j = 0; j < lis.length; j++) {
			if (this==lis[j]) {
				cp.innerHTML=lis[j].innerHTML;
				show.style.display='none';
				s=true;	
			}
		}
	}
}
// 登录框出现
var dlu=document.getElementById('dlu');
var login_hd=document.getElementById('login_hd');
var login_shou=document.getElementById('login_shou');
dlu.onclick=function (){
	login_hd.style.display='block';
	login_shou.style.display='block';
	 setInterval(function(){
		var ksw=document.documentElement.clientWidth||document.body.clientWidth;
		var ksh=document.documentElement.clientHeight||document.body.clientHeight;
		var le=(ksw-login_hd.offsetWidth)/2;
		var to=(ksh-login_hd.offsetHeight)/2;
		login_hd.style.left=le+'px';
		login_hd.style.top=to+'px';
	},2)
}
//登录验证码
var buu=document.getElementById('buu');
var cow=4;
function qi(){
	var cod='';
 	var ar=[1,2,3,4,5,6,7,8,9,0,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
 
for (var i = 0; i < cow; i++) {
	cod+=ar[Math.floor(Math.random()*36)];
    }
    console.log(cod);
    buu.value=cod;
}
qi();
buu.onclick=qi;
// 固定搜索框
var xiala=document.getElementById('xiala');
var zs=document.getElementById('zs');
var list=document.getElementById('list');
var zo_list=document.getElementById('zo_list');
var lts=zo_list.getElementsByTagName('li');
var st=true;
xiala.onclick=function (){
	if (st) {
		list.style.display='block';
		st=false;	
	}else{
		list.style.display='none';
		st=true;
	}
	
}
// 站内搜索
for (var i = 0; i <lts.length; i++) {
			lts[i].onclick=function (){
				for (var j = 0; j< lts.length; j++) {
					if (lts[j]==this) {
					zs.innerHTML=lts[j].innerHTML;
					console.log(zs.innerHTML);
					}
				}
			}
		}
// 点击更多隐藏的出现
var ovf=document.getElementById('ovf');
var mor=document.getElementById('mor');
var sy=true;
var finis=document.getElementById('finis');
var tan=document.getElementById('tan');
var tru=document.getElementById('tru');
mor.onclick=function (){
	if (sy) {
		ovf.style.display='block';
		sy=false;
	}else{
		tan.style.display='block';
		finis.onclick=function (){
			tan.style.display='none';
		}
		sy=true;
	}
	
}
// 对话框

