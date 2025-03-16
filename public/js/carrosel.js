let carousel = document.querySelector('.carousel');
let items = document.querySelectorAll('.carousel-item');
let currentIndex = 0;

function moveCarousel(direction) {
    const totalItems = items.length;
    currentIndex += direction;
    if (currentIndex < 0) currentIndex = totalItems - 1;
    if (currentIndex >= totalItems) currentIndex = 0;
    carousel.style.transform = `translateX(-${currentIndex * 370}px)`; 
}