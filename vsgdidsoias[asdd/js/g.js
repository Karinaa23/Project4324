$(document).ready(() => {
    let currentSlide = 0;
    let isBusy = false;

    const slides = [
        'blog/b111.jpg',
        'blog/b112.jpg',
        'blog/b113.jpg',
        'blog/b114.jpg',
        'blog/b115.jpg',
    ];

    // Обработчик кликов по стрелкам
    $('.slider-arrow').on('click', (e) => {
        const that = $(e.currentTarget);
        const slidesCount = slides.length - 1;

        if (!isBusy) {
            if (that.hasClass('right')) {
                currentSlide += 1;
                if (currentSlide > slidesCount) currentSlide = 0; 
            } else {
                currentSlide -= 1;
                if (currentSlide < 0) currentSlide = slidesCount; 
            }
            isBusy = true;
            // Плавная анимация смены слайдов
            $('.slider-image').animate({'opacity': 0}, 350, () => {
                $('.slider-image').css('background-image', 'url(' + slides[currentSlide] + ')');
                $('.slider-image').animate({'opacity': 1}, 350, () => isBusy = false);
            });
        }
    });
});