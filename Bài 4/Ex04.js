function isValidGmail(email) {
    const gmailRegex = /^[a-zA-Z0-9._-]+@gmail\.com$/;
    return gmailRegex.test(email);
}
function checkEmail() {
    let input = document.getElementById("email").value;
    if (isValidGmail(input)) {
        document.getElementById("text-container").style.color = "green";
        document.getElementById("text-container").innerText = "email hợp lệ!";
    }
    else {
        document.getElementById("text-container").style.color = "red";
        document.getElementById("text-container").innerText = "email không hợp lệ!";
    }
}