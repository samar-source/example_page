	//Слайдер
$(document).ready(function(){
	$('.slider').owlCarousel({
		items: 1,
		loop: true,
		nav: false,
		autoplay: false,
		center: true,
		mouseDrag: true,
		touchDrag: true,
		dots: true
	});

	// Inputmask for phone number in contact
	$('.phone').inputmask({"mask": "+7(499) 999-99-99"});
}); 

//Pop-up window for form
function sweetAlertClick() {
	var phone = $('.form__input_phone').val();
	if(phone.length === 17) {
		swal(
				'Сообщение отправлено',
				'',
				'success'
			);
		form.submit();
	} else {
		swal(
				'Заполните все поля',
				'',
				'error'
			);
	}
}

//Pop-up window for a calculator with a form
function sweetAlertClickCalculator() {
	var size = $('.calculator__input-size').val();
	var selectItem = $('input[name=selection-item]:checked').length;
	var selectOption = $('.selection-criterion__list option:selected').length;
	var phone = $('.calculator__field-phone').val();
	if(selectItem != 0 && selectOption != 0 && size.length > 1 && phone.length === 17){
		swal(
				'Сообщение отправлено',
				'',
				'success'
			);
			form.submit();
	} else {
		swal(
				'Заполните все поля',
				'',
				'error'
			);
	}
}

//Uploading content on the windows
function changeBox(winLink) {
	var windowLink = document.querySelectorAll('.switching-windows__headline');
	var windowImg = document.querySelectorAll('.calculator__img');
	var windowTitle = document.querySelectorAll('.selection-criterion__headline');

	for (var i = 0; i < windowLink.length; i++) {
		if (windowLink[i].id == winLink) {
			windowLink[i].style.textDecoration = 'underline';
			windowLink[i].style.color = '#0099de';
			windowImg[i].style.display = 'block';
			windowTitle[i].style.display = 'block';
		} else {
			windowLink[i].style.textDecoration = 'none';
			windowLink[i].style.color = '#000';
			windowImg[i].style.display = 'none';
			windowTitle[i].style.display = 'none';
		}
	}
}

