$(document).ready(function() {
	function animaPageIn() {
		$('.register-area').fadeOut(400);
		$('.sell-watches-now').fadeOut(400);
		$('.about-us').fadeOut(400);
		$('.how-it-works').fadeOut(400);
		$('.background-picture').animate({height: "110px"},700);
		$('header').css('background', 'linear-gradient(#394f78, #3d5680)');
		$('header').animate({height: "110px"},700);
		$('.group6').delay(300).fadeIn(400);
		$('.warnings-block').css('height', '1892px');
		$('#brand-primary').val($('#brand').val());
		$('#model-primary').val($('#model').val());
	}
	function animaPageOut() {
		$('.group6').fadeOut(400);
		$('header').animate({height: "720px"},700);
		$('header').css('background', 'linear-gradient(#394f78, #3d5680 15.3%, transparent 15.3%, transparent)');
		$('.background-picture').animate({height: "720px"},700);
		$('.how-it-works').delay(300).fadeIn(400);
		$('.about-us').delay(300).fadeIn(400);
		$('.sell-watches-now').delay(300).fadeIn(400);
		$('.register-area').delay(300).fadeIn(400);
	}
	$('.sell-watches-now button').on('click', animaPageIn);
	$('.logo-box').on('click', animaPageOut);
});