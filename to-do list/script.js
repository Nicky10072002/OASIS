document.addEventListener("DOMContentLoaded", function () {
    const taskTitleInput = document.getElementById("taskTitle");
    const taskDescriptionInput = document.getElementById("taskDescription");
    const addTaskButton = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");

    addTaskButton.addEventListener("click", function () {
        const taskTitle = taskTitleInput.value.trim();
        const taskDescription = taskDescriptionInput.value.trim();

        if (taskTitle === "") {
            alert("Please enter a task title.");
            return;
        }

        const taskElement = document.createElement("div");
        taskElement.classList.add("task");
        taskElement.innerHTML = `
            <div>
                <h3>${taskTitle}</h3>
                <p>${taskDescription}</p>
            </div>
            <button class="delete-task">Delete</button>
        `;

        taskList.appendChild(taskElement);

        taskTitleInput.value = "";
        taskDescriptionInput.value = "";

        const deleteButton = taskElement.querySelector(".delete-task");
        deleteButton.addEventListener("click", function () {
            taskList.removeChild(taskElement);
        });
    });
});
