let radioButtons = document.querySelectorAll("input[type=radio]");
let labels = document.querySelectorAll("label");

let score = document.getElementById("score");
let correctAnswers = 0;

let task = 0;

let result = document.getElementById("result");

let button = document.getElementById("button");

let answerClick = false; // Перевірка на вибір відповіді

function createTask() {
    let num1 = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
    let num2 = Math.floor(Math.random() * (10 - 1 + 1)) + 1;

    document.getElementById("task").textContent = `${num1} x ${num2} = `;

    answerClick = false;

    let product = num1 * num2;

    // Призначення класу "true" для однієї з кнопок
    for (let i = 0; i < radioButtons.length; i++) {
        let randomFlag = Math.random() < 0.5;

        if (randomFlag) {
            radioButtons[i].className = "true";
            break;
        }
    }

    // Масив для унікальних випадкових чисел
    let usedNumbers = [product];

    // Генеруємо текст для кожного радіокнопки
    for (let i = 0; i < radioButtons.length; i++) {
        if (radioButtons[i].className === "true") {
            // Якщо це "правильна" відповідь, додаємо результат множення
            labels[i].textContent += product.toString();

        } else {
            // Генеруємо унікальне випадкове число
            let randomNumber;

            // Продовжуємо генерувати нове число, поки воно не буде унікальним
            do {
                randomNumber = Math.floor(Math.random() * (100 - 1)) + 1;

            } while (usedNumbers.includes(randomNumber)); // Перевірка на унікальність

            // Додаємо унікальне число до масиву
            usedNumbers.push(randomNumber);

            // Додаємо число до відповідного label
            labels[i].textContent += randomNumber.toString();
        }
    }

    radioButtons.forEach(radioButton => {
        radioButton.onclick = () => {
            answerClick = true;

            radioButtons.forEach(rb => {
                rb.disabled = true;  // Вимикаємо всі кнопки
            });

            // Перевірка на правильність відповіді
            if (radioButton.className === 'true') {
                result.textContent = 'Вірно!';
                correctAnswers++;

            } else {
                result.textContent = `Помилка! Правильна відповідь "${product}"`;
            }
            task++;
            score.textContent = `Загальний рахунок ${correctAnswers*10}% (${correctAnswers} правильних відповідей з 10)`;
        };
    });
}

button.onclick = () =>{
    if (task === 10){
        button.disabled = true;
    }

    if (answerClick) {
        // Вмикаємо кнопки і створюємо нове завдання
        radioButtons.forEach(rb => {
            rb.disabled = false;
            rb.checked = false;
            rb.className = 'false';
        })
        labels.forEach(lb => lb.textContent = '');
        result.textContent = '';
        createTask(); // Генеруємо нове завдання
    }

    else {
        alert("Перед тим як перейти до наступного завдання, оберіть варіант відповіді!")
    }
}

createTask();









