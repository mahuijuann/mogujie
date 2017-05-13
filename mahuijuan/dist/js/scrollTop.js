$(function() {
 	$(window).scroll(function(){
		/* 判断滚动条 距离页面顶部的距离 100可以自定义*/
		if($(window).scrollTop() > 400) {
			$("#backTop").fadeIn(); /* 这里用.show()也可以 只是效果太丑 */
		}else {
			$("#backTop").fadeOut();
		}
	});
});
/* 给图片元素绑定 回到顶部的事件 */
$(function(){
	$("#backTop").on("click", function() {
		$('body,html').animate({
			scrollTop: 0
		}, 500);
		return false;
	});
});