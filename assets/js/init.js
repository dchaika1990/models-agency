'use strict';
$(document).ready(function () {

    // MixitUp

    mixitup($('#mixit'))

    // magnificPopup

    $('.mix').magnificPopup({
        delegate: 'a',
        type: 'image'
    });

});