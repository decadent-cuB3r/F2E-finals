$(document).ready(function() {
    $('.menu-btn').click(function() {
        $(this).toggleClass('open')
    })
    $('.menu-btn').click(function() {
        $('.nav_list').toggleClass('open')
    })
    $('.menu-btn').click(function() {
        $('.nav_login_col').toggleClass('open')
    })
    $('.menu-btn').click(function() {
        $('.tags').toggleClass('open')
    })
});