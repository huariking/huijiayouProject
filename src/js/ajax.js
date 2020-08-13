function ajax(url,fnWin,fnFaild){
    //1. 创建一个XMLHttpRequest对象
    var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
    //2. 与服务器建立连接（open)
    xhr.open('get',url,true);
    // 3. 向服务器发送请求
    xhr.send();
    // 4. 等待服务器响应
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4){
            if(xhr.status === 200){
                if(fnWin instanceof Function){
                    fnWin(xhr.responseText);
                }
            }else{
                if(fnFaild instanceof Function){
                    fnFaild();
                }
            }
        }
    }
}