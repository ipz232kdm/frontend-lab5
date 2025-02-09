let inputs = document.querySelectorAll('input');

inputs.forEach(input => {
    input.addEventListener('focus', event => {
        const parentDiv = input.closest('div'); // Шукаємо найближчий div
        if (parentDiv) {
            parentDiv.style.backgroundColor = "blue";
        }
    });
});

inputs.forEach(input => {
    input.addEventListener('blur', event => {
        const parentDiv = input.closest('div'); // Шукаємо найближчий div
        if (parentDiv) {
            parentDiv.style.backgroundColor = "white";
        }
    });
});
