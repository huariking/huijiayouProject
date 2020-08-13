
$(".categories ul li").hover(
    function () {
        $(this).css('background','red');
        $('.categories-list').css({
            'display': 'block',
    })},
    function () {
        $(this).css('background','');
        $('.categories-list').css({
        'display': 'none',
        })
    })
$('.categories-list').hover(
    function () {
        // $(this).css('background','red');
        $('.categories-list').css({
            'display': 'block',
    })},
    function () {
        $(this).css('background','');
        $('.categories-list').css({
        'display': 'none',
        })
    })
