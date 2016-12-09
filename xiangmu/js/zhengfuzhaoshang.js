/*招商局图片介绍滚动图*/
var qieh=document.getElementById('qieh');
var fu=document.getElementById('fu');
var jies=document.getElementById('jies');
// var pp=jies.getElementsByTagName('p');
var ims=qieh.getElementsByTagName('img');
var ri=document.getElementById('ri');
var le=document.getElementById('le');
var imgw=ims[0].offsetWidth;
var ti=null;
var ti1=null;
var n=0;
// console.log(imgw);
ri.onclick=function (){
	auto();
	ti1=setInterval(auto,1000)
}
function auto(){
	clearInterval(ti);
	// clearInterval(ti1);
	n++;
	if (n>ims.length-1) {
		n=1;
		fu.scrollLeft=0;	
	}
	hua();
	// ti1=setInterval(auto,1000);
}
// auto();
function hua(){
	var kswz=fu.scrollLeft;
	var jswz=imgw*n;
	var ksbs=0;
	var zdbs=20;
	var mbjl=(jswz-kswz)/zdbs;
	ti=setInterval(function(){
		ksbs++;
		console.log(ksbs);
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
	n--;
	if (n<0) {
		n=ims.length-1;
		fu.scrollLeft=imgw*n;
	}
	hua();
}
