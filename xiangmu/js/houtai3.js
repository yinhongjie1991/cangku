 function $$(id) {
        return document.getElementById(id);
    }
    //选择上传文件时调用的函数
    function fileUpload_PrevImageFile(f) {
        //检测浏览器是否支持FileReader对象
        if (typeof FileReader == 'undefined') {
            alert("检测到您的浏览器不支持FileReader对象！");
        }
        var strHTML = "";
        for (var intI = 0; intI < f.length; intI++) {
            var tmpFile = f[intI];
            //先实例化一个reader对象
            var reader = new FileReader();
            //调用对象中的方法读取文件内容
            reader.readAsDataURL(tmpFile);
            //当图片读取成功后
            reader.onload = function (e) {
                strHTML = strHTML + "<span>";
                strHTML = strHTML + "<img src='" + e.target.result + "' alt=''/>";
                strHTML = strHTML + "</span>";
                $$("ulUpload").innerHTML = "<li>" + strHTML + "</li>";
            }
        }
    }