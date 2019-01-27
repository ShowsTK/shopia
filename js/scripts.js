$(function() {
    $('.menu-toggle-btn').on('click', function() {
        $(this).next().slideToggle(700, function() {
            const menu = $(this);
            if(menu.css('display') === 'none'){
                menu.removeAttr('style');
            }
        });
    });
});

$(function() {
    $(window).scroll(function() {
        if($(this).scrollTop() !== 0) {
            $('#toTop').fadeIn();
        } else {
            $('#toTop').fadeOut();
        }
    });
    $('#toTop').click(function() {
        $('body, html').animate({scrollTop:0}, 700);
    });
});

$(function() {
    $('.hider').click(function() {
        const $elemBefore = $(this).parent().next();
        if($elemBefore.css('display') !== 'none') {
                $elemBefore.hide(700);
            }
            else {
                $elemBefore.show(700);
            }
        }
    );
});

$(function() {
    $('.menus .block-header').click(function() {
        $(this).next().slideToggle(700, function () {
            if ($(this).css('display') === 'none') {
                $(this).removeAttr('style');
            }
        })
    });
});