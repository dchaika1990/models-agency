'use strict';
$(document).ready(function () {

    // MixitUp

    mixitup($('#mixit'));

    // magnificPopup

    $('.section_tabs__body').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0,1] // Will preload 0 - before current, and 1 after the current image
        }
    });

    // Menu mobile

    $('.header__burger').on('click', function () {
        $(this).toggleClass('open');
        $('body').toggleClass('overflow');
        $('.header__mobile-list').toggleClass('active');
    });

    $('.header__mobile-list a').on('click', function () {
        $('.header__burger').click();
    });


});