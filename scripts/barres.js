$(window).scroll(function () {
    var y = $(window).scrollTop(),
        x = $('.progress-bar1b').offset().top - 800;
    if (y > x) {
        $('.b1').addClass('bar1b'),
        $('.b3').addClass('bar3b'),
        $('.b4').addClass('bar4b');
        $('.b5').addClass('bar5b');
        $('.b6').addClass('bar6b');
        $('.b7').addClass('bar7b');
        $('.b8').addClass('bar8b');
        $('.b9').addClass('bar9b');
        $('.b10').addClass('bar10b');
        $('.b11').addClass('bar11b');
        $('.b12').addClass('bar12b');
        $('.text1').addClass('progress-text1').removeClass('.text1');
    }
});