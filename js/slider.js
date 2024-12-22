const slides = [
    'images/7.jpg',
    'images/8.jpg',
    'images/9.jpg',
    'images/10.jpg',
    'images/11.jpg',
    'images/12.jpg',
    'images/13.jpg',
    'images/14.png',
];

$(document).ready(() => {
    let currentSlide = 0; // Текущий слайд
    let isBusy = false; // Флаг занятости (анимации)
    const slidesCount = slides.length - 1; // Количество слайдов (индекс последнего)

    $('.slider-arrow').on('click', (e) => {
        const that = $(e.currentTarget);

        if (!isBusy) {
            if (that.hasClass('right')) {
                currentSlide += 1;
                if (currentSlide > slidesCount) currentSlide = 0;
            } else {
                currentSlide -= 1;
                if (currentSlide < 0) currentSlide = slidesCount;
            }

            isBusy = true;
            $('.slider-image').animate({'opacity': 0}, 350, () => {
                $('.slider-image').css('background-image', 'url(' + slides[currentSlide] + ')');
            });
            $('.slider-image').animate({'opacity': 1}, 350, () => isBusy = false);
        }
    });
});


