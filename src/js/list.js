let ul = document.querySelector('.goods');
let o_num= document.querySelectorAll('.tonum');
let ty = document.querySelector('#ty');
let goodsrc = document.querySelector('#goodSrc');
//  let prepge = document.querySelector('#prePge');
//  let nextpge = document.querySelector('#nextPge');
let o_cartbtn = document.querySelector('li');
//添加事件
ajax(`goods1.json?t=${new Date().getTime()}`,(data)=>{
            //解析字符串
            let arr = (new Function('return' + data))();
            //遍历数组
            arr.forEach((value)=>{                    
                let li = document.createElement('li');
                li.innerHTML = `
                <a>
                        <img id="goodSrc" src="${value.src}">
                        <b id="goodName">${value.name}</b>
                        <p id="goodPrice">${value.price}</p>
                        <font>
                            <span id="goodsell">${value.sell}</span>
                        </font>
                 </a>
                `;
                ul.appendChild(li);     
            })
            let goodsrc = document.querySelector('#goodSrc');
            let o_cartbtn = document.querySelector('li');
            goodsrc.onclick = function(){
                location.href = 'detail.html';
            }
        })
for(let i = 0,len = o_num.length;i < len;i ++){
    o_num[i].onclick = function(){
        //清空ul
        ul.innerHTML = '';
        ajax(`goods${i +1}.json?t=${new Date().getTime()}`,(data)=>{
            //解析字符串
            let arr = (new Function('return' + data))();
            //遍历数组
            arr.forEach((value)=>{                    
                let li = document.createElement('li');
                li.innerHTML = `
                <a>
                        <img id="goodSrc" src="${value.src}">
                        <b id="goodName">${value.name}</b>
                        <p id="goodPrice">${value.price}</p>
                        <font>
                            <span id="goodsell">${value.sell}</span>
                        </font>
                 </a>
                `;
                ul.appendChild(li);    
                ty.value = 1+i;
                
            })            
        })
    }
}
// // 点击跳转到详情页
// goodsrc.onclick= function(){
//     location.href = 'detail.html';
// }