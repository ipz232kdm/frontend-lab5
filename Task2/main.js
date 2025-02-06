function createCheckBox(textContent) {
    let checkBox = document.createElement('input'); // Створення чекбоксу
    checkBox.type = 'checkbox';

    let br = document.createElement('br'); // Перенесення на інший рядок

    let emailLabel = document.createElement('label'); // Створення лейблу
    emailLabel.textContent = textContent;

    checkBox.onclick = function () {
        let checkedContainer = document.getElementById('checked');
        let existingLabel = document.getElementById(`label-${textContent}`);

        if (checkBox.checked) {
            if (!existingLabel) { // Перевіряємо, чи вже є такий елемент
                let divLabel = document.createElement('label');
                divLabel.textContent = textContent;
                divLabel.id = `label-${textContent}`;
                checkedContainer.appendChild(divLabel);
                checkedContainer.appendChild(document.createElement('br'));
            }
        } else if (existingLabel) {
            checkedContainer.removeChild(existingLabel.nextSibling); // Видаляємо <br>
            checkedContainer.removeChild(existingLabel);
        }
    };

    let mainContainer = document.getElementById('main');
    mainContainer.appendChild(checkBox);
    mainContainer.appendChild(emailLabel);
    mainContainer.appendChild(br);
}

createCheckBox("user1@gmail.com");
createCheckBox("user2@gmail.com");
createCheckBox("user3@gmail.com");
createCheckBox("user4@gmail.com");
createCheckBox("user5@gmail.com");
createCheckBox("user6@gmail.com");
createCheckBox("user7@gmail.com");
createCheckBox("user8@gmail.com");
