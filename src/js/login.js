class Login{
    constructor(){
        //属性
        //用户名
        this.o_uname = document.querySelector('#uname');
        //密码
        this.o_upwd = document.querySelector('#upwd');
        //登录按钮
        this.o_reg = document.querySelector('#sub');
        //转按钮
        this.o_log = document.querySelector('#go');
        //调用添加事件的方法
        this.addEvent();
    }
    //添加事件
    addEvent(){

        var arr = [false,false];
        
        
        //判断用户名是否合法以及是否在cookie中存在 
        this.o_uname.onblur = function(){
            //正则 （2~10的中文）
            let re = /^1\d{10}$/
            //获取用户名
            let s_uname = this.value;
            //检测是否合格
            if(!re.test(s_uname)){
                alert('请输入11位有效手机号！');
                arr[0] = false;
                return;
            }else{
                arr[0] = true;
            }
            
            // //获取cookie
            // let cookieStr = getCookie('registors') ? getCookie('registors') : '';
            // //将cookie字符串转为json对象
            // let cookieObj = convertStrToObj(cookieStr);
            // //判断注册的用户名是否在cookie中存在
            // //in : 判断一个属性是否属于某个对象
            // if(s_uname in cookieObj){
            // 	alert('用户名已存在！');
            // 	arr[0] = false;
            // 	return;
            // }else{
            // 	arr[0] = true;
            // }
        }
        //判断密码是否合法
        this.o_upwd.onblur = function(){
            //正则（3-16数字)
            let re = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/;
            //获取密码
            let s_upwd = this.value;
            //检测是否合法
            if(!re.test(s_upwd)){
                alert('请输入长度在8-16位之间的数字和字母密码组合！');
                arr[1] = false;
            }else{
                arr[1] = true;
            }
        }
        
        
        //如果页面中的内容全部合法，就可以进行正常注册了
        //点击注册按钮，进行注册
        this.o_reg.onclick = function(){
            if(arr.indexOf(false) === -1){
                
                //获取 用户名
                let s_uname = this.o_uname.value;
                //获取密码
                let s_upwd = this.o_upwd.value;
                //获取cookie
                let cookieStr = getCookie('registors') ? getCookie('registors') : '';
                //将cookie字符串转为json对象
                let cookieObj = convertStrToObj(cookieStr);
                //判断用户名是否存在
                if(s_uname in cookieObj){
                    //判断密码是否一致
                    if(s_upwd === cookieObj[s_uname]){
                        alert('登录成功!');
                        location.href = 'index.html';
                        return;
                    }else{
                        alert('密码错误！');
                    }
                }else{
                    alert('用户名不存在！');
                }
                
            }else{
                alert('请完善表单！');
                
            }
        }.bind(this);
        //跳转到登录页
        this.o_log.onclick = function(){
            location.href = 'registor.html';
        }
    }
}

new Login();