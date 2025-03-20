function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();
    if (taskText === "") return;

    let taskList = document.getElementById("taskList");

    let taskItem = document.createElement("li");

    let taskLabel = document.createElement("span");
    taskLabel.textContent = taskText;

    let actionsDiv = document.createElement("div");
    actionsDiv.className = "actions";

    let editButton = document.createElement("button");
    editButton.textContent = "Sửa";
    editButton.onclick = function () {
        let newText = prompt("Nhập nội dung mới:", taskLabel.textContent);
        if (newText !== null) taskLabel.textContent = newText.trim();
    };

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Xóa";
    deleteButton.onclick = function () {
        let confirmDelete = confirm("Bạn có chắc chắn muốn xoá?");
        if (confirmDelete) {
            setTimeout(() => {
                taskList.removeChild(taskItem);
            }, 300);
        }
    };
    actionsDiv.appendChild(editButton);
    actionsDiv.appendChild(deleteButton);
    taskItem.appendChild(taskLabel);
    taskItem.appendChild(actionsDiv);
    taskList.appendChild(taskItem);
    taskInput.value = "";
}