var i = 0;
$('#menu-trigger').click(function(){
	$(this).toggleClass('clicked');
	$('#menu').toggleClass('open');
	$('.content').hide();
	if(i%2==0){
		setTimeout(function(){
			$('.content').fadeIn(500);
		},250);
		i++;
	}
	else{
		$('.content').hide();
		i++;
	}
});

$('.menu-item').draggable({
	revert:true
});

$('#menu-trigger').droppable({
	drop: function(event, ui){
		var x = ui.draggable.attr('e-color');
		var y = ui.draggable.attr('c-color');
		$('.heading').html(x+': '+y);
		$('.heading').css("color", y);
		$('#menu').removeClass('open');
		$('#menu-trigger').removeClass('clicked');
		i++;
	}
});