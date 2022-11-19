import project from "../storage/projects";

function onClickAddProject(){
    const sidebar = document.querySelector("#sidebar")
    const addProject = document.querySelector("#addProject")
    addProject.addEventListener("submit", function(e) {
        e.preventDefault()
        var projectName = document.getElementById("projectName").value
        sidebar.append(createProject(projectName));
        projectName = project()
        clearAddProjectInput()
    })
}

function clearAddProjectInput() {
    var formInput = document.querySelector("#projectName")
    formInput.value = "";
}

function createProject(projectName) {
    const newProject = document.createElement("h3")
    newProject.classList.add("project")
    newProject.innerHTML = projectName;
    return newProject;
}


export default onClickAddProject;