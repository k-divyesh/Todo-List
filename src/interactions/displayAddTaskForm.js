function viewForm() {
    const addTaskForm = document.querySelector("#addTaskForm");
    const createTaskButton = document.querySelector(".createTaskButton")
    createTaskButton.addEventListener("click", function() {
        addTaskForm.classList.toggle("hide")
    })
}

function closeForm() {
    const addTaskForm = document.querySelector("#addTaskForm");
    const closeButton = document.querySelector(".closeForm")
    closeButton.addEventListener("click", function() {
        addTaskForm.classList.toggle("hide")
    })
}

function taskFormDisplay() {
    viewForm();
    closeForm();
}

export default taskFormDisplay;