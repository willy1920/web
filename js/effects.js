var slideIndex = 0;

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

document.getElementById('menuIcon').addEventListener('click', showMenu, false);
document.getElementById('closeIcon').addEventListener('click', closeMenu, false);
function showMenu(){
  document.getElementById('menuIcon').className = 'rotateOut';
  document.getElementById('closeIcon').style.display = 'block';
  document.getElementById('closeIcon').className = 'rotateIn';
  document.getElementById('leftMenu').style.display = 'block';
  document.getElementById('leftMenu').className = 'moveDown';

  setTimeout(finishAnimationMenu, 990);
}
function finishAnimationMenu(){
  document.getElementById('menuIcon').className = '';
  document.getElementById('leftMenu').className = '';
  document.getElementById('menuIcon').style.display = 'none';
}

function closeMenu(){
  document.getElementById('closeIcon').className = 'rotateOut';
  document.getElementById('menuIcon').style.display = 'block';
  document.getElementById('menuIcon').className = 'rotateIn';
  document.getElementById('leftMenu').className = 'moveUp';
  setTimeout(finishAnimationMenuClose, 990);
}
function finishAnimationMenuClose(){
  document.getElementById('closeIcon').style.display = 'none';
  document.getElementById('leftMenu').style.display = 'none';
  document.getElementById('menuIcon').className = '';
  document.getElementById('leftMenu').className = '';
}
