let radioButtons = document.querySelectorAll("input[type=radio]");
let labels = document.querySelectorAll("label");

let score = document.getElementById("score");
let correctAnswers = 0;

let task = 0;

let result = document.getElementById("result");

let button = document.getElementById("button");

let answerClick = false; // Перевірка на вибір відповіді

function createTask() {
    let num1 = Math.floor(Math.random() * 10) + 1;
    let num2 = Math.floor(Math.random() * 10) + 1;

    document.getElementById("task").textContent = `${num1} x ${num2} = `;
    answerClick = false;
    let product = num1 * num2;

    // Очищаємо класи перед новим завданням
    radioButtons.forEach(rb => rb.classList.remove("true"));

    // Випадковий вибір правильної кнопки
    let correctIndex = Math.floor(Math.random() * radioButtons.length);
    radioButtons[correctIndex].classList.add("true");

    let usedNumbers = new Set([product]);

    for (let i = 0; i < radioButtons.length; i++) {
        if (i === correctIndex) {
            labels[i].textContent = product.toString();
        } else {
            let randomNumber;
            do {
                randomNumber = Math.floor(Math.random() * 100) + 1;
            } while (usedNumbers.has(randomNumber)); // Переконуємося, що число унікальне

            usedNumbers.add(randomNumber);
            labels[i].textContent = randomNumber.toString();
        }
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

        // Вимикаємо всі кнопки
        radioButtons.forEach(rb => rb.disabled = true);

        let correctAnswer = document.querySelector("input[type=radio].true"); // Отримуємо правильний варіант
        let product = correctAnswer ? labels[Array.from(radioButtons).indexOf(correctAnswer)].textContent : "невідомо";

        // Перевірка на правильність відповіді
        if (radioButton.classList.contains('true')) {
            result.textContent = 'Вірно!';
            correctAnswers++;
        } else {
            result.textContent = `Помилка! Правильна відповідь "${product}"`;
        }

        task++;
        score.textContent = `Загальний рахунок ${correctAnswers * 10}% (${correctAnswers} правильних відповідей з 10)`;
    };
});


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









