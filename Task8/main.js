let image = document.getElementById("image");

let clickCount = 0;

image.onclick = () => {
    if (clickCount === 0){
        image.width *= 2;
        image.height *= 2;

        clickCount++;
    }

    else {
        image.width /= 2;
        image.height /= 2;

        clickCount--;
    }
}