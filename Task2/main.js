function createCheckBox(textContent){
    let checkBox = document.createElement('input'); // Створення чекбоксу
    checkBox.type = 'checkbox';

    let br = document.createElement('br'); // Перенесення на інший рядок

    let emailLabel = document.createElement('label'); // Створення лейблю
    emailLabel.textContent = textContent;

    let divLabel = document.createElement('label');
    divLabel.textContent = textContent;

    checkBox.onclick = function(){
        if(checkBox.checked){
            document.getElementById('checked').appendChild(divLabel);
        }
        else document.getElementById('checked').removeChild(divLabel)
    }

    document.getElementById('main').appendChild(checkBox);
    document.getElementById('main').appendChild(br);
    document.getElementById('main').appendChild(emailLabel);
    document.getElementById('main').appendChild(br);
}

createCheckBox("user1@gmail.com");
createCheckBox("user2@gmail.com");
createCheckBox("user3@gmail.com");
createCheckBox("user4@gmail.com");
createCheckBox("user5@gmail.com");
createCheckBox("user6@gmail.com");
createCheckBox("user7@gmail.com");
createCheckBox("user8@gmail.com");

