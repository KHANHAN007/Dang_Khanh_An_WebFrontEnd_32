let progress = 0;
document.getElementById("progressBar").style.width = "0%";
function changeProgress(value) {
    progress = Math.min(100, Math.max(0, progress + value));
    let progressBar = document.getElementById("progressBar");
    let title = document.getElementById("title");
    let body = document.body;
    progressBar.style.width = progress + "%";
    let darkness = 255 - (progress / 100) * 225;
    body.style.backgroundColor = `rgb(${darkness}, ${darkness}, ${darkness})`;
    if (progress > 50) {
        body.style.color = "white";
        title.style.color = "white";
    } else {
        body.style.color = "black";
        title.style.color = "black";
    }
}