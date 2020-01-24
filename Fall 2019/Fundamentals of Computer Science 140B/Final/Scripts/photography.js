//script for slideshow
var slideIndex = 0;
showSlides();

function volumeDown(){
  var music = document.getElementById("audioMain");
  music.volume = 0.05;
}

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("imageFade");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length){
    slideIndex = 1
  }
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 5000);
  }
