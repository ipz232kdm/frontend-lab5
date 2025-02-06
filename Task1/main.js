function createCheckBox(id, textContent){
    let checkBox = document.createElement('input'); // Створення чекбоксу
    checkBox.type = 'checkbox';
    checkBox.id = id;

    let label = document.createElement('label'); // Створення лейблу
    label.textContent = textContent;
    label.htmlFor = id; // Зв’язування лейблу з чекбоксом

    let br = document.createElement('br'); // Перенесення на інший рядок

    let main = document.getElementById('main');
    main.appendChild(checkBox);
    main.appendChild(label);
    main.appendChild(br);
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
document.getElementById('main').appendChild(document.createElement('br'));
document.getElementById('main').appendChild(button);
