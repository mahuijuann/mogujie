
//-------------------------------------------------------------------------------------------加入购物车
$(function(){
	$(".productList ul").on('click', ".jr", function(){
			//点击对应的按钮，将当前点击按钮所在的商品cookie进行缓存。
			//取出商品的id
			var id = this.id;
			var first = $.cookie("goods") == null ? true : false;
			var same = false; //判断是否之前添加过相同的商品
			if(first){
				//第一次添加，建立json结构
				var arr = [{id: id, num: 1}];
				$.cookie("goods", JSON.stringify(arr));
			}else{
				//不是第一次添加，判断之前是否有存储过这个商品
				var str = $.cookie("goods");
				var arr = JSON.parse(str);
				//遍历已经存储的所有商品，如果有id相同的，让数量进行递增
				for(var attr in arr){
					if(arr[attr].id == id){
						arr[attr].num = arr[attr].num + 1; //数量进行+1
						//再将数据存储到cookie中
						var cookieStr = JSON.stringify(arr);
						$.cookie("goods", cookieStr);
						same = true;
					}
				}
				if(!same){
					//没有相同的商品
					var obj = {id: id, num: 1};
					arr.push(obj);
					var cookieStr = JSON.stringify(arr);
					$.cookie("goods", cookieStr);
				}
			}
			sc_car();
		})
	//购物车的数量，应该实时的发生变化
		function sc_car(){
			var cookieStr = $.cookie("goods");
			if(cookieStr){
				var sc_arr = JSON.parse(cookieStr);
				var sc_num = 0; //累加
				for(var i in sc_arr){
					sc_num += Number(sc_arr[i].num);
				}
			}
			$(".sc_num").html(sc_num);
		}


		
				//购车中的商品列表   cookie  id num  我们再去加载一次商品的数据，根据cookie缓存的商品，将需要的商品数据取出。
				function sc_msg(){
					$.ajax({
						url: "productList.json",
						type: "GET",
						success: function(res){
							var cookieStr = $.cookie("goods");
							if(cookieStr){
								var sc_arr = JSON.parse(cookieStr);
								var html = "";
								for(var i in sc_arr){
									html += '<li><input type="checkbox" /><div class="G1"><img src="'+res[sc_arr[i].id].img+'"/></div><div class="G2">'+res[sc_arr[i].id].title+'</div><div class="G3">颜色:深蓝<br />尺码：L</div><div class="G4">'+res[sc_arr[i].id].price+'</div><div class="G5"><span class="reduce">-</span><span class="value">'+sc_arr[i].num+'</span><span class="plus">+</span></div><div class="G6">'+res[sc_arr[i].id].price*sc_arr[i].num+'</div><div class="G7"><a href="#">删除</a></div></li>';
									
								}
								$(".GOODS ul").html(html);	
							}
						}
					})
				}
				sc_msg();
			/*$(".reduce").on('click', function(){
				alert(aaa);
			});*/
})






$(function(){
	$(".list ul").on('click', ".jr", function(){
			//点击对应的按钮，将当前点击按钮所在的商品cookie进行缓存。
			//取出商品的id
			var id = this.id;
			var first = $.cookie("goods") == null ? true : false;
			var same = false; //判断是否之前添加过相同的商品
			if(first){
				//第一次添加，建立json结构
				var arr = [{id: id, num: 1}];
				$.cookie("goods", JSON.stringify(arr));
			}else{
				//不是第一次添加，判断之前是否有存储过这个商品
				var str = $.cookie("goods");
				var arr = JSON.parse(str);
				//遍历已经存储的所有商品，如果有id相同的，让数量进行递增
				for(var attr in arr){
					if(arr[attr].id == id){
						arr[attr].num = arr[attr].num + 1; //数量进行+1
						//再将数据存储到cookie中
						var cookieStr = JSON.stringify(arr);
						$.cookie("goods", cookieStr);
						same = true;
					}
				}
				if(!same){
					//没有相同的商品
					var obj = {id: id, num: 1};
					arr.push(obj);
					var cookieStr = JSON.stringify(arr);
					$.cookie("goods", cookieStr);
				}
			}
			sc_car();
		})
	//购物车的数量，应该实时的发生变化
		function sc_car(){
			var cookieStr = $.cookie("goods");
			if(cookieStr){
				var sc_arr = JSON.parse(cookieStr);
				var sc_num = 0; //累加
				for(var i in sc_arr){
					sc_num += Number(sc_arr[i].num);
				}
			}
			$(".sc_num").html(sc_num);
		}


		//购车中的商品列表   cookie  id num  我们再去加载一次商品的数据，根据cookie缓存的商品，将需要的商品数据取出。
		function sc_msg(){
			$.ajax({
				url: "productList.json",
				type: "GET",
				success: function(res){
					var cookieStr = $.cookie("goods");
					if(cookieStr){
						var sc_arr = JSON.parse(cookieStr);
						var html = "";
						for(var i in sc_arr){
							
							html += '<li><div class="sc_goodsPic"><img src="'+res[sc_arr[i].id].img+'" alt=""></div><div class="sc_goodsTitle"><p>这是商品曲奇饼干</p></div><div class="sc_goodsBtn" id="'+sc_arr[i].id+'">购买</div><div class="sc_goodsNum">商品数量:'+sc_arr[i].num+'</div></li>';
							
						}
						$(".sc_right ul").html(html);

					}
				}
			})
		}
	/*var coo = new Date();
	coo.setTime(expire.getTime()+(60*60*1000));
	$.cookie('goods', {
		expires: coo,
		path: '/'
	});*/
	
})

//---------------------------------------------------------------------------------------设置cookie过期时间
window.onload = function(){
	/*var oDate = new Date();
	oDate.setDate(oDate.getDate()+7);
	document.cookie = "name=goods;expires="+oDate;*/
	/*setCookie("name","goods","d7");
	
	function setCookie(name,value,time){
		var strsec = getsec(time);
		var exp = new Date();
		exp.setTime(exp.getTime() + strsec*1);
		document.cookie = name + ”=”+ escape (value) + ”;expires=” + exp.toGMTString();
	}
	function getsec(str){
		alert(str);
		var str1=str.substring(1,str.length)*1; 
		var str2=str.substring(0,1); 
		if (str2==”s”){
			return str1*1000;
		}else if (str2==”h”){
			return str1*60*60*1000;
		}else if (str2==”d”){
			return str1*24*60*60*1000;
		}
	}*/
}
