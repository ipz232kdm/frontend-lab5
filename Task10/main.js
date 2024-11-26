let currentSlideIndex = 0;
let slides = document.querySelectorAll('.slider-image');

// Функція для показу слайду за індексом
function showSlide(index) {
    if (index >= slides.length) {
        currentSlideIndex = 0; // Якщо індекс більше кількості зображень, повертаємо на перший
    } else if (index < 0) {
        currentSlideIndex = slides.length - 1; // Якщо індекс менше 0, переходимо до останнього зображення
    } else {
        currentSlideIndex = index;
    }

    // Спочатку приховуємо всі зображення
    slides.forEach(slide => {
        slide.classList.remove('active');
    });

    // Показуємо поточний слайд
    slides[currentSlideIndex].classList.add('active');
}

// Показуємо перший слайд по замовчуванню
showSlide(currentSlideIndex);

// Додаємо обробники подій для натискання на зображення
slides.forEach((slide) => {
    slide.addEventListener('click', () => {
        // Перехід до наступного зображення при натисканні
        showSlide(currentSlideIndex + 1);
    });
});
