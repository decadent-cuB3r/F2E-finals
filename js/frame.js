$(document).ready(function() {
    // hamburger menu btn animation
    $('.menu-btn').click(function() {
        $(this).toggleClass('open')
    });
    //show hamburger-nav
    $('.menu-btn').click(function() {
        $('.hamburger-nav').slideToggle(500)
    });
    $('.hamburger-nav-items').click(function() {
        $(this).children('.hamburger-subnav').slideToggle(500)
    });
    // $('.hamburger-login').click(function() {
    //     $('hamburger-login-btn').toggleClass('open')
    // });
});