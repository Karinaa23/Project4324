$(document).ready(() => {
    $('.portfolio-item').on('click', (e) => {
        e.stopPropagation();
        createPopup(e.currentTarget);
    });
    $('.control-item').on('click', (e)=>{
        e.stopPropagation();
        slideTestimonials(e.currentTarget);
    });
});
function slideTestimonials(item) {
    const clicked = $(item); 
    if (clicked.hasClass('active')) {
        return; 
    }

    const index = $('.control-item').index(clicked); 
    console.log(index);
    const width = $('.testimonial-card').outerWidth(true); 
        const scroll = width * 2 * index; 

        $('.testimonial-inner').css('transform', 'translateX(-' + scroll + 'px)'); 
        $('.control-item').removeClass('active').eq(index).addClass('active');
}
function createPopup(item) {
    const clicked = $(item);
    const imageSrc = clicked.data('scr'); // Получаем URL картинки из атрибута `data-scr`.

    // Создаем контейнер и изображение.
    const container = $('<div>', { 'class': 'popup-container' });
    const img = $('<img>', { 'class': 'popup', 'src': imageSrc });

    container.append(img);
    $('body').append(container);
    setTimeout(() => {
        container.addClass('ready');
    });

    // Закрытие попапа при клике на контейнер.
    img.on('click', () => {
        container.removeClass('ready');
        setTimeout(() => {
            container.remove();
        }, 250);
        });
}
