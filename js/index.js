$ (function(){
	var time = 200;
	$("a#arrdwn").hover(function(){
		$(this).animate({opacity: 0.25}, time, 'easeOutQuad');
	},function(){
		$(this).animate({opacity: 1}, time/2, 'easeOutQuart');
	});
});

$(function(){
	var time =800;
			
	$('a[href^=#]').click(function(){
		var target = $(this.hash);
		if(!target.length) return;
		var targetY = target.offset().top;
		$('html,body').animate({scrollTop: targetY}, time, 'easeOutQuad');
		window.history.pushState(null,null,null,this.hash);
		return false;
	});
});

$(function(){
	var contents = $('#about').offset().top;
	$(window).on('scroll',function(){
		var winTop = $(window).scrollTop();
		if(winTop >= contents){
			$('#nav li a').css('color','#353535');
		}else if(winTop <= contents){
			$('#nav li a').css('color','#fff');
		}
	});
});

/*
$(function(){// 変数『obj_t_pos』に位置を代入
	$(window).scroll(function(){
		var obj_t_pos = $(window).scrollTop(); 
		$('#target').html(obj_t_pos); 
		if(obj_t_pos > 900){
			$('#target').addClass('gray');
		}else{
			$('#target').removeClass();
		}
	});
});
*/