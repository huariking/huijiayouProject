// 购物车
class cart{
    constructor(){
        this.addevent(); 
        this.jian();  
        this.jia();  
        this.del(); 
    }
    addevent(){
        let storage = window.localStorage;                
        let cartStr = storage.cart ? storage.cart : '';
        if(cartStr){
            $('.kong').css('display','none')
            let cartObj = convertJsonStrToJsonObj(cartStr);
            for(let key in cartObj){
                $(`
                <h2>
                <i>包邮</i>
                <span>所有商品全场包邮(西藏、新疆、青海地区除外)</span>
               </h2>
            <table width="100%" cellspacing="0" cellpadding="0">
                <tbody>
                    <tr>
                        <th colspan="2" width="98">
                            <label>
                                <input type="checkbox" name="" checked=""value="" >全选</label></th><th width="560">
                                    <span>商品</span>
                                </th>
                                <th width="125">单价( 元）</th>
                                <th width="150">数量</th>
                                <th width="105">小计（元）</th>
                                <th width="102">操作</th>
                    </tr>
                    <tr class="curr">
                        <td width="60">
                             <input type="checkbox" name="" checked="">
                        </td>
                        <td width="560" colspan="2">
                            <a>
                                <img class="picture" src="${cartObj[key].src}" alt="" width="83" height="83">
                                <p>
                                     <font></font>
                                    <b>${cartObj[key].name}</b>
                                </p>
                                <strong>颜色：共同<br>款式：共同</strong>
                            </a>
                        
                        </td>
                            <td width="125">
                                <span>${cartObj[key].price}
                                    <i style="width: auto;">会员日</i>
                                </span>
                            </td>
                            <td width="150">
                                <label>
                                    <i style="cursor:pointer" class="jian">-</i>
                                        <input type="tel" class="produce-hasnum" value="${cartObj[key].number}">
                                    <i style="cursor:pointer" class="jia">+</i>
                                </label>
                                    <br>
                                <span class="s2">限购5件</span>
                            </td>
                            <td width="105">
                                    <span class="s1">${cartObj[key].price}</span>
                            </td>
                            <td width="102">
                                <a style="cursor:pointer" class="del">删除</a>
                            </td>
                    </tr>
                </tbody>
            </table>  
            <div class="ft" style="left: 0px; bottom: 0px;">
                <div class="ft_nei">
                    <span>
                        已选择<i id="sp_total">${cartObj[key].number}</i>件商品<!--<font>总计：<b id="sp_price"></b><font id="font_money"></font></font>-->
        
                        <font></font> 
                        <font></font>
                        <font>
                            应付款：<b class="produce-payprice" >${cartObj[key].price * cartObj[key].number}</b>
                        </font>
                        <a style="cursor:pointer">去结算</a>
                    </span>
                    <label>
                        <input type="checkbox" value="" checked="">全选</label>
                        <a id="btnDel" style="cursor:pointer;">删除选中的商品</a>
                </div>
            </div>`).appendTo('.trolley');  
            $('.produce-payprice').html('￥'+ cartObj[key].price * cartObj[key].number) 
            // $('.picture').attr('src'=${cartObj[key].src});         
            }    
                      
        }else{
            $('.kong').css('display','block');
        }        
    }

    jian(){       
        $('.jian').each(function(){
            $(this).on('click',function(){
                let storage = window.localStorage;
                let stoStr = storage.cart ? storage.cart : '';
                let cartObj = convertStrToObj(stoStr);
                for(let key in cartObj){
                    if(cartObj[key].number > 1){
                        cartObj[key].number --;
                    }
                    // alert(1);
                    $('.produce-hasnum').val(cartObj[key].number);
                    storage.cart = JSON.stringify(cartObj);
                    $('.produce-payprice').html(cartObj[key].price * cartObj[key].number);
                    $('#sp_total').html(cartObj[key].number);
                    $('..produce-payprice').html('￥'+ cartObj[key].price * cartObj[key].number)
                    // $('.car-box-con h1').html('全部商品' + stoObj[key].number);
                }
            })
            
        })

    }

    jia(){       
        $('.jia').each(function(){
            $(this).on('click',function(){
                let storage = window.localStorage;
                let stoStr = storage.cart ? storage.cart : '';
                let cartObj = convertStrToObj(stoStr);
                for(let key in cartObj){
                    cartObj[key].number ++;
                    $('.produce-hasnum').val(cartObj[key].number);
                    storage.cart = JSON.stringify(cartObj);
                    $('.produce-payprice').html(cartObj[key].price * cartObj[key].number);
                    $('#sp_total').html(cartObj[key].number);
                    $('..produce-payprice').html('￥'+ cartObj[key].price * cartObj[key].number)

                }
            })
            
        })

    }
    del(){
        $('.del').each(function(){
            $(this).on('click',function(){
                // let storage = window.localStorage;
                // let stoStr = storage.cart ? storage.cart : '';
                // let stoObj = convertStrToObj(stoStr);
                // for(let key in stoObj){
                //     delete stoObj[key];
                //     storage.cart = JSON.stringify(stoObj);
                //     $('.car-list-box').remove();
                // }  
    // 
                let storage = window.localStorage;
                let stoStr = storage.cart ? storage.cart : '';
                let cartObj = convertStrToObj(stoStr);
                for(let key in cartObj){
                    delete cartObj[key];
                    storage.cart = JSON.stringify(cartObj);
                    // $('.ft').remove();
                    // $('table').remove();
                    $('trolley').remove();
                }
            })
        })
    }
}
new cart();
