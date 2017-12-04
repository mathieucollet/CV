$(document).ready(function() {
    $('a[href=#accueil]').click(function(){
        $('html, body').animate({scrollTop:0}, 'slow');
        return false;
    });
})