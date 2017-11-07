window.onload = function() {
	document.querySelector('.addition-info__list').addEventListener('click', showTab);

	var inputs2 = document.querySelectorAll('.primary-info input, .primary-info select');
	var inputs3 = document.querySelectorAll('.basic-info input, .basic-info select');
	var inputs4 = document.querySelectorAll('.addition-info input, .addition-info select');
	var inputs5 = document.querySelectorAll('.add-photos input, .add-photos select');

	var steps = document.querySelectorAll('.warnings-block__step');
	var stepsArray = Array.prototype.slice.call(steps);
	var fifth = document.querySelector('.add-photos__step');
	stepsArray.push(fifth);

	function equalHeight() {
		document.querySelector('.selling-info-block').style.height = 'auto';
		document.querySelector('.warnings-block').style.height = 'auto';
		var left = document.querySelector('.selling-info-block').offsetHeight;
		var right = document.querySelector('.warnings-block').offsetHeight;
		right = left;
		document.querySelector('.warnings-block').style.height = right + 'px';
	}
	equalHeight();
	window.onresize = equalHeight;

	function showTab(e) {
		if (e.target.className == 'addition-info__list-item') {
			var dataTab = e.target.getAttribute('data-tab');
			
			var lis = document.getElementsByClassName('addition-info__list-item');
			for (var i = 0; i < lis.length; i++) {
				lis[i].classList.remove('active-ai-li');
			}
			e.target.classList.add('active-ai-li');
			var addBody = document.getElementsByClassName('addition-info__block');
			for (var i = 0; i < addBody.length; i++) {
				if (dataTab == i) {
					addBody[i].style.display = 'block';
				} else {
					addBody[i].style.display = 'none';
				}
			}
			equalHeight();
			for (var i = 0; i < stepsArray.length; i++) {
				stepsArray[i].classList.remove('active-step');
			}
			stepsArray[3].classList.add('active-step');
		} else if (e.target.parentElement.className == 'addition-info__list-item') {
			var dataTab = e.target.parentElement.getAttribute('data-tab');
			
			var lis = document.getElementsByClassName('addition-info__list-item');
			for (var i = 0; i < lis.length; i++) {
				lis[i].classList.remove('active-ai-li');
			}
			e.target.parentElement.classList.add('active-ai-li');
			var addBody = document.getElementsByClassName('addition-info__block');
			for (var i = 0; i < addBody.length; i++) {
				if (dataTab == i) {
					addBody[i].style.display = 'block';
				} else {
					addBody[i].style.display = 'none';
				}
			}
			equalHeight();
			for (var i = 0; i < stepsArray.length; i++) {
				stepsArray[i].classList.remove('active-step');
			}
			stepsArray[3].classList.add('active-step');
		}
	}

	stepsArray.forEach( function(el, index) {
		el.addEventListener('click', activeStep, false);
	});
	function activeStep(e) {
		for (var i = 0; i < stepsArray.length; i++) {
			stepsArray[i].classList.remove('active-step');
		}
		if (e.target.className == 'warnings-block__step' || 
			e.target.className == 'add-photos__step') {
			e.target.classList.add('active-step');
		} else if (e.target.parentElement.className == 'warnings-block__step' || 
			e.target.parentElement.className == 'add-photos__step') {
			e.target.parentElement.classList.add('active-step');
		}
	}

	inputs2.forEach( function(e, index) {
		e.addEventListener('focus', function() {
            focusStep(stepsArray[1]);
		}, false);
	});
	inputs3.forEach( function(e, index) {
		e.addEventListener('focus', function() {
            focusStep(stepsArray[2]);
		}, false);
	});
	inputs4.forEach( function(e, index) {
		e.addEventListener('focus', function() {
            focusStep(stepsArray[3]);
		}, false);
	});
	inputs5.forEach( function(e, index) {
		e.addEventListener('focus', function() {
            focusStep(stepsArray[4]);
		}, false);
	});

    function focusStep(el) {
        for (var i = 0; i < stepsArray.length; i++) {
            stepsArray[i].classList.remove('active-step');
        }
        el.classList.add('active-step');
    }

	document.querySelectorAll('[type="file"]').forEach(function (t) {
        t.addEventListener('change', function (e) {
            displayImage(e);
        }, false);
	});

    function displayImage(e) {
    	var files = e.target.files;
		var wrapper = e.target.parentNode;
		var reader = new FileReader();

        reader.onload = function(frEvent) {
            wrapper.style.backgroundImage = 'url(' + frEvent.target.result + ')';
            wrapper.style.backgroundSize = 'cover';
            wrapper.style.fontSize = '0';
            wrapper.style.border = '1px solid #e1e7ea';
        };
        reader.readAsDataURL(files[0]); 
    }
}