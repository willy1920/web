document.addEventListener('DOMContentLoaded', function() {
  //showSlides();
  //setInterval(showSlides, 5000)
}, false);

var slideIndex = 1;

function showSlides() {
  var n = slideIndex;
  var i;
  var slides = document.getElementsByClassName("Slides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
  slideIndex++;
}
