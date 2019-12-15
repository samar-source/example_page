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
}); 

//Маска для поля с номером телефона
$(document).ready(function(){
  $('.phone').mask('+7(499) 999-99-99');
  $.fn.setCursorPosition = function(pos) {
	  if ($(this).get(0).setSelectionRange) {
	    $(this).get(0).setSelectionRange(pos, pos);
	  } else if ($(this).get(0).createTextRange) {
    var range = $(this).get(0).createTextRange();
    range.collapse(true);
    range.moveEnd('character', pos);
    range.moveStart('character', pos);
    range.select();
  	}
	};
	$('.phone').click(function(){
    $(this).setCursorPosition(4);
  });
});

//Всплывающее окно для формы F2
function sweetAlertClick() {
    var phone = $('.form__field-phone').val();
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

//Всплывающее окно для калькулятора с формой F5
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

//Подгрузка контенка по окнам
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

