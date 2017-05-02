

$(document).ready(function() {
  $('body').addClass('js');
  var $menu = $('#menu'),
    $menulink = $('.menu-link');

$menulink.click(function() {
  $menulink.toggleClass('active');
  $menu.toggleClass('active');
  return false;
});});



var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length} ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex-1].style.display = "block";
}

var modal = $('.modal');

$( ".btn" ).on( "click", function() {
  $( modal ).toggleClass('modal--show');
});

$( ".overlay" ).on( "click", function() {
  $( modal ).toggleClass('modal--show');
});

$( ".modal__close" ).on( "click", function() {
  $( modal ).toggleClass('modal--show');
});

Rerun
