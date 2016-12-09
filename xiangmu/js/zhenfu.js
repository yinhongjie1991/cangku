/*招商局图片介绍滚动图*/
var qieh=document.getElementById('qieh');
var fu=document.getElementById('fu');
var jies=document.getElementById('jies');
var imms=qieh.getElementsByTagName('img');
var ri=document.getElementById('ri');
var le=document.getElementById('le');
var img=imms[0].offsetWidth;
var ti=null;
var ti1=null;
var nm=0;
ri.onclick=function (){
	auto();
	ti1=setInterval(auto,1000)
}
function auto(){
	clearInterval(ti);
	nm++;
	if (nm>imms.length-1) {
		nm=1;
		fu.scrollLeft=0;	
	}
	hua();
}
function hua(){
	var kswz=fu.scrollLeft;
	var jswz=img*nm;
	var ksbs=0;
	var zdbs=20;
	var mbjl=(jswz-kswz)/zdbs;
	ti=setInterval(function(){
		ksbs++;
		// console.log(ksbs);
		if (ksbs==zdbs) {
			ksbs=0;
			clearInterval(ti);	
		}
		kswz=kswz+mbjl;
		fu.scrollLeft=kswz;
	},10);
}
ti1=setInterval(auto,1000);
le.onclick=function (){
	clearInterval(ti);
	clearInterval(ti1);
	nm--;
	if (nm<0) {
		nm=imms.length-1;
		fu.scrollLeft=img*nm;
	}
	hua();
}
// 图片变大变小
var photo=document.getElementById('photo');
var llo=photo.getElementsByTagName('li');
var ims=photo.getElementsByTagName('img');
var imgw=ims[0].offsetWidth;
var imgh=ims[0].offsetHeight;
function hu(obg,im){
var tiy=null;
var n=0;
obg.onmouseover=function (){
	clearInterval(tiy);
	tiy=setInterval(function(){
		n++;
		if (n>40) {
			n=40;
			clearInterval(tiy);
		}
		im.style.width=(imgw+n)+'px';
		im.style.height=(imgh*n/imgw+imgh)+'px';
		im.style.left=(-n/2)+'px';
		im.style.top=(-n/2)*imgh/imgw+'px';
	},20)
}
obg.onmouseout=function (){
	clearInterval(tiy);
	tiy=setInterval(function(){
		n--;
		if (n<0) {
			n=0;
			clearInterval(tiy);
		}
		im.style.width=(imgw+n)+'px';
		im.style.height=(imgh*n/imgw+imgh)+'px';
		im.style.left=(-n/2)+'px';
		im.style.top=(-n/2)*imgh/imgw+'px';
	  },20)
   }
}
for (var i = 0; i < llo.length; i++) {
	hu(llo[i],ims[i]);
}
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




