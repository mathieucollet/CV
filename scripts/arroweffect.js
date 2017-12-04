$(function() {
  $( document ).ready(function() {
    $('.ar1').css('-webkit-animation', '1s ease-in-out 0s infinite fleche');
    $('.ar1').css('animation', '1s ease-in-out 0s infinite fleche');
    $('.ar2').css('-webkit-animation', '1s ease-in-out 0.2s infinite fleche');
    $('.ar2').css('animation', '1s ease-in-out 0.2s infinite fleche');
    $('.ar3').css('-webkit-animation', '1s ease-in-out 0.4s infinite fleche');
    $('.ar3').css('animation', '1s ease-in-out 0.4s infinite fleche');
  });
});
$(function() {
  $('.fleches').hover(function() {
    $('.ar1').css('-webkit-animation', '');
    $('.ar1').css('animation', '');
    $('.ar2').css('-webkit-animation', '');
    $('.ar2').css('animation', '');
    $('.ar3').css('-webkit-animation', '');
    $('.ar3').css('animation', '');
  }, function() {
    $('.ar1').css('-webkit-animation', '1s ease-in-out 0s infinite fleche');
    $('.ar1').css('animation', '1s ease-in-out 0s infinite fleche');
    $('.ar2').css('-webkit-animation', '1s ease-in-out 0.2s infinite fleche');
    $('.ar2').css('animation', '1s ease-in-out 0.2s infinite fleche');
    $('.ar3').css('-webkit-animation', '1s ease-in-out 0.4s infinite fleche');
    $('.ar3').css('animation', '1s ease-in-out 0.4s infinite fleche');
  });
});
