import { allProjects, project } from "../storage.";

//back
function logic_onClickAddProject(){
    const addProjectForm = document.querySelector("#addProject")
    addProjectForm.addEventListener("submit", function(e) {
        e.preventDefault();
        var projectName = document.querySelector("#projectName").value;
        console.log(projectName)
        allProjects.push(project(projectName));
        addProjectForm.reset();
    })
}

//front
function display_onClickAddProject() {
    const sidebar = document.querySelector("#sidebar");
    const addProjectForm = document.querySelector("#addProject");
    addProjectForm.addEventListener("submit", function(e) {
        e.preventDefault()
        var projectName = document.getElementById("projectName").value;
        const newProject = document.createElement("h3");
        newProject.classList.add("project");
        newProject.innerHTML = projectName;
        newProject.setAttribute('id', `${projectName}`);
        sidebar.append(newProject)
    })
}


function manageProject() {
    display_onClickAddProject();
    logic_onClickAddProject();
}


export default manageProject;