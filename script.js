$(document).ready(function() {
    let currentIndex = 0;
    const slides = $('.slide');
    const slideCount = slides.length;

    function updateSlidePosition() {
        slides.removeClass('active');
        slides.eq(currentIndex).addClass('active');
    }

    $('.next').click(function() {
        currentIndex = (currentIndex + 1) % slideCount;
        updateSlidePosition();
    });

    $('.prev').click(function() {
        currentIndex = (currentIndex - 1 + slideCount) % slideCount;
        updateSlidePosition();
    });

    updateSlidePosition();
});
