function createCheckBox(container, id, textContent) {
    let checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    checkBox.id = id;

    let label = document.createElement('label');
    label.textContent = textContent;
    label.htmlFor = id;

    container.append(checkBox, label, document.createElement('br'));
}

function getSelectedLanguages() {
    return Array.from(document.querySelectorAll('#main input[type="checkbox"]:checked'))
        .map(checkbox => checkbox.id.toLowerCase());
}

function updateLabel() {
    labelList.textContent = getSelectedLanguages().join(", ");
}

const main = document.getElementById('main');
const languages = [
    { id: "Ua", text: "Ukrainian" },
    { id: "Eng", text: "English" },
    { id: "Sp", text: "Spanish" }
];

languages.forEach(lang => createCheckBox(main, lang.id, lang.text));

let labelList = document.createElement('label');
main.append(labelList, document.createElement('br'));

let button = document.createElement('button');
button.textContent = 'ok';
button.onclick = updateLabel;
main.appendChild(button);
