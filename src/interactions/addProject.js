import { allProjects, project } from '../storage.';
import { dropDown } from './displayAddTaskForm';
import selectProject from './selectProject';

//back
function logic_onClickAddProject(pName) {
    allProjects.push(project(pName));
}

function checkDuplicate(pName) {
    var duplicateExists = false;
    allProjects.some((proj) => {
        if (proj.name == pName) {
            duplicateExists = 'project already exists';
            return;
        }
    });
    if (pName === '') return 'enter valid project name';
    return duplicateExists;
}

//front
function display_onClickAddProject(parent) {
    const projects = [...document.querySelectorAll('.project')];
    projects.forEach((element) => {
        element.remove();
    });
    allProjects.forEach((project) => {
        const newProject = document.createElement('h3');
        newProject.classList.add('project');
        newProject.innerHTML = project.name;
        newProject.setAttribute('id', `${project.name}`);
        parent.append(newProject);
    });
}

// back & front
function onClickAddProject() {
    const sidebar = document.querySelector('#sidebar');
    const addProjectForm = document.querySelector('#addProject');
    addProjectForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const projectName = document.querySelector('#projectName').value.trim();
        if (checkDuplicate(projectName) != false) {
            alert(`${checkDuplicate(projectName)}`);
            addProjectForm.reset();
            return;
        }
        logic_onClickAddProject(projectName);
        display_onClickAddProject(sidebar);
        addProjectForm.reset();
        selectProject();
        dropDown();
    });
}

export default onClickAddProject;
