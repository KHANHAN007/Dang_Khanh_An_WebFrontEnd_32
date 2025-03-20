function showImage(img) {
    let overlay = document.querySelector(".overlay");
    let largeImage = document.getElementById("largeImage");
    largeImage.src = img.src;
    overlay.classList.add("show");
}
function hideImage() {
    let overlay = document.querySelector(".overlay");
    overlay.classList.remove("show");
}