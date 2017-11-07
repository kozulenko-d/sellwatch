$(document).ready(function() {
	$('#accept').on('click', sendInfo);
	$('#model-primary').on('change', function() {
		if ($('#model-primary').val().length != 0) {
			$('#warning-model').hide();
			$('#awesome-model').show().delay(1200).fadeOut(800);
			$('#model-primary').css('border-color', '#e1e7ea');
		} else {
			$('#warning-model').show();
			$('#model-primary').css('border-color', '#e6aaaa');
		}
	});
	$('#year').on('change', function() {
		if ($('#year').val() <= 2017 && $('#year').val() > 0) {
			$('#warning-year').hide();
			$('#awesome-year').show().delay(1200).fadeOut(800);
			$('#year').css('border-color', '#e1e7ea');
		} else {
			$('#warning-year').show();
			$('#year').css('border-color', '#e6aaaa');
		}
	});
	$('#case-diameter1').on('change', function() {
		if (!isNaN(parseFloat($('#case-diameter1').val())) && 
		isFinite($('#case-diameter1').val())) {
			$('#warning-case').hide();
			$('#awesome-case').show().delay(1200).fadeOut(800);
			$('#case-diameter1').css('border-color', '#e1e7ea');
		} else if (!isNaN(parseFloat($('#case-diameter2').val())) && 
		isFinite($('#case-diameter2').val())) {
			$('#warning-case').show();
			$('#case-diameter1').css('border-color', '#e6aaaa');
		}
	});
	$('#case-diameter2').on('change', function() {
		if (!isNaN(parseFloat($('#case-diameter2').val())) && 
		isFinite($('#case-diameter2').val())) {
			$('#warning-case').hide();
			$('#awesome-case').show().delay(1200).fadeOut(800);
			$('#case-diameter2').css('border-color', '#e1e7ea');
		} else {
			$('#warning-case').show();
			$('#case-diameter2').css('border-color', '#e6aaaa');
		}
	});
	$('#thickness').on('change', function() {
		if (!isNaN(parseFloat($('#thickness').val())) && 
		isFinite($('#thickness').val())) {
			$('#warning-thickness').hide();
			$('#awesome-thickness').show().delay(1200).fadeOut(800);
			$('#thickness').css('border-color', '#e1e7ea');
		} else {
			$('#warning-thickness').show();
			$('#thickness').css('border-color', '#e6aaaa');
		}
	});
});

function sendInfo() {
	var watch = {};

	if ($('#model-primary').val().length == 0) {
		$('#model-primary').css('border-color', '#e6aaaa');
		$('#warning-model').show();
		window.scrollTo(0,300);
	} else {
		$('#warning-model').hide();
	}

	if ($('#year').val() > 2017 || $('#year').val() == '') {
		$('#year').css('border-color', '#e6aaaa');
		$('#warning-year').show();
		window.scrollTo(0,700);
	} else {
		$('#warning-year').hide();
	}
	if (isNaN(parseFloat($('#case-diameter1').val())) && 
		isFinite($('#case-diameter1').val())) {
		$('#case-diameter1').css('border-color', '#e6aaaa');
		$('#warning-case').show();
		window.scrollTo(0,900);
	} else {
		$('#warning-case').hide();
	}
	if (isNaN(parseFloat($('#case-diameter2').val())) && 
		isFinite($('#case-diameter2').val())) {
		$('#case-diameter2').css('border-color', '#e6aaaa');
		$('#warning-case').show();
		window.scrollTo(0,900);
		return false;
	} else {
		$('#warning-case').hide();
	}
	if (isNaN(parseFloat($('#thickness').val())) && 
		isFinite($('#thickness').val())) {
		$('#thickness').css('border-color', '#e6aaaa');
		$('#warning-thickness').show();
		window.scrollTo(0,900);
		return false;
	} else {
		$('#warning-thickness').hide();
	}
}