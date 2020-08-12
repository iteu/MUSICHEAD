$(function(){

});


$('.navbar-btn').on('click', function(e) {
    e.preventDefault;
    $(this).toggleClass('navbar-btn_active');
    $('.navbar-menu').toggleClass("navbar-menu_active");
});