$(document).ready(function () {
    $('.portfolio-item').click(function (e) {
        e.stopPropagation();
        const imgSrc = $(this).data('src');
        const modal = $('<div>', { 'class': 'popup-container' });
        const img = $('<img>', { 'src': imgSrc, 'class': 'popup' });

        modal.append(img);
        $('body').append(modal);
        img.click(function () {
            modal.fadeOut(300, function () {
                $(this).remove();
            });
        });
        setTimeout(() => modal.addClass('visible'), 100);
    });
});
$(document).ready(() => {
    
    $('.control-item').on('click', (e) => {
        e.stopPropagation(); 
        slideTestimonials(e.currentTarget); 
    });
    function slideTestimonials(item) {
        const clicked = $(item); 
        if (clicked.hasClass('active')) {
            return; 
        }

        const index = $('.control-item').index(clicked); 
        const width = $('.testimonial-card').outerWidth(true); 
        const scroll = width * 2 * index; 

        $('.testimonial-inner').css('transform', 'translateX(-' + scroll + 'px)'); 
        
        $('.control-item').removeClass('active').eq(index).addClass('active');
    }
});
