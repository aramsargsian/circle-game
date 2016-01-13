$(document).ready(function(){
	$('.gold').on('mouseenter', function(){
				$(this).addClass('golda');
				$(this).removeClass('cirlce');
				$(this).animate({'border-radius': '100%', 'padding': '100px'}, 'fast');
				$('.circle').addClass('post');
			});
	$('.red').on('mouseenter', function(){
		$(this).removeClass('red');
		$(this).animate({'top': '-10px', 'border-radius': '100%'}, 'fast');
		$(this).animate({'top': '0px'});
		$(this).addClass('blue');
		
		
	

			$('.blue').on('mouseenter', function(){
			$(this).removeClass('blue');
			$(this).addClass('green');
			});

			$('.green').on('mouseenter', function(){
			$(this).removeClass('green');
			$(this).addClass('yellow');
			});

			$('.yellow').on('mouseenter', function(){
			$(this).removeClass('yellow');
			$(this).addClass('pink');
			});

			$('.pink').on('mouseenter', function(){
			$(this).removeClass('pink');
			$(this).addClass('orange');
			});

			$('.orange').on('mouseenter', function(){
			$(this).removeClass('orange');
			$(this).addClass('purple');
			});

			


});
	

	
});