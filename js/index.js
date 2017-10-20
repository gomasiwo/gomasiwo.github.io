$ (function(){
	var time = 500;
	$("a#arrdwn").hover(function(){
		$(this).animate({opacity: 0.25}, time, 'easeOutQuad');
	},function(){
		$(this).animate({opacity: 1}, time, 'easeOutQuart');
	});
});

$(function(){
	var time = 1000;
			
	$('a[href^=#]').click(function(){
		var target = $(this.hash);
		if(!target.length) return;
		var targetY = target.offset().top
		$('html,body').animate({scrollTop: targetY}, time, 'easeOutQuad');
		window.history.pushState(null,null,null,this.hash);
		return false;
	});
});