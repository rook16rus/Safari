import './sass/reset.css';
import './sass/slick.css';
import './sass/jquery.fancybox.css'
import './sass/magnific-popup.css'
import './sass/style.scss'
import $ from 'jquery';
import './js/jquery.fancybox.min'
import './js/slick.min'
import './js/jquery.magnific-popup.min'
import './images/gallery-arrow-left.svg'
import './images/gallery-arrow-right.svg'


$(function(){
    $('.popup__link').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,

        fixedContentPos: false
    });

    $('.gallery__slider').slick({
        prevArrow: '<button type="button" class="slick-btn slick-btn--prev"><img src="./gallery-arrow-left.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-btn slick-btn--next"><img src="./gallery-arrow-right.svg" alt=""></button>',

    });

    $('.gallery__item-inner').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0,1] // Will preload 0 - before current, and 1 after the current image
        },
    });
});