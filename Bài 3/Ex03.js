const subjects = ["Toán", "Lý", "Hóa"];
function displaySubjects() {
    const ul = document.getElementById("subjectList");
    ul.innerHTML = "";
    subjects.forEach((subject, index) => {
        const li = document.createElement("li");
        li.textContent = `${index + 1}. ${subject}`;
        ul.appendChild(li);
    });
}
function addSubject() {
    const subjectName = document.getElementById("subjectName").value.trim();
    if (subjectName === "") {
        alert("Tên môn học không được để trống!");
    } else {
        subjects.push(subjectName);
        document.getElementById("subjectName").value = "";
        displaySubjects();
    }
}
window.onload = displaySubjects;