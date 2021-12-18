$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        rtl:true,
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })





    // $('.sidebar ul.navbar-nav a').click(function(){
    //     $('.sidebar ul.navbar-nav a').removeClass('current');
    //     $(this).addClass('current');
    //     event.preventDefault();
    // });

});