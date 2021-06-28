$(document).ready(function () {
    $('.burger_btn').click(function (e) {
        e.preventDefault();
        $('body').toggleClass('burger_height_show')
    });
});