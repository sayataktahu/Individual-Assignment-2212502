document.addEventListener("DOMContentLoaded", function() {

let mybutton = document.getElementById("topBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display= "block";
  } else {
    mybutton.style.display= "none";
  }
}

function topFunction() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // Add smooth scrolling behavior
  });
}

mybutton.onclick = topFunction;

});