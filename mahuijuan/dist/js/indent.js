$(function(){
	$("#indent").hover(function(){
		$("#trolley").show();
	}, function(){
		$("#trolley").hide();
	})

	$("#serve").hover(function(){
		$("#serve1").show();
	}, function(){
		$("#serve1").hide();
	})

	$("#my").hover(function(){
		$("#manage").show();
	}, function(){
		$("#manage").hide();
	})

	$("#seek1").hover(function(){
		$("#seek2").show();
	}, function(){
		$("#seek2").hide();
	})
	
	
	$("#sousuo").bind("click",function(){
		$("#seek3").show();
	})
	$("#sousuo").hover(function(){
		$("#seek3").hide();
	})
	
	//**************************************************************************************leftShift
		$(".leftShift").mouseover(function () {
            $(this).animate({right: '4'});
        });
        $(".leftShift").mouseleave(function () {
        	$(this).animate({right: '0'});
        });
        $(".topShift").mouseover(function () {
            $(this).animate({bottom: '4'});
        });
        $(".topShift").mouseleave(function () {
        	$(this).animate({bottom: '0'});
        });
        
        
        $(".hoo").bind("click",function(){
			$(".ho").show();
		})
		$(".hoo").hover(function(){
			$(".ho").hide();
		})
		
	/*================================================================详情页选择衣服大小号*/	
		var aBtn = $(".buy").find("ul").find("li");
		var iNow = 0; //记录当前滚动到第几张图片
		aBtn.hover(function(){
			iNow = $(this).index();
			tab();
		})
		function tab(){
			aBtn.attr("class", "");
			if(iNow == aBtn.size()){
				aBtn.eq(0).attr("class", "active");
			}
			aBtn.eq(iNow).attr("class", "active");
		}
})

/*=====================================================购物数量加减*/
$(function(){
	$('.reduce').on('click',function(){
		var dom = $(this).next('.value')
		var value = dom.text();
		value = parseInt(value,10)
		if(value>1){
			value -= 1
		}else{
			value = 1;
		} 
		dom.text(value);
	})
	$('.plus').on('click',function(){
		var dom = $(this).prev('.value')
		var value = dom.text()
		value = parseInt(value,10)
		value += 1
		dom.text(value);
	})
})



/*=====================================================列表页详情评价转换*/
$(function(){
		var aBtn = $(".min-r").find(".ul").find("li");
		var iNow = 0; 
		aBtn.click(function(){
			iNow = $(this).index();
			tab();
		})
		function tab(){
			aBtn.attr("class", "");
			if(iNow == aBtn.size()){
				aBtn.eq(0).attr("class", "active");
			}
			aBtn.eq(iNow).attr("class", "active");
		}
})

/*=====================================================json数据加载*/
$(function(){
	$.ajax({
		url: "productList.json",
		type: "get",
		success: function(res){
			var html = "";
			for(var i = 0; i < res.length; i++){
				html += '<li class="list_li"><div id="dis">找相似</div><img src="'+res[i].img+'"  class="img"/><div><a href="#">'+res[i].title+'</a><br /><b>'+res[i].price+'</b><span><img src="'+res[i].img1+'"/>'+res[i].praise+'</span></div><div class="jr" id="'+res[i].id+'">加入购物车</div></li>';
			}
			$(".list ul").html(html);
		}	
	})
})


$(function(){
	$.ajax({
		url: "productList.json",
		type: "get",
		success: function(res){
			var html = "";
			for(var i = 0; i < res.length; i++){
				html += '<li class="list_li"><div id="dis">找相似</div><img src="'+res[i].img+'"  class="img"/><div><a href="#">'+res[i].title+'</a><br /><b>'+res[i].price+'</b><span><img src="'+res[i].img1+'"/>'+res[i].praise+'</span></div><div class="jr" id="'+res[i].id+'">加入购物车</div></li>';
			}
			$(".productList ul").html(html);
		}	
	})
})
