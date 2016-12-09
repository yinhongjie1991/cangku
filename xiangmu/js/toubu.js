var show=document.getElementById('diqu_show');
var click=document.getElementById('click');
var pa=document.getElementById('pa');
var dd=document.getElementById('dd');
var im=document.getElementById('im');
var lis=dd.getElementsByTagName('li');
var cl=document.getElementById('cl');
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
				cl.innerHTML=lis[j].innerHTML;
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
var tbu=document.getElementById('tbu');
var te=document.getElementById('te');
var ps=document.getElementById('ps');
var tte=document.getElementById('tte');
var cow=4;
var cod=null;
function qi(){
	 cod='';
 var ar=[1,2,3,4,5,6,7,8,9,0,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
 
for (var i = 0; i < cow; i++) {
	cod+=ar[Math.floor(Math.random()*36)];
    }
    buu.value=cod;
}
qi();
buu.onclick=qi;
// tbu.onclick=function (){
// 	var dr=tte.value.toUpperCase();
// 	if (te.value!=''&&ps.value='') {
// 		alert('请输入密码')；
// 	}else if (te.value=''&&ps.value!='') {
// 		alert('请输入账号');
// 	}else if (tte.length!=4||tte.value='') {
// 		alert('请输入验证码');
// 	}else if (tte.value!=cod) {
// 		alert9('请输入正确的验证码');
// 	}else{
// 		alert("登录成功");
// 	}
// }

