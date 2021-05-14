define(['jquery', 'slickslider_lib'], function ($, slick) {
    function relocateSlickArrow(slickSlider, config) {
        let $firstSlideRelated = $(slickSlider.find(config.navigationPositionRelated).first());
        let newTop = $firstSlideRelated.offset().top - slickSlider.offset().top + ($firstSlideRelated.height() / 2);
        slickSlider.find('.slick-arrow').css('top', newTop);
    }

    return function (config, element) {
        $(element).slick(config);

        if (typeof config.navigationPositionRelated != 'undefined') {
            $(window).resize(function () {
                relocateSlickArrow($(element), config);
            });
            relocateSlickArrow($(element), config);
        }
    }
});
