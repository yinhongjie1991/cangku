function getcid(ids,cals){
	var els=document.getElementById(ids);
	var el=els.all?els.all:els.getElementsByTagName('*');
	var arr=[];
	for (var i = 0; i < el.length; i++) {
		if(el[i].className==cals){
			arr.push(el[i]);
		}
	}
	return arr;
}
function getcla(cals){
	var el=document.all?document.all:document.getElementsByTagName('*');
	var arr=[];
	for (var i = 0; i < el.length; i++) {
		if(el[i].className==cals){
			arr.push(el[i]);
		}
	}
	return arr;
}
function getid(lk){
	return document.getElementById(lk);
}
function setsc(tt){//设置各个浏览器scrotop的函数
	document.body.scrollTop=tt;//支持谷歌 IEedge 
	window.pageYOffset=tt;//IE 火狐 谷歌都不支持 //设置的时候要把兼容mac的放在中间
    document.documentElement.scrollTop=tt;//谷歌不支持 火狐支持 IE11支持 IE8一下不支持
}
function getsc(){//获取各个浏览器中scrollTop值
	var sc=document.body.scrollTop||document.documentElement.scrollTop||window.pageYOffset;
	return sc;
}
// 获取非行间样式
function getcr(obj,nam){
	if(obj.currentStyle){
		return obj.currentStyle[nam]
	}else {
		return getComputedStyle(obj,null)[nam]
	}
}
// 获取下一个兄弟节点
function nexte(obj){
	if(obj.nextElementSibling){
		return obj.nextElementSibling
	}else {
		return obj.nextSibling
	}
}
//上一个兄弟节点
function prvio(obj){ //兼容写法
	if(obj.previousElementSibling){
		 return obj.previousElementSibling;
	}else {
		return obj.previousSibling;
	}
}
//第一个子节点
function firs(obj){
	if(obj.firstElementChild){
		return obj.firstElementChild;
	}else {
		return obj.firstChild;
	}
}
//最后一个子节点
function last(obj){
	if(obj.lastElementChild){
		return obj.lastElementChild;
	}else {
		return obj.lastChild;
	}
}
//阻止默认事件
function zuzhi(even){
	var even=even||window.event;
	if(even.preventDefault){//这个支持的多
		even.preventDefault();
	}else{
		even.returnValue=false;
	}
}
// 添加事件监听
function add(obj,typ,fn){
	if(obj.addEventListener){
		obj.addEventListener(typ,fn,false);
	}else {
		obj.attachEvent('on'+typ,fn);
	}
}
// 移除事件监听的方法
function remo(obj,typ,fn){
	if(obj.removeEventListener){
		obj.removeEventListener(typ,fn,false);
	}else {
		obj.detachEvent('on'+typ,fn);
	}
}
// 阻止冒泡
function stop(ev){
		var even=ev||window.event;
		if(even.stopPropagation){// 封装的时候把stop放在判断里边
			even.stopPropagation();
		}else {
			even.cancelBubble=true;
		}
	}