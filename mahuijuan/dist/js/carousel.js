$(function(){
	var aBtn = $("#play").find("ol").find("li");
	var oUl = $("#play").find("ul");
	var aLi = oUl.find("li");
	
	//加自动播放
	var iNow = 0; //记录当前滚动到第几张图片
	var timer = null; //定时器
	
	aBtn.click(function(){
		iNow = $(this).index();
		tab();
	})
	$("#play").hover(function(){
		clearInterval(timer);
	}, function(){
		timer = setInterval(timerInner, 2000);
	})
	
	function tab(){
		aBtn.attr("class", "");
		
		if(iNow == aBtn.size()){
			aBtn.eq(0).attr("class", "active");
		}
		aBtn.eq(iNow).attr("class", "active");
		oUl.animate_buffer({left: -1233 * iNow}, function(){
			if(iNow == aBtn.size()){
				oUl.css("left", 0);
				iNow = 0;
			}
		});
	}
	//启动定时器
	timer = setInterval(timerInner, 2000);
	function timerInner(){
		//每隔两秒
		iNow++;
		tab();
	}
})




$(function(){
	var aBtn = $("#play1").find("ol").find("li");
	var oUl = $("#play1").find("ul");
	var aLi = oUl.find("li");
	//加自动播放
	var iNow = 0; //记录当前滚动到第几张图片
	var timer = null; //定时器
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
		oUl.animate_buffer({left: -400 * iNow}, function(){
			if(iNow == aBtn.size()){
				oUl.css("left", 0);
				iNow = 0;
			}
		});
	}
})




