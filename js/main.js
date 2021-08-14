$(document).ready(function () {

    let serviceSlider = new Swiper('.service-slider', {
        // arrows
        // navigation: {
        //     nextEl: '.swiper-btn-next',//можно их поменять (поставить любой класс) или настроить стандарный
        //     prevEl: '.swiper-btn-prev',
        // },
        effect: 'fade',
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            // dynamicBullets: true,
        },
        //переключение при клике на слайд
        slideToClickedSlide: true,
        //управление клавиатурой
        keyboard: {
            // вкл / выкл
            enabled: true,
            //слайдер будет переключаться стрелками клавиатуры только когда мы до него доскролим
            onlyInViewport: true,
            //управдение слайдером кнопаками pageDown-pageUp
            pageUpDown: true,
        },
        slidesPerView: 1,
        //отключение слайдера если слайдов меньше чем надо
        // watchOverflow: true,
        spaceBetween: 20,
        //активный слайд по центру страницы
        centeredSlides: true,
        //стартовый слайд начианется с 0
        // initialSlide: 1,
        //количество рядов
        // slidesPerColumn: 1,
        //бесконечно (не работает если количество рядоров больше 1-го)
        loop: true,
        // передача управления
        // controller: {
        //     control: textSlider
        // },

    });
});