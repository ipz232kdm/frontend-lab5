let images = document.querySelectorAll('img');

images.forEach(image => {
    image.onclick = () => {
        if (image.className === "disabled"){
            image.className = "enabled";
        }
        else{
            image.className = "disabled"
        }
    }
})