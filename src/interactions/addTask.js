import {project, allProjects,task } from "../storage.";

function onSubmitTaskForm() {
    const addTaskForm = document.querySelector("#addTaskForm");
    addTaskForm.addEventListener("submit", function(e) {
        e.preventDefault();
        appendTaskObjInProject(
            document.querySelector("#selectedProject").value,
            document.querySelector("#taskName").value,
            document.querySelector("#description").value,
            document.querySelector("#dueDate").value,
            Array.from(document.getElementsByName("priority")).find((radio) => radio.checked).value
        )
        addTaskForm.reset()
    })
}



function appendTaskObjInProject(selectedProject, taskName, taskDesc, taskDate, taskPriority) {
    const taskObj = task(taskName, taskDesc, taskDate, taskPriority);
    var thisProject = allProjects.find(project => project.name == `${selectedProject}`)
    thisProject.addTask(taskObj)
    // console.log(thisProject)

    //remove later
    console.log(`allprojects: \n ${allProjects}`)
    allProjects.forEach(project => {
        console.log(project.name)
        console.log(project.tasks());
    });
}



function addTask() {
    onSubmitTaskForm();
}

export default addTask;