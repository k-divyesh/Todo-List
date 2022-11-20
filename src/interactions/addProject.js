import { allProjects, project } from "../storage.";

//back
function logic_onClickAddProject(pName) {
    allProjects.push(project(pName));
}

function checkDuplicate(pName) {
    var duplicateExists = false;
    allProjects.some(proj => {
        if (proj.name == pName) {
            duplicateExists = true;
            return; // exit .every function
        }
    })
    return duplicateExists;
}

//front
function display_onClickAddProject(pName, parent) {
    const newProject = document.createElement("h3");
    newProject.classList.add("project");
    newProject.innerHTML = pName;
    newProject.setAttribute('id', `${pName}`);
    parent.append(newProject);
}

function onClickAddProject(){
    const sidebar = document.querySelector("#sidebar");
    const addProjectForm = document.querySelector("#addProject");
    addProjectForm.addEventListener("submit", function(e){
        e.preventDefault();
        const projectName = document.querySelector("#projectName").value.trim();
        if(checkDuplicate(projectName)) {
            alert("Project already exists");
            addProjectForm.reset();
            return;
        }
        logic_onClickAddProject(projectName);
        display_onClickAddProject(projectName, sidebar);
        addProjectForm.reset();
    })
}


export default onClickAddProject;