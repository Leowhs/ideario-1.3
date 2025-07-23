let currentSlide = 0;

const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function moveSlide(step) {
    currentSlide += step;

    if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    }

    if (currentSlide >= totalSlides) {
        currentSlide = 0;
    }

    updateSlidePosition();
}

function updateSlidePosition() {
    const slideContainer = document.querySelector('.slide-container');
    slideContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
}
