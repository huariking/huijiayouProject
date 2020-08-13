// 放大镜
$(function() {
	
	var magnifierConfig = {
		magnifier : "#magnifier1",//最外层的大容器
		width : 500,//承载容器宽
		height : 500,//承载容器高
		moveWidth : null,//如果设置了移动盒子的宽度，则不计算缩放比例
		zoom : 2//缩放比例
	};

	var _magnifier = magnifier(magnifierConfig);

	/*magnifier的内置函数调用*/
	/*
		//设置magnifier函数的index属性
		_magnifier.setIndex(1);

		//重新载入主图,根据magnifier函数的index属性
		_magnifier.eqImg();
	*/
});
// 购物车
 //获取购物车按钮
 const oBuy = document.getElementById("buy");
 //获取所有的购买按钮
 initCart();
 const oAddCart = document.querySelector('.a2');
 //给购物车按钮添加点击事件
 oBuy.onclick = function(){
	 location.href = 'cart.html';
 }   
	 oAddCart.onclick = function(){       
		 let goodName = $('#cartName').html();
		 let goodPrice = $('#cartPrice').html();
		 let goodSrc = $('#cartSrc').attr('src');
		 let goodJia = $('.jia').html();
		 let goodjian = $('.jian').html();
		 let goodNub = $('.n').html();

		 //获取localStorage
		 let storage = window.localStorage;                
		 let cartStr = storage.cart ? storage.cart : '';
		 let cartObj = convertJsonStrToJsonObj(cartStr);
		 if(goodName in cartObj){
			 cartObj[goodName].number ++;
		 }else{
			 cartObj[goodName] = {
				 // "id" : goodId,s
				 "name" : goodName,
				 "price" : goodPrice,
				 "src" : goodSrc,
				 "number" : 1
			 }
		 }		 
	
	 let sum = 0;
	 for(let key in cartObj){
		sum += cartObj[key].number;
	 }
	 $('.cartshuzi').html(sum);
	
		 storage.cart = JSON.stringify(cartObj);
		 console.log(cartObj)
		 alert('加入购物车成功')
		 // location.href = 'cart.html';                          
	 
	  }

	 $('.jian').on('click',function(){
		let storage = window.localStorage;
		let stoStr = storage.cart ? storage.cart : '';
		let cartObj = convertStrToObj( stoStr);
		for(let key in cartObj){
			if(cartObj[key].number > 1){
				cartObj[key].number --;
			}
		$('.n').val(cartObj[key].number)
		storage.cart = JSON.stringify(cartObj);
		}
	 })
	 
 $('.jia').on('click',function(){
	 let storage = window.localStorage;
	 let stoStr = storage.cart ? storage.cart : '';
	 let cartObj = convertStrToObj( stoStr);
	 for(let key in cartObj){
		 cartObj[key].number ++;
		 $('.n').val(cartObj[key].number)
		 storage.cart = JSON.stringify(cartObj);		 
	 }
 })
 $('.n').blur(function(){
	 let storage = window.localStorage;
	 let stoStr = storage.cart ? storage.cart : '';
	 let cartObj = convertStrToObj( stoStr);
	 for (let key in cartObj){
	 cartObj[key].number = $('.n').val();
	 storage.cart = JSON.stringify(cartObj);
	  }   
	 
 })
	function initCart(){
	 let storage = window.localStorage;
	 let cartStr = storage.cart ? storage.cart : '';
	 let cartObj = convertJsonStrToJsonObj(cartStr);
	 let sum = 0;
	 for(let key in cartObj){
		sum += cartObj[key].number;
	 }
	 $('.cartshuzi').html(sum);
 } 
 function shua(){
	  let storage = window.localStorage;
 let stoStr = storage.cart ? storage.cart : '';
 let cartObj = convertStrToObj( stoStr);
 $('.n').html( cartObj[key].price * cartObj[key].number)
//  $('.n').val(cartObj.number)
 }

 function convertJsonStrToJsonObj(str){
	 if(!str){
		 return {};
	 }
	 return JSON.parse(str);
 }
//  自动刷新
