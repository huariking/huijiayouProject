//将字符串转为对象
function convertStrToObj(str){
    if(!str){
        return {};
    }
    return JSON.parse(str);
}
function convertJsonStrToJsonObj(str){
    if(!str){
        return {};
    }
    return JSON.parse(str);
}