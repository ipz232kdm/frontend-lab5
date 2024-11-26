let inputs = document.querySelectorAll('input');

inputs.forEach(input => {
    input.addEventListener('focus', event => {
        const parentDiv = input.parentElement.parentElement;

        parentDiv.style.backgroundColor = "blue";
    })
})
inputs.forEach(input => {
    input.addEventListener('blur', event => {
        const parentDiv = input.parentElement.parentElement;

        parentDiv.style.backgroundColor = "white";
    })
})