/*   F2 Form show alert   */
// 
  function validate() {
      var a = document.forms["form"]["phone"].value;
        if (a >= 7) {
          alert("Сообщение отправлено.");
          return true;
        } else {
          alert("Некорректный номер телефона.");
          return false;
        }
}

/*   F3 Slider   */
// 
var slideIndex = 1;
showSlides(slideIndex);

// Set current slide 
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Main slider function 
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slider__item");
    var dots = document.getElementsByClassName("slider-dots__item");
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

/*   F5 Uploading content on the calculator   */
function changeBox(winLink) {
    var windowLink = document.querySelectorAll(".windows__link");
    var windowImg = document.querySelectorAll(".img-wrapper__img");
    var windowTitle = document.querySelectorAll(".parameters__headline");
    for (var i = 0; i < windowLink.length; i++) {
        if (windowLink[i].id == winLink) {

            windowLink[i].style.textDecoration = "underline";
            windowLink[i].style.color = "#0099de";
            windowImg[i].style.display = "inline-block";
            windowTitle[i].style.display = "inline-block";
        } else {
            windowLink[i].style.textDecoration = "none";
            windowLink[i].style.color = "#000";
            windowImg[i].style.display = "none";
            windowTitle[i].style.display = "none";
        }
    }
}
