let todoList = [
    { id: 1, task: "hoc dom js" },
    { id: 2, task: "làm bài tập dom js" }
];
function displayTask() {
    let ul = document.getElementById("todoList");
    ul.innerHTML = "";
    todoList.forEach(item => {
        let li = document.createElement("li");
        li.innerHTML = `
            ${item.task}
            <span class="close" onclick="removeTask(${item.id})">×</span>
        `;
        ul.appendChild(li);
    });
}
function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();
    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }
    const newTask = {
        id: todoList.length ? todoList[todoList.length - 1].id + 1 : 1,
        task: taskText
    };
    todoList.push(newTask);
    taskInput.value = "";
    displayTask();
}
function removeTask(id) {
    todoList = todoList.filter(task => task.id !== id);
    displayTask();
}
displayTask();
