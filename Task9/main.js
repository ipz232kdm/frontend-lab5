let buttons = document.querySelectorAll("input[type=button]")

function addToCart(className){
    let label = document.querySelector(`label.${className}`);

    let count = label.textContent; // Кількість на даний момент

    count++; // Додаємо один товар

    label.textContent = count; // Оновлюємо значення в корзині
}

buttons.forEach(button => {
    button.onclick = () =>{
        addToCart(button.className);
    }
})