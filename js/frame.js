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
$(function() {
    /* 按下GoTop按鈕時的事件 */
    $('.return').click(function() {
        $('html,body').animate({ scrollTop: 0 }, 'slow'); /* 返回到最頂上 */
        return false;
    });

    /* 偵測卷軸滑動時，往下滑超過400px就讓GoTop按鈕出現 */
    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            $('.return').fadeIn();
        } else {
            $('.return').fadeOut();
        }
    });
});