
$( document ).ready(function() {

    $('.hamburger-button').click(function(){
        $(this).toggleClass('active');
        $('.mobile-menu').fadeToggle();
    });

    //Animate on Scroll - activate
    AOS.init({
        // for more information on everything you can add for the animations, see https://github.com/michalsnik/aos#readme
        duration: 400 // values from 0 to 3000, with step 50ms
    });

});