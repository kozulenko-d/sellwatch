$(document).ready(function() {
	$('nav').delay(300).animate({
		opacity: 1
	},400);
	$('.register-block').delay(1200).animate({
		opacity: 1,
		marginLeft: 0
	},400);
	$('.sell-watches-now').delay(1800).animate({
		opacity: 1,
		top: "34px"
	},800);
	$('.login-box button').on('click', function() {
		if ($('.login-block').is('.login-animate-in')) {
			$('.login-block').toggleClass('login-animate-out');
			$('.login-block').toggleClass('login-animate-in');
		} else if ($('.login-block').is('.login-animate-out')) {
			$('.login-block').toggleClass('login-animate-out');
			$('.login-block').toggleClass('login-animate-in');
		} else {
			$('.login-block').addClass('login-animate-in');
		}
	});
	$('.login-box__language').on('click', function() {
		$('.login-box__language ul').slideToggle(200);
	});
});