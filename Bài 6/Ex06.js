function large() {
    let textElement = document.getElementById("text");
    let currentSize = window.getComputedStyle(textElement).fontSize;
    let newSize = parseInt(currentSize) + 2;
    textElement.style.fontSize = newSize + "px";
}

function litle() {
    let textElement = document.getElementById("text");
    textElement.style.fontSize = (parseInt(textElement.style.fontSize) || 16) - 2 + "px";
}