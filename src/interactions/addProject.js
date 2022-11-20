import { allProjects, project } from "../storage.";

function onClickAddProject(){
    const sidebar = document.querySelector("#sidebar")
    const addProject = document.querySelector("#addProject")
    addProject.addEventListener("submit", function(e) {
        e.preventDefault()
        var projectName = document.getElementById("projectName").value
        sidebar.append(createProject(projectName));
        allProjects.push(project(projectName));
        addProject.reset()        
    })
}

function createProject(projectName) {
    const newProject = document.createElement("h3")
    newProject.classList.add("project")
    newProject.innerHTML = projectName;
    newProject.setAttribute('id', `${projectName}`);
    return newProject;
}


export default onClickAddProject;