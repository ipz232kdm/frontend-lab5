// Отримати елементи
const rectangle = document.getElementById('rectangle');
const widthSlider = document.getElementById('widthSlider');
const heightSlider = document.getElementById('heightSlider');
const rotateSlider = document.getElementById('rotateSlider');

const widthValue = document.getElementById('widthValue');
const heightValue = document.getElementById('heightValue');
const rotateValue = document.getElementById('rotateValue');

// Функція оновлення параметрів прямокутника
function updateRectangle() {
    const width = widthSlider.value;
    const height = heightSlider.value;
    const rotate = rotateSlider.value;

    rectangle.style.width = `${width}px`;
    rectangle.style.height = `${height}px`;
    rectangle.style.transform = `rotate(${rotate}deg)`;

    // Оновлення значень
    widthValue.textContent = `${width}px`;
    heightValue.textContent = `${height}px`;
    rotateValue.textContent = `${rotate}°`;
}

// Додавання обробників для повзунків
[widthSlider, heightSlider, rotateSlider].forEach(slider => {
    slider.addEventListener('input', updateRectangle);
});

// Початкове налаштування
updateRectangle();
