function addTask() {
    const newItemInput = document.getElementById("newTask");
    const taskText = newItemInput.value.trim();

    if (taskText !== "") {
        const taskList = document.getElementById("tasks");

        const li = document.createElement("li");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.addEventListener("change", function () {
            updateTaskStatus(li, checkbox.checked);
        });

        const taskTextSpan = document.createElement("span");
        taskTextSpan.textContent = taskText;

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.classList.add("delete-btn");
        deleteBtn.addEventListener("click", function () {
            deleteTask(li);
        });

        li.appendChild(checkbox);
        li.appendChild(taskTextSpan);
        li.appendChild(deleteBtn);

        taskList.appendChild(li);

        newItemInput.value = "";
    }
}

function updateTaskStatus(taskItem, isChecked) {
    if (isChecked) {
        taskItem.style.textDecoration = "line-through";
    } else {
        taskItem.style.textDecoration = "none";
    }
}

function deleteTask(taskItem) {
    const taskList = document.getElementById("tasks");
    taskList.removeChild(taskItem);
}