function createCheckBox(id, textContent){
    let checkBox = document.createElement('input'); // Створення чекбоксу
    checkBox.type = 'checkbox';
    checkBox.id = id;

    let br = document.createElement('br'); // Перенесення на інший рядок

    let label = document.createElement('label'); // Створення лейблю
    label.textContent = textContent;

    document.getElementById('main').appendChild(checkBox);
    document.getElementById('main').appendChild(br);
    document.getElementById('main').appendChild(label);
    document.getElementById('main').appendChild(br);
}

createCheckBox("Ua", "Ukrainian");
createCheckBox("Eng", "English");
createCheckBox("Sp", "Spanish");

let button = document.createElement('button');
button.textContent = 'ok';

let list = [];
let LabelList = document.createElement('label');

button.onclick = function(){ // Функція при натисканні на кнопку

    list = [];
    LabelList.innerHTML = '';

    if (document.getElementById('Ua').checked){
        list.push("ua")
    }
    if (document.getElementById('Eng').checked){
        list.push("eng")
    }
    if (document.getElementById('Sp').checked){
        list.push("sp")
    }

    LabelList.textContent = list.join(", ");
}

document.getElementById('main').appendChild(LabelList);
let br = document.createElement('br');
document.getElementById('main').appendChild(br);
document.getElementById('main').appendChild(button);