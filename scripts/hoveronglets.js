$(document).ready(function() {
    $('#onglet_developpeur').addClass('onglet_1 onglet');
    $('#onglet_developpeur').removeClass('onglet_0 onglet');
    $('#onglet_developpeur').css('background-color', 'white');
    $('#contenu_onglet_developpeur').css('display', 'block');
});
$('#onglet_developpeur').click(function() {
    $('#onglet_developpeur').addClass('onglet_1 onglet');
    $('#onglet_chauffeur').addClass('onglet_0 onglet');
    $('#onglet_autres').addClass('onglet_0 onglet');
    $('#onglet_developpeur').removeClass('onglet_0 onglet');
    $('#onglet_chauffeur').removeClass('onglet_1 onglet');
    $('#onglet_autres').removeClass('onglet_1 onglet');
    $('#onglet_developpeur').css('background-color', 'white');
    $('#onglet_chauffeur').css('background-color', '#ececec');
    $('#onglet_autres').css('background-color', '#ececec');
    $('#contenu_onglet_autres').css('display', 'none');
    $('#contenu_onglet_developpeur').css('display', 'block');
    $('#contenu_onglet_chauffeur').css('display', 'none');
});
$('#onglet_chauffeur').click(function() {
    $('#onglet_chauffeur').addClass('onglet_1 onglet');
    $('#onglet_developpeur').addClass('onglet_0 onglet');
    $('#onglet_autres').addClass('onglet_0 onglet');
    $('#onglet_chauffeur').removeClass('onglet_0 onglet');
    $('#onglet_developpeur').removeClass('onglet_1 onglet');
    $('#onglet_autres').removeClass('onglet_1 onglet');
    $('#onglet_developpeur').css('background-color', '#ececec');
    $('#onglet_chauffeur').css('background-color', 'white');
    $('#onglet_autres').css('background-color', '#ececec');
    $('#contenu_onglet_autres').css('display', 'none');
    $('#contenu_onglet_developpeur').css('display', 'none');
    $('#contenu_onglet_chauffeur').css('display', 'block');
});
$('#onglet_autres').click(function() {
    $('#onglet_autres').addClass('onglet_1 onglet');
    $('#onglet_chauffeur').addClass('onglet_0 onglet');
    $('#onglet_developpeur').addClass('onglet_0 onglet');
    $('#onglet_autres').removeClass('onglet_0 onglet');
    $('#onglet_chauffeur').removeClass('onglet_1 onglet');
    $('#onglet_developpeur').removeClass('onglet_1 onglet');
    $('#onglet_developpeur').css('background-color', '#ececec');
    $('#onglet_chauffeur').css('background-color', '#ececec');
    $('#onglet_autres').css('background-color', 'white');
    $('#contenu_onglet_autres').css('display', 'block');
    $('#contenu_onglet_developpeur').css('display', 'none');
    $('#contenu_onglet_chauffeur').css('display', 'none');
});
$('.onglet_0:nth-child(1)').hover(function() {
    $('.onglet_0:nth-child(1)').css('background-color', 'rgba(236, 236, 236, 0.3)');
    $('.onglet_0:nth-child(1)').css('transition', '0.5s');
}, function (){
    $('.onglet_0:nth-child(1)').css('background-color', '#ececec');
});
$('.onglet_0:nth-child(2)').hover(function() {
    $('.onglet_0:nth-child(2)').css('background-color', 'rgba(236, 236, 236, 0.3)');
    $('.onglet_0:nth-child(2)').css('transition', '0.5s');
}, function (){
    $('.onglet_0:nth-child(2)').css('background-color', '#ececec');
});
$('.onglet_0:nth-child(3)').hover(function() {
    $('.onglet_0:nth-child(3)').css('background-color', 'rgba(236, 236, 236, 0.3)');
    $('.onglet_0:nth-child(3)').css('transition', '0.5s');
}, function (){
    $('.onglet_0:nth-child(3)').css('background-color', '#ececec');
});                               
                                 