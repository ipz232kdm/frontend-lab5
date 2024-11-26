let numberInput = document.getElementById("numberInput");
let score = document.getElementById("score");
let correctAnswers = 0;

let task = 0;

let nextTaskButton = document.getElementById("nextTaskButton");
let checkButton = document.getElementById("checkButton");

let result = document.getElementById("result");

function createTask() {
    let num1 = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
    let num2 = Math.floor(Math.random() * (10 - 1 + 1)) + 1;

    document.getElementById("task").textContent = `${num1} x ${num2} = `;

    let product = num1 * num2;

    answerClick = false;

    checkButton.onclick = () => {
        if (numberInput.value !== ""){

            checkButton.disabled = true;
            numberInput.disabled = true;

            if (numberInput.value === product.toString()){
                result.textContent = "Вірно!";
                correctAnswers++;
            }

            else result.textContent = `Помилка! Правильна відповідь "${product.toString()}"`;

            task++;

            score.textContent = `Загальний рахунок ${correctAnswers*10}% (${correctAnswers} правильних відповідей з 10)`;
        }

        else (alert("Введіть значення в текстове поле!"));
    }
}

nextTaskButton.onclick = () =>{
    if (task === 10){
        button.disabled = true;
    }

    if (numberInput.disabled === true) {
        // Очищуємо зайве та створюємо нове завдання
        numberInput.value = "";
        numberInput.disabled = false;
        result.textContent = '';
        checkButton.disabled = false;

        createTask(); // Генеруємо нове завдання
    }

    else {
        alert("Перед тим як перейти до наступного завдання потрібно виконати це!")
    }
}


createTask();









