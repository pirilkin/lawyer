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
        spaceBetween: 20,
        //активный слайд по центру страницы
        centeredSlides: true,
        loop: true,
    });
    let commandSlider = new Swiper('.command-slider', {
        // arrows
        navigation: {
            nextEl: '.command-arrows__next',//можно их поменять (поставить любой класс) или настроить стандарный
            prevEl: '.command-arrows__prev',
        },
        // effect: 'fade',
        pagination: {
            el: '.command-pagination',
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
        slidesPerView: 4,
        spaceBetween: 32,
        //бесконечно (не работает если количество рядоров больше 1-го)
        loop: true,
    });
    $("a.fancybox-link").fancybox();

    // if($(this).hasClass('collapsed')){
    //     console.log(this);
    //     $('.answers-card__header').css('background', 'grey');
    // }
    // else{
    //     console.log('blue');
    // }
    // $('.answers-card .show').parent().css('background', 'black');


    // $('.answers-card .btn-link').click(function(){
    //    if($('.collapse').hasClass('show')){
    //         $(this).toggleClass('red');
    //         console.log('add');
    //     }
    //     else{
    //         console.log('remove');
    //         $(this).removeClass('red');
    //     }
    //     // $('.collapse .show').parent().css('background', 'black');
    // })
    // $('.answers-card .btn-link').click(function () {
    //     var target = $(this).attr("aria-expanded");
    //     if($(target) == 'true'){
    //         console.log(target);
    //         $(this).css('background', 'black');
    //     }
    //     else{
    //         $(this).css('background', 'transparent');
            
    //     }
    //     // if ($(".btn-block").filter("[aria-expanded=true]")) {
    //         // $(".btn-block").filter("[aria-expanded=true]").css('background', 'black');
    //         // $(".btn-block").filter("[aria-expanded=false]").css('background', 'transparent');
    //     // }
    // });
    // $('.answers-card .btn-link').click(function () {
    //     console.log($(this).siblings());
    //     if($(this).siblings().hasClass('.show')) { 
    //         console.log('link');
    //         $(this).parent().addClass('red');
    //         // Element 'a' has no href
    //     }
    //     else{
    //         console.log('none');
    //     }
    // })

});