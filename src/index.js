import './sass/reset.css';
import './sass/slick.css';
import './sass/jquery.fancybox.css'
import './sass/magnific-popup.css'
import './sass/style.scss'
import $ from 'jquery';
import './js/jquery.fancybox.min'
import './js/slick.min'
import './js/jquery.magnific-popup.min'


$(function(){
    $('.popup__link').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,

        fixedContentPos: false
    });
});